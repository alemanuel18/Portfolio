import { motion } from 'framer-motion';
import { useState } from 'react';
import { useCyberSound } from '../../hooks/useCyberSound';
import './CyberButton.css';

const BTN_W = 200;
const BTN_H = 46;
const COLS = 5;

// Paleta azul Detroit proporcionada por el usuario
const BLUES = ['#0f334f', '#193f5f', '#194872', '#24547c', '#1a4060', '#0d2e47'];

function hexToRgb(hex) {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return `${r},${g},${b}`;
}

function TrianglePattern({ hover }) {
    // Vértices en zigzag, cubriendo todo el ancho
    const verts = [];
    for (let i = 0; i <= COLS + 1; i++) {
        verts.push({
            x: (i / (COLS + 1)) * BTN_W,
            y: i % 2 === 0 ? 0 : BTN_H,
        });
    }

    const tris = [];
    for (let c = 0; c < COLS; c++) {
        let fillColor;
        let fillOpacity;

        if (hover) {
            // Activo: azules ricos y variados del Detroit palette
            const blue = BLUES[c % BLUES.length];
            fillColor = hexToRgb(blue);
            fillOpacity = 0.85 + (c % 3) * 0.05; // 0.85 – 0.95, casi sólido
        } else {
            // Inactivo: casi transparente, solo se intuye el patrón
            // Alternamos entre un gris muy tenue y algo ligeramente más oscuro
            const isEven = c % 2 === 0;
            fillColor = isEven ? '80,110,140' : '60,90,120';
            fillOpacity = isEven ? 0.05 : 0.09; // Muy bajo → casi invisible
        }

        tris.push(
            <polygon
                key={`t-${c}`}
                points={`${verts[c].x},${verts[c].y} ${verts[c + 1].x},${verts[c + 1].y} ${verts[c + 2].x},${verts[c + 2].y}`}
                fill={`rgba(${fillColor},${fillOpacity})`}
            />
        );
    }

    return (
        <svg
            className="cyber-button__svg"
            viewBox={`0 0 ${BTN_W} ${BTN_H}`}
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
        >
            {/* Fondo: casi invisible inactivo, oscuro activo */}
            <rect
                width={BTN_W}
                height={BTN_H}
                fill={hover ? '#0d2e47' : 'rgba(100,140,180,0.06)'}
            />
            {/* Triángulos */}
            {tris}
            {/* Borde perimetral */}
            <rect
                width={BTN_W}
                height={BTN_H}
                fill="none"
                stroke={hover ? 'rgba(36,84,124,0.9)' : 'rgba(80,130,175,0.03)'}
                strokeWidth="1"
            />
        </svg>
    );
}

/**
 * Corchetes negros en las cuatro esquinas.
 * Solo visibles en hover/activo.
 */
function Brackets() {
    const s = 7;
    return (
        <svg
            className="cyber-button__brackets"
            viewBox={`0 0 ${BTN_W} ${BTN_H}`}
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
        >
            <g fill="none" stroke="rgba(0,0,0,0.85)" strokeWidth="2.2" strokeLinecap="square">
                {/* ↖ */}
                <polyline points={`${s},1 1,1 1,${s}`} />
                {/* ↗ */}
                <polyline points={`${BTN_W - s},1 ${BTN_W - 1},1 ${BTN_W - 1},${s}`} />
                {/* ↙ */}
                <polyline points={`1,${BTN_H - s} 1,${BTN_H - 1} ${s},${BTN_H - 1}`} />
                {/* ↘ */}
                <polyline points={`${BTN_W - 1},${BTN_H - s} ${BTN_W - 1},${BTN_H - 1} ${BTN_W - s},${BTN_H - 1}`} />
            </g>
        </svg>
    );
}

export default function CyberButton({ children, onClick, active = false }) {
    const { playHover, playInOption } = useCyberSound();
    const [hovered, setHovered] = useState(false);
    const isActive = hovered || active;

    const handleClick = () => {
        playInOption();
        if (onClick) onClick();
    };

    return (
        <motion.button
            className={`cyber-button${isActive ? ' cyber-button--active' : ''}`}
            onMouseEnter={() => { setHovered(true); playHover(); }}
            onMouseLeave={() => setHovered(false)}
            onClick={handleClick}
            whileTap={{ scale: 0.96 }}
            transition={{ duration: 0.15 }}
        >
            <TrianglePattern hover={isActive} />
            <Brackets />
            <span className="cyber-button__label">
                {children}
            </span>
        </motion.button>
    );
}
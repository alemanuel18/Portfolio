import { motion } from 'framer-motion';
import { useState } from 'react';
import { useCyberSound } from '../../hooks/useCyberSound';
import './CyberButton.css';

const BTN_W = 150;
const BTN_H = 44;
const COLS = 5;
const ROWS = 1;

/*
  Vértices compartidos: para cada fila generamos COLS+2 puntos que alternan
  entre y0 (borde superior) e y1 (borde inferior), formando un zigzag.

  Índice par   → punto en y0 (arriba)
  Índice impar → punto en y1 (abajo)

  Cada triángulo c usa los vértices [c], [c+1], [c+2].
  Como los vértices son compartidos, no hay ningún gap entre triángulos.

  Triángulo par  (▲): pico arriba  → colorUp
  Triángulo impar (▽): pico abajo  → colorDown (tono más oscuro)
*/
function buildTriangles(hover) {
    const tris = [];
    const ch = BTN_H / ROWS;
    const colorUp = hover ? '0,120,220' : '90,140,200';
    const colorDown = hover ? '0,65,160' : '50,100,170';

    for (let r = 0; r < ROWS; r++) {
        const y0 = r * ch;
        const y1 = y0 + ch;

        const verts = [];
        for (let i = 0; i <= COLS + 1; i++) {
            verts.push({
                x: (i / (COLS + 1)) * BTN_W,
                y: i % 2 === 0 ? y0 : y1,
            });
        }

        for (let c = 0; c < COLS; c++) {
            const isUp = c % 2 === 0;
            const color = isUp ? colorUp : colorDown;
            const idx = r * COLS + c;
            const op = hover
                ? 0.20 + (idx % 5) * 0.055
                : 0.035 + (idx % 4) * 0.018;

            const a = verts[c];
            const b = verts[c + 1];
            const d = verts[c + 2];

            tris.push(
                <polygon
                    key={`t-${r}-${c}`}
                    points={`${a.x},${a.y} ${b.x},${b.y} ${d.x},${d.y}`}
                    fill={`rgba(${color},${op.toFixed(3)})`}
                />
            );
        }
    }
    return tris;
}

function TrianglePattern({ hover }) {
    return (
        <svg
            className="cyber-button__svg"
            viewBox={`0 0 ${BTN_W} ${BTN_H}`}
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
        >
            <rect
                width={BTN_W}
                height={BTN_H}
                fill={hover ? 'rgba(0,90,190,0.40)' : 'rgba(170,205,235,0.07)'}
            />
            {buildTriangles(hover)}
            <rect
                width={BTN_W}
                height={BTN_H}
                fill="none"
                stroke={hover ? 'rgba(0,170,255,0.55)' : 'rgba(130,175,220,0.18)'}
                strokeWidth="0.8"
            />
        </svg>
    );
}

function Brackets() {
    const s = 9;
    return (
        <svg
            className="cyber-button__brackets"
            viewBox={`0 0 ${BTN_W} ${BTN_H}`}
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
        >
            <g fill="none" stroke="rgba(106, 142, 150, 0.95)" strokeWidth="1.8">
                <polyline points={`${s},0 0,0 0,${s}`} />
                <polyline points={`${BTN_W - s},0 ${BTN_W},0 ${BTN_W},${s}`} />
                <polyline points={`0,${BTN_H - s} 0,${BTN_H} ${s},${BTN_H}`} />
                <polyline points={`${BTN_W},${BTN_H - s} ${BTN_W},${BTN_H} ${BTN_W - s},${BTN_H}`} />
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
        >
            <TrianglePattern hover={isActive} />
            <Brackets />
            <span className="cyber-button__label">
                {children}
            </span>
        </motion.button>
    );
}
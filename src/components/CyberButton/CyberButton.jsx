import { motion } from 'framer-motion';
import { useState, useMemo } from 'react';
import { useCyberSound } from '../../hooks/useCyberSound';

function TrianglePattern({ hover }) {
    const cols = 3, rows = 1, W = 500, H = 300;
    const cw = W / cols, ch = H / rows;
    const tris = useMemo(() => {
        const arr = [];
        for (let r = 0; r < rows; r++) {
            for (let c = 0; c < cols; c++) {
                const x = c * cw, y = r * ch;
                const s1 = hover ? (0.35 + Math.random() * 0.3) : (0.05 + Math.random() * 0.08);
                const s2 = hover ? (s1 - 0.12) : (s1 - 0.02);
                const color = hover ? '0,110,200' : '100,150,200';
                arr.push(
                    <polygon key={`a${r}${c}`}
                        points={`${x},${y + ch} ${x + cw / 2},${y} ${x + cw},${y + ch}`}
                        fill={`rgba(${color},${s1.toFixed(2)})`} />,
                    <polygon key={`b${r}${c}`}
                        points={`${x},${y} ${x + cw},${y} ${x + cw / 2},${y + ch}`}
                        fill={`rgba(${color},${Math.max(0, s2).toFixed(2)})`} />
                );
            }
        }
        return arr;
    }, [hover]);

    return (
        <svg
            viewBox={`0 0 ${W} ${H}`}
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
        >
            <rect width={W} height={H}
                fill={hover ? 'rgba(0,100,200,0.2)' : 'rgba(180,210,240,0.06)'} />
            {tris}
            <rect width={W} height={H} fill="none"
                stroke={hover ? 'rgba(0,160,255,0.4)' : 'rgba(140,180,220,0.12)'}
                strokeWidth="0.8" />
        </svg>
    );
}

function Brackets() {
    const s = 8, t = 1.5, W = 140, H = 40;
    return (
        <svg width={W} height={H} viewBox={`0 0 ${W} ${H}`}
            style={{ position: 'absolute', top: 0, left: 0, pointerEvents: 'none' }}
            xmlns="http://www.w3.org/2000/svg">
            <g fill="none" stroke="rgba(0,200,255,0.95)" strokeWidth={t}>
                <polyline points={`${s},0 0,0 0,${s}`} />
                <polyline points={`${W - s},0 ${W},0 ${W},${s}`} />
                <polyline points={`0,${H - s} 0,${H} ${s},${H}`} />
                <polyline points={`${W},${H - s} ${W},${H} ${W - s},${H}`} />
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
            style={{
                position: 'relative',
                background: 'transparent',
                border: 'none',
                cursor: 'pointer',
                outline: 'none',
                padding: 0,
                width: 140,
                height: 40,
            }}
            onMouseEnter={() => { setHovered(true); playHover(); }}
            onMouseLeave={() => setHovered(false)}
            onClick={handleClick}
            whileTap={{ scale: 0.96 }}
        >
            <TrianglePattern hover={isActive} />
            {isActive && <Brackets />}
            <span style={{
                position: 'relative',
                zIndex: 3,
                fontFamily: 'Jura, sans-serif',
                fontSize: '0.75rem',
                fontWeight: 600,
                letterSpacing: '2px',
                textTransform: 'uppercase',
                color: isActive ? '#ffffff' : 'rgba(80,120,170,0.7)',
                transition: 'color 0.2s ease',
                pointerEvents: 'none',
                display: 'block',
                textAlign: 'center',
                lineHeight: '40px',
            }}>
                {children}
            </span>
        </motion.button>
    );
}
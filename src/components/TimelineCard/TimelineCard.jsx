import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useCyberSound } from '../../hooks/useCyberSound';
import './TimelineCard.css';

/**
 * Triángulos horizontales en zigzag sobre la imagen — igual estilo que el CyberButton.
 */
function ImageTriangles({ active }) {
    const COLS = 6;
    const W = 100;
    const H = 100;

    const verts = [];
    for (let i = 0; i <= COLS + 1; i++) {
        verts.push({
            x: (i / (COLS + 1)) * W,
            y: i % 2 === 0 ? 0 : H,
        });
    }

    return (
        <svg
            className="tc-img-triangles"
            viewBox={`0 0 ${W} ${H}`}
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            {Array.from({ length: COLS }, (_, c) => {
                const op = active
                    ? 0.18 + (c % 3) * 0.07  // más visible al enfocar
                    : 0.06 + (c % 2) * 0.04;  // casi imperceptible en reposo
                const color = active
                    ? c % 2 === 0 ? '15,51,79' : '36,84,124'
                    : '255,255,255';
                return (
                    <polygon
                        key={c}
                        points={`${verts[c].x},${verts[c].y} ${verts[c + 1].x},${verts[c + 1].y} ${verts[c + 2].x},${verts[c + 2].y}`}
                        fill={`rgba(${color},${op})`}
                    />
                );
            })}
        </svg>
    );
}

/**
 * Tarjeta para la línea de tiempo.
 * Reposo: imagen + año + cargo.
 * Hover: se eleva, aparece la descripción.
 *
 * Campos esperados en `item`:
 *   - id, img (opcional), year, role/degree, company/institution (opcional), desc (opcional)
 */
export default function TimelineCard({ item, labelField = 'role', subField = 'company' }) {
    const [hovered, setHovered] = useState(false);
    const { playHover } = useCyberSound();

    const label = item[labelField] || item.role || item.degree || '';
    const sub   = item[subField] || item.company || item.institution || '';

    return (
        <motion.div
            className={`timeline-card ${hovered ? 'timeline-card--hovered' : ''}`}
            onMouseEnter={() => { setHovered(true); playHover(); }}
            onMouseLeave={() => setHovered(false)}
            animate={{ y: hovered ? -14 : 0, scale: hovered ? 1.03 : 1 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
        >
            {/* Imagen con overlay de triángulos */}
            {item.img && (
                <div className="tc-img-wrapper">
                    <img src={item.img} alt={label} className="tc-img" />
                    <ImageTriangles active={hovered} />
                    {/* Degradado inferior para suavizar transición con el texto */}
                    <div className="tc-img-fade" />
                </div>
            )}

            {/* Contenido de la tarjeta */}
            <div className="tc-body">
                <div className="tc-year">{item.year}</div>
                <div className="tc-label">{label}</div>
                {sub && <div className="tc-sub">{sub}</div>}

                {/* Descripción — solo visible en hover */}
                <AnimatePresence>
                    {hovered && item.desc && (
                        <motion.div
                            className="tc-desc"
                            initial={{ opacity: 0, height: 0, marginTop: 0 }}
                            animate={{ opacity: 1, height: 'auto', marginTop: 10 }}
                            exit={{ opacity: 0, height: 0, marginTop: 0 }}
                            transition={{ duration: 0.25 }}
                        >
                            {item.desc}
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            {/* Línea de acento inferior */}
            <motion.div
                className="tc-accent"
                animate={{ scaleX: hovered ? 1 : 0.3, opacity: hovered ? 1 : 0.4 }}
                transition={{ duration: 0.3 }}
            />
        </motion.div>
    );
}

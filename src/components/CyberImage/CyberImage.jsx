import { useState } from 'react';
import { motion } from 'framer-motion';
import './CyberImage.css';

/**
 * Componente de imagen con overlay de triángulos estilo Detroit.
 *
 * @param {string}  src         - Ruta de la imagen (ej: '/images/profile.jpg')
 * @param {string}  alt         - Texto alternativo
 * @param {string}  [className] - Clase CSS extra para el contenedor
 * @param {boolean} [interactive=false] - Si true, activa el efecto de hover azul
 *                                       (pensado para tarjetas de timeline)
 * @param {string}  [clipPath]  - clip-path CSS para el contenedor (trapecio, etc.)
 */
export default function CyberImage({ src, alt, className = '', interactive = false, clipPath }) {
    const [hovered, setHovered] = useState(false);

    // Triángulos SVG — patrón sutil sobre la imagen
    const COLS = 4;
    const ROWS = 5;
    const W = 100; // viewBox unitless (se estira con preserveAspectRatio="none")
    const H = 100;
    const cw = W / COLS;
    const ch = H / ROWS;

    const tris = [];
    for (let r = 0; r < ROWS; r++) {
        for (let c = 0; c < COLS; c++) {
            const x0 = c * cw;
            const x1 = x0 + cw;
            const xm = x0 + cw / 2;
            const y0 = r * ch;
            const y1 = y0 + ch;

            const idx = r * COLS + c;
            // Opacidad sutil en reposo, más visible en hover interactivo
            const baseOp = [0.06, 0.10, 0.04, 0.08, 0.12, 0.05][idx % 6];
            const op = interactive && hovered ? baseOp * 3.5 : baseOp;

            // Triángulo ▲
            tris.push(
                <polygon
                    key={`u-${idx}`}
                    points={`${x0},${y1} ${x1},${y1} ${xm},${y0}`}
                    fill={`rgba(255,255,255,${op.toFixed(3)})`}
                />
            );
            // Triángulo ▼
            tris.push(
                <polygon
                    key={`d-${idx}`}
                    points={`${x0},${y0} ${x1},${y0} ${xm},${y1}`}
                    fill={`rgba(255,255,255,${(op * 0.6).toFixed(3)})`}
                />
            );
        }
    }

    return (
        <motion.div
            className={`cyber-image ${interactive ? 'cyber-image--interactive' : ''} ${className}`}
            style={{ clipPath: clipPath || undefined }}
            onMouseEnter={() => interactive && setHovered(true)}
            onMouseLeave={() => interactive && setHovered(false)}
            animate={interactive ? {
                scale: hovered ? 1.03 : 1,
            } : {}}
            transition={{ duration: 0.35, ease: 'easeOut' }}
        >
            {/* Imagen base */}
            <img
                src={src}
                alt={alt}
                className="cyber-image__img"
            />

            {/* Overlay azul (solo en interactive al hacer hover) */}
            {interactive && (
                <motion.div
                    className="cyber-image__overlay"
                    animate={{ opacity: hovered ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                />
            )}

            {/* Patrón de triángulos SVG */}
            <svg
                className="cyber-image__triangles"
                viewBox={`0 0 ${W} ${H}`}
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
            >
                {tris}
            </svg>

            {/* Línea de acento inferior (siempre visible) */}
            <div className="cyber-image__accent" />
        </motion.div>
    );
}

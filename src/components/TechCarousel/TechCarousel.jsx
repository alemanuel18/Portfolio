import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    SiReact, SiTypescript, SiNodedotjs, SiPostgresql,
    SiDocker, SiCss, SiHtml5, SiJavascript, SiGit,
    SiNextdotjs, SiPython, SiGo, SiPrisma, SiRedis,
    SiMysql, SiMongodb, SiFastapi, SiNginx,
} from 'react-icons/si';
import './TechCarousel.css';

/** Mapa nombre → ícono de react-icons */
export const TECH_ICONS = {
    'React': SiReact, 'React (Vite)': SiReact, 'Next.js': SiNextdotjs,
    'TypeScript': SiTypescript, 'JavaScript': SiJavascript,
    'HTML': SiHtml5, 'CSS': SiCss,
    'Node.js': SiNodedotjs, 'Express.js': SiNodedotjs,
    'Python': SiPython, 'Go': SiGo, 'FastAPI': SiFastapi,
    'PostgreSQL': SiPostgresql, 'MySQL': SiMysql, 'MongoDB': SiMongodb,
    'Redis': SiRedis, 'Prisma': SiPrisma,
    'Docker': SiDocker, 'Git': SiGit, 'Nginx': SiNginx,
};

/**
 *
 * @param {Object[]} items   - Arreglo de tecnologías (deben tener `name`)
 * @param {number}  interval - Milisegundos entre rotaciones (default 1800)
 * @param {number}  visible  - Cuántos íconos mostrar a la vez (default 5)
 */
export default function TechCarousel({ items = [], interval = 1800, visible = 5 }) {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        if (items.length === 0) return;
        const timer = setInterval(() => {
            setCurrent(prev => (prev + 1) % items.length);
        }, interval);
        return () => clearInterval(timer);
    }, [items.length, interval]);

    if (items.length === 0) return null;

    // Índices circulares de los ítems visibles (current en el centro)
    const half = Math.floor(visible / 2);
    const indices = Array.from({ length: visible }, (_, i) => {
        return (current - half + i + items.length * 10) % items.length;
    });

    return (
        <div className="tech-carousel">

            <div className="tech-carousel-track">
                {indices.map((idx, pos) => {
                    const tech = items[idx];
                    const Icon = TECH_ICONS[tech.name] || SiReact;
                    const isCenter = pos === half;

                    return (
                        <motion.div
                            key={`${idx}-${pos}`}
                            className={`tc-slot ${isCenter ? 'tc-slot--active' : ''}`}
                            animate={{
                                opacity: isCenter ? 1 : Math.max(0.25, 1 - Math.abs(pos - half) * 0.3),
                                scale: isCenter ? 1.35 : Math.max(0.6, 1 - Math.abs(pos - half) * 0.18),
                            }}
                            transition={{ duration: 0.4, ease: 'easeInOut' }}
                        >
                            <Icon className="tc-icon" />

                        </motion.div>
                    );
                })}
            </div>
        </div>
    );
}

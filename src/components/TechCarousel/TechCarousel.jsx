import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    SiReact, SiTypescript, SiNodedotjs, SiPostgresql,
    SiDocker, SiCss, SiHtml5, SiJavascript, SiGit,
    SiNextdotjs, SiPython, SiGo, SiPrisma, SiRedis,
    SiMysql, SiMongodb, SiFastapi, SiNginx,
} from 'react-icons/si';
import './TechCarousel.css';

const TECH_ICONS = {
    'React': SiReact, 'React (Vite)': SiReact, 'Next.js': SiNextdotjs,
    'TypeScript': SiTypescript, 'JavaScript': SiJavascript,
    'HTML': SiHtml5, 'CSS': SiCss,
    'Node.js': SiNodedotjs, 'Express.js': SiNodedotjs,
    'Python': SiPython, 'Go': SiGo, 'FastAPI': SiFastapi,
    'PostgreSQL': SiPostgresql, 'MySQL': SiMysql, 'MongoDB': SiMongodb,
    'Redis': SiRedis, 'Prisma': SiPrisma,
    'Docker': SiDocker, 'Git': SiGit, 'Nginx': SiNginx,
};

const SLIDE = {
    enter: { opacity: 0, y: 28, scale: 0.7 },
    center: { opacity: 1, y: 0, scale: 1 },
    exit: { opacity: 0, y: -28, scale: 0.7 },
};

/**
 * @param {Object[]} items       - Arreglo de tecnologías
 * @param {number}  interval     - ms entre auto-rotaciones
 * @param {number|null} focusedIndex - Índice a mostrar (override externo)
 */
export default function TechCarousel({ items = [], interval = 2200, focusedIndex = null }) {
    const [autoCurrent, setAutoCurrent] = useState(0);
    const focused = focusedIndex !== null && focusedIndex >= 0 && focusedIndex < items.length
        ? focusedIndex
        : null;

    // Auto-rotación — se pausa cuando hay un ítem enfocado
    useEffect(() => {
        if (focused !== null || items.length === 0) return;
        const timer = setInterval(() => {
            setAutoCurrent(prev => (prev + 1) % items.length);
        }, interval);
        return () => clearInterval(timer);
    }, [focused, items.length, interval]);

    if (items.length === 0) return null;

    const current = focused ?? autoCurrent % items.length;
    const tech = items[current];
    const Icon = TECH_ICONS[tech.name] || SiReact;

    // Íconos satélite: anterior y siguiente
    const prevTech = items[(current - 1 + items.length) % items.length];
    const nextTech = items[(current + 1) % items.length];
    const PrevIcon = TECH_ICONS[prevTech.name] || SiReact;
    const NextIcon = TECH_ICONS[nextTech.name] || SiReact;

    return (
        <div className="tech-carousel">
            {/* Ícono previo (satélite superior) */}
            <div className="tc-satellite">
                <PrevIcon className="tc-icon tc-icon--dim" />
            </div>

            {/* Ícono central con AnimatePresence para crossfade limpio */}
            <div className="tc-center-wrapper">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={current}
                        className="tc-center"
                        variants={SLIDE}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{ duration: 0.35, ease: 'easeInOut' }}
                    >
                        <Icon className="tc-icon tc-icon--active" />
                        <motion.span
                            className="tc-name"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1, transition: { delay: 0.15 } }}
                        >
                        </motion.span>
                    </motion.div>
                </AnimatePresence>
            </div>

            <div className="tc-satellite">
                <NextIcon className="tc-icon tc-icon--dim" />
            </div>
        </div>
    );
}

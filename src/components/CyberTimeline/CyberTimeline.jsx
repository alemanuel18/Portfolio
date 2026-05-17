import { motion } from 'framer-motion';
import { useCyberSound } from '../../hooks/useCyberSound';
import './CyberTimeline.css';

/**
 *
 * @param {Object[]} items - Arreglo de objetos de datos.
 * @param {Function} renderCard - Función que recibe (item, index) y devuelve el contenido de la tarjeta.
 */
export default function CyberTimeline({ items, renderCard }) {
    const { playHover } = useCyberSound();

    return (
        <div className="cyber-timeline-container">
            <svg className="timeline-svg" preserveAspectRatio="none">
                <line
                    x1="0" y1="50%"
                    x2="100%" y2="50%"
                    stroke="var(--cyber-primary)"
                    strokeWidth="1"
                    strokeDasharray="8 6"
                    opacity="0.4"
                />
            </svg>

            {items.map((item, index) => (
                <motion.div
                    key={item.id}
                    className="timeline-node"
                    onMouseEnter={playHover}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{
                        opacity: 1,
                        y: 0,
                        transition: { delay: index * 0.15, duration: 0.4 }
                    }}
                >
                    {renderCard(item, index)}

                    {/* Punto de conexión en la línea */}
                    <div className="timeline-dot" />
                </motion.div>
            ))}
        </div>
    );
}

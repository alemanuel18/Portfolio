import { motion, AnimatePresence } from 'framer-motion';
import { useCyberSound } from '../../hooks/useCyberSound';
import './MagazineLayout.css';

/**
 * @param {string}   title         - Título de la vista (ej. "PROYECTOS").
 * @param {Object[]} items         - Lista de elementos a mostrar en el panel izquierdo.
 * @param {Object}   selected      - El elemento actualmente seleccionado.
 * @param {Function} onSelect      - Callback cuando se hace clic en un item.
 * @param {Function} renderLabel   - Función (item) => JSX para el texto de cada tarjeta.
 * @param {Function} renderDetail  - Función (selected) => JSX para el panel derecho.
 */
export default function MagazineLayout({ title, items, selected, onSelect, renderLabel, renderDetail }) {
    const { playHover, playInOption } = useCyberSound();

    const handleSelect = (item) => {
        playInOption();
        onSelect(item);
    };

    return (
        <div className="magazine-layout">
            {/* Panel izquierdo: lista inclinada */}
            <div className="magazine-left">
                <h1 className="magazine-view-title">{title}</h1>
                <div className="magazine-grid">
                    {items.map((item, index) => (
                        <motion.div
                            key={item.id}
                            className={`magazine-card ${selected?.id === item.id ? 'active' : ''}`}
                            onMouseEnter={playHover}
                            onClick={() => handleSelect(item)}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0, transition: { delay: index * 0.08 } }}
                            whileHover={{ x: 8 }}
                            whileTap={{ scale: 0.97 }}
                        >
                            <span className="magazine-card-label">
                                {renderLabel ? renderLabel(item) : item.title}
                            </span>
                            <span className="magazine-card-arrow">›</span>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Panel derecho: detalle dinámico */}
            <div className="magazine-right">
                <AnimatePresence mode="wait">
                    {selected ? (
                        <motion.div
                            key={selected.id}
                            className="magazine-detail"
                            initial={{ opacity: 0, x: 40 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -40 }}
                            transition={{ duration: 0.3 }}
                        >
                            {renderDetail(selected)}
                        </motion.div>
                    ) : (
                        <motion.div
                            key="placeholder"
                            className="magazine-placeholder"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                        >
                            <div className="placeholder-icon">↖</div>
                            <div className="placeholder-text">SELECT A FILE</div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
}

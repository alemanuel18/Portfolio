import { motion, AnimatePresence } from 'framer-motion';
import { useCyberSound } from '../../hooks/useCyberSound';
import { useCyber } from '../../hooks/useCyber';
import './MagazineLayout.css';

/**
 * @param {string}   title        - Título del panel izquierdo.
 * @param {Object[]} items        - Lista de elementos.
 * @param {Object}   selected     - Elemento seleccionado actualmente.
 * @param {Function} onSelect     - Callback al hacer clic en un item.
 * @param {Function} renderLabel  - (item) => texto/JSX de la tarjeta.
 * @param {Function} renderDetail - (selected) => contenido del panel derecho.
 * @param {string}   selectHint   - Texto del placeholder (se sobreescribe con i18n si se omite).
 */
export default function MagazineLayout({ title, items, selected, onSelect, renderLabel, renderDetail, selectHint }) {
    const { playHover, playInOption } = useCyberSound();
    const { t } = useCyber();

    const handleSelect = (item) => {
        playInOption();
        onSelect(item);
    };

    return (
        <div className="magazine-layout">
            {/* Panel izquierdo */}
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

            {/* Panel derecho */}
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
                            <div className="placeholder-text">
                                {selectHint || t.projects?.selectFile || 'SELECT A FILE'}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
}

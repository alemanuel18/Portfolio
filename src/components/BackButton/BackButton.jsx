import { motion } from 'framer-motion';
import { useCyberSound } from '../../hooks/useCyberSound';
import { useCyber } from '../../context/CyberContext';
import './BackButton.css';

export default function BackButton({ onClick }) {
    const { playHover, playOutOption } = useCyberSound();
    const { t } = useCyber();

    const handleClick = () => {
        playOutOption();
        if (onClick) onClick();
    };

    return (
        <motion.div
            className="back-button-container"
            onMouseEnter={playHover}
            onClick={handleClick}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
        >
            <div className="back-icon">
                <span>✕</span>
            </div>
            <span className="back-text">{t.options?.back || 'BACK'}</span>
        </motion.div>
    );
}

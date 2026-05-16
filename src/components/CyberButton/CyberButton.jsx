import { motion } from 'framer-motion';
import { useCyberSound } from '../../hooks/useCyberSound';
import './CyberButton.css';

export default function CyberButton({ children, onClick, active = false }) {
    const { playHover, playInOption } = useCyberSound();

    const handleClick = () => {
        playInOption();
        if (onClick) onClick();
    };

    return (
        <motion.button
            className={`cyber-button ${active ? 'active' : ''}`}
            onMouseEnter={playHover}
            onClick={handleClick}
            whileHover={{ scale: 1.05, x: 10 }}
            whileTap={{ scale: 0.95 }}
        >
            {children}
        </motion.button>
    );
}

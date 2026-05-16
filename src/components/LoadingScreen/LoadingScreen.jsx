import { motion } from 'framer-motion';
import { useCyber } from '../../context/CyberContext';
import './LoadingScreen.css';

export default function LoadingScreen() {
    const { t } = useCyber();

    return (
        <motion.div
            className="loading-screen"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
        >
            <div className="loading-content">
                <div className="loading-text">[ {t.loading} ]</div>
                <div className="loading-bar-container">
                    <div className="loading-bar"></div>
                </div>
            </div>
        </motion.div>
    );
}

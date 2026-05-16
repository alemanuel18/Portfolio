import { motion } from 'framer-motion';
import { useCyber } from '../../context/CyberContext';
import CyberButton from '../../components/CyberButton/CyberButton';
import './MainMenu.css';

export default function MainMenu({ changeView }) {
    const { t } = useCyber();

    const variants = {
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.5, staggerChildren: 0.1 } },
        exit: { opacity: 0, x: -50, transition: { duration: 0.3 } }
    };

    const itemVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: { opacity: 1, x: 0 }
    };

    return (
        <motion.div
            className="main-menu"
            variants={variants}
            initial="hidden"
            animate="visible"
            exit="exit"
        >
            <div className="menu-line"></div>
            
            <motion.div variants={itemVariants} className="menu-title">
                ALEMANUEL
                <span className="subtitle">BECOME DEVELOPER</span>
            </motion.div>

            <div className="menu-options">
                <motion.div variants={itemVariants}>
                    <CyberButton onClick={() => changeView('ABOUT')}>{t.menu.story}</CyberButton>
                </motion.div>
                <motion.div variants={itemVariants}>
                    <CyberButton onClick={() => changeView('EXPERIENCE')}>{t.menu.chapters}</CyberButton>
                </motion.div>
                <motion.div variants={itemVariants}>
                    <CyberButton onClick={() => changeView('PROJECTS')}>{t.menu.extras}</CyberButton>
                </motion.div>
                <motion.div variants={itemVariants}>
                    <CyberButton onClick={() => changeView('OPTIONS')}>{t.menu.options}</CyberButton>
                </motion.div>
            </div>
        </motion.div>
    );
}

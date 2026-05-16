import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useCyber } from '../../context/CyberContext';
import CyberButton from '../../components/CyberButton/CyberButton';
import './MainMenu.css';

export default function MainMenu() {
    const { t } = useCyber();
    const navigate = useNavigate();

    const variants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, staggerChildren: 0.1 } },
        exit: { opacity: 0, y: 50, transition: { duration: 0.3 } }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <motion.div
            className="main-menu"
            variants={variants}
            initial="hidden"
            animate="visible"
            exit="exit"
        >
            <motion.div variants={itemVariants} className="menu-title">
                ALEMANUEL
                <span className="subtitle">BECOME DEVELOPER</span>
            </motion.div>

            <div className="menu-options">
                <motion.div variants={itemVariants}>
                    <CyberButton onClick={() => navigate('/about')}>{t.menu.story}</CyberButton>
                </motion.div>
                <motion.div variants={itemVariants}>
                    <CyberButton onClick={() => navigate('/experience')}>{t.menu.chapters}</CyberButton>
                </motion.div>
                <motion.div variants={itemVariants}>
                    <CyberButton onClick={() => navigate('/studies')}>{t.menu.studies}</CyberButton>
                </motion.div>
                <motion.div variants={itemVariants}>
                    <CyberButton onClick={() => navigate('/projects')}>{t.menu.projects}</CyberButton>
                </motion.div>
                <motion.div variants={itemVariants}>
                    <CyberButton onClick={() => navigate('/courses')}>{t.menu.courses}</CyberButton>
                </motion.div>
                <motion.div variants={itemVariants}>
                    <CyberButton onClick={() => navigate('/technologies')}>{t.menu.technologies}</CyberButton>
                </motion.div>
                <motion.div variants={itemVariants}>
                    <CyberButton onClick={() => navigate('/options')}>{t.menu.options}</CyberButton>
                </motion.div>
            </div>
        </motion.div>
    );
}

import { motion } from 'framer-motion';
import BackButton from '../../components/BackButton/BackButton';
import './AboutMe.css';

export default function AboutMe() {


    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.8, staggerChildren: 0.2 } },
        exit: { opacity: 0, x: 50, transition: { duration: 0.3 } }
    };

    const leftVariants = {
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
    };

    const rightVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
    };

    return (
        <motion.div
            className="about-me"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
        >
            <div className="about-split">
                <motion.div className="about-left" variants={leftVariants}>
                    <div className="profile-pic-container">
                        {/* Aquí va la imagen real de perfil */}
                        <div className="profile-filter"></div>
                        <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: '2rem' }}>
                            [ IMAGE SIGNAL LOST ]
                        </div>
                    </div>
                </motion.div>

                <motion.div className="about-right" variants={rightVariants}>
                    <h1 className="about-title">ALEJANDRO JEREZ</h1>

                    <div className="about-meta">
                        <span><strong>DESARROLLADOR:</strong> WEB FULL-STACK</span>
                        <span><strong>CONTACTO:</strong> [EMAIL_ADDRESS]</span>
                        <span><strong>STATUS:</strong>JUNIOR</span>
                        <span><strong>GIT</strong> https://github.com/alemanuel178</span>
                        <span><strong>ESPECIALIDAD:</strong> FRONTEND & UI/UX</span>

                    </div>

                    <div className="about-bio">
                        <p>
                            Desarrollador FULL-STACK, especializado en interfaces dinámicas y experiencias de usuario inmersivas.
                            Especializado en React, HTML, CSS, JavaScript, TypeScript y diseño moderno.
                        </p>
                    </div>
                </motion.div>
            </div>

            <BackButton />
        </motion.div>
    );
}

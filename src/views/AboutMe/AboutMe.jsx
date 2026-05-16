import { motion } from 'framer-motion';
import BackButton from '../../components/BackButton/BackButton';
import './AboutMe.css';
import { useCyberSound } from '../../hooks/useCyberSound';
import { useEffect } from 'react';

export default function AboutMe() {
    const { playNavigare } = useCyberSound();

    useEffect(() => {
        playNavigare();
    }, []);

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
                        <div style={{width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: '2rem'}}>
                            [ IMAGE SIGNAL LOST ]
                        </div>
                    </div>
                </motion.div>

                <motion.div className="about-right" variants={rightVariants}>
                    <h1 className="about-title">ALEMANUEL</h1>
                    
                    <div className="about-meta">
                        <span><strong>MODEL:</strong> DEV-2026</span>
                        <span><strong>STATUS:</strong> ONLINE</span>
                        <span><strong>SPECIALTY:</strong> FRONTEND & UI/UX</span>
                    </div>

                    <div className="about-bio">
                        <p>
                            Desarrollador enfocado en la creación de interfaces dinámicas y experiencias de usuario inmersivas. 
                            Capacitado en React, Vite, y diseño moderno.
                        </p>
                    </div>
                </motion.div>
            </div>

            <BackButton />
        </motion.div>
    );
}

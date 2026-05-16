import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import BackButton from '../../components/BackButton/BackButton';
import LoadingScreen from '../../components/LoadingScreen/LoadingScreen';
import { useCyber } from '../../context/CyberContext';
import { useCyberSound } from '../../hooks/useCyberSound';
import './Technologies.css';

export default function Technologies() {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    const { fetchCyberData } = useCyber();
    const { playNavigare, playHover } = useCyberSound();

    useEffect(() => {
        playNavigare();
        fetchCyberData('technologies').then(res => {
            setData(res);
            setLoading(false);
        });
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

    if (loading) return <LoadingScreen />;

    return (
        <motion.div
            className="tech-view"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
        >
            <div className="tech-split">
                <motion.div className="tech-left" variants={leftVariants}>
                    <div className="system-graphic-container">
                        <div className="tech-filter"></div>
                        <div style={{ textAlign: 'center' }}>
                            <div style={{ fontSize: '3rem', marginBottom: '10px' }}>⚡</div>
                            [ DIAGNOSTIC MODULES ACTIVE ]
                        </div>
                    </div>
                </motion.div>

                <motion.div className="tech-right" variants={rightVariants}>
                    <h1 className="tech-title">TECNOLOGÍAS</h1>
                    
                    <div className="tech-meta">
                        {data.map((tech, index) => (
                            <motion.div 
                                className="tech-item" 
                                key={tech.id}
                                onMouseEnter={playHover}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0, transition: { delay: index * 0.1 } }}
                            >
                                <span>{tech.name}</span>
                                <span className="tech-status">[{tech.level}]</span>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>

            <BackButton />
        </motion.div>
    );
}

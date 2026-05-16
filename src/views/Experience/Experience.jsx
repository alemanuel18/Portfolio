import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import BackButton from '../../components/BackButton/BackButton';
import LoadingScreen from '../../components/LoadingScreen/LoadingScreen';
import { useCyber } from '../../context/CyberContext';
import { useCyberSound } from '../../hooks/useCyberSound';
import './Experience.css';

export default function Experience({ backToMenu }) {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    const { fetchCyberData } = useCyber();
    const { playNavigare, playHover } = useCyberSound();

    useEffect(() => {
        playNavigare();
        fetchCyberData('experience').then(res => {
            setData(res);
            setLoading(false);
        });
    }, []);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.5 } },
        exit: { opacity: 0, transition: { duration: 0.3 } }
    };

    if (loading) return <LoadingScreen />;

    return (
        <motion.div
            className="experience-view"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
        >
            <h1 className="experience-title">CHAPTERS</h1>

            <div className="timeline-container">
                <div className="timeline-line"></div>
                {data.map((item, index) => (
                    <motion.div 
                        key={item.id} 
                        className="timeline-node"
                        onMouseEnter={playHover}
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0, transition: { delay: index * 0.2 } }}
                    >
                        <div className="timeline-date">{item.year}</div>
                        <div className="timeline-role">{item.role}</div>
                    </motion.div>
                ))}
            </div>

            <BackButton onClick={backToMenu} />
        </motion.div>
    );
}

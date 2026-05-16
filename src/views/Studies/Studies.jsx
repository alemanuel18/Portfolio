import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import BackButton from '../../components/BackButton/BackButton';
import LoadingScreen from '../../components/LoadingScreen/LoadingScreen';
import { useCyber } from '../../context/CyberContext';
import { useCyberSound } from '../../hooks/useCyberSound';
import './Studies.css';

export default function Studies() {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    const { fetchCyberData } = useCyber();
    const { playNavigare, playHover } = useCyberSound();

    useEffect(() => {
        playNavigare();
        fetchCyberData('studies').then(res => {
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
            className="studies-view"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
        >
            <h1 className="studies-title">ESTUDIOS</h1>

            <div className="studies-timeline-container">
                <div className="studies-line"></div>
                {data.map((item, index) => (
                    <motion.div 
                        key={item.id} 
                        className="studies-node"
                        onMouseEnter={playHover}
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0, transition: { delay: index * 0.2 } }}
                    >
                        <div className="studies-date">{item.year}</div>
                        <div className="studies-degree">{item.degree}</div>
                    </motion.div>
                ))}
            </div>

            <BackButton />
        </motion.div>
    );
}

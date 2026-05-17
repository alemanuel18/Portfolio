import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import BackButton from '../../components/BackButton/BackButton';
import LoadingScreen from '../../components/LoadingScreen/LoadingScreen';
import CyberTimeline from '../../components/CyberTimeline/CyberTimeline';
import CyberImage from '../../components/CyberImage/CyberImage';
import { useCyber } from '../../context/CyberContext';
import { useCyberSound } from '../../hooks/useCyberSound';
import './Experience.css';

export default function Experience() {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    const { fetchCyberData } = useCyber();
    const { playNavigare } = useCyberSound();

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
            <h1 className="experience-title">EXPERIENCIA</h1>

            <CyberTimeline
                items={data}
                renderCard={(item) => (
                    <>
                        {item.img && (
                            <CyberImage
                                src={item.img}
                                alt={item.role}
                                className="timeline-node-img"
                                interactive
                            />
                        )}
                        <div className="timeline-date">{item.year}</div>
                        <div className="timeline-role">{item.role}</div>
                        {item.company && <div className="timeline-company">{item.company}</div>}
                    </>
                )}
            />

            <BackButton />
        </motion.div>
    );
}

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import BackButton from '../../components/BackButton/BackButton';
import LoadingScreen from '../../components/LoadingScreen/LoadingScreen';
import CyberTimeline from '../../components/CyberTimeline/CyberTimeline';
import { useCyber } from '../../context/CyberContext';
import { useCyberSound } from '../../hooks/useCyberSound';
import './Studies.css';

export default function Studies() {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    const { fetchCyberData } = useCyber();
    const { playNavigare } = useCyberSound();

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

            <CyberTimeline
                items={data}
                renderCard={(item) => (
                    <>
                        <div className="timeline-date">{item.year}</div>
                        <div className="timeline-degree">{item.degree}</div>
                        {item.institution && <div className="timeline-institution">{item.institution}</div>}
                    </>
                )}
            />

            <BackButton />
        </motion.div>
    );
}

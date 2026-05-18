import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import BackButton from '../../components/BackButton/BackButton';
import LoadingScreen from '../../components/LoadingScreen/LoadingScreen';
import CyberTimeline from '../../components/CyberTimeline/CyberTimeline';
import { useCyber } from '../../context/CyberContext';
import { useTranslate } from '../../hooks/useTranslate';
import { useCyberSound } from '../../hooks/useCyberSound';
import './Experience.css';

export default function Experience() {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    const { fetchCyberData, t } = useCyber();
    const { playNavigare } = useCyberSound();
    const tf = useTranslate();

    useEffect(() => {
        playNavigare();
        fetchCyberData('experience').then(res => {
            setData(res);
            setLoading(false);
        });
    }, []);

    if (loading) return <LoadingScreen />;

    // Mapear datos con campos traducidos para el TimelineCard
    const translated = data.map(item => ({
        ...item,
        role:    tf(item, 'role'),
        year:    tf(item, 'year'),
        desc:    tf(item, 'desc'),
    }));

    return (
        <motion.div
            className="experience-view"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.5 } }}
            exit={{ opacity: 0, transition: { duration: 0.3 } }}
        >
            <h1 className="experience-title">{t.experience.title}</h1>
            <CyberTimeline items={translated} labelField="role" subField="company" />
            <BackButton />
        </motion.div>
    );
}

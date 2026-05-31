import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import BackButton from '../../components/BackButton/BackButton';
import LoadingScreen from '../../components/LoadingScreen/LoadingScreen';
import CyberTimeline from '../../components/CyberTimeline/CyberTimeline';
import { useCyber } from '../../hooks/useCyber';
import { useTranslate } from '../../hooks/useTranslate';
import { useCyberSound } from '../../hooks/useCyberSound';
import './Studies.css';

export default function Studies() {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    const { fetchCyberData, t } = useCyber();
    const { playNavigare } = useCyberSound();
    const tf = useTranslate();

    useEffect(() => {
        playNavigare();
        fetchCyberData('studies').then(res => {
            setData(res);
            setLoading(false);
        });
    }, [fetchCyberData, playNavigare]);

    if (loading) return <LoadingScreen />;

    const translated = data.map(item => ({
        ...item,
        degree: tf(item, 'degree'),
        year:   tf(item, 'year'),
        desc:   tf(item, 'desc'),
    }));

    return (
        <motion.div
            className="studies-view"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.5 } }}
            exit={{ opacity: 0, transition: { duration: 0.3 } }}
        >
            <h1 className="studies-title">{t.studies.title}</h1>
            <CyberTimeline items={translated} labelField="degree" subField="institution" />
            <BackButton />
        </motion.div>
    );
}

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
    const { fetchCyberData, t } = useCyber();
    const { playNavigare } = useCyberSound();

    useEffect(() => {
        playNavigare();
        fetchCyberData('studies').then(res => {
            setData(res);
            setLoading(false);
        });
    }, []);

    if (loading) return <LoadingScreen />;

    return (
        <motion.div
            className="studies-view"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.5 } }}
            exit={{ opacity: 0, transition: { duration: 0.3 } }}
        >
            <h1 className="studies-title">{t.studies.title}</h1>
            <CyberTimeline items={data} labelField="degree" subField="institution" />
            <BackButton />
        </motion.div>
    );
}

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import BackButton from '../../components/BackButton/BackButton';
import LoadingScreen from '../../components/LoadingScreen/LoadingScreen';
import MagazineLayout from '../../components/MagazineLayout/MagazineLayout';
import CyberButton from '../../components/CyberButton/CyberButton';
import { useCyber } from '../../context/CyberContext';
import { useTranslate } from '../../hooks/useTranslate';
import { useCyberSound } from '../../hooks/useCyberSound';
import './Courses.css';

export default function Courses() {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    const [selected, setSelected] = useState(null);
    const { fetchCyberData, t } = useCyber();
    const { playNavigare } = useCyberSound();
    const tf = useTranslate();

    useEffect(() => {
        playNavigare();
        fetchCyberData('courses').then(res => {
            setData(res);
            setLoading(false);
        });
    }, []);

    if (loading) return <LoadingScreen />;

    return (
        <motion.div
            className="courses-view"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.5 } }}
            exit={{ opacity: 0, transition: { duration: 0.3 } }}
        >
            <MagazineLayout
                title={t.courses.title}
                items={data}
                selected={selected}
                onSelect={setSelected}
                selectHint={t.courses.selectFile}
                renderLabel={(item) => tf(item, 'title')}
                renderDetail={(item) => (
                    <div className="course-detail">
                        <h2 className="detail-title">{tf(item, 'title')}</h2>
                        <div className="detail-platform">{t.courses.platform}: {item.platform}</div>
                        <p className="detail-desc">{tf(item, 'desc')}</p>

                        {item.link && (
                            <div className="course-detail-link">
                                <CyberButton
                                    onClick={() => window.open(item.link, '_blank', 'noopener,noreferrer')}
                                >
                                    {t.courses.diploma}
                                </CyberButton>
                            </div>
                        )}
                    </div>
                )}
            />

            <BackButton />
        </motion.div>
    );
}

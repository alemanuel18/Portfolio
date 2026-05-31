import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import BackButton from '../../components/BackButton/BackButton';
import LoadingScreen from '../../components/LoadingScreen/LoadingScreen';
import MagazineLayout from '../../components/MagazineLayout/MagazineLayout';
import { FaGithub } from 'react-icons/fa';
import CyberImage from '../../components/CyberImage/CyberImage';
import CyberButton from '../../components/CyberButton/CyberButton';
import { useCyber } from '../../hooks/useCyber';
import { useTranslate } from '../../hooks/useTranslate';
import { useCyberSound } from '../../hooks/useCyberSound';
import './Projects.css';

export default function Projects() {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    const [selected, setSelected] = useState(null);
    const { fetchCyberData, t } = useCyber();
    const { playNavigare } = useCyberSound();
    const tf = useTranslate();

    useEffect(() => {
        playNavigare();
        fetchCyberData('projects').then(res => {
            setData(res);
            setLoading(false);
        });
    }, [fetchCyberData, playNavigare]);

    if (loading) return <LoadingScreen />;

    return (
        <motion.div
            className="projects-view"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.5 } }}
            exit={{ opacity: 0, transition: { duration: 0.3 } }}
        >
            <MagazineLayout
                title={t.projects.title}
                items={data}
                selected={selected}
                onSelect={setSelected}
                selectHint={t.projects.selectFile}
                renderLabel={(item) => tf(item, 'title')}
                renderDetail={(item) => (
                    <div className="project-detail">
                        {item.img && (
                            <CyberImage
                                src={item.img}
                                alt={tf(item, 'title')}
                                className="project-detail-img"
                            />
                        )}

                        <h2 className="detail-title">{tf(item, 'title')}</h2>
                        <div className="detail-tech">{t.projects.stack}: {item.tech}</div>
                        <p className="detail-desc">{tf(item, 'desc')}</p>

                        <div className="project-detail-links">
                            {item.repo && (
                                <CyberButton
                                    onClick={() => window.open(item.repo, '_blank', 'noopener,noreferrer')}
                                >
                                    <FaGithub size={20} />
                                </CyberButton>
                            )}
                            {item.demo && (
                                <CyberButton
                                    onClick={() => window.open(item.demo, '_blank', 'noopener,noreferrer')}
                                >
                                    {t.projects.demo}
                                </CyberButton>
                            )}
                        </div>
                    </div>
                )}
            />

            <BackButton />
        </motion.div>
    );
}

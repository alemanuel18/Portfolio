import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import BackButton from '../../components/BackButton/BackButton';
import LoadingScreen from '../../components/LoadingScreen/LoadingScreen';
import CyberSplitPanel from '../../components/CyberSplitPanel/CyberSplitPanel';
import TechCarousel from '../../components/TechCarousel/TechCarousel';
import { useCyber } from '../../context/CyberContext';
import { useCyberSound } from '../../hooks/useCyberSound';
import './Technologies.css';

export default function Technologies() {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    const [expanded, setExpanded] = useState(null);
    const { fetchCyberData } = useCyber();
    const { playNavigare, playHover, playInOption } = useCyberSound();

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

    const handleToggle = (id) => {
        playInOption();
        setExpanded(prev => prev === id ? null : id);
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
            <CyberSplitPanel
                leftClipPath="polygon(15% 0, 100% 0, 85% 100%, 0 100%)"
                leftContent={<TechCarousel items={data} />}
                rightContent={
                    <>
                        <h1 className="tech-title">TECNOLOGÍAS</h1>

                        <div className="tech-meta">
                            {data.map((tech, index) => (
                                <motion.div
                                    key={tech.id}
                                    className={`tech-item ${expanded === tech.id ? 'tech-item--open' : ''}`}
                                    onMouseEnter={playHover}
                                    onClick={() => handleToggle(tech.id)}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0, transition: { delay: index * 0.07 } }}
                                >
                                    {/* Cabecera siempre visible */}
                                    <div className="tech-item-header">
                                        <span className="tech-item-name">{tech.name}</span>
                                        <div className="tech-item-right">
                                            <span className="tech-status">[{tech.level}]</span>
                                            <span className="tech-item-chevron">
                                                {expanded === tech.id ? '▲' : '▼'}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Detalle expandible: why + how */}
                                    <AnimatePresence>
                                        {expanded === tech.id && (
                                            <motion.div
                                                className="tech-item-detail"
                                                initial={{ opacity: 0, height: 0 }}
                                                animate={{ opacity: 1, height: 'auto' }}
                                                exit={{ opacity: 0, height: 0 }}
                                                transition={{ duration: 0.25 }}
                                            >
                                                {tech.why && (
                                                    <div className="tech-detail-block">
                                                        <span className="tech-detail-label">POR QUÉ</span>
                                                        <p>{tech.why}</p>
                                                    </div>
                                                )}
                                                {tech.how && (
                                                    <div className="tech-detail-block">
                                                        <span className="tech-detail-label">CÓMO LO USÉ</span>
                                                        <p>{tech.how}</p>
                                                    </div>
                                                )}
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </motion.div>
                            ))}
                        </div>
                    </>
                }
            />

            <BackButton />
        </motion.div>
    );
}

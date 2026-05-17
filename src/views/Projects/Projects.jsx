import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import BackButton from '../../components/BackButton/BackButton';
import LoadingScreen from '../../components/LoadingScreen/LoadingScreen';
import MagazineLayout from '../../components/MagazineLayout/MagazineLayout';
import { FaGithub } from 'react-icons/fa';
import CyberImage from '../../components/CyberImage/CyberImage';
import CyberButton from '../../components/CyberButton/CyberButton';
import { useCyber } from '../../context/CyberContext';
import { useCyberSound } from '../../hooks/useCyberSound';
import './Projects.css';

export default function Projects() {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    const [selected, setSelected] = useState(null);
    const { fetchCyberData } = useCyber();
    const { playNavigare } = useCyberSound();

    useEffect(() => {
        playNavigare();
        fetchCyberData('projects').then(res => {
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
            className="projects-view"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
        >
            <MagazineLayout
                title="PROYECTOS"
                items={data}
                selected={selected}
                onSelect={setSelected}
                renderLabel={(item) => item.title}
                renderDetail={(item) => (
                    <div className="project-detail">
                        {/* Logo / imagen del proyecto */}
                        {item.img && (
                            <CyberImage
                                src={item.img}
                                alt={item.title}
                                className="project-detail-img"
                            />
                        )}

                        <h2 className="detail-title">{item.title}</h2>
                        <div className="detail-tech">STACK: {item.tech}</div>
                        <p className="detail-desc">{item.desc}</p>

                        {/* Botones de navegación al proyecto */}
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
                                    [ VER DEMO ]
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

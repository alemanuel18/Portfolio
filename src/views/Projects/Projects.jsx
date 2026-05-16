import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import BackButton from '../../components/BackButton/BackButton';
import LoadingScreen from '../../components/LoadingScreen/LoadingScreen';
import { useCyber } from '../../context/CyberContext';
import { useCyberSound } from '../../hooks/useCyberSound';
import './Projects.css';

export default function Projects({ backToMenu }) {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    const [selectedProject, setSelectedProject] = useState(null);
    const { fetchCyberData } = useCyber();
    const { playNavigare, playHover, playInOption } = useCyberSound();

    useEffect(() => {
        playNavigare();
        fetchCyberData('projects').then(res => {
            setData(res);
            setLoading(false);
        });
    }, []);

    const handleSelect = (project) => {
        playInOption();
        setSelectedProject(project);
    };

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
            <div className="projects-left">
                <h1 className="projects-title">MAGAZINES</h1>
                <div className="magazines-grid">
                    {data.map((item, index) => (
                        <motion.div
                            key={item.id}
                            className={`magazine-card ${selectedProject?.id === item.id ? 'active' : ''}`}
                            onMouseEnter={playHover}
                            onClick={() => handleSelect(item)}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0, transition: { delay: index * 0.1 } }}
                        >
                            <span className="magazine-title">{item.title}</span>
                        </motion.div>
                    ))}
                </div>
            </div>

            <div className="projects-right">
                <AnimatePresence mode="wait">
                    {selectedProject ? (
                        <motion.div
                            key={selectedProject.id}
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -50 }}
                            transition={{ duration: 0.3 }}
                        >
                            <h2 className="detail-title">{selectedProject.title}</h2>
                            <div className="detail-tech">STACK: {selectedProject.tech}</div>
                            <div className="detail-desc">{selectedProject.desc}</div>
                        </motion.div>
                    ) : (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                        >
                            <div className="detail-title" style={{ opacity: 0.3 }}>SELECT A FILE</div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            <BackButton onClick={backToMenu} />
        </motion.div>
    );
}

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import BackButton from '../../components/BackButton/BackButton';
import LoadingScreen from '../../components/LoadingScreen/LoadingScreen';
import { useCyber } from '../../context/CyberContext';
import { useCyberSound } from '../../hooks/useCyberSound';
import './Courses.css';

export default function Courses() {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    const [selectedCourse, setSelectedCourse] = useState(null);
    const { fetchCyberData } = useCyber();
    const { playNavigare, playHover, playInOption } = useCyberSound();

    useEffect(() => {
        playNavigare();
        fetchCyberData('courses').then(res => {
            setData(res);
            setLoading(false);
        });
    }, []);

    const handleSelect = (course) => {
        playInOption();
        setSelectedCourse(course);
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
                            className={`magazine-card ${selectedCourse?.id === item.id ? 'active' : ''}`}
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
                    {selectedCourse ? (
                        <motion.div
                            key={selectedCourse.id}
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -50 }}
                            transition={{ duration: 0.3 }}
                        >
                            <h2 className="detail-title">{selectedCourse.title}</h2>
                            <div className="detail-tech">STACK: {selectedCourse.tech}</div>
                            <div className="detail-desc">{selectedCourse.desc}</div>
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

            <BackButton />
        </motion.div>
    );
}

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import BackButton from '../../components/BackButton/BackButton';
import LoadingScreen from '../../components/LoadingScreen/LoadingScreen';
import MagazineLayout from '../../components/MagazineLayout/MagazineLayout';
import CyberImage from '../../components/CyberImage/CyberImage';
import { useCyber } from '../../context/CyberContext';
import { useCyberSound } from '../../hooks/useCyberSound';
import './Courses.css';

export default function Courses() {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    const [selected, setSelected] = useState(null);
    const { fetchCyberData } = useCyber();
    const { playNavigare } = useCyberSound();

    useEffect(() => {
        playNavigare();
        fetchCyberData('courses').then(res => {
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
            className="courses-view"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
        >
            <MagazineLayout
                title="CURSOS"
                items={data}
                selected={selected}
                onSelect={setSelected}
                renderLabel={(item) => item.title}
                renderDetail={(item) => (
                    <div className="course-detail">
                        <h2 className="detail-title">{item.title}</h2>
                        <div className="detail-platform">PLATAFORMA: {item.platform}</div>
                        <p className="detail-desc">{item.desc}</p>

                        {/* Imagen del diploma / certificado */}
                        {item.img && (
                            <CyberImage
                                src={item.img}
                                alt={`Diploma de ${item.title}`}
                                className="diploma-img"
                            />
                        )}
                    </div>
                )}
            />

            <BackButton />
        </motion.div>
    );
}

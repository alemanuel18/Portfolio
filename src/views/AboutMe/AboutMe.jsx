import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';
import BackButton from '../../components/BackButton/BackButton';
import { useCyber } from '../../context/CyberContext';
import LoadingScreen from '../../components/LoadingScreen/LoadingScreen';
import CyberButton from '../../components/CyberButton/CyberButton';
import './AboutMe.css';

export default function AboutMe() {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState(null);
    const { fetchCyberData } = useCyber();

    useEffect(() => {
        fetchCyberData('aboutme').then(res => {
            setData(res[0]);
            setLoading(false);
        });
    }, []);

    const contacts = [
        {
            label: 'LinkedIn',
            icon: <FaLinkedin size={20} />,
            href: 'https://www.linkedin.com/in/alejandro-manuel-jerez-melgar-735836289/',
        },
        {
            label: 'Gmail',
            icon: <SiGmail size={20} />,
            href: 'mailto:alemanuelj5@gmail.com?subject=Contacto desde portfolio&body=Hola Alejandro,',
        },
        {
            label: 'GitHub',
            icon: <FaGithub size={20} />,
            href: 'https://github.com/alemanuel18',
        }
    ];

    const handleContact = (contact) => {
        window.open(contact.href, '_blank', 'noopener,noreferrer');
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.8, staggerChildren: 0.2 } },
        exit: { opacity: 0, x: 50, transition: { duration: 0.3 } }
    };

    const leftVariants = {
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
    };

    const rightVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
    };

    if (loading) return <LoadingScreen />;

    return (
        <motion.div
            className="about-me"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
        >
            <div className="about-split">
                <motion.div className="about-left" variants={leftVariants}>
                    <div className="profile-pic-container">
                        <div className="profile-filter"></div>
                        <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: '2rem' }}>
                            [ IMAGE SIGNAL LOST ]
                        </div>
                    </div>
                </motion.div>

                <motion.div className="about-right" variants={rightVariants}>
                    <h1 className="about-title">{data.name}</h1>

                    <div className="about-meta">
                        <span><strong>DESARROLLADOR:</strong> {data.developer}</span>
                        <span><strong>STATUS:</strong> {data.status}</span>
                        <span><strong>ESPECIALIDAD:</strong> {data.especialidad}</span>
                    </div>

                    <div className="about-contacts">
                        {contacts.map((contact) => (
                            <CyberButton
                                key={contact.label}
                                onClick={() => handleContact(contact)}
                            >
                                {contact.icon}
                            </CyberButton>
                        ))}
                    </div>

                    <div className="about-bio">
                        <p>{data.description}</p>
                    </div>
                </motion.div>
            </div>

            <BackButton />
        </motion.div>
    );
}
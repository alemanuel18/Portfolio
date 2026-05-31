import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';
import BackButton from '../../components/BackButton/BackButton';
import LoadingScreen from '../../components/LoadingScreen/LoadingScreen';
import CyberButton from '../../components/CyberButton/CyberButton';
import CyberSplitPanel from '../../components/CyberSplitPanel/CyberSplitPanel';
import { useCyber } from '../../hooks/useCyber';
import { useTranslate } from '../../hooks/useTranslate';
import './AboutMe.css';

export default function AboutMe() {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState(null);
    const { fetchCyberData, t } = useCyber();
    const tf = useTranslate();

    useEffect(() => {
        fetchCyberData('aboutme').then(res => {
            setData(res[0]);
            setLoading(false);
        });
    }, [fetchCyberData]);

    const contacts = [
        { label: 'LinkedIn', icon: <FaLinkedin size={20} />, href: 'http://www.linkedin.com/in/alejandro-jerez-' },
        { label: 'Gmail',    icon: <SiGmail    size={20} />, href: 'mailto:alemanuelj5@gmail.com?subject=Contacto desde portfolio&body=Hola Alejandro,' },
        { label: 'GitHub',   icon: <FaGithub   size={20} />, href: 'https://github.com/alemanuel18' }
    ];

    if (loading) return <LoadingScreen />;

    return (
        <motion.div
            className="about-me"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.8, staggerChildren: 0.2 } }}
            exit={{ opacity: 0, x: 50, transition: { duration: 0.3 } }}
        >
            <CyberSplitPanel
                leftClipPath="polygon(0 0, 100% 0, 85% 100%, 0 100%)"
                leftContent={
                    <div className="profile-placeholder"></div>
                }
                rightContent={
                    <>
                        <h1 className="about-title">{data.name}</h1>

                        <div className="about-meta">
                            <span><strong>{t.aboutme.developer}:</strong> {tf(data, 'developer')}</span>
                            <span><strong>{t.aboutme.status}:</strong> {data.status}</span>
                            <span><strong>{t.aboutme.specialty}:</strong> {tf(data, 'especialidad')}</span>
                        </div>

                        <div className="about-contacts">
                            {contacts.map((contact) => (
                                <CyberButton
                                    key={contact.label}
                                    onClick={() => window.open(contact.href, '_blank', 'noopener,noreferrer')}
                                >
                                    {contact.icon}
                                </CyberButton>
                            ))}
                        </div>

                        <div className="about-bio">
                            <p>{tf(data, 'description')}</p>
                        </div>
                    </>
                }
            />

            <BackButton />
        </motion.div>
    );
}

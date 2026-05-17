import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';
import BackButton from '../../components/BackButton/BackButton';
import CyberButton from '../../components/CyberButton/CyberButton';
import './AboutMe.css';

export default function AboutMe() {
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

    const contacts = [
        {
            label: 'LinkedIn',
            icon: <FaLinkedin size={20} />,
            href: 'https://www.linkedin.com/in/alejandro-manuel-jerez-melgar-735836289/',
            title: 'Ver perfil de LinkedIn'
        },
        {
            label: 'Gmail',
            icon: <SiGmail size={20} />,
            href: 'mailto:alemanuelj5@gmail.com?subject=Contacto desde portfolio&body=Hola Alejandro,',
            title: 'Enviar correo'
        },
        {
            label: 'GitHub',
            icon: <FaGithub size={20} />,
            href: 'https://github.com/alemanuel18',
            title: 'Ver perfil de GitHub'
        }
    ];

    const handleContact = (contact) => {
        window.open(contact.href, '_blank', 'noopener,noreferrer');
    };


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
                    <h1 className="about-title">ALEJANDRO JEREZ</h1>

                    <div className="about-meta">
                        <span><strong>DESARROLLADOR:</strong> WEB FULL-STACK</span>
                        <span><strong>STATUS:</strong> JUNIOR</span>
                        <span><strong>ESPECIALIDAD:</strong> FRONTEND & UI/UX</span>
                    </div>

                    <div className="about-contacts">
                        {contacts.map((contact) => (
                            <CyberButton
                                key={contact.label}
                                title={contact.label}
                                onClick={() => handleContact(contact)}
                            >
                                <span className="contact-btn-inner">
                                    {contact.icon}
                                </span>
                            </CyberButton>
                        ))}
                    </div>

                    <div className="about-bio">
                        <p>
                            Desarrollador FULL-STACK, especializado en interfaces dinámicas y experiencias de usuario inmersivas.
                            Especializado en React, HTML, CSS, JavaScript, TypeScript y diseño moderno.
                        </p>
                    </div>
                </motion.div>
            </div>

            <BackButton />
        </motion.div>
    );
}

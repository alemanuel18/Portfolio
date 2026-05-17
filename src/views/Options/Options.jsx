import { motion } from 'framer-motion';
import BackButton from '../../components/BackButton/BackButton';
import { useCyber } from '../../context/CyberContext';
import { useCyberSound } from '../../hooks/useCyberSound';
import CyberButton from '../../components/CyberButton/CyberButton';
import './Options.css';
import { useEffect } from 'react';

export default function Options() {
    const { lang, setLang, volume, setVolume, t } = useCyber();
    const { playOpenPortfolio, playInOption } = useCyberSound();

    useEffect(() => {
        playOpenPortfolio();
    }, []);

    const containerVariants = {
        hidden: { opacity: 0, scale: 0.95 },
        visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
        exit: { opacity: 0, scale: 0.95, transition: { duration: 0.3 } }
    };

    const handleLangChange = (newLang) => {
        if (lang !== newLang) {
            playInOption();
            setLang(newLang);
        }
    };

    const handleVolumeChange = (e) => {
        setVolume(parseFloat(e.target.value));
    };

    return (
        <motion.div
            className="options-view"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
        >
            <div className="options-container">
                <h1 className="options-title">{t.options.title}</h1>

                <div className="option-group">
                    <span className="option-label">{t.options.volume}</span>
                    <input
                        type="range"
                        min="0"
                        max="1"
                        step="0.1"
                        value={volume}
                        onChange={handleVolumeChange}
                        onMouseUp={() => playInOption()}
                        className="cyber-slider"
                    />
                </div>

                <div className="option-group">
                    <span className="option-label">{t.options.lang}</span>
                    <div className="lang-toggle">
                        <CyberButton
                            active={lang === 'es'}
                            onClick={() => handleLangChange('es')}
                        >
                            ES
                        </CyberButton>
                        <CyberButton
                            active={lang === 'en'}
                            onClick={() => handleLangChange('en')}
                        >
                            EN
                        </CyberButton>
                    </div>
                </div>
            </div>

            <BackButton />
        </motion.div>
    );
}
import { motion } from 'framer-motion';
import BackButton from '../../components/BackButton/BackButton';
import { useCyber } from '../../context/CyberContext';
import { useCyberSound } from '../../hooks/useCyberSound';
import './Options.css';
import { useEffect } from 'react';

export default function Options() {
    const { lang, setLang, volume, setVolume, t } = useCyber();
    const { playNavigare, playHover, playInOption } = useCyberSound();

    useEffect(() => {
        playNavigare();
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
                        onMouseUp={() => playInOption()} // Test sound when releasing slider
                        className="cyber-slider"
                    />
                </div>

                <div className="option-group">
                    <span className="option-label">{t.options.lang}</span>
                    <div className="lang-toggle">
                        <button
                            className={`lang-btn ${lang === 'es' ? 'active' : ''}`}
                            onClick={() => handleLangChange('es')}
                            onMouseEnter={playHover}
                        >
                            ES
                        </button>
                        <button
                            className={`lang-btn ${lang === 'en' ? 'active' : ''}`}
                            onClick={() => handleLangChange('en')}
                            onMouseEnter={playHover}
                        >
                            EN
                        </button>
                    </div>
                </div>
            </div>

            <BackButton />
        </motion.div>
    );
}

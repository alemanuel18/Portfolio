import { motion } from 'framer-motion';
import BackButton from '../../components/BackButton/BackButton';
import { useCyber } from '../../hooks/useCyber';
import { useCyberSound } from '../../hooks/useCyberSound';
import CyberButton from '../../components/CyberButton/CyberButton';
import './Options.css';

export default function Options() {
    const { lang, setLang, volume, setVolume, visualPerformance, setVisualPerformance, t } = useCyber();
    const { playInOption } = useCyberSound();


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

    const handlePerformanceChange = (mode) => {
        if (visualPerformance !== mode) {
            playInOption();
            setVisualPerformance(mode);
        }
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

                <div className="option-group">
                    <span className="option-label">{t.options.performance}</span>
                    <div className="performance-toggle">
                        <CyberButton
                            active={visualPerformance === 'auto'}
                            onClick={() => handlePerformanceChange('auto')}
                        >
                            {t.options.performanceAuto}
                        </CyberButton>
                        <CyberButton
                            active={visualPerformance === 'high'}
                            onClick={() => handlePerformanceChange('high')}
                        >
                            {t.options.performanceHigh}
                        </CyberButton>
                        <CyberButton
                            active={visualPerformance === 'low'}
                            onClick={() => handlePerformanceChange('low')}
                        >
                            {t.options.performanceLow}
                        </CyberButton>
                    </div>
                </div>
            </div>

            <BackButton />
        </motion.div>
    );
}

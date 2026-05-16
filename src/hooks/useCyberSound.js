import { useRef, useEffect } from 'react';
import { useCyber } from '../context/CyberContext';

export function useCyberSound() {
    const { volume } = useCyber();

    const hoverAudioRef = useRef(new Audio('../../public/audio/interaccion/hobber/hobber.wav'));
    const inOptionAudioRef = useRef(new Audio('../../public/audio/interaccion/inOption/inOption.wav'));
    const navigareAudioRef = useRef(new Audio('../../public/audio/interaccion/navigare/navigare.wav'));
    const openPortfolioAudioRef = useRef(new Audio('../../public/audio/interaccion/openPortfolio/openPortfolio.wav'));
    const outOptionAudioRef = useRef(new Audio('../../public/audio/interaccion/outOption/outOption.wav'));

    useEffect(() => {
        hoverAudioRef.current.volume = volume * 0.5;
        inOptionAudioRef.current.volume = volume;
        navigareAudioRef.current.volume = volume * 0.8;
        openPortfolioAudioRef.current.volume = volume;
        outOptionAudioRef.current.volume = volume;
    }, [volume]);

    const playSound = (audioRef) => {
        if (audioRef && audioRef.current) {
            audioRef.current.currentTime = 0;
            audioRef.current.play().catch(() => { });
        }
    };

    return {
        playHover: () => playSound(hoverAudioRef),
        playInOption: () => playSound(inOptionAudioRef),
        playNavigare: () => playSound(navigareAudioRef),
        playOpenPortfolio: () => playSound(openPortfolioAudioRef),
        playOutOption: () => playSound(outOptionAudioRef),
    };
}
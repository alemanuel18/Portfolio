import { useCallback, useEffect, useMemo, useRef } from 'react';
import { useCyber } from './useCyber';

export function useCyberSound() {
    const { volume } = useCyber();

    const hoverAudioRef = useRef(new Audio('/audio/interaccion/hobber/hobber.ogg'));
    const inOptionAudioRef = useRef(new Audio('/audio/interaccion/inOption/inOption.ogg'));
    const navigareAudioRef = useRef(new Audio('/audio/interaccion/navigate/navigate.ogg'));
    const openPortfolioAudioRef = useRef(new Audio('/audio/interaccion/openPortfolio/openPortfolio.ogg'));
    const outOptionAudioRef = useRef(new Audio('/audio/interaccion/outOption/outOption.ogg'));

    useEffect(() => {
        hoverAudioRef.current.volume = volume * 0.5;
        inOptionAudioRef.current.volume = volume;
        navigareAudioRef.current.volume = volume * 0.8;
        openPortfolioAudioRef.current.volume = volume;
        outOptionAudioRef.current.volume = volume;
    }, [volume]);

    const playSound = useCallback((audioRef) => {
        if (audioRef && audioRef.current) {
            audioRef.current.currentTime = 0;
            audioRef.current.play().catch(() => { });
        }
    }, []);

    const playHover = useCallback(() => playSound(hoverAudioRef), [playSound]);
    const playInOption = useCallback(() => playSound(inOptionAudioRef), [playSound]);
    const playNavigare = useCallback(() => playSound(navigareAudioRef), [playSound]);
    const playOpenPortfolio = useCallback(() => playSound(openPortfolioAudioRef), [playSound]);
    const playOutOption = useCallback(() => playSound(outOptionAudioRef), [playSound]);

    return useMemo(() => ({
        playHover,
        playInOption,
        playNavigare,
        playOpenPortfolio,
        playOutOption,
    }), [playHover, playInOption, playNavigare, playOpenPortfolio, playOutOption]);
}

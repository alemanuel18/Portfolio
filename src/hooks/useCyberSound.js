import { useRef, useEffect } from 'react';
import { useCyber } from '../context/CyberContext';

export function useCyberSound() {
    const { volume } = useCyber();
    const hoverAudioRef = useRef(new Audio('/audio/ui-hover.mp3'));
    const selectAudioRef = useRef(new Audio('/audio/ui-select.mp3'));

    // Sincronizar el volumen del hardware de audio con el estado de React
    useEffect(() => {
        hoverAudioRef.current.volume = volume * 0.6; // Un poco más suave para el hover
        selectAudioRef.current.volume = volume;
    }, [volume]);

    const playHover = () => {
        hoverAudioRef.current.currentTime = 0;
        hoverAudioRef.current.play().catch(() => { });
    };

    const playSelect = () => {
        selectAudioRef.current.currentTime = 0;
        selectAudioRef.current.play().catch(() => { });
    };

    return { playHover, playSelect };
}
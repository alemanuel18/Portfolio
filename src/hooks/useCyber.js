import { useContext } from 'react';
import { CyberContext } from '../context/CyberContextValue';

export function useCyber() {
    return useContext(CyberContext);
}

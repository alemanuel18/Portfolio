import { createContext, useState, useContext } from 'react';

const CyberContext = createContext();

// Diccionario de traducciones al estilo CyberLife
const translations = {
    es: {
        menu: { story: "¿Quién soy?", chapters: "Experiencia", extras: "Cursos y Certificados", options: "Opciones" },
        options: { title: "CONFIGURACIÓN DE SISTEMA", volume: "VOLUMEN DE AUDIO", lang: "IDIOMA DE INTERFAZ", back: "VOLVER" },
        loading: "ANALIZANDO ARCHIVOS DE MEMORIA..."
    },
    en: {
        menu: { story: "Who am I?", chapters: "Experience", extras: "Courses & Certificates", options: "Options" },
        options: { title: "SYSTEM CONFIGURATION", volume: "AUDIO VOLUME", lang: "INTERFACE LANGUAGE", back: "BACK" },
        loading: "ANALYZING MEMORY FILES..."
    }
};

export function CyberProvider({ children }) {
    const [lang, setLang] = useState('es');
    const [volume, setVolume] = useState(0.5); // 50% por defecto

    const t = translations[lang]; // Atajo para obtener los textos activos

    return (
        <CyberContext.Provider value={{ lang, setLang, volume, setVolume, t }}>
            {children}
        </CyberContext.Provider>
    );
}

export const useCyber = () => useContext(CyberContext);
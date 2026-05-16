import { createContext, useState, useContext } from 'react';

const CyberContext = createContext();

// Diccionario de traducciones al estilo CyberLife
const translations = {
    es: {
        menu: { story: "¿Quién soy?", chapters: "Experiencia", studies: "Estudios", projects: "Proyectos", courses: "Cursos", technologies: "Tecnologías", options: "Opciones" },
        options: { title: "CONFIGURACIÓN DE SISTEMA", volume: "VOLUMEN DE AUDIO", lang: "IDIOMA DE INTERFAZ", back: "VOLVER" },
        loading: "ANALIZANDO ARCHIVOS DE MEMORIA..."
    },
    en: {
        menu: { story: "Who am I?", chapters: "Experience", studies: "Studies", projects: "Projects", courses: "Courses", technologies: "Technologies", options: "Options" },
        options: { title: "SYSTEM CONFIGURATION", volume: "AUDIO VOLUME", lang: "INTERFACE LANGUAGE", back: "BACK" },
        loading: "ANALYZING MEMORY FILES..."
    }
};

export function CyberProvider({ children }) {
    const [lang, setLang] = useState('es');
    const [volume, setVolume] = useState(0.5); // 50% por defecto

    const t = translations[lang]; // Atajo para obtener los textos activos

    // Simulación de carga de datos desde CyberLife Servers
    const fetchCyberData = async (key) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                // mock data
                const mockData = {
                    projects: [
                        { id: 1, title: 'Project Eden', tech: 'React, Node, MongoDB', desc: 'A cybernetic garden for androids.' },
                        { id: 2, title: 'Kamski Protocol', tech: 'Python, AI, TensorFlow', desc: 'Emergency override system designed by Elijah Kamski.' }
                    ],
                    experience: [
                        { id: 1, role: 'Junior Dev', year: '2022' },
                        { id: 2, role: 'Senior Android', year: '2038' }
                    ],
                    studies: [
                        { id: 1, degree: 'Computer Science', year: '2020 - 2024' },
                        { id: 2, degree: 'Cybernetics Specialization', year: '2025' }
                    ],
                    technologies: [
                        { id: 1, name: 'React (Vite)', level: 'OPTIMAL' },
                        { id: 2, name: 'TypeScript', level: 'STABLE' },
                        { id: 3, name: 'Node.js', level: 'OPTIMAL' },
                        { id: 4, name: 'PostgreSQL', level: 'NOMINAL' }
                    ]
                };
                resolve(mockData[key] || []);
            }, 1200); // 1.2s delay as requested
        });
    };

    return (
        <CyberContext.Provider value={{ lang, setLang, volume, setVolume, t, fetchCyberData }}>
            {children}
        </CyberContext.Provider>
    );
}

export const useCyber = () => useContext(CyberContext);
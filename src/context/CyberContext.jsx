import { createContext, useState, useContext } from 'react';
import { fetchCyberData } from '../services/dataService';

const CyberContext = createContext();

const translations = {
    es: {
        // ── Menú principal ──────────────────────────────
        menu: {
            story:        '¿Quién soy?',
            chapters:     'Experiencia',
            studies:      'Estudios',
            projects:     'Proyectos',
            courses:      'Cursos',
            technologies: 'Tecnologías',
            options:      'Opciones',
        },
        // ── Opciones / Config ───────────────────────────
        options: {
            title:  'CONFIGURACIÓN DE SISTEMA',
            volume: 'VOLUMEN DE AUDIO',
            lang:   'IDIOMA DE INTERFAZ',
            performance: 'RENDIMIENTO VISUAL',
            performanceAuto: 'AUTO',
            performanceHigh: 'ALTO',
            performanceLow: 'LIGERO',
            back:   'VOLVER',
        },
        // ── Loading ─────────────────────────────────────
        loading: 'ANALIZANDO ARCHIVOS DE MEMORIA...',
        // ── Botón de regreso ────────────────────────────
        back: 'VOLVER',
        // ── AboutMe ─────────────────────────────────────
        aboutme: {
            developer:    'DESARROLLADOR',
            status:       'STATUS',
            specialty:    'ESPECIALIDAD',
            contacts:     'CONTACTO',
        },
        // ── Experiencia / Estudios ───────────────────────
        experience: { title: 'EXPERIENCIA' },
        studies:    { title: 'ESTUDIOS' },
        // ── Proyectos ───────────────────────────────────
        projects: {
            title:      'PROYECTOS',
            stack:      'STACK',
            repo:       '[ REPOSITORIO ]',
            demo:       '[ VER DEMO ]',
            selectFile: 'SELECCIONA UN ARCHIVO',
        },
        // ── Cursos ──────────────────────────────────────
        courses: {
            title:      'CURSOS',
            platform:   'PLATAFORMA',
            diploma:    '[ VER DIPLOMA ]',
            selectFile: 'SELECCIONA UN ARCHIVO',
        },
        // ── Tecnologías ─────────────────────────────────
        technologies: {
            title:  'TECNOLOGÍAS',
            why:    'POR QUÉ',
            how:    'CÓMO LO USÉ',
        },
    },

    en: {
        // ── Main menu ───────────────────────────────────
        menu: {
            story:        'Who am I?',
            chapters:     'Experience',
            studies:      'Studies',
            projects:     'Projects',
            courses:      'Courses',
            technologies: 'Technologies',
            options:      'Options',
        },
        // ── Options / Config ────────────────────────────
        options: {
            title:  'SYSTEM CONFIGURATION',
            volume: 'AUDIO VOLUME',
            lang:   'INTERFACE LANGUAGE',
            performance: 'VISUAL PERFORMANCE',
            performanceAuto: 'AUTO',
            performanceHigh: 'HIGH',
            performanceLow: 'LIGHT',
            back:   'BACK',
        },
        // ── Loading ─────────────────────────────────────
        loading: 'ANALYZING MEMORY FILES...',
        // ── Back button ─────────────────────────────────
        back: 'BACK',
        // ── AboutMe ─────────────────────────────────────
        aboutme: {
            developer: 'DEVELOPER',
            status:    'STATUS',
            specialty: 'SPECIALTY',
            contacts:  'CONTACT',
        },
        // ── Experience / Studies ─────────────────────────
        experience: { title: 'EXPERIENCE' },
        studies:    { title: 'STUDIES' },
        // ── Projects ────────────────────────────────────
        projects: {
            title:      'PROJECTS',
            stack:      'STACK',
            repo:       '[ REPOSITORY ]',
            demo:       '[ LIVE DEMO ]',
            selectFile: 'SELECT A FILE',
        },
        // ── Courses ─────────────────────────────────────
        courses: {
            title:      'COURSES',
            platform:   'PLATFORM',
            diploma:    '[ VIEW DIPLOMA ]',
            selectFile: 'SELECT A FILE',
        },
        // ── Technologies ─────────────────────────────────
        technologies: {
            title: 'TECHNOLOGIES',
            why:   'WHY',
            how:   'HOW I USED IT',
        },
    },
};

export function CyberProvider({ children }) {
    const [lang, setLang] = useState('es');
    const [volume, setVolume] = useState(0.5);
    const [visualPerformance, setVisualPerformance] = useState('auto');

    const t = translations[lang];

    return (
        <CyberContext.Provider value={{ lang, setLang, volume, setVolume, visualPerformance, setVisualPerformance, t, fetchCyberData }}>
            {children}
        </CyberContext.Provider>
    );
}

export const useCyber = () => useContext(CyberContext);

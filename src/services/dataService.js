// Datos simulados de los servidores de CyberLife
const mockData = {
    aboutme: [
        { id: 1, name: 'ALEJANDRO JEREZ', developer: 'WEB FULL-STACK', status: 'JUNIOR', especialidad: 'FRONTEND & UI/UX', description: 'Desarrollador FULL-STACK, especializado en interfaces dinámicas y experiencias de usuario inmersivas. Especializado en React, HTML, CSS, JavaScript, TypeScript y diseño moderno.', img: '/image/aboutme/about0.webp' }
    ],
    projects: [
        { id: 1, title: 'Project Eden', tech: 'React, Node, MongoDB', desc: 'A cybernetic garden for androids.' },
        { id: 2, title: 'Kamski Protocol', tech: 'Python, AI, TensorFlow', desc: 'Emergency override system designed by Elijah Kamski.' }
    ],
    experience: [
        { id: 1, role: 'Técnico de Soporte TI', company: 'Procuraduría De Los Derechos Humanos', year: '2023', img: '/image/experience/exp1.png', desc: 'Técnico de TI, encargado de dar soporte y preparar hardware y software, para los trabajadores de la institución.' },
        { id: 2, role: 'Maker Assistant', company: 'Universidad del Valle de Guatemala', year: '2025 - Presente', img: '/image/studies/studies2.png', desc: 'Makerspace D-Hive: Maker Assistant encargado del uso y mantenimiento de impresoras 3D Ultimaker, Bambu Lab y Elegoo; cortadora láser y de vinilo.' },
        { id: 3, role: 'Catedrático Auxiliar', company: 'Universidad del Valle de Guatemala', year: '2026 - Presente', img: '/image/studies/studies2.png', desc: 'Departamento de Ingeniería en Ciencias de la Computación y TI: Auxiliar de laboratorio del curso de Algoritmos y Estructura de Datos.' }
    ],
    studies: [
        { id: 1, degree: 'Bachillerato en Ciencias y Letras con Orientación en Computación', institution: 'Colegio Loyola', year: '2019 - 2023', img: '/image/studies/studies1.png', desc: 'Estudios básico y diversificado.' },
        { id: 2, degree: 'Ingeniería en Ciencias de la Computación y TI', institution: 'Universidad del Valle de Guatemala', year: '2024 - Presente', img: '/image/studies/studies2.png', desc: 'Estudiante de Tercer Año con beca parcial por parte de la universidad. Reconocimiento académico en los primeros dos años de estudio.' }
    ],
    courses: [
        { id: 1, title: 'Advanced UI/UX', platform: 'CyberLife Academy', desc: 'Design of empathetic interfaces.', img: 'https://via.placeholder.com/400x300?text=UI/UX+Diploma' },
        { id: 2, title: 'Machine Learning', platform: 'Kamski Inst.', desc: 'Neural network optimizations.', img: 'https://via.placeholder.com/400x300?text=ML+Certificate' }
    ],
    technologies: [
        { id: 1, name: 'React (Vite)', level: 'OPTIMAL' },
        { id: 2, name: 'TypeScript', level: 'STABLE' },
        { id: 3, name: 'Node.js', level: 'OPTIMAL' },
        { id: 4, name: 'PostgreSQL', level: 'NOMINAL' }
    ]
};

// Simulación de carga asíncrona de datos
export const fetchCyberData = async (key) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(mockData[key] || []);
        }, 2000); // 1.2s delay as requested
    });
};

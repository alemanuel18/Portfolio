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
        { id: 1, role: 'Junior Dev', company: 'Mi Empresa', year: '2022 - 2023', img: '/image/experience/exp1.png', desc: 'Desarrollo de interfaces web con React y Node.js. Participación en sprints ágiles y code reviews.' },
        { id: 2, role: 'Senior Android', company: 'CyberLife Corp.', year: '2038 - Presente', img: '/image/studies/study2.png', desc: 'Diseño y construcción de androides con IA avanzada. Especialización en empatía artificial.' }
    ],
    studies: [
        { id: 1, degree: 'Computer Science', institution: 'Universidad de Guatemala', year: '2020 - 2024', img: '/image/studies/study1.png', desc: 'Carrera de Ciencias de la Computación. Énfasis en algoritmos, estructuras de datos y desarrollo de software.' },
        { id: 2, degree: 'Cybernetics Specialization', institution: 'CyberLife Academy', year: '2025', img: '/image/studies/study2.png', desc: 'Especialización en sistemas cibernéticos, redes neuronales y diseño de experiencias inmersivas.' }
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

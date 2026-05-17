// Datos simulados de los servidores de CyberLife
const mockData = {
    aboutme: [
        { id: 1, name: 'ALEJANDRO JEREZ', developer: 'WEB FULL-STACK', status: 'JUNIOR', especialidad: 'FRONTEND & UI/UX', description: 'Desarrollador FULL-STACK, especializado en interfaces dinámicas y experiencias de usuario inmersivas. Especializado en React, HTML, CSS, JavaScript, TypeScript y diseño moderno.' }
    ],
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

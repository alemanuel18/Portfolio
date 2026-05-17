// Datos simulados de los servidores de CyberLife
const mockData = {
    aboutme: [
        { id: 1, name: 'ALEJANDRO JEREZ', developer: 'WEB FULL-STACK', status: 'JUNIOR', especialidad: 'FRONTEND & UI/UX', description: 'Desarrollador FULL-STACK, especializado en interfaces dinámicas y experiencias de usuario inmersivas. Especializado en React, HTML, CSS, JavaScript, TypeScript y diseño moderno.', img: '/image/aboutme/about0.webp' }
    ],
    projects: [
        {
            id: 1,
            title: 'Project Eden',
            tech: 'React, Node, MongoDB',
            desc: 'A cybernetic garden for androids.',
            img: '/image/projects/project1.png',
            repo: 'https://github.com/alemanuel18/project-eden',
            demo: ''
        },
        {
            id: 2,
            title: 'Kamski Protocol',
            tech: 'Python, AI, TensorFlow',
            desc: 'Emergency override system designed by Elijah Kamski.',
            img: '/image/projects/project2.png',
            repo: 'https://github.com/alemanuel18/kamski-protocol',
            demo: 'https://kamski.vercel.app'
        }
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
        { id: 1, title: 'Curso de React.js', platform: 'Platzi', desc: 'Desarrolla aplicaciones web modernas con React. Crea componentes, maneja estado y eventos, aplica hooks, consume APIs, estiliza interfaces y usa TypeScript para mayor seguridad. Conoce las novedades de React 19.', img: '/image/courses/course6.jpg' },
        { id: 2, title: 'Curso Profesional de Git y GitHub', platform: 'Platzi', desc: 'Gestiona versiones, colabora en equipo y publica proyectos usando Git y GitHub. Controla ramas, pull requests, releases, seguridad y automatizaciones con herramientas clave de la industria.', img: 'image/courses/course1.jpg' },
        { id: 3, title: 'Curso de HTML', platform: 'Platzi', desc: 'Domina la estructura esencial de las páginas web con HTML. Aprende a escribir código limpio, jerarquizado y funcional. Comprende el rol de HTML en la web moderna y cómo su estructura impacta la accesibilidad, el SEO y la mantenibilidad del sitio.', img: '/image/courses/course2.jpg' },
        { id: 4, title: 'Reto de 30 Días De JS', platform: 'Platzi', desc: 'Durante 6 semanas continuas estaremos aprendiendo desde 0 las características de JavaScript con la peculiaridad de aprender conceptos nuevos diariamente con ejercicios prácticos y cursos de tus profesores favoritos. Te estaremos acompañando en todo tu proceso de diferentes maneras, empezando por un canal exclusivo en Discord para participantes de este reto, al igual que tendremos sesiones semanales de Q&amp;A para despejarte tus dudas o ayudarte con algo en lo que te encuentres estancado o estancada.', img: 'image/courses/course3.jpg' },
        { id: 5, title: 'Introducción a la Terminal y Línea de Comandos', platform: 'Platzi', desc: 'Aprende a utilizar la terminal y la línea de comandos para navegar tu sistema operativo, manipular archivos y directorios, comprender permisos y procesos, y usar herramientas como grep y curl. Integra alias y personaliza tu shell para optimizar tu flujo de trabajo.', img: '/image/courses/course7.jpg' },
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

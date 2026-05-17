// Datos simulados de los servidores de CyberLife
const mockData = {
    aboutme: [
        { id: 1, name: 'ALEJANDRO JEREZ', developer: 'WEB FULL-STACK', status: 'JUNIOR', especialidad: 'FRONTEND & UI/UX', description: 'Desarrollador FULL-STACK, especializado en interfaces dinámicas y experiencias de usuario inmersivas. Especializado en React, HTML, CSS, JavaScript, TypeScript y diseño moderno.', img: '/image/aboutme/about0.webp' }
    ],
    projects: [
        {
            id: 1,
            title: 'Swap - Frontend',
            tech: 'Next.js, TypeScript, CSS(BEM methodology), Zustand, React Hook Form, date-fns, Socker.io, Docker + Docker Compose',
            desc: 'Sistema de intercambios/venta de productos/servicios entre estudiantes.',
            repo: 'https://github.com/her24770/swap-frontend',
            demo: 'https://swap.jhgo.online/es/login'
        },
        {
            id: 2,
            title: 'Swap - Backend',
            tech: 'Node.js, Express.js, TypeScript, Socker.io, Zod, JSON Web Token, Prisma, PostgreSQL, Redis 7, Docker + Docker Compose',
            desc: 'Sistema de intercambios/venta de productos/servicios entre estudiantes.',
            repo: 'https://github.com/her24770/swap-backend',
            demo: 'https://swap.jhgo.online/es/login'
        },
        {
            id: 3,
            title: 'Portafolio_Detroid',
            tech: 'React + Vite, React Router, JavaScript, CSS, HTMl in Canvas, Docker + Docker Compose',
            desc: 'Portafolio personal, enfocado en las tecnologías utilizadas en la carrera de Ingeniería en Ciencias de la Computación y TI',
            repo: 'https://github.com/alemanuel18/Portfolio',
            demo: 'https://swap.jhgo.online/es/login'
        },
        {
            id: 4,
            title: 'Pokedex',
            tech: 'React + Vite, CSS, JavaScript, React Router, prop-types, PokéAPI, Docker + Docker Compose',
            desc: 'Ejercicio de React consultando la PokeAPI, para mostrar los pokemon de primera generación.',
            repo: 'https://github.com/alemanuel18/Ejercicio4_React_Pokedex',
            demo: 'https://swap.jhgo.online/es/login'
        },
        {
            id: 5,
            title: 'Calculadora',
            tech: 'React + Vite, TypeScript, CSS, Docker + Docker Compose',
            desc: 'Calculadora con operaciones basicas.',
            repo: 'https://github.com/alemanuel18/Lab7_Calculadora',
            demo: 'https://swap.jhgo.online/es/login'
        },
        {
            id: 6,
            title: 'Snake',
            tech: 'React + Vite,JavaScript, CSS, Docker + Docker Compose',
            desc: 'Videojuego de Snake.',
            repo: 'https://github.com/alemanuel18/Lab6_Snake',
            demo: 'https://swap.jhgo.online/es/login'
        },
        {
            id: 7,
            title: 'Sistema de Inventario y Ventas',
            tech: 'Node.js, MySQL, React + Vite, CSS, SQL, Docker + Docker Compose',
            desc: 'Sistema de inventario y ventas, para una tienda minorista, (La mejor rama es db/Proyecto-3).',
            repo: 'https://github.com/alemanuel18/Proyecto2_DB',
            demo: 'https://proyecto2db-production.up.railway.app/'
        },
        {
            id: 8,
            title: 'Tracked — Frontend',
            tech: 'HTML, CSS, JS vanilla, nginx, Docker + Docker Compose',
            desc: 'Este proyecto corresponde al frontend de un sistema para traquear las series que has visto.',
            repo: 'https://github.com/alemanuel18/Proyecto1_Full-Stack_Web_Frontend',
        },
        {
            id: 9,
            title: 'Tracked — Backend',
            tech: 'Go, PostgreSQL, API REST, Docker + Docker Compose',
            desc: 'Este proyecto corresponde al Backend de un sistema para traquear las series que has visto.',
            repo: 'https://github.com/alemanuel18/Proyecto1_Full-Stack_Web_Backend',
            demo: 'https://swap.jhgo.online/es/login'
        },
        {
            id: 10,
            title: 'Sistema de Recomendación de Profesores',
            tech: 'React, FastAPI',
            desc: 'Este proyecto corresponde al frontend de un sistema de recomendación de profesores universitarios, desarrollado con React y conectado a su respectivo backend utilizando FastAPI. Permite a los estudiantes recibir sugerencias personalizadas de profesores con base en criterios como experiencia, calificaciones y áreas de especialidad. ',
            repo: 'https://github.com/alemanuel18/Front-Profesor-Recommendation-System',
        },
        {
            id: 11,
            title: 'Sistema de Recomendación de Profesores - Backend',
            tech: 'Python, Neo4j',
            desc: 'Este proyecto corresponde al backend de un sistema de recomendación de profesores universitarios, desarrollado con Python y la librería Poetry para dependencias, además de que se conecta con una base de datos basada en grafos con la ayuda de Neo4J.',
            repo: 'https://github.com/MarceloDetlefsen/Back-Professor-Recommendation-System',
        },
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
        { id: 1, title: 'Curso de React.js', platform: 'Platzi', desc: 'Desarrolla aplicaciones web modernas con React. Crea componentes, maneja estado y eventos, aplica hooks, consume APIs, estiliza interfaces y usa TypeScript para mayor seguridad. Conoce las novedades de React 19.', link: '' },
        { id: 2, title: 'Curso Profesional de Git y GitHub', platform: 'Platzi', desc: 'Gestiona versiones, colabora en equipo y publica proyectos usando Git y GitHub. Controla ramas, pull requests, releases, seguridad y automatizaciones con herramientas clave de la industria.', link: '' },
        { id: 3, title: 'Curso de HTML', platform: 'Platzi', desc: 'Domina la estructura esencial de las páginas web con HTML. Aprende a escribir código limpio, jerarquizado y funcional. Comprende el rol de HTML en la web moderna y cómo su estructura impacta la accesibilidad, el SEO y la mantenibilidad del sitio.', link: '' },
        { id: 4, title: 'Reto de 30 Días De JS', platform: 'Platzi', desc: 'Durante 6 semanas continuas estaremos aprendiendo desde 0 las características de JavaScript con la peculiaridad de aprender conceptos nuevos diariamente con ejercicios prácticos y cursos de tus profesores favoritos.', link: '' },
        { id: 5, title: 'Introducción a la Terminal y Línea de Comandos', platform: 'Platzi', desc: 'Aprende a utilizar la terminal y la línea de comandos para navegar tu sistema operativo, manipular archivos y directorios, comprender permisos y procesos, y usar herramientas como grep y curl.', link: '' },
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

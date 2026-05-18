// Datos simulados de los servidores de CyberLife
const mockData = {
    aboutme: [
        { id: 1, name: 'ALEJANDRO JEREZ', developer: 'WEB FULL-STACK', status: 'JUNIOR', especialidad: 'FRONTEND & UI/UX', description: 'Desarrollador FULL-STACK, especializado en interfaces dinámicas y experiencias de usuario inmersivas. Especializado en React, HTML, CSS, JavaScript, TypeScript y UI/UX', img: '/image/aboutme/about0.webp' }
    ],
    projects: [
        {
            id: 1,
            title: 'Swap - Frontend',
            tech: 'Next.js, TypeScript, CSS (metodología BEM), Zustand, React Hook Form, date-fns, Socket.io, Docker + Docker Compose',
            desc: 'Sistema de intercambios y venta de productos/servicios entre estudiantes.',
            repo: 'https://github.com/her24770/swap-frontend',
            demo: 'https://swap.jhgo.online/es/login'
        },
        {
            id: 2,
            title: 'Swap - Backend',
            tech: 'Node.js, Express.js, TypeScript, Socket.io, Zod, JSON Web Token, Prisma, PostgreSQL, Redis 7, Docker + Docker Compose',
            desc: 'Sistema de intercambios y venta de productos/servicios entre estudiantes.',
            repo: 'https://github.com/her24770/swap-backend',
            demo: 'https://swap.jhgo.online/es/login'
        },
        {
            id: 3,
            title: 'Portafolio Detroit',
            tech: 'React + Vite, React Router, JavaScript, CSS, HTML in Canvas, Docker + Docker Compose',
            desc: 'Portafolio personal, enfocado en las tecnologías utilizadas en la carrera de Ingeniería en Ciencias de la Computación y TI.',
            repo: 'https://github.com/alemanuel18/Portfolio',
            demo: 'https://swap.jhgo.online/es/login'
        },
        {
            id: 4,
            title: 'Pokédex',
            tech: 'React + Vite, CSS, JavaScript, React Router, prop-types, PokéAPI, Docker + Docker Compose',
            desc: 'Ejercicio de React que consume la PokéAPI para mostrar los Pokémon de primera generación.',
            repo: 'https://github.com/alemanuel18/Ejercicio4_React_Pokedex',
            demo: 'https://swap.jhgo.online/es/login'
        },
        {
            id: 5,
            title: 'Calculadora',
            tech: 'React + Vite, TypeScript, CSS, Docker + Docker Compose',
            desc: 'Calculadora con operaciones básicas.',
            repo: 'https://github.com/alemanuel18/Lab7_Calculadora',
            demo: 'https://swap.jhgo.online/es/login'
        },
        {
            id: 6,
            title: 'Snake',
            tech: 'React + Vite, JavaScript, CSS, Docker + Docker Compose',
            desc: 'Videojuego de Snake.',
            repo: 'https://github.com/alemanuel18/Lab6_Snake',
            demo: 'https://swap.jhgo.online/es/login'
        },
        {
            id: 7,
            title: 'Sistema de Inventario y Ventas',
            tech: 'Node.js, MySQL, React + Vite, CSS, SQL, Docker + Docker Compose',
            desc: 'Sistema de inventario y ventas para una tienda minorista. (La mejor rama es db/Proyecto-3).',
            repo: 'https://github.com/alemanuel18/Proyecto2_DB',
            demo: 'https://proyecto2db-production.up.railway.app/'
        },
        {
            id: 8,
            title: 'Tracked — Frontend',
            tech: 'HTML, CSS, JS vanilla, Nginx, Docker + Docker Compose',
            desc: 'Frontend de un sistema para rastrear las series que has visto.',
            repo: 'https://github.com/alemanuel18/Proyecto1_Full-Stack_Web_Frontend',
        },
        {
            id: 9,
            title: 'Tracked — Backend',
            tech: 'Go, PostgreSQL, API REST, Docker + Docker Compose',
            desc: 'Backend de un sistema para rastrear las series que has visto.',
            repo: 'https://github.com/alemanuel18/Proyecto1_Full-Stack_Web_Backend',
            demo: 'https://swap.jhgo.online/es/login'
        },
        {
            id: 10,
            title: 'Sistema de Recomendación de Profesores',
            tech: 'React, FastAPI',
            desc: 'Frontend de un sistema de recomendación de profesores universitarios, desarrollado con React y conectado a su respectivo backend con FastAPI. Permite a los estudiantes recibir sugerencias personalizadas de profesores según experiencia, calificaciones y áreas de especialidad.',
            repo: 'https://github.com/alemanuel18/Front-Profesor-Recommendation-System',
        },
        {
            id: 11,
            title: 'Sistema de Recomendación de Profesores - Backend',
            tech: 'Python, Neo4j',
            desc: 'Backend de un sistema de recomendación de profesores universitarios, desarrollado con Python y Poetry para gestión de dependencias. Se conecta a una base de datos de grafos mediante Neo4j.',
            repo: 'https://github.com/MarceloDetlefsen/Back-Professor-Recommendation-System',
        },
    ],
    experience: [
        { id: 1, role: 'Técnico de Soporte TI', company: 'Procuraduría De Los Derechos Humanos', year: '2023', img: '/image/experience/exp1.png', desc: 'Técnico de TI encargado de dar soporte y preparar hardware y software para los trabajadores de la institución.' },
        { id: 2, role: 'Maker Assistant', company: 'Universidad del Valle de Guatemala', year: '2025 - Presente', img: '/image/studies/studies2.png', desc: 'Makerspace D-Hive: Maker Assistant encargado del uso y mantenimiento de impresoras 3D Ultimaker, Bambu Lab y Elegoo; cortadora láser y de vinilo.' },
        { id: 3, role: 'Catedrático Auxiliar', company: 'Universidad del Valle de Guatemala', year: '2026 - Presente', img: '/image/studies/studies2.png', desc: 'Departamento de Ingeniería en Ciencias de la Computación y TI: auxiliar de laboratorio del curso de Algoritmos y Estructura de Datos.' }
    ],
    studies: [
        { id: 1, degree: 'Bachillerato en Ciencias y Letras con Orientación en Computación', institution: 'Colegio Loyola', year: '2019 - 2023', img: '/image/studies/studies1.png', desc: 'Estudios básicos y diversificados.' },
        { id: 2, degree: 'Ingeniería en Ciencias de la Computación y TI', institution: 'Universidad del Valle de Guatemala', year: '2024 - Presente', img: '/image/studies/studies2.png', desc: 'Estudiante de tercer año con beca parcial por parte de la universidad. Reconocimiento académico en los primeros dos años de estudio.' }
    ],
    courses: [
        { id: 1, title: 'Curso de React.js', platform: 'Platzi', desc: 'Desarrolla aplicaciones web modernas con React. Crea componentes, maneja estado y eventos, aplica hooks, consume APIs, estiliza interfaces y usa TypeScript para mayor seguridad. Conoce las novedades de React 19.', link: 'https://platzi.com/p/alemanuelj17/curso/11887-course/diploma/detalle/' },
        { id: 2, title: 'Curso Profesional de Git y GitHub', platform: 'Platzi', desc: 'Gestiona versiones, colabora en equipo y publica proyectos usando Git y GitHub. Controla ramas, pull requests, releases, seguridad y automatizaciones con herramientas clave de la industria.', link: 'https://platzi.com/p/alemanuelj17/curso/1557-course/diploma/detalle/' },
        { id: 3, title: 'Curso de HTML', platform: 'Platzi', desc: 'Domina la estructura esencial de las páginas web con HTML. Aprende a escribir código limpio, jerarquizado y funcional. Comprende el rol de HTML en la web moderna y cómo su estructura impacta la accesibilidad, el SEO y la mantenibilidad del sitio.', link: 'https://platzi.com/p/alemanuelj17/curso/12341-course/diploma/detalle/' },
        { id: 4, title: 'Reto de 30 Días De JS', platform: 'Platzi', desc: 'Durante 6 semanas continuas aprenderás desde 0 las características de JavaScript, con ejercicios prácticos y conceptos nuevos diariamente.', link: 'https://platzi.com/p/alemanuelj17/curso/6636-course/diploma/detalle/' },
        { id: 5, title: 'Introducción a la Terminal y Línea de Comandos', platform: 'Platzi', desc: 'Aprende a utilizar la terminal y la línea de comandos para navegar tu sistema operativo, manipular archivos y directorios, comprender permisos y procesos, y usar herramientas como grep y curl.', link: 'https://platzi.com/p/alemanuelj17/curso/12040-course/diploma/detalle/' },
    ],
    technologies: [
        {
            id: 1, name: 'React (Vite)', level: 'OPTIMAL',
            why: 'React es una de las librerías de JavaScript más utilizadas, por lo que si tengo un error es casi seguro que a alguien más le ha pasado y hay información de sobra para solucionarlo. Además, el sistema de componentes hace que el código sea más fácil de mantener y reutilizar.',
            how: 'React ha sido la base de la mayoría de mis proyectos del lado del frontend, lo que me ha permitido crear interfaces interactivas, dinámicas y sobre todo escalables. Con el uso de Context, Hooks y componentes reutilizables, el código es más limpio y fácil de mantener.'
        },
        {
            id: 2, name: 'TypeScript', level: 'STABLE',
            why: 'TypeScript, a diferencia de JavaScript, cuenta con una herramienta muy poderosa: el tipado estático. Esto es muy útil durante la fase de desarrollo y despliegue, ya que si existe algún error con respecto a tipos de datos, este fallará durante la compilación.',
            how: 'TypeScript ha estado en pocos de mis proyectos, pero lo he utilizado tanto en Frontend como Backend. En Frontend ha servido para tener un mejor control de los datos que se envían y reciben de las APIs. En Backend, es una preocupación menos: si se cae la app web, la app móvil puede seguir llamando a la API, pero si se cae la API se mueren ambas.'
        },
        {
            id: 3, name: 'Next.js', level: 'STABLE',
            why: 'Next.js es un framework que funciona como una evolución de React: tiene todo lo bueno de React y lo mejora. Permite pre-renderizar las páginas en el servidor, logrando una carga casi instantánea en el navegador y mejorando el SEO. Además, facilita enormemente el enrutamiento creando una página con solo crear una carpeta o archivo.',
            how: 'Next.js ha estado en muy pocos de mis proyectos, pero es utilizado en Swap. Al ser un proyecto de gran magnitud que busca mantenerse en el tiempo, contar con buen SEO y una escalabilidad más cómoda facilita cumplir ese objetivo.'
        },
        {
            id: 4, name: 'Node.js', level: 'OPTIMAL',
            why: 'Node.js permite utilizar JavaScript (y por ende TypeScript) fuera del navegador. Además, es capaz de manejar una gran cantidad de peticiones de manera simultánea, lo que lo hace ideal para el desarrollo de APIs.',
            how: 'Node.js ha estado en pocos de mis proyectos, pero donde más ha brillado —y brillará— es en Swap. Al ser un sistema de intercambio con chats en tiempo real, se necesita la capacidad de Node.js para manejar la gran cantidad de peticiones concurrentes.'
        },
        {
            id: 5, name: 'PostgreSQL', level: 'NOMINAL',
            why: 'PostgreSQL es una gran mejora respecto a SQL estándar, ya que su alto nivel de versatilidad permite almacenar datos como JSON, realizar búsquedas vectoriales y crear tipos de datos propios.',
            how: 'PostgreSQL ha sido el motor relacional presente en gran parte de mis proyectos, desde Swap hasta Tracked. En Swap se planea aprovechar su versatilidad para desarrollar el sistema de recomendación.'
        },
        {
            id: 6, name: 'Go', level: 'NOMINAL',
            why: 'Go, al igual que TypeScript, es un lenguaje tipado, por lo que tiene todas las ventajas que eso conlleva. Lo que diferencia a Go del resto es su velocidad: al ser compilado, traduce el código a lenguaje de máquina, creando archivos ejecutables muy rápidos y portables.',
            how: 'Go ha estado en pocos proyectos, pero donde ha estado ha sido bastante cómodo de utilizar, gracias a su sintaxis sencilla y su gran velocidad comparada con la de C++.'
        },
        {
            id: 7, name: 'Docker', level: 'STABLE',
            why: 'Docker fue la solución a uno de los mayores problemas que tenía al trabajar en equipo: el clásico "en mi computadora sí funciona". Gracias a los contenedores, solo es necesario construir la imagen, definir el Docker Compose y ponerse a programar, o incluso subir a producción.',
            how: 'Docker ha estado en todos mis proyectos desde que lo conozco. Me ha facilitado trabajar en equipo, compartir mis proyectos y subirlos a producción, configurando correctamente los contenedores cuando se trata de bases de datos.'
        },
        {
            id: 8, name: 'Git', level: 'OPTIMAL',
            why: 'Git ha sido el salvavidas de proyectos y una de las mejores herramientas al trabajar en equipo. Al ser un manejador de versiones, permite regresar en el tiempo cuando algo sale mal. Lo que más me gusta son las ramas, ya que facilita trabajar en equipo y experimentar con ideas completamente nuevas sin arruinar el código de los demás.',
            how: 'Git ha estado en todos mis proyectos desde que lo conozco y ha sido la mejor herramienta al momento de trabajar en equipo.'
        },
        {
            id: 9, name: 'HTML IN CANVAS', level: 'OPTIMAL',
            why: 'Pese a ser una tecnología experimental, HTML in Canvas ha sido una de mis tecnologías favoritas. La libertad que te da de controlar cada píxel para hacer todo tipo de diseños atrevidos es mágica, aunque también es su mayor debilidad.',
            how: 'HTML in Canvas solo lo he utilizado en este portafolio, pero ha sido una de las mejores decisiones que pude tomar para darle la identidad que este portafolio tiene.'
        },
        {
            id: 10, name: 'CSS', level: 'OPTIMAL',
            why: 'CSS, pese a no ser de lo más intuitivo, es una de mis tecnologías favoritas por el alto nivel de personalización que ofrece. #CSS > Tailwind.',
            how: 'El utilizar CSS puro en mis proyectos me ha permitido crear diseños diferentes a los que se encuentran con una plantilla de Tailwind.'
        },
    ]
};

// Simulación de carga asíncrona de datos
export const fetchCyberData = async (key) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(mockData[key] || []);
        }, 2000);
    });
};

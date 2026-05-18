// Datos del portafolio — bilingüe (español / English)
// Campos con sufijo _en contienen la traducción al inglés.
const mockData = {
    aboutme: [
        {
            id: 1,
            name: 'ALEJANDRO JEREZ',
            developer: 'WEB FULL-STACK', developer_en: 'WEB FULL-STACK',
            status: 'JUNIOR',
            especialidad: 'FRONTEND & UI/UX', especialidad_en: 'FRONTEND & UI/UX',
            description: 'Desarrollador FULL-STACK, especializado en interfaces dinámicas y experiencias de usuario inmersivas. Especializado en React, HTML, CSS, JavaScript, TypeScript y UI/UX',
            description_en: 'FULL-STACK Developer specializing in dynamic interfaces and immersive user experiences. Proficient in React, HTML, CSS, JavaScript, TypeScript, and UI/UX design.',
            img: '/image/aboutme/about0.webp'
        }
    ],

    projects: [
        {
            id: 1,
            title: 'Swap - Frontend',
            tech: 'Next.js, TypeScript, CSS (metodología BEM), Zustand, React Hook Form, date-fns, Socket.io, Docker + Docker Compose',
            desc: 'Sistema de intercambios y venta de productos/servicios entre estudiantes.',
            desc_en: 'Student marketplace for exchanging and selling products/services.',
            repo: 'https://github.com/her24770/swap-frontend',
            demo: 'https://swap.jhgo.online/es/login'
        },
        {
            id: 2,
            title: 'Swap - Backend',
            tech: 'Node.js, Express.js, TypeScript, Socket.io, Zod, JSON Web Token, Prisma, PostgreSQL, Redis 7, Docker + Docker Compose',
            desc: 'Sistema de intercambios y venta de productos/servicios entre estudiantes.',
            desc_en: 'Backend for the student marketplace — handles real-time chat, auth, and inventory.',
            repo: 'https://github.com/her24770/swap-backend',
            demo: 'https://swap.jhgo.online/es/login'
        },
        {
            id: 3,
            title: 'Portafolio Detroit',
            tech: 'React + Vite, React Router, JavaScript, CSS, HTML in Canvas, Docker + Docker Compose',
            desc: 'Portafolio personal, enfocado en las tecnologías utilizadas en la carrera de Ingeniería en Ciencias de la Computación y TI.',
            desc_en: 'Personal portfolio with a Detroit: Become Human aesthetic, showcasing my projects and skills as a CS student.',
            repo: 'https://github.com/alemanuel18/Portfolio',
            demo: 'https://swap.jhgo.online/es/login'
        },
        {
            id: 4,
            title: 'Pokédex',
            tech: 'React + Vite, CSS, JavaScript, React Router, prop-types, PokéAPI, Docker + Docker Compose',
            desc: 'Ejercicio de React que consume la PokéAPI para mostrar los Pokémon de primera generación.',
            desc_en: 'React exercise consuming the PokéAPI to display first-generation Pokémon.',
            repo: 'https://github.com/alemanuel18/Ejercicio4_React_Pokedex',
            demo: 'https://ejercicio4-react-pokedex.vercel.app/'
        },
        {
            id: 5,
            title: 'Calculadora', title_en: 'Calculator',
            tech: 'React + Vite, TypeScript, CSS, Docker + Docker Compose',
            desc: 'Calculadora con operaciones básicas.',
            desc_en: 'Calculator app with basic arithmetic operations.',
            repo: 'https://github.com/alemanuel18/Lab7_Calculadora',
            demo: 'https://lab7-calculadora.vercel.app/'
        },
        {
            id: 6,
            title: 'Snake',
            tech: 'React + Vite, JavaScript, CSS, Docker + Docker Compose',
            desc: 'Videojuego de Snake.',
            desc_en: 'Classic Snake video game.',
            repo: 'https://github.com/alemanuel18/Lab6_Snake',
            demo: 'https://lab6-snake.vercel.app/'
        },
        {
            id: 7,
            title: 'Sistema de Inventario y Ventas', title_en: 'Inventory & Sales System',
            tech: 'Node.js, MySQL, React + Vite, CSS, SQL, Docker + Docker Compose',
            desc: 'Sistema de inventario y ventas para una tienda minorista. (La mejor rama es db/Proyecto-3).',
            desc_en: 'Inventory and sales system for a retail store. (Best branch: db/Proyecto-3).',
            repo: 'https://github.com/alemanuel18/Proyecto2_DB',
            demo: 'https://proyecto2db-production.up.railway.app/'
        },
        {
            id: 8,
            title: 'Tracked — Frontend',
            tech: 'HTML, CSS, JS vanilla, Nginx, Docker + Docker Compose',
            desc: 'Frontend de un sistema para rastrear las series que has visto.',
            desc_en: 'Frontend for a TV-series tracker web app.',
            repo: 'https://github.com/alemanuel18/Proyecto1_Full-Stack_Web_Frontend',
            demo: 'https://graceful-forgiveness-production-a462.up.railway.app/'
        },
        {
            id: 9,
            title: 'Tracked — Backend',
            tech: 'Go, PostgreSQL, API REST, Docker + Docker Compose',
            desc: 'Backend de un sistema para rastrear las series que has visto.',
            desc_en: 'REST API backend for a TV-series tracker, built with Go and PostgreSQL.',
            repo: 'https://github.com/alemanuel18/Proyecto1_Full-Stack_Web_Backend',
            demo: 'https://graceful-forgiveness-production-a462.up.railway.app/'
        },
        {
            id: 10,
            title: 'Sistema de Recomendación de Profesores', title_en: 'Professor Recommendation System',
            tech: 'React, FastAPI',
            desc: 'Frontend de un sistema de recomendación de profesores universitarios, desarrollado con React y conectado a su respectivo backend con FastAPI. Permite a los estudiantes recibir sugerencias personalizadas de profesores según experiencia, calificaciones y áreas de especialidad.',
            desc_en: 'Frontend for a university professor recommendation system built with React and connected to a FastAPI backend. Students receive personalized professor suggestions based on experience, ratings, and subject areas.',
            repo: 'https://github.com/alemanuel18/Front-Profesor-Recommendation-System',
        },
        {
            id: 11,
            title: 'Sistema de Recomendación de Profesores - Backend', title_en: 'Professor Recommendation System - Backend',
            tech: 'Python, Neo4j',
            desc: 'Backend de un sistema de recomendación de profesores universitarios, desarrollado con Python y Poetry para gestión de dependencias. Se conecta a una base de datos de grafos mediante Neo4j.',
            desc_en: 'Backend for the professor recommendation system, built with Python and Poetry for dependency management. Connects to a graph database powered by Neo4j.',
            repo: 'https://github.com/MarceloDetlefsen/Back-Professor-Recommendation-System',
        },
    ],

    experience: [
        {
            id: 1,
            role: 'Técnico de Soporte TI', role_en: 'IT Support Technician',
            company: 'Procuraduría De Los Derechos Humanos',
            year: '2023',
            img: '/image/experience/exp1.png',
            desc: 'Técnico de TI encargado de dar soporte y preparar hardware y software para los trabajadores de la institución.',
            desc_en: 'IT Technician responsible for providing support and setting up hardware and software for institution staff.'
        },
        {
            id: 2,
            role: 'Maker Assistant',
            company: 'Universidad del Valle de Guatemala',
            year: '2025 - Presente', year_en: '2025 - Present',
            img: '/image/studies/studies2.png',
            desc: 'Makerspace D-Hive: Maker Assistant encargado del uso y mantenimiento de impresoras 3D Ultimaker, Bambu Lab y Elegoo; cortadora láser y de vinilo.',
            desc_en: 'D-Hive Makerspace: Maker Assistant responsible for operating and maintaining Ultimaker, Bambu Lab, and Elegoo 3D printers, as well as laser and vinyl cutters.'
        },
        {
            id: 3,
            role: 'Catedrático Auxiliar', role_en: 'Teaching Assistant',
            company: 'Universidad del Valle de Guatemala',
            year: '2026 - Presente', year_en: '2026 - Present',
            img: '/image/studies/studies2.png',
            desc: 'Departamento de Ingeniería en Ciencias de la Computación y TI: auxiliar de laboratorio del curso de Algoritmos y Estructura de Datos.',
            desc_en: 'Department of Computer Science and IT Engineering: laboratory assistant for the Algorithms and Data Structures course.'
        }
    ],

    studies: [
        {
            id: 1,
            degree: 'Bachillerato en Ciencias y Letras con Orientación en Computación',
            degree_en: 'High School Diploma — Science & Computing Track',
            institution: 'Colegio Loyola',
            year: '2019 - 2023',
            img: '/image/studies/studies1.png',
            desc: 'Estudios básicos y diversificados.',
            desc_en: 'Middle and high school studies with a computing specialization.'
        },
        {
            id: 2,
            degree: 'Ingeniería en Ciencias de la Computación y TI',
            degree_en: 'B.Sc. in Computer Science and IT Engineering',
            institution: 'Universidad del Valle de Guatemala',
            year: '2024 - Presente', year_en: '2024 - Present',
            img: '/image/studies/studies2.png',
            desc: 'Estudiante de tercer año con beca parcial por parte de la universidad. Reconocimiento académico en los primeros dos años de estudio.',
            desc_en: 'Third-year student with a partial university scholarship. Academic recognition in the first two years of study.'
        }
    ],

    courses: [
        {
            id: 1,
            title: 'Curso de React.js', title_en: 'React.js Course',
            platform: 'Platzi',
            desc: 'Desarrolla aplicaciones web modernas con React. Crea componentes, maneja estado y eventos, aplica hooks, consume APIs, estiliza interfaces y usa TypeScript para mayor seguridad. Conoce las novedades de React 19.',
            desc_en: 'Build modern web applications with React. Create components, manage state and events, apply hooks, consume APIs, style interfaces, and use TypeScript for type safety. Covers React 19 features.',
            link: 'https://platzi.com/p/alemanuelj17/curso/11887-course/diploma/detalle/'
        },
        {
            id: 2,
            title: 'Curso Profesional de Git y GitHub', title_en: 'Professional Git & GitHub Course',
            platform: 'Platzi',
            desc: 'Gestiona versiones, colabora en equipo y publica proyectos usando Git y GitHub. Controla ramas, pull requests, releases, seguridad y automatizaciones con herramientas clave de la industria.',
            desc_en: 'Manage versions, collaborate in teams, and publish projects using Git and GitHub. Control branches, pull requests, releases, security, and automations with industry-standard tools.',
            link: 'https://platzi.com/p/alemanuelj17/curso/1557-course/diploma/detalle/'
        },
        {
            id: 3,
            title: 'Curso de HTML', title_en: 'HTML Course',
            platform: 'Platzi',
            desc: 'Domina la estructura esencial de las páginas web con HTML. Aprende a escribir código limpio, jerarquizado y funcional. Comprende el rol de HTML en la web moderna y cómo su estructura impacta la accesibilidad, el SEO y la mantenibilidad del sitio.',
            desc_en: 'Master the essential structure of web pages with HTML. Learn to write clean, hierarchical, and functional code. Understand the role of HTML in the modern web and how its structure impacts accessibility, SEO, and site maintainability.',
            link: 'https://platzi.com/p/alemanuelj17/curso/12341-course/diploma/detalle/'
        },
        {
            id: 4,
            title: 'Reto de 30 Días De JS', title_en: '30 Days of JS Challenge',
            platform: 'Platzi',
            desc: 'Durante 6 semanas continuas aprenderás desde 0 las características de JavaScript, con ejercicios prácticos y conceptos nuevos diariamente.',
            desc_en: 'Over 6 continuous weeks, learn JavaScript from scratch with daily practical exercises and new concepts.',
            link: 'https://platzi.com/p/alemanuelj17/curso/6636-course/diploma/detalle/'
        },
        {
            id: 5,
            title: 'Introducción a la Terminal y Línea de Comandos', title_en: 'Introduction to the Terminal & Command Line',
            platform: 'Platzi',
            desc: 'Aprende a utilizar la terminal y la línea de comandos para navegar tu sistema operativo, manipular archivos y directorios, comprender permisos y procesos, y usar herramientas como grep y curl.',
            desc_en: 'Learn to use the terminal and command line to navigate your OS, manipulate files and directories, understand permissions and processes, and use tools like grep and curl.',
            link: 'https://platzi.com/p/alemanuelj17/curso/12040-course/diploma/detalle/'
        },
    ],

    technologies: [
        {
            id: 1, name: 'React (Vite)', level: 'OPTIMAL',
            why: 'React es una de las librerías de JavaScript más utilizadas, por lo que si tengo un error es casi seguro que a alguien más le ha pasado y hay información de sobra para solucionarlo. Además, el sistema de componentes hace que el código sea más fácil de mantener y reutilizar.',
            why_en: 'React is one of the most widely used JavaScript libraries, so if I run into an error, chances are someone else has too and there is plenty of documentation to solve it. Its component system also makes code easier to maintain and reuse.',
            how: 'React ha sido la base de la mayoría de mis proyectos del lado del frontend, lo que me ha permitido crear interfaces interactivas, dinámicas y sobre todo escalables. Con el uso de Context, Hooks y componentes reutilizables, el código es más limpio y fácil de mantener.',
            how_en: 'React has been the foundation of most of my frontend projects, allowing me to build interactive, dynamic, and scalable UIs. Using Context, Hooks, and reusable components keeps the codebase clean and easy to maintain.'
        },
        {
            id: 2, name: 'TypeScript', level: 'STABLE',
            why: 'TypeScript, a diferencia de JavaScript, cuenta con una herramienta muy poderosa: el tipado estático. Esto es muy útil durante la fase de desarrollo y despliegue, ya que si existe algún error con respecto a tipos de datos, este fallará durante la compilación.',
            why_en: 'Unlike JavaScript, TypeScript provides static typing, a powerful tool during development and deployment. If a type mismatch exists, it will fail at compile time rather than at runtime.',
            how: 'TypeScript ha estado en pocos de mis proyectos, pero lo he utilizado tanto en Frontend como Backend. En Frontend ha servido para tener un mejor control de los datos que se envían y reciben de las APIs. En Backend, es una preocupación menos: si se cae la app web, la app móvil puede seguir llamando a la API, pero si se cae la API se mueren ambas.',
            how_en: 'TypeScript has been used in both Frontend and Backend projects. On the frontend it gives better control over API data shapes. On the backend it reduces runtime surprises — if the web app goes down, the mobile app can still call the API, but if the API goes down, both clients are affected.'
        },
        {
            id: 3, name: 'Next.js', level: 'STABLE',
            why: 'Next.js es un framework que funciona como una evolución de React: tiene todo lo bueno de React y lo mejora. Permite pre-renderizar las páginas en el servidor, logrando una carga casi instantánea en el navegador y mejorando el SEO. Además, facilita enormemente el enrutamiento creando una página con solo crear una carpeta o archivo.',
            why_en: 'Next.js is an evolution of React that builds on all its strengths. It enables server-side rendering for near-instant page loads and better SEO, and makes routing trivial — just create a folder or file.',
            how: 'Next.js ha estado en muy pocos de mis proyectos, pero es utilizado en Swap. Al ser un proyecto de gran magnitud que busca mantenerse en el tiempo, contar con buen SEO y una escalabilidad más cómoda facilita cumplir ese objetivo.',
            how_en: 'Next.js is used in the Swap project. As a large-scale application designed to last, having good SEO and comfortable scalability makes achieving its long-term goals easier.'
        },
        {
            id: 4, name: 'Node.js', level: 'OPTIMAL',
            why: 'Node.js permite utilizar JavaScript (y por ende TypeScript) fuera del navegador. Además, es capaz de manejar una gran cantidad de peticiones de manera simultánea, lo que lo hace ideal para el desarrollo de APIs.',
            why_en: 'Node.js allows running JavaScript (and TypeScript) outside the browser. It handles a large number of concurrent requests efficiently, making it ideal for building APIs.',
            how: 'Node.js ha estado en pocos de mis proyectos, pero donde más ha brillado —y brillará— es en Swap. Al ser un sistema de intercambio con chats en tiempo real, se necesita la capacidad de Node.js para manejar la gran cantidad de peticiones concurrentes.',
            how_en: 'Node.js shines most in the Swap project. As a marketplace with real-time chat, its ability to handle many concurrent requests concurrently is essential.'
        },
        {
            id: 5, name: 'PostgreSQL', level: 'NOMINAL',
            why: 'PostgreSQL es una gran mejora respecto a SQL estándar, ya que su alto nivel de versatilidad permite almacenar datos como JSON, realizar búsquedas vectoriales y crear tipos de datos propios.',
            why_en: 'PostgreSQL is a significant improvement over standard SQL. Its versatility allows storing JSON data, performing vector searches, and defining custom data types.',
            how: 'PostgreSQL ha sido el motor relacional presente en gran parte de mis proyectos, desde Swap hasta Tracked. En Swap se planea aprovechar su versatilidad para desarrollar el sistema de recomendación.',
            how_en: 'PostgreSQL is the relational engine behind most of my projects, from Swap to Tracked. In Swap it will power the recommendation system by leveraging its advanced data capabilities.'
        },
        {
            id: 6, name: 'Go', level: 'NOMINAL',
            why: 'Go, al igual que TypeScript, es un lenguaje tipado, por lo que tiene todas las ventajas que eso conlleva. Lo que diferencia a Go del resto es su velocidad: al ser compilado, traduce el código a lenguaje de máquina, creando archivos ejecutables muy rápidos y portables.',
            why_en: 'Like TypeScript, Go is statically typed, with all the safety benefits that entails. What sets Go apart is its speed: being compiled, it translates directly to machine code, producing fast and portable executables.',
            how: 'Go ha estado en pocos proyectos, pero donde ha estado ha sido bastante cómodo de utilizar, gracias a su sintaxis sencilla y su gran velocidad comparada con la de C++.',
            how_en: 'Go has been used in a few projects, and it has been very comfortable to work with thanks to its simple syntax and impressive speed compared to C++.'
        },
        {
            id: 7, name: 'Docker', level: 'STABLE',
            why: 'Docker fue la solución a uno de los mayores problemas que tenía al trabajar en equipo: el clásico "en mi computadora sí funciona". Gracias a los contenedores, solo es necesario construir la imagen, definir el Docker Compose y ponerse a programar, o incluso subir a producción.',
            why_en: 'Docker solved one of the biggest pain points in team development: "it works on my machine." With containers, you just build the image, define the Docker Compose, and start coding — or ship to production.',
            how: 'Docker ha estado en todos mis proyectos desde que lo conozco. Me ha facilitado trabajar en equipo, compartir mis proyectos y subirlos a producción, configurando correctamente los contenedores cuando se trata de bases de datos.',
            how_en: 'Docker has been part of every project since I learned it. It has made team collaboration, project sharing, and production deployments significantly easier — especially when dealing with database containers.'
        },
        {
            id: 8, name: 'Git', level: 'OPTIMAL',
            why: 'Git ha sido el salvavidas de proyectos y una de las mejores herramientas al trabajar en equipo. Al ser un manejador de versiones, permite regresar en el tiempo cuando algo sale mal. Lo que más me gusta son las ramas, ya que facilita trabajar en equipo y experimentar con ideas completamente nuevas sin arruinar el código de los demás.',
            why_en: 'Git has been a project lifesaver and one of the best tools for team collaboration. As a version control system, it lets you go back in time when something breaks. Branches are my favorite feature — they make teamwork easy and allow experimenting with bold ideas without affecting anyone else\'s code.',
            how: 'Git ha estado en todos mis proyectos desde que lo conozco y ha sido la mejor herramienta al momento de trabajar en equipo.',
            how_en: 'Git has been part of every project since I learned it and has consistently been the most valuable tool when working in a team.'
        },
        {
            id: 9, name: 'HTML IN CANVAS', level: 'OPTIMAL',
            why: 'Pese a ser una tecnología experimental, HTML in Canvas ha sido una de mis tecnologías favoritas. La libertad que te da de controlar cada píxel para hacer todo tipo de diseños atrevidos es mágica, aunque también es su mayor debilidad.',
            why_en: 'Despite being an experimental technology, HTML in Canvas has become one of my favorites. The freedom to control every pixel and create bold designs is magical — though that same freedom is also its greatest weakness.',
            how: 'HTML in Canvas solo lo he utilizado en este portafolio, pero ha sido una de las mejores decisiones que pude tomar para darle la identidad que este portafolio tiene.',
            how_en: 'I have only used HTML in Canvas for this portfolio, but it was one of the best decisions I could have made to give it the unique identity it has.'
        },
        {
            id: 10, name: 'CSS', level: 'OPTIMAL',
            why: 'CSS, pese a no ser de lo más intuitivo, es una de mis tecnologías favoritas por el alto nivel de personalización que ofrece. #CSS > Tailwind.',
            why_en: 'CSS, despite not being the most intuitive, is one of my favorite technologies because of the level of customization it offers. #CSS > Tailwind.',
            how: 'El utilizar CSS puro en mis proyectos me ha permitido crear diseños diferentes a los que se encuentran con una plantilla de Tailwind.',
            how_en: 'Using pure CSS in my projects has allowed me to create designs that stand apart from anything you would get from a Tailwind template.'
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

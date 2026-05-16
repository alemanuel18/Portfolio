import { useCyberSound } from '../hooks/useCyberSound';

export default function MainMenu({ changeView }) {
    const { playHover, playSelect } = useCyberSound();

    const handleNavigation = (viewName) => {
        playSelect();
        // Esperamos unos milisegundos para que se escuche el click antes de cambiar de pantalla
        setTimeout(() => {
            changeView(viewName);
        }, 200);
    };

    return (
        <div className="flex flex-col gap-6 p-20 justify-center h-screen text-white">
            <h1 className="text-sm tracking-[0.3em] opacity-40 mb-10">[ MAIN MENU ]</h1>

            <button
                onMouseEnter={playHover}
                onClick={() => handleNavigation('ABOUT')}
                className="text-left text-2xl font-light tracking-widest hover:text-blue-400 transition-colors uppercase"
            >
                ¿Quién soy?
            </button>

            <button
                onMouseEnter={playHover}
                onClick={() => handleNavigation('EXPERIENCE')}
                className="text-left text-2xl font-light tracking-widest hover:text-blue-400 transition-colors uppercase"
            >
                Experiencia
            </button>

            <button
                onMouseEnter={playHover}
                onClick={() => handleNavigation('COURSES')}
                className="text-left text-2xl font-light tracking-widest hover:text-blue-400 transition-colors uppercase"
            >
                Cursos y Certificados
            </button>
        </div>
    );
}
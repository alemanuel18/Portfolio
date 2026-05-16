import { useCyber } from '../../context/CyberContext';
import { useCyberSound } from '../../hooks/useCyberSound';

export default function OptionsView({ backToMenu }) {
    const { lang, setLang, volume, setVolume, t } = useCyber();
    const { playHover, playSelect } = useCyberSound();

    return (
        <div className="flex flex-col justify-center h-screen p-20 text-white font-light max-w-2xl">
            <h2 className="text-sm tracking-[0.4em] text-blue-400 mb-12">
        // {t.options.title}
            </h2>

            {/* Control de Volumen */}
            <div className="mb-8" onMouseEnter={playHover}>
                <label className="block text-xs tracking-widest opacity-60 mb-2">
                    {t.options.volume}: {Math.round(volume * 100)}%
                </label>
                <input
                    type="range"
                    min="0"
                    max="1"
                    step="0.1"
                    value={volume}
                    onChange={(e) => setVolume(parseFloat(e.target.value))}
                    className="w-full accent-blue-400 bg-white/10 h-1 cursor-pointer appearance-none"
                />
            </div>

            {/* Control de Idioma */}
            <div className="mb-12">
                <label className="block text-xs tracking-widest opacity-60 mb-3">
                    {t.options.lang}
                </label>
                <div className="flex gap-4">
                    {['es', 'en'].map((language) => (
                        <button
                            key={language}
                            onMouseEnter={playHover}
                            onClick={() => { playSelect(); setLang(language); }}
                            className={`px-4 py-1 text-sm tracking-widest border transition-all ${lang === language
                                ? 'border-blue-400 text-blue-400 bg-blue-400/10 font-normal'
                                : 'border-white/20 opacity-50 hover:opacity-100'
                                }`}
                        >
                            {language.toUpperCase()}
                        </button>
                    ))}
                </div>
            </div>

            {/* Botón Volver */}
            <button
                onMouseEnter={playHover}
                onClick={() => { playSelect(); backToMenu(); }}
                className="text-left text-sm tracking-widest text-blue-300 hover:text-white transition-colors"
            >
                ◀ [ {t.options.back} ]
            </button>
        </div>
    );
}
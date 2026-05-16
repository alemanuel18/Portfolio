import { useState, useEffect } from 'react';
import { queryCyberLifeDB } from '../services/cyberLifeDB';
import { useCyberSound } from '../hooks/useCyberSound';

export default function ProjectsView() {
    const [projects, setProjects] = useState([]);
    const [selectedIdx, setSelectedIdx] = useState(0);
    const { playHover, playSelect } = useCyberSound();

    useEffect(() => {
        queryCyberLifeDB('projects').then(setProjects);
    }, []);

    const activeProject = projects[selectedIdx];

    return (
        <div className="flex h-screen text-white p-20 items-center gap-16">
            {/* COLUMNA IZQUIERDA: Listado inclinado tipo revista */}
            <div className="w-2/5 flex flex-col gap-4" style={{ transform: 'skewX(-10deg)' }}>
                <h3 className="text-xs tracking-[0.4em] text-blue-400 mb-4 transform skew-x-[10deg]">
          // ARCHIVED_PROJECTS
                </h3>
                {projects.map((proj, idx) => (
                    <button
                        key={proj.id}
                        onMouseEnter={playHover}
                        onClick={() => { playSelect(); setSelectedIdx(idx); }}
                        className={`p-4 text-left border transition-all ${selectedIdx === idx
                                ? 'bg-white text-black border-white'
                                : 'bg-white/5 border-white/10 hover:bg-white/10'
                            }`}
                    >
                        {/* Devolvemos la inclinación al texto interno para que sea legible */}
                        <div className="transform skew-x-[10deg] flex justify-between items-center">
                            <span className="font-light tracking-widest text-sm">{proj.title}</span>
                            <span className={`text-[10px] ${selectedIdx === idx ? 'text-blue-600' : 'opacity-40'}`}>
                                N° 0{idx + 1}
                            </span>
                        </div>
                    </button>
                ))}
            </div>

            {/* COLUMNA DERECHA: Detalles del Proyecto Seleccionado */}
            {activeProject && (
                <div className="w-3/5 border-l border-white/10 pl-12 h-3/5 flex flex-col justify-between animate-fade-in">
                    <div>
                        <span className="text-xs text-blue-400 tracking-widest">{activeProject.tag}</span>
                        <h2 className="text-4xl font-light tracking-wider mt-2 mb-6">{activeProject.title}</h2>
                        <p className="text-sm opacity-70 font-light leading-relaxed max-w-xl">{activeProject.description}</p>
                    </div>

                    <div>
                        <h4 className="text-xs tracking-widest opacity-40 mb-3">INTEGRATED STACK:</h4>
                        <div className="flex gap-2 flex-wrap mb-8">
                            {activeProject.stack.map(tech => (
                                <span key={tech} className="text-xs font-mono bg-blue-500/10 text-blue-300 px-3 py-1 border border-blue-500/20">
                                    {tech}
                                </span>
                            ))}
                        </div>

                        <div className="flex gap-6 text-xs tracking-widest">
                            {activeProject.links.github && (
                                <a href={activeProject.links.github} className="hover:text-blue-400 transition-colors">
                                    [ SOURCE_CODE ]
                                </a>
                            )}
                            {activeProject.links.live && (
                                <a href={activeProject.links.live} className="hover:text-blue-400 transition-colors">
                                    [ LAUNCH_SYSTEM ]
                                </a>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
import { useEffect, useState } from 'react';
import { queryCyberLifeDB } from '../services/cyberLifeDB';
import { ExperienceCard } from '../components/ExperienceCard';

export default function Experience() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        queryCyberLifeDB('experience').then((result) => {
            setData(result);
            setLoading(false); // Apaga la animación de carga
        });
    }, []);

    if (loading) {
        return (
            <div className="flex flex-col items-center justify-center h-screen text-blue-400 font-light tracking-widest animate-pulse">
                <p className="text-xl">[ ANALYZING MEMORY FILES... ]</p>
                <div className="w-48 h-1 bg-blue-900/50 mt-4 overflow-hidden relative">
                    <div className="h-full bg-blue-400 w-1/3 animate-[loading_1.2s_ease-in-out_infinite]" />
                </div>
            </div>
        );
    }

    return (
        <div className="flex gap-8 p-12 overflow-x-auto h-screen items-center">
            {data.map((item) => (
                <ExperienceCard key={item.id} {...item} />
            ))}
        </div>
    );
}
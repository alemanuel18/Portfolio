//experiencia
const localDatabase = {
    experience: [
        { id: 1, title: "Backend Developer", company: "CyberLife Inc.", date: "2025" },
        { id: 2, title: "Software Engineer", company: "Detroit Police Dept", date: "2026" }
    ],
    studies: [ /* ... */]
};

export const queryCyberLifeDB = (category) => {
    return new Promise((resolve) => {
        // Simulaicon de un delay de 1.2 segundos (el tiempo de "cómputo" del androide)
        setTimeout(() => {
            resolve(localDatabase[category] || []);
        }, 1200);
    });
};
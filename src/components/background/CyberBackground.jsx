import { useEffect, useRef } from 'react';

export default function CyberBackground() {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let animationFrameId;

        // Configurar tamaño completo
        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        window.addEventListener('resize', resizeCanvas);
        resizeCanvas();

        // Aquí creas tu lógica de partículas (luces desenfocadas / polvo)
        const particles = Array.from({ length: 30 }, () => ({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            radius: Math.random() * 15 + 5,
            speedY: -(Math.random() * 0.5 + 0.1),
            opacity: Math.random() * 0.3
        }));

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Dibujar partículas con efecto blur de CyberLife
            particles.forEach(p => {
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(180, 220, 255, ${p.opacity})`;
                ctx.filter = 'blur(8px)'; // Desenfoque cinematográfico
                ctx.fill();

                // Mover hacia arriba lentamente
                p.y += p.speedY;
                if (p.y < -20) p.y = canvas.height + 20;
            });

            animationFrameId = requestAnimationFrame(animate);
        };

        animate();

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            style={{ position: 'fixed', top: 0, left: 0, zIndex: -1, background: '#1a222d' }}
        />
    );
}
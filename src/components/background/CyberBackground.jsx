import { useEffect, useRef } from 'react';

export default function CyberBackground() {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let animationFrameId;

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        window.addEventListener('resize', resizeCanvas);
        resizeCanvas();

        // Partículas tipo "dust" / "bokeh" (lentas, desenfocadas, tonos fríos)
        const particles = Array.from({ length: 40 }, () => ({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            radius: Math.random() * 20 + 5, // Tamaños variados para bokeh
            speedX: (Math.random() - 0.5) * 0.2, // Movimiento lateral muy lento
            speedY: -(Math.random() * 0.3 + 0.05), // Movimiento ascendente muy lento
            opacity: Math.random() * 0.4 + 0.1
        }));

        const animate = () => {
            // Fondo un poco más claro para estilo clínico o mantener oscuro según diseño
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            particles.forEach(p => {
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
                
                // Gradiente radial para simular desenfoque/bokeh
                const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.radius);
                gradient.addColorStop(0, `rgba(255, 255, 255, ${p.opacity})`);
                gradient.addColorStop(1, `rgba(180, 220, 255, 0)`);
                
                ctx.fillStyle = gradient;
                ctx.fill();

                p.x += p.speedX;
                p.y += p.speedY;

                // Reset si sale de la pantalla
                if (p.y < -50) p.y = canvas.height + 50;
                if (p.x < -50) p.x = canvas.width + 50;
                if (p.x > canvas.width + 50) p.x = -50;
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
            style={{ 
                position: 'fixed', 
                top: 0, 
                left: 0, 
                zIndex: -1, 
                // Fondo clínico oscuro con gradiente
                background: 'linear-gradient(135deg, #10151c 0%, #1a222d 100%)' 
            }}
        />
    );
}
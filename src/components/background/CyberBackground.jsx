import { useEffect, useRef } from 'react';

export default function CyberBackground() {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let animationFrameId;
        let t = 0;
        let panels = [], particles = [];
        // Offscreen canvas para el patrón de triángulos (se dibuja una sola vez)
        let triCanvas = null;

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            buildScene();
            buildTrianglePattern();
        };

        /**
         * Construye un offscreen canvas con una teselación de triángulos
         * estilo Detroit: Become Human — triángulos grandes, colores fríos sutiles.
         */
        const buildTrianglePattern = () => {
            const W = canvas.width, H = canvas.height;
            triCanvas = document.createElement('canvas');
            triCanvas.width = W;
            triCanvas.height = H;
            const tc = triCanvas.getContext('2d');

            const size = 180; // Tamaño base del triángulo
            const cols = Math.ceil(W / size) + 2;
            const rows = Math.ceil(H / (size * 0.866)) + 2; // 0.866 = sin(60°)

            // Paleta de tonos fríos muy sutiles
            const tones = [
                'rgba(200, 220, 240, 0.35)',
                'rgba(215, 230, 248, 0.28)',
                'rgba(185, 210, 235, 0.22)',
                'rgba(230, 242, 255, 0.40)',
                'rgba(210, 228, 245, 0.18)',
            ];

            for (let row = -1; row < rows; row++) {
                for (let col = -1; col < cols; col++) {
                    const x = col * size;
                    const y = row * size * 0.866;
                    const offset = (row % 2 === 0) ? 0 : size / 2;

                    // Triángulo superior (▲)
                    tc.beginPath();
                    tc.moveTo(x + offset, y);
                    tc.lineTo(x + offset + size, y);
                    tc.lineTo(x + offset + size / 2, y + size * 0.866);
                    tc.closePath();
                    tc.fillStyle = tones[(row * cols + col * 2) % tones.length];
                    tc.fill();
                    // Borde muy sutil
                    tc.strokeStyle = 'rgba(150, 190, 230, 0.12)';
                    tc.lineWidth = 0.8;
                    tc.stroke();

                    // Triángulo inferior (▼) — el espacio entre dos ▲
                    tc.beginPath();
                    tc.moveTo(x + offset + size, y);
                    tc.lineTo(x + offset + size * 1.5, y + size * 0.866);
                    tc.lineTo(x + offset + size / 2, y + size * 0.866);
                    tc.closePath();
                    tc.fillStyle = tones[(row * cols + col * 2 + 1) % tones.length];
                    tc.fill();
                    tc.strokeStyle = 'rgba(150, 190, 230, 0.10)';
                    tc.lineWidth = 0.8;
                    tc.stroke();
                }
            }
        };

        const buildScene = () => {
            const W = canvas.width, H = canvas.height;
            const cols = 3, rows = 2;
            const pw = W / cols, ph = H / rows;
            panels = [];
            for (let r = 0; r <= rows; r++) {
                for (let c = 0; c <= cols; c++) {
                    panels.push({
                        cx: c * pw + (Math.random() - 0.5) * pw * 0.3,
                        cy: r * ph + (Math.random() - 0.5) * ph * 0.3,
                        baseW: pw * (0.7 + Math.random() * 0.5),
                        baseH: ph * (0.7 + Math.random() * 0.5),
                        phase: Math.random() * Math.PI * 2,
                        speed: 0.003 + Math.random() * 0.004,
                        brightness: 0.6 + Math.random() * 0.4,
                    });
                }
            }
            particles = Array.from({ length: 25 }, () => ({
                x: Math.random() * W,
                y: Math.random() * H,
                r: 6 + Math.random() * 18,
                sx: (Math.random() - 0.5) * 0.15,
                sy: -(0.04 + Math.random() * 0.2),
                o: 0.04 + Math.random() * 0.12,
            }));
        };

        const animate = () => {
            const W = canvas.width, H = canvas.height;
            ctx.clearRect(0, 0, W, H);

            // 1. Base gradient
            const bg = ctx.createLinearGradient(0, 0, W, H);
            bg.addColorStop(0, '#f0f7fd');
            bg.addColorStop(0.5, '#e0eff9');
            bg.addColorStop(1, '#e8f4ff');
            ctx.fillStyle = bg;
            ctx.fillRect(0, 0, W, H);

            // 2. Patrón de triángulos estático (offscreen)
            if (triCanvas) {
                ctx.drawImage(triCanvas, 0, 0);
            }

            // 3. Animated light panels (reflections encima del patrón)
            panels.forEach(p => {
                const pulse = Math.sin(t * p.speed + p.phase);
                const alpha = (0.35 + pulse * 0.15) * p.brightness;
                const hw = (p.baseW / 2) * (1 + pulse * 0.08);
                const hh = (p.baseH / 2) * (1 + Math.cos(t * p.speed * 0.7 + p.phase) * 0.06);
                const rg = ctx.createRadialGradient(p.cx, p.cy, 0, p.cx, p.cy, Math.max(hw, hh));
                rg.addColorStop(0, `rgba(255,255,255,${(alpha * 0.9).toFixed(3)})`);
                rg.addColorStop(0.4, `rgba(210,235,255,${(alpha * 0.4).toFixed(3)})`);
                rg.addColorStop(1, `rgba(180,215,255,0)`);
                ctx.save();
                ctx.beginPath();
                ctx.ellipse(p.cx, p.cy, hw, hh, 0, 0, Math.PI * 2);
                ctx.fillStyle = rg;
                ctx.fill();
                ctx.restore();
            });

            // 4. Bokeh particles
            particles.forEach(p => {
                const pg = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r);
                pg.addColorStop(0, `rgba(0,136,204,${p.o})`);
                pg.addColorStop(1, `rgba(0,136,204,0)`);
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
                ctx.fillStyle = pg;
                ctx.fill();
                p.x += p.sx; p.y += p.sy;
                if (p.y < -30) p.y = H + 30;
                if (p.x < -30) p.x = W + 30;
                if (p.x > W + 30) p.x = -30;
            });

            t++;
            animationFrameId = requestAnimationFrame(animate);
        };

        window.addEventListener('resize', resize);
        resize();
        animate();

        return () => {
            window.removeEventListener('resize', resize);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            style={{ position: 'fixed', top: 0, left: 0, zIndex: -1 }}
        />
    );
}
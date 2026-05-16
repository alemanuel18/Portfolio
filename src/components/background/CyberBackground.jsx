import { useEffect, useRef } from 'react';

export default function CyberBackground() {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let animationFrameId;
        let t = 0;
        let panels = [], particles = [];

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            buildScene();
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

            // Base gradient
            const bg = ctx.createLinearGradient(0, 0, W, H);
            bg.addColorStop(0, '#e8f4fd');
            bg.addColorStop(0.5, '#cce4f7');
            bg.addColorStop(1, '#daeeff');
            ctx.fillStyle = bg;
            ctx.fillRect(0, 0, W, H);

            // Animated light panels (reflections)
            panels.forEach(p => {
                const pulse = Math.sin(t * p.speed + p.phase);
                const alpha = (0.55 + pulse * 0.25) * p.brightness;
                const hw = (p.baseW / 2) * (1 + pulse * 0.08);
                const hh = (p.baseH / 2) * (1 + Math.cos(t * p.speed * 0.7 + p.phase) * 0.06);
                const rg = ctx.createRadialGradient(p.cx, p.cy, 0, p.cx, p.cy, Math.max(hw, hh));
                rg.addColorStop(0, `rgba(255,255,255,${(alpha * 0.85).toFixed(3)})`);
                rg.addColorStop(0.4, `rgba(210,235,255,${(alpha * 0.5).toFixed(3)})`);
                rg.addColorStop(1, `rgba(180,215,255,0)`);
                ctx.save();
                ctx.beginPath();
                ctx.ellipse(p.cx, p.cy, hw, hh, 0, 0, Math.PI * 2);
                ctx.fillStyle = rg;
                ctx.fill();
                ctx.restore();
            });

            // Subtle grid lines
            ctx.strokeStyle = 'rgba(100,160,220,0.06)';
            ctx.lineWidth = 0.5;
            for (let x = 0; x < W; x += 60) {
                ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, H); ctx.stroke();
            }
            for (let y = 0; y < H; y += 60) {
                ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(W, y); ctx.stroke();
            }

            // Bokeh particles
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
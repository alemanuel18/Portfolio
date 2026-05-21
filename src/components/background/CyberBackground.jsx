import { useEffect, useRef } from 'react';
import { useCyber } from '../../context/CyberContext';

const PROFILES = {
    high: {
        scale: 1,
        fps: 60,
        panelCols: 3,
        panelRows: 2,
        particles: 25,
        staticOnly: false,
    },
    low: {
        scale: 0.65,
        fps: 24,
        panelCols: 2,
        panelRows: 1,
        particles: 8,
        staticOnly: false,
    },
    static: {
        scale: 0.6,
        fps: 0,
        panelCols: 0,
        panelRows: 0,
        particles: 0,
        staticOnly: true,
    },
};

function resolveProfile(mode) {
    if (mode === 'high') return PROFILES.high;
    if (mode === 'low') return PROFILES.low;

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reducedMotion) return PROFILES.static;

    const coarsePointer = window.matchMedia('(pointer: coarse)').matches;
    const compactViewport = Math.min(window.innerWidth, window.innerHeight) < 760;
    const lowMemory = navigator.deviceMemory && navigator.deviceMemory <= 4;
    const lowCpu = navigator.hardwareConcurrency && navigator.hardwareConcurrency <= 4;

    if (coarsePointer || compactViewport || lowMemory || lowCpu) {
        return PROFILES.low;
    }

    return PROFILES.high;
}

export default function CyberBackground() {
    const canvasRef = useRef(null);
    const { visualPerformance } = useCyber();

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d', { alpha: false });
        const profile = resolveProfile(visualPerformance);
        let animationFrameId;
        let lastFrameTime = 0;
        let t = 0;
        let width = 0;
        let height = 0;
        let panels = [];
        let particles = [];
        let staticCanvas = null;

        const drawTrianglePattern = (targetCtx) => {
            const size = profile.staticOnly ? 220 : 180;
            const cols = Math.ceil(width / size) + 2;
            const rows = Math.ceil(height / (size * 0.866)) + 2;
            const tones = [
                'rgba(200, 220, 240, 0.15)',
                'rgba(215, 230, 248, 0.08)',
                'rgba(185, 210, 235, 0.02)',
                'rgba(230, 242, 255, 0.20)',
                'rgba(210, 228, 245, 0.08)',
            ];

            for (let row = -1; row < rows; row++) {
                for (let col = -1; col < cols; col++) {
                    const x = col * size;
                    const y = row * size * 0.866;
                    const offset = row % 2 === 0 ? 0 : size / 2;

                    targetCtx.beginPath();
                    targetCtx.moveTo(x + offset, y);
                    targetCtx.lineTo(x + offset + size, y);
                    targetCtx.lineTo(x + offset + size / 2, y + size * 0.866);
                    targetCtx.closePath();
                    targetCtx.fillStyle = tones[(row * cols + col * 2) % tones.length];
                    targetCtx.fill();
                    targetCtx.strokeStyle = 'rgba(150, 190, 230, 0.05)';
                    targetCtx.lineWidth = 0.8;
                    targetCtx.stroke();

                    targetCtx.beginPath();
                    targetCtx.moveTo(x + offset + size, y);
                    targetCtx.lineTo(x + offset + size * 1.5, y + size * 0.866);
                    targetCtx.lineTo(x + offset + size / 2, y + size * 0.866);
                    targetCtx.closePath();
                    targetCtx.fillStyle = tones[(row * cols + col * 2 + 1) % tones.length];
                    targetCtx.fill();
                    targetCtx.strokeStyle = 'rgba(150, 190, 230, 0.04)';
                    targetCtx.lineWidth = 0.8;
                    targetCtx.stroke();
                }
            }
        };

        const buildStaticScene = () => {
            staticCanvas = document.createElement('canvas');
            staticCanvas.width = canvas.width;
            staticCanvas.height = canvas.height;
            const staticCtx = staticCanvas.getContext('2d', { alpha: false });
            staticCtx.setTransform(profile.scale, 0, 0, profile.scale, 0, 0);

            const bg = staticCtx.createLinearGradient(0, 0, width, height);
            bg.addColorStop(0, '#f0f7fd');
            bg.addColorStop(0.5, '#e0eff9');
            bg.addColorStop(1, '#e8f4ff');
            staticCtx.fillStyle = bg;
            staticCtx.fillRect(0, 0, width, height);
            drawTrianglePattern(staticCtx);
        };

        const buildScene = () => {
            panels = [];
            if (!profile.staticOnly) {
                const panelWidth = width / profile.panelCols;
                const panelHeight = height / profile.panelRows;

                for (let r = 0; r <= profile.panelRows; r++) {
                    for (let c = 0; c <= profile.panelCols; c++) {
                        panels.push({
                            cx: c * panelWidth + (Math.random() - 0.5) * panelWidth * 0.3,
                            cy: r * panelHeight + (Math.random() - 0.5) * panelHeight * 0.3,
                            baseW: panelWidth * (0.7 + Math.random() * 0.5),
                            baseH: panelHeight * (0.7 + Math.random() * 0.5),
                            phase: Math.random() * Math.PI * 2,
                            speed: 0.003 + Math.random() * 0.004,
                            brightness: 0.6 + Math.random() * 0.4,
                        });
                    }
                }
            }

            particles = Array.from({ length: profile.particles }, () => ({
                x: Math.random() * width,
                y: Math.random() * height,
                r: 6 + Math.random() * 18,
                sx: (Math.random() - 0.5) * 0.15,
                sy: -(0.04 + Math.random() * 0.2),
                o: 0.04 + Math.random() * 0.12,
            }));
        };

        const resize = () => {
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = Math.max(1, Math.floor(width * profile.scale));
            canvas.height = Math.max(1, Math.floor(height * profile.scale));
            canvas.style.width = `${width}px`;
            canvas.style.height = `${height}px`;
            ctx.setTransform(profile.scale, 0, 0, profile.scale, 0, 0);
            buildStaticScene();
            buildScene();
        };

        const render = () => {
            ctx.clearRect(0, 0, width, height);

            if (staticCanvas) {
                ctx.drawImage(staticCanvas, 0, 0, width, height);
            }

            panels.forEach((panel) => {
                const pulse = Math.sin(t * panel.speed + panel.phase);
                const alpha = (0.35 + pulse * 0.15) * panel.brightness;
                const halfWidth = (panel.baseW / 2) * (1 + pulse * 0.08);
                const halfHeight = (panel.baseH / 2) * (1 + Math.cos(t * panel.speed * 0.7 + panel.phase) * 0.06);
                const radial = ctx.createRadialGradient(panel.cx, panel.cy, 0, panel.cx, panel.cy, Math.max(halfWidth, halfHeight));
                radial.addColorStop(0, `rgba(255,255,255,${(alpha * 0.9).toFixed(3)})`);
                radial.addColorStop(0.4, `rgba(210,235,255,${(alpha * 0.4).toFixed(3)})`);
                radial.addColorStop(1, 'rgba(180,215,255,0)');
                ctx.beginPath();
                ctx.ellipse(panel.cx, panel.cy, halfWidth, halfHeight, 0, 0, Math.PI * 2);
                ctx.fillStyle = radial;
                ctx.fill();
            });

            particles.forEach((particle) => {
                const radial = ctx.createRadialGradient(particle.x, particle.y, 0, particle.x, particle.y, particle.r);
                radial.addColorStop(0, `rgba(0,136,204,${particle.o})`);
                radial.addColorStop(1, 'rgba(0,136,204,0)');
                ctx.beginPath();
                ctx.arc(particle.x, particle.y, particle.r, 0, Math.PI * 2);
                ctx.fillStyle = radial;
                ctx.fill();

                particle.x += particle.sx;
                particle.y += particle.sy;
                if (particle.y < -30) particle.y = height + 30;
                if (particle.x < -30) particle.x = width + 30;
                if (particle.x > width + 30) particle.x = -30;
            });

            t++;
        };

        const animate = (time = 0) => {
            const frameInterval = 1000 / profile.fps;

            if (time - lastFrameTime >= frameInterval) {
                render();
                lastFrameTime = time;
            }

            animationFrameId = requestAnimationFrame(animate);
        };

        const handleVisibilityChange = () => {
            if (document.hidden) {
                cancelAnimationFrame(animationFrameId);
                return;
            }
            lastFrameTime = 0;
            if (!profile.staticOnly) {
                animationFrameId = requestAnimationFrame(animate);
            }
        };

        window.addEventListener('resize', resize);
        document.addEventListener('visibilitychange', handleVisibilityChange);
        resize();
        render();

        if (!profile.staticOnly) {
            animationFrameId = requestAnimationFrame(animate);
        }

        return () => {
            window.removeEventListener('resize', resize);
            document.removeEventListener('visibilitychange', handleVisibilityChange);
            cancelAnimationFrame(animationFrameId);
        };
    }, [visualPerformance]);

    return (
        <canvas
            ref={canvasRef}
            style={{ position: 'fixed', top: 0, left: 0, zIndex: -1 }}
        />
    );
}

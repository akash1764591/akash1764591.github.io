(() => {
    const canvas = document.querySelector('.orbital-field');
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    const article = document.documentElement.classList.contains('article-page');
    const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
    const finePointer = matchMedia('(pointer: fine)').matches;
    const trailStep = 16;
    const clamp = (n, low, high) => Math.max(low, Math.min(high, n));
    const hash = (x, y) => {
        let n = Math.imul(x + 17, 374761393) + Math.imul(y + 31, 668265263);
        n = Math.imul(n ^ n >>> 13, 1274126177);
        return ((n ^ n >>> 16) >>> 0) / 4294967295;
    };

    let width = 1, height = 1, trailWidth = 1, trailHeight = 1;
    let trail = new Float32Array(0), nextTrail = new Float32Array(0);
    let particles = [], pointer = null, previousFrame = 0;
    const frameDelay = finePointer ? article ? 42 : 33 : 66;

    function resize() {
        width = innerWidth;
        height = innerHeight;
        trailWidth = Math.ceil(width / trailStep);
        trailHeight = Math.ceil(height / trailStep);
        trail = new Float32Array(trailWidth * trailHeight * 3);
        nextTrail = new Float32Array(trail.length);
        const ratio = Math.min(devicePixelRatio || 1, 1.5);
        canvas.width = Math.round(width * ratio);
        canvas.height = Math.round(height * ratio);
        ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
        const count = clamp(Math.round(width * height / (article ? 460 : 340)), 330, article ? 750 : 1050);
        particles = Array.from({ length: count }, (_, i) => {
            const angle = hash(i, 1) * Math.PI * 2;
            const band = .4 + (i % 4) * .2 + (hash(i, 2) - .5) * .13;
            return {
                x: width * .62 + Math.cos(angle) * width * band * .52,
                y: height * .48 + Math.sin(angle) * height * band * .65,
                speed: .55 + hash(i, 3) * 1.15,
                tint: hash(i, 4)
            };
        });
        pointer = null;
        draw(0, 0);
    }

    function wake(x, y) {
        const tx = clamp(Math.floor(x / trailStep), 0, trailWidth - 1);
        const ty = clamp(Math.floor(y / trailStep), 0, trailHeight - 1);
        const i = (ty * trailWidth + tx) * 3;
        return { x: trail[i], y: trail[i + 1], energy: trail[i + 2] };
    }

    function paintTrail(from, to) {
        const dx = to.x - from.x, dy = to.y - from.y;
        const distance = Math.hypot(dx, dy);
        if (distance < 1) return;
        const radius = Math.max(95, Math.min(width, height) * .17) / trailStep;
        const segments = Math.max(1, Math.ceil(distance / 25));
        for (let segment = 0; segment <= segments; segment++) {
            const cx = (from.x + dx * segment / segments) / trailStep;
            const cy = (from.y + dy * segment / segments) / trailStep;
            for (let y = Math.max(1, Math.floor(cy - radius)); y <= Math.min(trailHeight - 2, Math.ceil(cy + radius)); y++) {
                for (let x = Math.max(1, Math.floor(cx - radius)); x <= Math.min(trailWidth - 2, Math.ceil(cx + radius)); x++) {
                    const d = Math.hypot((x - cx) / radius, (y - cy) / radius);
                    if (d >= 1) continue;
                    const force = (1 - d * d) ** 2 * .48;
                    const i = (y * trailWidth + x) * 3;
                    trail[i] = clamp(trail[i] + dx / distance * force, -1, 1);
                    trail[i + 1] = clamp(trail[i + 1] + dy / distance * force, -1, 1);
                    trail[i + 2] = clamp(trail[i + 2] + force, 0, 1);
                }
            }
        }
    }

    function fadeTrail() {
        for (let y = 1; y < trailHeight - 1; y++) {
            for (let x = 1; x < trailWidth - 1; x++) {
                const i = (y * trailWidth + x) * 3;
                for (let channel = 0; channel < 3; channel++) {
                    nextTrail[i + channel] = (trail[i + channel] * .68 + (
                        trail[i + channel - 3] + trail[i + channel + 3] +
                        trail[i + channel - trailWidth * 3] + trail[i + channel + trailWidth * 3]
                    ) * .08) * .968;
                }
            }
        }
        [trail, nextTrail] = [nextTrail, trail];
    }

    function draw(time, delta) {
        ctx.clearRect(0, 0, width, height);
        ctx.lineCap = 'round';
        const particleColor = document.documentElement.classList.contains('orbital-dark') ? '200, 209, 219' : '10, 52, 207';
        const colorStrength = document.documentElement.classList.contains('orbital-dark') ? 1.08 : 1;
        const pace = delta ? Math.min(2, delta * 45) : 0;
        for (const particle of particles) {
            const x = particle.x, y = particle.y;
            const influence = wake(x, y);
            const nx = (x - width * .62) / Math.max(width * .52, 1);
            const ny = (y - height * .48) / Math.max(height * .65, 1);
            const vx = -ny * 1.7 + .18 * Math.sin(time + x * .01) + influence.x * 2.4;
            const vy = nx * 1.05 + influence.y * 2.4;
            particle.x += vx * particle.speed * pace;
            particle.y += vy * particle.speed * pace;
            if (particle.x > width + 14) particle.x = -14;
            if (particle.x < -14) particle.x = width + 14;
            if (particle.y > height + 14) particle.y = -14;
            if (particle.y < -14) particle.y = height + 14;

            const alpha = clamp((.22 + particle.tint * .36 + influence.energy * .26) * 1.05, 0, .95);
            const thickness = 1 + particle.tint * .5;
            ctx.fillStyle = 'rgba(' + particleColor + ', ' + alpha * colorStrength + ')';
            if (particle.tint <= .8) {
                ctx.beginPath();
                ctx.arc(x, y, thickness, 0, Math.PI * 2);
                ctx.fill();
            } else {
                const magnitude = Math.max(.1, Math.hypot(vx, vy));
                ctx.lineWidth = thickness;
                ctx.strokeStyle = ctx.fillStyle;
                ctx.beginPath();
                ctx.moveTo(x, y);
                ctx.lineTo(x - vx / magnitude * 2, y - vy / magnitude * 2);
                ctx.stroke();
            }
        }
    }

    function frame(timestamp) {
        requestAnimationFrame(frame);
        if (document.hidden || timestamp - previousFrame < frameDelay) return;
        const delta = previousFrame ? (timestamp - previousFrame) / 1000 : 0;
        previousFrame = timestamp;
        fadeTrail();
        draw(timestamp * .001, delta);
    }

    if (finePointer && !reduced) {
        window.addEventListener('pointermove', event => {
            const next = { x: event.clientX, y: event.clientY };
            if (pointer) paintTrail(pointer, next);
            pointer = next;
        }, { passive: true });
        document.addEventListener('pointerleave', () => { pointer = null; });
    }
    window.addEventListener('resize', resize, { passive: true });
    document.addEventListener('site-theme-change', () => draw(0, 0));
    resize();
    if (!reduced) requestAnimationFrame(frame);
})();

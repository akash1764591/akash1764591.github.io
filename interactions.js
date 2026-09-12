(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const finePointer = window.matchMedia('(pointer: fine)').matches;

    if (finePointer && !reduceMotion) {
        document.querySelectorAll('.article-body figure').forEach((figure) => {
            figure.addEventListener('pointermove', (event) => {
                const rect = figure.getBoundingClientRect();
                const x = ((event.clientX - rect.left) / rect.width - 0.5) * 2;
                const y = ((event.clientY - rect.top) / rect.height - 0.5) * 2;
                figure.style.setProperty('--figure-x', `${x * 3}px`);
                figure.style.setProperty('--figure-y', `${y * 3}px`);
            });
            figure.addEventListener('pointerleave', () => {
                figure.style.setProperty('--figure-x', '0px');
                figure.style.setProperty('--figure-y', '0px');
            });
        });
    }

    // mesh drifts very slightly toward the pointer, on top of its own animation
    if (finePointer && !reduceMotion) {
        const root = document.documentElement;
        let pending = false, px = 0, py = 0;
        window.addEventListener('pointermove', (event) => {
            px = (event.clientX / window.innerWidth - 0.5) * 22;
            py = (event.clientY / window.innerHeight - 0.5) * 22;
            if (pending) return;
            pending = true;
            requestAnimationFrame(() => {
                root.style.setProperty('--mesh-px', `${px.toFixed(1)}px`);
                root.style.setProperty('--mesh-py', `${py.toFixed(1)}px`);
                pending = false;
            });
        }, { passive: true });
    }

    const article = document.querySelector('.article-body');
    if (article) {
        const progress = document.createElement('div');
        progress.className = 'reading-progress';
        progress.setAttribute('aria-hidden', 'true');
        progress.innerHTML = '<span></span>';
        document.body.prepend(progress);

        const updateProgress = () => {
            const scrollable = document.documentElement.scrollHeight - window.innerHeight;
            const value = scrollable > 0 ? Math.min(1, Math.max(0, window.scrollY / scrollable)) : 0;
            progress.style.setProperty('--reading-progress', value);
        };
        updateProgress();
        window.addEventListener('scroll', updateProgress, { passive: true });

        if (!reduceMotion && 'IntersectionObserver' in window) {
            const revealItems = article.querySelectorAll(':scope > h2, :scope > figure, :scope > .math-display');
            revealItems.forEach((item) => item.classList.add('reveal-on-scroll'));
            const observer = new IntersectionObserver((entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-visible');
                        observer.unobserve(entry.target);
                    }
                });
            }, { rootMargin: '0px 0px -9% 0px', threshold: 0.08 });
            revealItems.forEach((item) => observer.observe(item));
        }
    }
})();

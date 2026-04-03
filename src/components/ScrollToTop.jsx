import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
    const { pathname, hash } = useLocation();

    useEffect(() => {
        if (hash) {
            const elementId = hash.replace('#', '');
            const element = document.getElementById(elementId);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                return;
            }
        }

        window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    }, [pathname, hash]);

    useEffect(() => {
        const targets = Array.from(document.querySelectorAll('main section, footer'));
        if (!targets.length) return undefined;

        const disableReveal =
            window.matchMedia('(max-width: 767px)').matches ||
            window.matchMedia('(prefers-reduced-motion: reduce)').matches;

        targets.forEach((element) => {
            element.classList.add('scroll-fade-target');
            element.classList.remove('is-visible');
        });

        if (disableReveal) {
            targets.forEach((element) => {
                element.classList.add('is-visible');
            });
            return undefined;
        }

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-visible');
                        observer.unobserve(entry.target);
                    }
                });
            },
            {
                threshold: 0.1,
                rootMargin: '0px 0px -6% 0px'
            }
        );

        targets.forEach((element) => {
            const bounds = element.getBoundingClientRect();
            const shouldBeVisibleNow = bounds.top < window.innerHeight * 0.9;

            if (shouldBeVisibleNow) {
                element.classList.add('is-visible');
            } else {
                observer.observe(element);
            }
        });

        return () => observer.disconnect();
    }, [pathname]);

    return null;
};

export default ScrollToTop;

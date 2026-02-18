import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    useEffect(() => {
        const targets = Array.from(document.querySelectorAll('main section, footer'));
        if (!targets.length) return undefined;

        targets.forEach((element) => {
            element.classList.add('scroll-fade-target');
            element.classList.remove('is-visible');
        });

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
                threshold: 0.14,
                rootMargin: '0px 0px -8% 0px'
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

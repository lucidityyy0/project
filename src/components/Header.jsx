import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes, FaMoon, FaSun } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import LogoIcon from '../assets/icon.png';

const Header = () => {
  const { t, i18n } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const location = useLocation();

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (ticking) return;

      ticking = true;
      window.requestAnimationFrame(() => {
        const nextValue = window.scrollY > 20;
        setIsScrolled((prev) => (prev === nextValue ? prev : nextValue));
        ticking = false;
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const shouldUseDark = savedTheme === 'dark';

    setIsDarkMode(shouldUseDark);
    document.documentElement.classList.toggle('dark', shouldUseDark);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    document.body.style.overflow = 'unset';
  }, [location]);

  useEffect(() => {
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => {
      const next = !prev;
      document.body.style.overflow = next ? 'hidden' : 'unset';
      return next;
    });
  };

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const toggleTheme = () => {
    setIsDarkMode((prev) => {
      const next = !prev;
      document.documentElement.classList.toggle('dark', next);
      localStorage.setItem('theme', next ? 'dark' : 'light');
      return next;
    });
  };

  const navLinks = [
    { hash: '#home', label: t('header.home') },
    { hash: '#services', label: t('header.services') },
    { hash: '#team', label: t('header.team') },
    { hash: '#about', label: t('about.mission.title') },
    { hash: '#advice', label: t('header.advice') },
    { hash: '#contact', label: t('header.contact') }
  ];

  const activeHash = location.hash || '#home';

  return (
    <header className={`sticky top-0 left-0 right-0 z-50 bg-white transition-all duration-300 ${isScrolled ? 'shadow-md py-2' : 'py-4 sm:py-6'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 sm:gap-3 group min-w-0">
            <img src={LogoIcon} alt={t('header.brandName')} className="w-10 h-10 sm:w-12 sm:h-12" />
            <div className="flex flex-col items-start sm:items-center min-w-0">
              <span className="text-base sm:text-2xl font-bold text-gray-900 tracking-tight leading-none whitespace-nowrap">
                {t('header.brandName')}
              </span>
              <span className="hidden sm:block text-xs sm:text-sm text-gray-500 font-medium tracking-wide whitespace-nowrap">{t('header.dentalCenter')}</span>
            </div>
          </Link>

          <nav className="hidden xl:flex items-center gap-4 2xl:gap-7">
            {navLinks.map((link) => (
              <Link
                key={link.hash}
                to={`/${link.hash}`}
                className={`flex items-center gap-1 font-medium text-base 2xl:text-lg transition-colors relative group whitespace-nowrap ${
                  activeHash === link.hash ? 'text-primary-600' : 'text-gray-600 hover:text-primary-600'
                }`}
              >
                {link.label}
                <span
                  className={`absolute -bottom-1 left-0 h-0.5 bg-primary-600 transition-all duration-300 ${
                    activeHash === link.hash ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                ></span>
              </Link>
            ))}
          </nav>

          <div className="hidden xl:flex items-center gap-3 2xl:gap-5">
            <div className="flex items-center gap-2">
              <button
                onClick={() => changeLanguage('fr')}
                className={`font-medium transition-colors ${i18n.language === 'fr' ? 'text-primary-600' : 'text-gray-500 hover:text-primary-600'}`}
              >
                FR
              </button>
              <span className="text-gray-300">|</span>
              <button
                onClick={() => changeLanguage('en')}
                className={`font-medium transition-colors ${i18n.language === 'en' ? 'text-primary-600' : 'text-gray-500 hover:text-primary-600'}`}
              >
                EN
              </button>
              <button
                onClick={toggleTheme}
                className="theme-toggle ml-1 inline-flex items-center justify-center w-8 h-8 rounded-full text-gray-600 hover:text-primary-600 hover:bg-gray-100 transition-colors"
                aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
                title={isDarkMode ? 'Light mode' : 'Dark mode'}
              >
                  {isDarkMode ? <FaSun className="text-sm" /> : <FaMoon className="text-sm" />}
                </button>
            </div>

            <Link
              to="/#contact"
              className="bg-primary-light-pink text-gray-900 px-4 2xl:px-6 py-2.5 2xl:py-3 rounded-full text-base font-bold hover:bg-primary-200 transition-all shadow-lg hover:shadow-primary-200 transform hover:-translate-y-0.5 whitespace-nowrap"
            >
              {t('header.bookAppointment')}
            </Link>
          </div>

          <button
            className="xl:hidden text-gray-900 text-2xl p-2 hover:bg-gray-50 rounded-lg transition-colors"
            onClick={toggleMobileMenu}
            aria-label={t('header.toggleMenu')}
          >
            <motion.div
              initial={false}
              animate={{ rotate: isMobileMenuOpen ? 90 : 0 }}
              transition={{ duration: 0.2 }}
            >
              {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
            </motion.div>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="xl:hidden bg-white border-t border-gray-100 shadow-xl overflow-hidden max-h-[calc(100vh-72px)] overflow-y-auto"
          >
            <nav className="container mx-auto px-4 py-6 space-y-2">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.hash}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Link
                    to={`/${link.hash}`}
                    className={`block px-4 py-3 rounded-xl font-medium flex justify-between items-center transition-colors ${
                      activeHash === link.hash
                        ? 'bg-primary-50 text-primary-600'
                        : 'text-gray-700 hover:bg-primary-50 hover:text-primary-600'
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}

              <motion.div
                className="pt-6 space-y-4 border-t border-gray-100 mt-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <div className="flex items-center justify-center gap-4 pb-2">
                  <button
                    onClick={() => changeLanguage('fr')}
                    className={`font-medium transition-colors ${i18n.language === 'fr' ? 'text-primary-600' : 'text-gray-500 hover:text-primary-600'}`}
                  >
                    FR
                  </button>
                  <span className="text-gray-300">|</span>
                  <button
                    onClick={() => changeLanguage('en')}
                    className={`font-medium transition-colors ${i18n.language === 'en' ? 'text-primary-600' : 'text-gray-500 hover:text-primary-600'}`}
                  >
                    EN
                  </button>
                  <button
                    onClick={toggleTheme}
                    className="theme-toggle inline-flex items-center justify-center w-8 h-8 rounded-full text-gray-600 hover:text-primary-600 hover:bg-gray-100 transition-colors"
                    aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
                    title={isDarkMode ? 'Light mode' : 'Dark mode'}
                  >
                    {isDarkMode ? <FaSun className="text-sm" /> : <FaMoon className="text-sm" />}
                  </button>
                </div>
                <Link
                  to="/#contact"
                  className="btn bg-primary-light-pink text-gray-900 w-full justify-center rounded-xl font-bold hover:bg-primary-200 py-4 shadow-lg"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {t('header.bookAppointment')}
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;

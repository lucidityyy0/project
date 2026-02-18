import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaCalendarAlt, FaWhatsapp } from 'react-icons/fa';

import { useTranslation } from 'react-i18next';

const CTA = ({
  title,
  subtitle,
  showWhatsApp = true
}) => {
  const { t } = useTranslation();

  const displayTitle = title || t('cta.title');
  const displaySubtitle = subtitle || t('cta.subtitle');
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-primary-600 text-white relative overflow-hidden rounded-[3rem] mx-4 my-8">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxkZWZzPjxwYXR0ZXJuIGlkPSJhIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiPjxjaXJjbGUgY3g9IjIwIiBjeT0iMjAiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4xKSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNhKSIvPjwvc3ZnPg==')] opacity-10"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.h2
          className="text-2xl sm:text-4xl md:text-5xl font-light mb-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {displayTitle}
        </motion.h2>

        <motion.p
          className="text-lg sm:text-xl mb-8 opacity-90 max-w-2xl mx-auto px-4 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          {displaySubtitle}
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center px-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              to="/contact"
              className="bg-white text-primary-600 text-lg px-8 py-4 rounded-full font-bold shadow-lg hover:shadow-xl inline-flex items-center justify-center gap-2 transition-all duration-300"
            >
              <FaCalendarAlt /> {t('cta.button')}
            </Link>
          </motion.div>

          {showWhatsApp && (
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <a
                href="https://wa.me/212XXXXXXXXX"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-green-600 text-lg px-8 py-4 rounded-full font-bold inline-flex items-center justify-center gap-2 transition-all duration-300"
              >
                <FaWhatsapp /> {t('cta.whatsapp')}
              </a>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;

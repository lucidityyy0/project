import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';

import { useTranslation } from 'react-i18next';

const WhatsAppButton = () => {
  const { t } = useTranslation();
  const phoneNumber = '212522213566';
  const message = encodeURIComponent(t('whatsappButton.message'));

  return (
    <motion.a
      href={`https://wa.me/${phoneNumber}?text=${message}`}
      className="fixed bottom-6 right-6 w-14 h-14 sm:w-16 sm:h-16 bg-[#25D366] hover:bg-[#128C7E] text-white rounded-full flex items-center justify-center shadow-2xl hover:shadow-3xl transition-all z-50 group"
      target="_blank"
      rel="noopener noreferrer"
      aria-label={t('whatsappButton.aria')}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 200 }}
    >
      <motion.div
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
      >
        <FaWhatsapp className="text-2xl sm:text-3xl" />
      </motion.div>

      {/* Pulse effect */}
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-75"></span>

      {/* Tooltip */}
      <span className="hidden sm:block absolute right-full mr-3 px-3 py-2 bg-gray-900 text-white text-sm font-medium rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none shadow-xl">
        {t('whatsappButton.tooltip')}
      </span>
    </motion.a>
  );
};

export default WhatsAppButton;

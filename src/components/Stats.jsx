import { motion } from 'framer-motion';
import { FaAward, FaUsers, FaStar, FaTooth } from 'react-icons/fa';

import { useTranslation } from 'react-i18next';

const Stats = () => {
  const { t } = useTranslation();
  const stats = [
    {
      icon: <FaAward />,
      number: '17+',
      label: t('stats.yearsExperience'),
      color: 'bg-accent-100 text-primary-600'
    },
    {
      icon: <FaUsers />,
      number: '5000+',
      label: t('stats.satisfiedPatients'),
      color: 'bg-accent-50 text-primary-600'
    },
    {
      icon: <FaStar />,
      number: '4.9',
      label: t('stats.googleReviews'),
      color: 'bg-accent-100 text-primary-600'
    },
    {
      icon: <FaTooth />,
      number: '100%',
      label: t('stats.modernEquipment'),
      color: 'bg-accent-50 text-primary-600'
    }
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white text-primary-600 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center p-4 sm:p-6 lg:p-8 hover:-translate-y-2 transition-all duration-300 group"
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.1,
                duration: 0.5,
                type: "spring",
                stiffness: 200
              }}
            >
              <motion.div
                className={`w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 sm:mb-6 rounded-full flex items-center justify-center text-2xl sm:text-3xl shadow-lg ${stat.color}`}
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{
                  repeat: Infinity,
                  duration: 3,
                  delay: index * 0.2
                }}
              >
                {stat.icon}
              </motion.div>

              <motion.div
                className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2 sm:mb-3"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 + 0.2 }}
              >
                {stat.number}
              </motion.div>

              <div className="text-sm sm:text-base font-medium opacity-80">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;

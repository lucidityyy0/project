import { motion } from 'framer-motion';
import { FaHeart, FaUsers, FaAward, FaShieldAlt, FaTooth } from 'react-icons/fa';
import Stats from '../components/Stats';
import { useTranslation } from 'react-i18next';

const About = () => {
  const { t } = useTranslation();
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <div className="font-sans text-primary-600">
      {/* Hero Section */}
      <section className="relative pt-24 sm:pt-32 pb-14 sm:pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="uppercase tracking-widest text-sm font-semibold mb-4 block text-accent-500">
                {t('about.hero.subtitle')}
              </span>
              <h1 className="text-2xl sm:text-3xl md:text-5xl font-light mb-6 leading-tight" dangerouslySetInnerHTML={{ __html: t('about.hero.title') }} />
              <p className="text-sm sm:text-base lg:text-lg text-gray-600 mb-8 leading-relaxed">
                {t('about.hero.description')}
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-4 bg-accent-100 px-6 py-4 rounded-2xl">
                  <FaTooth className="text-2xl" />
                  <div>
                    <span className="block font-bold text-xl">20+</span>
                    <span className="text-sm">{t('stats.yearsExperience')}</span>
                  </div>
                </div>
                <div className="flex items-center gap-4 bg-accent-50 px-6 py-4 rounded-2xl">
                  <FaUsers className="text-2xl" />
                  <div>
                    <span className="block font-bold text-xl">5000+</span>
                    <span className="text-sm">{t('stats.satisfiedPatients')}</span>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt={t('about.media.heroImage')}
                  className="w-full h-full object-cover"
                  loading="eager"
                  decoding="async"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-accent-100 rounded-full -z-10 blur-2xl opacity-60"></div>
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-accent-500 rounded-full -z-10 blur-2xl opacity-40"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-14 sm:py-20 bg-primary-600 text-white rounded-t-[3rem] relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.h2
              className="text-2xl sm:text-3xl md:text-5xl font-light mb-6"
              {...fadeInUp}
            >
              {t('about.mission.title')}
            </motion.h2>
            <motion.p
              className="text-sm sm:text-base lg:text-lg opacity-90 leading-relaxed"
              {...fadeInUp}
            >
              {t('about.mission.description')}
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: FaHeart, title: t('about.mission.items.benevolence.title'), desc: t('about.mission.items.benevolence.desc') },
              { icon: FaAward, title: t('about.mission.items.excellence.title'), desc: t('about.mission.items.excellence.desc') },
              { icon: FaShieldAlt, title: t('about.mission.items.safety.title'), desc: t('about.mission.items.safety.desc') }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="bg-white/10 backdrop-blur-sm p-8 rounded-[2rem] border border-white/20 hover:bg-white/20 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
              >
                <div className="w-16 h-16 bg-accent-100 text-primary-600 rounded-2xl flex items-center justify-center text-3xl mb-6">
                  <item.icon />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold mb-4">{item.title}</h3>
                <p className="opacity-80 leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="py-14 sm:py-20 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              className="order-2 lg:order-1"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative rounded-[3rem] overflow-hidden shadow-xl h-[420px] sm:h-[520px] xl:h-[600px]">
                <img
                  src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt={t('about.media.approachImage')}
                  className="w-full h-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-600/80 to-transparent flex items-end p-6 sm:p-10">
                  <div className="text-white">
                    <p className="text-lg sm:text-2xl font-light italic">{t('about.approach.quote')}</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="order-1 lg:order-2"
              {...fadeInUp}
            >
              <span className="uppercase tracking-widest text-sm font-semibold mb-4 block text-accent-500">
                {t('about.approach.subtitle')}
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-5xl font-light mb-8 text-primary-600" dangerouslySetInnerHTML={{ __html: t('about.approach.title') }} />

              <div className="space-y-8">
                {[
                  { num: '01', title: t('about.approach.steps.1.title'), desc: t('about.approach.steps.1.desc') },
                  { num: '02', title: t('about.approach.steps.2.title'), desc: t('about.approach.steps.2.desc') },
                  { num: '03', title: t('about.approach.steps.3.title'), desc: t('about.approach.steps.3.desc') }
                ].map((step, index) => (
                  <div key={index} className="flex gap-6 group">
                    <div className="text-3xl sm:text-4xl font-bold text-accent-100 group-hover:text-accent-500 transition-colors duration-300">
                      {step.num}
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold mb-2 text-primary-600">{step.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <div className="bg-accent-50 py-10">
        <Stats />
      </div>
    </div>
  );
};

export default About;

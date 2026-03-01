import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { FaTooth, FaCheck, FaStar, FaShieldAlt, FaSmile, FaUserMd, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

import BenjellounImg from '../assets/benjelloun.png';
import HassanImg from '../assets/hassan.png';
import DirarImg from '../assets/dirar.png';
import NabilaImg from '../assets/nabila.png';
import GoogleLogo from '../assets/google.png';

import { useTranslation } from 'react-i18next';

const Home = () => {
  const { t } = useTranslation();
  const [isLearnMoreOpen, setIsLearnMoreOpen] = useState(false);
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);

  const bannerImages = [
    'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=1800&q=80',
    'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1800&q=80',
    'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1800&q=80'
  ];

  const bannerSlides = [
    {
      title: t('home.hero.title'),
      subtitle: t('home.hero.subtitle'),
      image: bannerImages[0]
    },
    {
      title: t('home.slider.secondTitle'),
      subtitle: t('home.slider.secondSubtitle'),
      image: bannerImages[1]
    },
    {
      title: t('home.services.title'),
      subtitle: t('home.everythingYouNeed.subtitle'),
      image: bannerImages[2]
    }
  ];

  const activeSlide = bannerSlides[currentSlide] || bannerSlides[0];

  const translatedReviews = t('home.testimonials.reviews', { returnObjects: true });
  const reviews = Array.isArray(translatedReviews) ? translatedReviews : [];
  const activeReview = reviews[currentReviewIndex] || { name: '', text: '', rating: 5 };
  const reviewImages = [HassanImg, DirarImg, BenjellounImg, NabilaImg];

  const translatedTeamMembers = t('teamPage.members', { returnObjects: true });
  const teamMembers = Array.isArray(translatedTeamMembers) ? translatedTeamMembers : [];
  const mainDoctors = teamMembers.slice(0, 2);
  const supportTeam = teamMembers.slice(2);
  const mainDoctorImages = [NabilaImg, HassanImg];

  useEffect(() => {
    if (!bannerSlides.length) return undefined;
    const timer = setInterval(() => {
      setCurrentSlide((prevIndex) => (prevIndex + 1) % bannerSlides.length);
    }, 5500);
    return () => clearInterval(timer);
  }, [bannerSlides.length]);

  useEffect(() => {
    if (!reviews.length) return undefined;
    const timer = setInterval(() => {
      setCurrentReviewIndex((prevIndex) => (prevIndex + 1) % reviews.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [reviews.length]);

  const nextSlide = () => {
    setCurrentSlide((prevIndex) => (prevIndex + 1) % bannerSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevIndex) => (prevIndex - 1 + bannerSlides.length) % bannerSlides.length);
  };

  return (
    <div className="font-sans text-gray-800 overflow-x-hidden">
      {/* Moving Banner */}
      <section className="relative h-[72vh] min-h-[520px] max-h-[850px] overflow-hidden bg-gray-900">
        <AnimatePresence mode="wait">
          <motion.img
            key={currentSlide}
            src={activeSlide.image}
            alt={t('home.media.heroPatient')}
            className="absolute inset-0 w-full h-full object-cover"
            initial={{ opacity: 0, scale: 1.08 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.02 }}
            transition={{ duration: 0.8 }}
          />
        </AnimatePresence>

        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/45 to-black/25" />

        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-end pb-10 sm:pb-14">
          <div className="max-w-3xl text-white">
            <h1
              className="text-2xl sm:text-3xl lg:text-5xl font-light leading-[1.1] mb-6"
              dangerouslySetInnerHTML={{ __html: activeSlide.title }}
            />
            <p className="text-base sm:text-lg text-white/90 leading-relaxed max-w-2xl mb-8">
              {activeSlide.subtitle}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/contact" className="bg-white text-gray-900 px-7 py-3 rounded-full font-semibold hover:bg-primary-100 transition-colors">
                {t('home.hero.bookAppointment')}
              </Link>
              <Link to="/services" className="border border-white/50 text-white px-7 py-3 rounded-full font-semibold hover:bg-white hover:text-gray-900 transition-colors">
                {t('home.services.allServices')}
              </Link>
            </div>
          </div>

          <div className="mt-8 flex items-center justify-between">
            <div className="flex gap-3">
              <button
                onClick={prevSlide}
                className="w-11 h-11 rounded-full bg-white/20 hover:bg-white/35 text-white flex items-center justify-center backdrop-blur-sm transition-colors"
                aria-label={t('gallery.navigation.previous')}
              >
                <FaChevronLeft />
              </button>
              <button
                onClick={nextSlide}
                className="w-11 h-11 rounded-full bg-white/20 hover:bg-white/35 text-white flex items-center justify-center backdrop-blur-sm transition-colors"
                aria-label={t('gallery.navigation.next')}
              >
                <FaChevronRight />
              </button>
            </div>

            <div className="flex gap-2">
              {bannerSlides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${index === currentSlide ? 'bg-white w-10' : 'bg-white/45 w-3 hover:bg-white/70'}`}
                  aria-label={t('gallery.navigation.goToCase', { number: index + 1 })}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 lg:py-20 bg-gray-50 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl lg:text-4xl font-light text-gray-900 mb-4">
              {t('home.testimonials.text')}
            </h2>
          </div>

          <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12 max-w-6xl mx-auto">
            {/* Left: Rating Card */}
            <div className="bg-white p-10 rounded-[2.5rem] shadow-xl w-full lg:w-1/3 flex flex-col items-center text-center relative z-10">
              <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mb-6">
                <img src={GoogleLogo} alt={t('home.testimonials.googleAlt')} className="w-10 h-10 object-contain" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{t('header.brandName')}</h3>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-4xl font-bold text-gray-900">4.9</span>
                <div className="flex text-yellow-400 text-xl">
                  {[1, 2, 3, 4, 5].map(i => <FaStar key={i} />)}
                </div>
              </div>
              <p className="text-gray-500 text-sm mb-8">{t('home.testimonials.note')}</p>

              <a href="https://g.page/r/..." target="_blank" rel="noopener noreferrer" className="bg-blue-600 text-white px-8 py-3 rounded-full font-medium hover:bg-blue-700 transition-colors shadow-lg shadow-blue-200 flex items-center gap-2">
                <span className="text-sm">{t('home.testimonials.rateUs')}</span>
                <img src="https://www.gstatic.com/images/branding/googlelogo/svg/googlelogo_light_clr_74x24px.svg" alt={t('home.testimonials.googleAlt')} className="h-5 opacity-90" />
              </a>
            </div>

            {/* Right: Carousel */}
            <div className="w-full lg:w-2/3 relative min-h-[360px] lg:h-[320px] flex flex-col">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentReviewIndex}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0"
                >
                  <div className="bg-white p-10 rounded-[2.5rem] shadow-lg h-full flex flex-col justify-center relative">
                    <div className="absolute top-8 right-8">
                      <img src={GoogleLogo} alt={t('home.testimonials.googleAlt')} className="w-8 h-8 opacity-50" />
                    </div>

                    <div className="flex items-center gap-6 mb-8">
                      <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-gray-50 shadow-sm flex-shrink-0">
                        {reviewImages[currentReviewIndex] ? (
                          <img src={reviewImages[currentReviewIndex]} alt={activeReview.name} className="w-full h-full object-cover" />
                        ) : (
                          <div className="w-full h-full bg-primary-50 flex items-center justify-center text-primary-300 font-bold text-2xl">
                            {activeReview.name?.charAt(0)}
                          </div>
                        )}
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-gray-900 mb-1">{activeReview.name}</h4>
                        <div className="flex text-yellow-400 text-sm mb-1">
                          {[...Array(activeReview.rating || 5)].map((_, i) => <FaStar key={i} />)}
                        </div>
                        <p className="text-gray-400 text-xs">{t('home.testimonials.recent')}</p>
                      </div>
                    </div>

                    <p className="text-gray-600 text-lg leading-relaxed italic">
                      "{activeReview.text}"
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>

              <div className="absolute -bottom-12 left-0 right-0 flex justify-center gap-3">
                {reviews.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentReviewIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentReviewIndex ? 'bg-primary-600 w-8' : 'bg-gray-300 hover:bg-primary-300'}`}
                    aria-label={t('home.testimonials.goToReview', { number: index + 1 })}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Alternating Team Section */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="uppercase tracking-[0.2em] text-xs font-semibold text-gray-400">{t('home.team.subtitle')}</span>
            <h2 className="text-3xl lg:text-4xl font-light text-gray-900 mt-4 leading-tight">{t('home.team.title')}</h2>
          </div>

          <div className="space-y-12 lg:space-y-16">
            {mainDoctors.map((member, index) => {
              const reversed = index % 2 === 1;
              return (
                <article key={index} className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                  <div className={reversed ? 'lg:order-2' : ''}>
                    <div className="rounded-[2rem] overflow-hidden shadow-xl h-[250px] sm:h-[300px] lg:h-[360px] bg-gray-100">
                      <img src={mainDoctorImages[index % mainDoctorImages.length]} alt={member.name} className="w-full h-full object-cover" />
                    </div>
                  </div>

                  <div className={reversed ? 'lg:order-1' : ''}>
                    <div className="bg-gray-50 rounded-[2rem] p-8 lg:p-10 border border-gray-100">
                      <p className="text-primary-600 text-sm sm:text-base font-semibold uppercase tracking-wider mb-3">{member.role}</p>
                      <h3 className="text-3xl sm:text-4xl font-light text-gray-900 mb-4 leading-tight">{member.name}</h3>
                      <p className="text-gray-600 leading-relaxed text-base sm:text-lg">{member.description}</p>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

          <div className="mt-12 lg:mt-16 max-w-5xl mx-auto">
            <div className="rounded-[2rem] overflow-hidden shadow-xl h-[260px] sm:h-[320px] lg:h-[420px] bg-gray-100">
              <img
                src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1600&q=80"
                alt={t('home.media.teamGroup')}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="mt-6">
              <h3 className="text-xl sm:text-2xl font-light text-gray-900 mb-3">{t('home.team.supportTitle')}</h3>
              <p className="text-sm text-gray-500 mb-5">{t('home.team.supportSubtitle')}</p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {supportTeam.map((member, index) => (
                  <div key={index} className="bg-gray-50 border border-gray-100 rounded-xl px-4 py-3">
                    <p className="text-sm font-semibold text-gray-900">{member.name}</p>
                    <p className="text-xs text-gray-500 mt-1">{member.role}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="text-center mt-14">
            <Link to="/equipe" className="bg-primary-100 text-primary-700 px-8 py-4 rounded-lg font-medium hover:bg-primary-200 transition-colors">
              {t('home.team.viewAll')}
            </Link>
          </div>
        </div>
      </section>

      {/* Services (Dark) */}
      <section className="py-20 lg:py-28 bg-primary-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <span className="uppercase tracking-[0.2em] text-xs font-medium text-primary-300 mb-4 block">{t('home.services.expertise')}</span>
              <h2 className="text-3xl lg:text-4xl font-light">{t('home.services.title')}</h2>
            </div>
            <Link to="/services" className="hidden md:inline-block text-white border-b border-white/30 pb-1 hover:text-primary-200 hover:border-primary-200 transition-colors">
              {t('home.services.allServices')}
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: t('servicesPage.categories.orthodontics'), desc: t('servicesPage.descriptions.orthodontics'), icon: FaTooth },
              { title: t('servicesPage.categories.surgery'), desc: t('servicesPage.descriptions.surgery'), icon: FaUserMd },
              { title: t('servicesPage.categories.esthetic'), desc: t('servicesPage.descriptions.esthetic'), icon: FaSmile },
              { title: t('servicesPage.categories.general'), desc: t('servicesPage.descriptions.general'), icon: FaShieldAlt }
            ].map((service, index) => (
              <div key={index} className="bg-white/5 border border-white/10 rounded-[2rem] p-8 hover:bg-white/10 transition-all duration-300 group cursor-pointer">
                <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center text-2xl mb-6 group-hover:bg-white group-hover:text-primary-900 transition-colors duration-300">
                  <service.icon />
                </div>
                <h3 className="text-2xl font-light mb-4">{service.title}</h3>
                <p className="text-primary-100/80 leading-relaxed mb-8 text-sm sm:text-base">{service.desc}</p>
                <Link to="/services" className="inline-flex items-center text-xs font-bold uppercase tracking-wider hover:text-primary-300 transition-colors">
                  {t('home.services.learnMore')} <span className="ml-2 text-lg">→</span>
                </Link>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center md:hidden">
            <Link to="/services" className="inline-block border border-white/30 rounded-full px-8 py-3 text-white hover:bg-white hover:text-primary-900 transition-colors">
              {t('home.services.allServices')}
            </Link>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 mb-20">
            <div className="lg:w-1/3 pt-4">
              <p className="text-gray-500 text-lg leading-relaxed">{t('home.intro.slogan')}</p>
            </div>
            <div className="lg:w-2/3">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light leading-tight text-gray-900 mb-8">
                {t('home.intro.title')}
              </h2>
              <FaTooth className="text-5xl text-gray-900" />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="flex gap-6">
              <img src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=500&q=80" alt={t('home.media.introOne')} className="rounded-[2rem] w-1/2 h-80 object-cover shadow-lg" />
              <img src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=500&q=80" alt={t('home.media.introTwo')} className="rounded-[2rem] w-1/2 h-80 object-cover mt-16 shadow-lg" />
            </div>

            <div className="lg:pl-8">
              <p className="text-gray-500 text-base sm:text-lg leading-relaxed mb-8">
                {t('home.intro.description')}
              </p>
              <button
                onClick={() => setIsLearnMoreOpen(!isLearnMoreOpen)}
                className="text-gray-900 font-bold flex items-center gap-2 hover:gap-4 transition-all group mb-4"
              >
                {t('home.intro.learnMore')} <span className={`text-xl transition-transform ${isLearnMoreOpen ? 'rotate-90' : 'group-hover:translate-x-1'}`}>→</span>
              </button>

              <AnimatePresence>
                {isLearnMoreOpen && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="overflow-hidden"
                  >
                    <p className="text-gray-600 leading-relaxed bg-white p-6 rounded-2xl shadow-sm border border-gray-100 text-sm sm:text-base">
                      {t('home.intro.extendedDescription')}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="uppercase tracking-[0.2em] text-xs font-medium text-gray-400">{t('home.whyChooseUs.title')}</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: t('home.whyChooseUs.items.tech.title'), desc: t('home.whyChooseUs.items.tech.desc'), icon: 'https://cdn-icons-png.flaticon.com/512/2966/2966334.png' },
              { title: t('home.whyChooseUs.items.painless.title'), desc: t('home.whyChooseUs.items.painless.desc'), icon: 'https://cdn-icons-png.flaticon.com/512/2966/2966456.png' },
              { title: t('home.whyChooseUs.items.transparency.title'), desc: t('home.whyChooseUs.items.transparency.desc'), icon: 'https://cdn-icons-png.flaticon.com/512/2966/2966486.png' },
              { title: t('home.whyChooseUs.items.expertTeam.title'), desc: t('home.whyChooseUs.items.expertTeam.desc'), icon: 'https://cdn-icons-png.flaticon.com/512/2966/2966356.png' }
            ].map((item, index) => (
              <div key={index} className="bg-gray-50 p-10 rounded-[2rem] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full">
                <h3 className="text-2xl font-light text-gray-900 mb-6">{item.title}</h3>
                <p className="text-gray-500 leading-relaxed mb-8 flex-grow text-sm sm:text-base">{item.desc}</p>
                <div className="mt-auto">
                  <img src={item.icon} alt={item.title} className="w-12 h-12 opacity-20 grayscale" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Everything you need */}
      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <div className="rounded-[3rem] overflow-hidden shadow-2xl">
                <img src="https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&w=800&q=80" alt={t('home.media.child')} className="w-full h-auto" />
              </div>
            </div>
            <div className="lg:w-1/2 lg:pl-10">
              <h2 className="text-3xl lg:text-4xl font-light text-gray-900 mb-6 leading-tight" dangerouslySetInnerHTML={{ __html: t('home.everythingYouNeed.title') }} />
              <p className="text-gray-500 mb-10">{t('home.everythingYouNeed.subtitle')}</p>

              <ul className="space-y-6">
                {(t('home.everythingYouNeed.items', { returnObjects: true }) || []).map((item, index) => (
                  <li key={index} className="flex items-center gap-4 text-gray-600">
                    <span className="w-6 h-6 rounded-full bg-primary-50 flex items-center justify-center text-primary-600 text-xs">
                      <FaCheck />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-8 text-gray-400 italic">{t('home.everythingYouNeed.more')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats/Quote */}
      <section className="relative">
        <div className="relative min-h-[500px] lg:h-[700px]">
          <div className="absolute inset-0">
            <img src="https://images.unsplash.com/photo-1600170311833-c2cf5280ce49?auto=format&fit=crop&w=1920&q=80" alt={t('home.media.doctor')} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent"></div>
          </div>
          <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
            <div className="max-w-2xl text-white p-8 lg:p-12 rounded-[2rem] bg-white/10 backdrop-blur-md border border-white/10">
              <FaTooth className="text-4xl mb-6 opacity-80" />
              <h3 className="text-2xl lg:text-4xl font-light leading-snug mb-6">
                {t('home.quote.text')}
              </h3>
              <p className="font-medium opacity-80">{t('home.quote.author')}</p>
            </div>
          </div>
        </div>

        <div className="bg-primary-900 text-white py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center divide-x divide-white/10">
              {[
                { num: '17+', label: t('stats.yearsExperience') },
                { num: '5000+', label: t('stats.satisfiedPatients') },
                { num: '100%', label: t('stats.qualityCommitment') },
                { num: '4.9', label: t('stats.googleReviews') }
              ].map((stat, index) => (
                <div key={index} className="px-4">
                  <div className="text-4xl font-light mb-2">{stat.num}</div>
                  <div className="text-sm text-primary-200">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;

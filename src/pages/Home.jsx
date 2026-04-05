import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useState } from 'react';
import {
  FaArrowRight,
  FaCheckCircle,
  FaClock,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPaperPlane,
  FaPhone,
  FaShieldAlt,
  FaStar
} from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import NabilaImg from '../assets/nabila.png';
import HassanImg from '../assets/hassan.png';
import DirarImg from '../assets/dirar.png';
import BenjellounImg from '../assets/benjelloun.png';
import GoogleLogo from '../assets/google.png';

const Home = () => {
  const { t } = useTranslation();
  const [formStatus, setFormStatus] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: 'consultation',
    message: ''
  });

  const translatedServices = t('servicesPage.cards', { returnObjects: true });
  const services = Array.isArray(translatedServices) ? translatedServices.slice(0, 4) : [];

  const translatedMembers = t('teamPage.members', { returnObjects: true });
  const members = Array.isArray(translatedMembers) ? translatedMembers : [];
  const doctors = members.slice(0, 2);
  const supportTeam = members.slice(2);

  const translatedReviews = t('home.testimonials.reviews', { returnObjects: true });
  const reviews = Array.isArray(translatedReviews) ? translatedReviews.slice(0, 3) : [];

  const carePillars = [
    {
      title: t('conseilsPage.items.brushing.title'),
      description: t('conseilsPage.items.brushing.description')
    },
    {
      title: t('conseilsPage.items.flossing.title'),
      description: t('conseilsPage.items.flossing.description')
    },
    {
      title: t('conseilsPage.items.diet.title'),
      description: t('conseilsPage.items.diet.description')
    },
    {
      title: t('conseilsPage.items.visits.title'),
      description: t('conseilsPage.items.visits.description')
    }
  ];

  const stats = [
    { value: '20+', label: t('stats.yearsExperience') },
    { value: '5000+', label: t('stats.satisfiedPatients') },
    { value: '4.9', label: t('stats.googleReviews') },
    { value: '100%', label: t('stats.qualityCommitment') }
  ];

  const serviceImages = [
    'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=1400&q=80',
    'https://images.unsplash.com/photo-1600170311833-c2cf5280ce49?auto=format&fit=crop&w=1400&q=80',
    'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1400&q=80',
    'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1400&q=80'
  ];

  const doctorImages = [NabilaImg, HassanImg, DirarImg, BenjellounImg];
  const googleReviewsUrl = 'https://www.google.com/search?q=Centre+Dentaire+Mandarona+Casablanca+avis';

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setFormStatus('sending');

    setTimeout(() => {
      setFormStatus('success');
      setFormData({
        name: '',
        phone: '',
        email: '',
        subject: 'consultation',
        message: ''
      });

      setTimeout(() => setFormStatus(''), 4500);
    }, 1300);
  };

  return (
    <div className="font-sans text-gray-800 overflow-x-hidden">
      <section id="home" className="scroll-mt-28 relative min-h-[82vh] bg-gray-900 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=2200&q=80"
          alt={t('home.media.heroPatient')}
          className="absolute inset-0 w-full h-full object-cover"
          loading="eager"
          decoding="async"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/55 to-black/40" />
        <div className="absolute -bottom-28 -right-16 w-[24rem] h-[24rem] rounded-full bg-primary-500/25 blur-3xl" />

        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 min-h-[82vh] flex items-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl text-white"
          >
            <p className="uppercase tracking-[0.22em] text-xs sm:text-sm text-white/75 mb-6">{t('home.slider.secondTitle')}</p>
            <h1
              className="text-2xl sm:text-4xl lg:text-6xl font-light leading-tight"
              dangerouslySetInnerHTML={{ __html: t('home.hero.title') }}
            />
            <p className="mt-6 text-sm sm:text-lg text-white/90 max-w-2xl leading-relaxed">{t('home.hero.subtitle')}</p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                to="/#contact"
                className="inline-flex items-center gap-2 bg-white text-gray-900 px-6 py-3.5 rounded-full font-semibold hover:bg-primary-100 transition-colors"
              >
                {t('home.hero.bookAppointment')}
              </Link>
              <Link
                to="/#services"
                className="inline-flex items-center gap-2 border border-white/60 text-white px-6 py-3.5 rounded-full font-semibold hover:bg-white hover:text-gray-900 transition-colors"
              >
                {t('home.services.allServices')}
                <FaArrowRight className="text-xs" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="bg-primary-900 text-white py-8 sm:py-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 divide-x divide-white/10">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center px-4">
                <p className="text-2xl sm:text-4xl font-light">{stat.value}</p>
                <p className="text-xs sm:text-sm text-primary-200 mt-2">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="scroll-mt-28 py-16 sm:py-20 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-5 mb-10">
            <div>
              <p className="uppercase tracking-[0.2em] text-xs font-semibold text-gray-400 mb-3">{t('home.services.expertise')}</p>
              <h2 className="text-2xl sm:text-4xl font-light text-gray-900">{t('home.services.title')}</h2>
            </div>
            <Link to="/#contact" className="text-primary-600 font-semibold hover:text-primary-700 transition-colors">
              {t('cta.button')}
            </Link>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <article key={service.title} className="relative rounded-[2rem] overflow-hidden min-h-[420px] group">
                <img
                  src={serviceImages[index % serviceImages.length]}
                  alt={service.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/35 to-black/80" />
                <div className="absolute inset-0 p-6 sm:p-8 flex flex-col justify-between">
                  <div>
                    <span className="inline-flex bg-white/15 text-white border border-white/25 px-3 py-1 rounded-full text-xs tracking-wider uppercase">
                      {service.category}
                    </span>
                    <h3 className="mt-4 text-2xl font-light text-white leading-snug">{service.title}</h3>
                    <p className="mt-4 text-white/90 text-sm leading-relaxed">{service.description}</p>
                    <ul className="mt-5 space-y-2">
                      {(service.offerings || []).slice(0, 3).map((offering) => (
                        <li key={offering} className="flex items-start gap-2 text-white/95 text-sm">
                          <FaCheckCircle className="mt-0.5 text-primary-200 flex-shrink-0" />
                          <span>{offering}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Link to="/#contact" className="inline-flex items-center gap-2 text-white font-semibold hover:text-primary-200 transition-colors">
                    {t('home.services.learnMore')}
                    <FaArrowRight className="text-xs" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="team" className="scroll-mt-28 py-16 sm:py-20 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <p className="uppercase tracking-[0.2em] text-xs font-semibold text-gray-400 mb-3">{t('home.team.subtitle')}</p>
            <h2 className="text-2xl sm:text-4xl font-light text-gray-900">{t('home.team.title')}</h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-6">
            {doctors.map((member, index) => (
              <article key={member.name} className="rounded-[2rem] border border-gray-100 bg-gray-50 overflow-hidden">
                <div className="grid sm:grid-cols-[0.9fr_1.1fr]">
                  <div className="h-72 sm:h-full bg-gray-100">
                    <img
                      src={doctorImages[index % doctorImages.length]}
                      alt={member.name}
                      className="w-full h-full object-cover"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <div className="p-6 sm:p-8">
                    <p className="text-xs uppercase tracking-widest text-primary-600 font-semibold mb-3">{member.role}</p>
                    <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4">{member.name}</h3>
                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{member.description}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {supportTeam.length > 0 && (
            <div className="mt-10 rounded-[2rem] border border-gray-100 p-6 sm:p-8 bg-white shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{t('home.team.supportTitle')}</h3>
              <p className="text-gray-500 mb-5">{t('home.team.supportSubtitle')}</p>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {supportTeam.map((member) => (
                  <div key={member.name} className="rounded-xl border border-gray-100 bg-gray-50 px-4 py-3">
                    <p className="font-semibold text-gray-900">{member.name}</p>
                    <p className="text-sm text-gray-500 mt-1">{member.role}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      <section id="about" className="scroll-mt-28 py-16 sm:py-20 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10 lg:gap-16 items-center">
            <div>
              <p className="uppercase tracking-[0.2em] text-xs font-semibold text-gray-400 mb-4">{t('about.hero.subtitle')}</p>
              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-light text-gray-900 leading-tight" dangerouslySetInnerHTML={{ __html: t('about.hero.title') }} />
              <p className="mt-6 text-gray-600 text-base sm:text-lg leading-relaxed">{t('about.hero.description')}</p>
              <p className="mt-5 text-gray-500 leading-relaxed">{t('home.intro.extendedDescription')}</p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { title: t('home.whyChooseUs.items.tech.title'), desc: t('home.whyChooseUs.items.tech.desc') },
                { title: t('home.whyChooseUs.items.painless.title'), desc: t('home.whyChooseUs.items.painless.desc') },
                { title: t('home.whyChooseUs.items.transparency.title'), desc: t('home.whyChooseUs.items.transparency.desc') },
                { title: t('home.whyChooseUs.items.expertTeam.title'), desc: t('home.whyChooseUs.items.expertTeam.desc') }
              ].map((item) => (
                <article key={item.title} className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                  <FaShieldAlt className="text-primary-600 mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="advice" className="scroll-mt-28 py-16 sm:py-20 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="text-2xl sm:text-4xl font-light text-gray-900">{t('conseilsPage.hero.title')}</h2>
            <p className="mt-4 text-gray-600 leading-relaxed">{t('conseilsPage.hero.description')}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mt-10">
            {carePillars.map((item) => (
              <article key={item.title} className="bg-white rounded-[1.6rem] border border-gray-100 p-6 sm:p-8 shadow-sm">
                <div className="w-11 h-11 rounded-full bg-primary-50 text-primary-600 flex items-center justify-center mb-4">
                  <FaCheckCircle />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="testimonials" className="scroll-mt-28 py-16 sm:py-20 lg:py-24 bg-primary-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-8 items-start">
            <div className="rounded-[2rem] border border-white/20 bg-white/5 p-8">
              <div className="inline-flex items-center gap-3 bg-white/10 border border-white/20 rounded-full px-4 py-2">
                <img src={GoogleLogo} alt={t('home.testimonials.googleAlt')} className="w-5 h-5" loading="lazy" decoding="async" />
                <p className="uppercase tracking-[0.2em] text-xs text-primary-200">{t('home.googleReviews.subtitle')}</p>
              </div>
              <h2 className="text-2xl sm:text-4xl font-light leading-tight mt-5">{t('home.googleReviews.title')}</h2>
              <p className="mt-5 text-primary-100">{t('home.googleReviews.description')}</p>
              <div className="flex items-center gap-3 mt-8">
                <span className="text-5xl font-light">4.9</span>
                <div className="flex text-yellow-300">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <FaStar key={star} />
                  ))}
                </div>
              </div>
              <a
                href={googleReviewsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center gap-2 bg-white text-gray-900 px-5 py-3 rounded-full font-semibold hover:bg-primary-100 transition-colors"
              >
                <img src={GoogleLogo} alt={t('home.testimonials.googleAlt')} className="w-4 h-4" loading="lazy" decoding="async" />
                {t('home.googleReviews.button')}
              </a>
            </div>

            <div className="grid gap-4">
              {reviews.map((review) => (
                <article key={review.name} className="rounded-2xl border border-white/15 bg-white/10 p-6">
                  <div className="flex items-center justify-between gap-4">
                    <h3 className="text-lg font-semibold">{review.name}</h3>
                    <div className="flex text-yellow-300 text-sm">
                      {[...Array(review.rating || 5)].map((_, i) => (
                        <FaStar key={`${review.name}-${i}`} />
                      ))}
                    </div>
                  </div>
                  <p className="mt-3 text-primary-100 leading-relaxed">{review.text}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="scroll-mt-28 py-16 sm:py-20 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid xl:grid-cols-[0.85fr_1.15fr] gap-8">
            <div className="space-y-6">
              <div className="bg-primary-600 text-white rounded-[2rem] p-6 sm:p-8">
                <p className="uppercase tracking-[0.2em] text-xs text-primary-100 mb-3">{t('contact.hero.subtitle')}</p>
                <h2 className="text-2xl sm:text-3xl font-light leading-tight mb-5" dangerouslySetInnerHTML={{ __html: t('contact.hero.title') }} />
                <p className="text-primary-100 leading-relaxed">{t('contact.hero.description')}</p>
              </div>

              <div className="bg-gray-50 rounded-[2rem] border border-gray-100 p-6 sm:p-8 space-y-6">
                <div className="flex gap-3">
                  <FaMapMarkerAlt className="text-primary-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-900">{t('contact.info.address')}</p>
                    <p className="text-sm text-gray-600 whitespace-pre-line">{t('contact.info.fullAddress')}</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <FaPhone className="text-primary-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-900">{t('contact.info.phone')}</p>
                    <a href="tel:+212522213566" className="text-sm text-gray-600 hover:text-primary-600 transition-colors">
                      {t('contact.info.phoneValue')}
                    </a>
                    <a href="tel:+212693070042" className="block mt-1 text-sm text-gray-600 hover:text-primary-600 transition-colors">
                      {t('contact.info.phoneValueSecondary')}
                    </a>
                  </div>
                </div>
                <div className="flex gap-3">
                  <FaEnvelope className="text-primary-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-900">{t('contact.info.email')}</p>
                    <a href="mailto:contact@centredentairemandarona.ma" className="text-sm text-gray-600 hover:text-primary-600 transition-colors">
                      {t('contact.info.emailValue')}
                    </a>
                  </div>
                </div>
                <div className="pt-2 border-t border-gray-200 flex gap-3">
                  <FaClock className="text-primary-600 mt-1 flex-shrink-0" />
                  <div className="text-sm text-gray-600">
                    <p><span className="font-semibold text-gray-900">{t('contact.info.hours.mondayFriday')}:</span> {t('contact.info.hours.mondayFridayValue')}</p>
                    <p className="mt-1"><span className="font-semibold text-gray-900">{t('contact.info.hours.tuesdayThursday')}:</span> {t('contact.info.hours.tuesdayThursdayValue')}</p>
                    <p className="mt-1"><span className="font-semibold text-gray-900">{t('contact.info.hours.saturday')}:</span> {t('contact.info.hours.saturdayValue')}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-white border border-gray-100 rounded-[2rem] p-6 sm:p-8 shadow-xl">
                <h3 className="text-2xl sm:text-3xl font-light text-gray-900 mb-6" dangerouslySetInnerHTML={{ __html: t('contact.form.title') }} />
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder={t('contact.form.namePlaceholder')}
                      className="w-full px-5 py-3.5 bg-gray-50 rounded-xl border border-transparent focus:border-primary-300 focus:ring-0 outline-none transition-colors"
                    />
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      placeholder={t('contact.form.phonePlaceholder')}
                      className="w-full px-5 py-3.5 bg-gray-50 rounded-xl border border-transparent focus:border-primary-300 focus:ring-0 outline-none transition-colors"
                    />
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder={t('contact.form.emailPlaceholder')}
                      className="w-full px-5 py-3.5 bg-gray-50 rounded-xl border border-transparent focus:border-primary-300 focus:ring-0 outline-none transition-colors"
                    />
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-5 py-3.5 bg-gray-50 rounded-xl border border-transparent focus:border-primary-300 focus:ring-0 outline-none transition-colors"
                    >
                      <option value="consultation">{t('contact.form.subjects.consultation')}</option>
                      <option value="orthodontics">{t('contact.form.subjects.orthodontics')}</option>
                      <option value="esthetic">{t('contact.form.subjects.esthetic')}</option>
                      <option value="implants">{t('contact.form.subjects.implants')}</option>
                      <option value="emergency">{t('contact.form.subjects.emergency')}</option>
                    </select>
                  </div>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder={t('contact.form.messagePlaceholder')}
                    className="w-full px-5 py-3.5 bg-gray-50 rounded-xl border border-transparent focus:border-primary-300 focus:ring-0 outline-none transition-colors resize-none"
                  ></textarea>
                  <button
                    type="submit"
                    disabled={formStatus === 'sending'}
                    className="w-full bg-primary-600 text-white px-6 py-3.5 rounded-xl font-semibold hover:bg-primary-700 transition-colors inline-flex items-center justify-center gap-2 disabled:opacity-70"
                  >
                    {formStatus === 'sending' ? t('contact.form.sending') : t('contact.form.submit')}
                    <FaPaperPlane className="text-sm" />
                  </button>
                  {formStatus === 'success' && (
                    <p className="text-center bg-primary-50 border border-primary-200 text-primary-700 rounded-xl px-4 py-3">
                      {t('contact.form.success')}
                    </p>
                  )}
                </form>
              </div>

              <div className="rounded-[2rem] overflow-hidden border border-gray-100 shadow-xl h-[280px] sm:h-[340px]">
                <iframe
                  title={t('contact.map.title')}
                  src="https://www.openstreetmap.org/export/embed.html?bbox=-7.6223%2C33.5293%2C-7.6073%2C33.5362&layer=mapnik&marker=33.5327%2C-7.6148"
                  className="w-full h-full border-0"
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

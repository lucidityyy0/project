import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix for default marker icon in React Leaflet
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41]
});

L.Marker.prototype.options.icon = DefaultIcon;

const Contact = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: 'consultation',
    message: ''
  });

  const [formStatus, setFormStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus('sending');

    setTimeout(() => {
      console.log('Form data:', formData);
      setFormStatus('success');
      setFormData({ name: '', phone: '', email: '', subject: 'consultation', message: '' });
      setTimeout(() => setFormStatus(''), 5000);
    }, 1500);
  };

  const position = [33.5327, -7.6148];

  return (
    <div className="font-sans text-primary-600">
      {/* Hero Section */}
      <section className="relative pt-24 sm:pt-32 pb-14 sm:pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-accent-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="uppercase tracking-widest text-sm font-semibold mb-4 block text-accent-500">
              {t('contact.hero.subtitle')}
            </span>
            <h1 className="text-2xl sm:text-3xl md:text-5xl font-light mb-6 leading-tight" dangerouslySetInnerHTML={{ __html: t('contact.hero.title') }} />
            <p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              {t('contact.hero.description')}
            </p>
          </motion.div>
        </div>
        {/* Decorative background elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
          <div className="absolute -top-20 -right-20 w-96 h-96 bg-accent-100 rounded-full blur-3xl opacity-50"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent-500 rounded-full blur-3xl opacity-20"></div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-14 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

            {/* Contact Info */}
            <div className="lg:col-span-1 space-y-8">
              <div className="bg-primary-600 text-white p-6 sm:p-8 rounded-[2rem] shadow-xl">
                <h2 className="text-xl sm:text-2xl font-bold mb-6">{t('contact.info.title')}</h2>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-accent-500 text-primary-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <FaMapMarkerAlt />
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">{t('contact.info.address')}</h4>
                      <p className="opacity-80 text-sm whitespace-pre-line">{t('contact.info.fullAddress')}</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-accent-500 text-primary-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <FaPhone />
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">{t('contact.info.phone')}</h4>
                      <a href="tel:+212522213566" className="opacity-80 hover:opacity-100 transition-opacity text-sm">{t('contact.info.phoneValue')}</a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-accent-500 text-primary-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <FaEnvelope />
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">{t('contact.info.email')}</h4>
                      <a href="mailto:contact@mandarona.ma" className="opacity-80 hover:opacity-100 transition-opacity text-sm">{t('contact.info.emailValue')}</a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-accent-100 p-6 sm:p-8 rounded-[2rem]">
                <h3 className="text-lg sm:text-xl font-bold mb-4 text-primary-600">{t('contact.info.hours.title')}</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex justify-between">
                    <span>{t('contact.info.hours.week')}</span>
                    <span className="font-bold">{t('contact.info.hours.weekValue')}</span>
                  </li>
                  <li className="flex justify-between">
                    <span>{t('contact.info.hours.saturday')}</span>
                    <span className="font-bold">{t('contact.info.hours.saturdayValue')}</span>
                  </li>
                  <li className="flex justify-between text-red-500">
                    <span>{t('contact.info.hours.sunday')}</span>
                    <span className="font-bold">{t('contact.info.hours.closed')}</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white p-6 sm:p-8 md:p-12 rounded-[2.2rem] sm:rounded-[3rem] shadow-2xl border border-gray-100">
                <h2 className="text-2xl sm:text-3xl font-light mb-8 text-primary-600" dangerouslySetInnerHTML={{ __html: t('contact.form.title') }} />

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-bold text-gray-700 mb-2">{t('contact.form.name')}</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-5 sm:px-6 py-3.5 sm:py-4 bg-gray-50 border-none rounded-xl focus:ring-2 focus:ring-accent-500 transition-all outline-none"
                        placeholder={t('contact.form.namePlaceholder')}
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-bold text-gray-700 mb-2">{t('contact.form.phone')}</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full px-5 sm:px-6 py-3.5 sm:py-4 bg-gray-50 border-none rounded-xl focus:ring-2 focus:ring-accent-500 transition-all outline-none"
                        placeholder={t('contact.form.phonePlaceholder')}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="email" className="block text-sm font-bold text-gray-700 mb-2">{t('contact.form.email')}</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-5 sm:px-6 py-3.5 sm:py-4 bg-gray-50 border-none rounded-xl focus:ring-2 focus:ring-accent-500 transition-all outline-none"
                        placeholder={t('contact.form.emailPlaceholder')}
                      />
                    </div>
                    <div>
                      <label htmlFor="subject" className="block text-sm font-bold text-gray-700 mb-2">{t('contact.form.subject')}</label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full px-5 sm:px-6 py-3.5 sm:py-4 bg-gray-50 border-none rounded-xl focus:ring-2 focus:ring-accent-500 transition-all outline-none appearance-none"
                      >
                        <option value="consultation">{t('contact.form.subjects.consultation')}</option>
                        <option value="orthodontie">{t('contact.form.subjects.orthodontics')}</option>
                        <option value="esthetique">{t('contact.form.subjects.esthetic')}</option>
                        <option value="implants">{t('contact.form.subjects.implants')}</option>
                        <option value="urgence">{t('contact.form.subjects.emergency')}</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-bold text-gray-700 mb-2">{t('contact.form.message')}</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="4"
                      className="w-full px-5 sm:px-6 py-3.5 sm:py-4 bg-gray-50 border-none rounded-xl focus:ring-2 focus:ring-accent-500 transition-all outline-none resize-none"
                      placeholder={t('contact.form.messagePlaceholder')}
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={formStatus === 'sending'}
                    className="w-full bg-primary-600 text-white font-bold py-4 rounded-xl hover:bg-primary-700 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                  >
                    {formStatus === 'sending' ? t('contact.form.sending') : (
                      <>
                        <span>{t('contact.form.submit')}</span>
                        <FaPaperPlane />
                      </>
                    )}
                  </button>

                  {formStatus === 'success' && (
                    <div className="bg-primary-50 text-primary-700 px-6 py-4 rounded-xl text-center font-medium border border-primary-200">
                      {t('contact.form.success')}
                    </div>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-14 sm:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-3 sm:p-4 rounded-[2.2rem] sm:rounded-[3rem] shadow-xl overflow-hidden h-[320px] sm:h-[400px] relative z-0">
            <MapContainer center={position} zoom={15} scrollWheelZoom={false} className="w-full h-full rounded-[2.5rem] z-0">
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Marker position={position}>
                <Popup>
                  {t('contact.map.title')}
                </Popup>
              </Marker>
            </MapContainer>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;

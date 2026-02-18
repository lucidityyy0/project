import { Link } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaMapMarkerAlt, FaPhone, FaEnvelope, FaTiktok } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

import LogoIcon from '../assets/icon.png';

const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white pt-20 pb-10 mt-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Column 1: Brand */}
          <div>
            <Link to="/" className="flex items-center gap-3 mb-6">
              <img src={LogoIcon} alt={t('header.brandName')} className="w-10 h-10" />
              <div>
                <span className="text-2xl font-bold tracking-tight text-white block">{t('header.brandName')}</span>
                <span className="text-xs text-gray-400 font-medium tracking-widest uppercase">{t('header.dentalCenter')}</span>
              </div>
            </Link>

            <div className="flex space-x-4">
              <a href="#" className="w-14 h-14 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:bg-primary-600 hover:text-white transition-all duration-300">
                <FaFacebookF className="text-2xl" />
              </a>
              <a href="#" className="w-14 h-14 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:bg-primary-600 hover:text-white transition-all duration-300">
                <FaInstagram className="text-2xl" />
              </a>
              <a href="#" className="w-14 h-14 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:bg-primary-600 hover:text-white transition-all duration-300">
                <FaLinkedinIn className="text-2xl" />
              </a>
              <a href="#" className="w-14 h-14 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:bg-primary-600 hover:text-white transition-all duration-300">
                <FaTiktok className="text-2xl" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white">{t('footer.quickLinks')}</h3>
            <ul className="space-y-3">
              <li><Link to="/" className="text-gray-400 hover:text-primary-400 transition-colors">{t('header.home')}</Link></li>
              <li><Link to="/equipe" className="text-gray-400 hover:text-primary-400 transition-colors">{t('footer.ourTeam')}</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-primary-400 transition-colors">{t('footer.ourServices')}</Link></li>
              <li><Link to="/avant-apres" className="text-gray-400 hover:text-primary-400 transition-colors">{t('footer.gallery')}</Link></li>
              <li><Link to="/conseils" className="text-gray-400 hover:text-primary-400 transition-colors">{t('header.advice')}</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-primary-400 transition-colors">{t('header.contact')}</Link></li>
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white">{t('header.contact')}</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3 text-gray-400">
                <FaMapMarkerAlt className="mt-1 text-primary-500 flex-shrink-0" />
                <p>{t('contact.info.fullAddress')}</p>
              </div>
              <div className="flex items-center gap-3 text-gray-400">
                <FaPhone className="text-primary-500 flex-shrink-0" />
                <p>{t('contact.info.phoneValue')}</p>
              </div>
              <div className="flex items-center gap-3 text-gray-400">
                <FaEnvelope className="text-primary-500 flex-shrink-0" />
                <p>{t('contact.info.emailValue')}</p>
              </div>
            </div>
          </div>

          {/* Column 4: Legal */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white">{t('footer.legalInfo')}</h3>
            <ul className="space-y-3">
              <li><a href="/mentions-legales.pdf" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary-400 transition-colors">{t('footer.legalMentions')}</a></li>
              <li><a href="/politique-confidentialite.pdf" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary-400 transition-colors">{t('footer.privacyPolicy')}</a></li>
              <li><a href="/cookies.pdf" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary-400 transition-colors">{t('footer.cookieManagement')}</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>&copy; {currentYear} {t('header.brandName')}. {t('footer.allRightsReserved')}</p>
          <p className="mt-2 md:mt-0">{t('footer.designedWithCare')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

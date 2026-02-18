import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Services = () => {
  const { t } = useTranslation();
  const translatedCards = t('servicesPage.cards', { returnObjects: true });
  const services = Array.isArray(translatedCards) ? translatedCards : [];
  const serviceImages = [
    'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1600170311833-c2cf5280ce49?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80'
  ];

  return (
    <div className="font-sans text-gray-800">
      {/* Hero Section */}
      <section className="relative h-[600px] lg:h-[700px] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1920&q=80"
            alt={t('servicesPage.media.heroImage')}
            className="w-full h-full object-cover object-top"
          />
        </div>

        {/* White Overlay Shape */}
        <div className="absolute bottom-0 left-0 w-full lg:w-[45%] bg-white rounded-tr-[5rem] p-8 lg:p-20 pt-20 lg:pt-32">
          <h1 className="text-4xl lg:text-6xl font-light text-gray-900 mb-6">{t('servicesPage.hero.title')}</h1>
          <p className="text-gray-500 text-base lg:text-lg leading-relaxed max-w-md">
            {t('servicesPage.hero.description')}
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="group relative min-h-[560px] rounded-[2rem] overflow-hidden cursor-pointer">
                {/* Background Image */}
                <img
                  src={serviceImages[index % serviceImages.length]}
                  alt={service.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/25 to-black/70"></div>

                {/* Content */}
                <div className="absolute inset-0 p-6 lg:p-8">
                  <div className="frosted-glass-dark h-full rounded-[1.6rem] p-6 lg:p-8 flex flex-col justify-between">
                    <div>
                      <span className="text-white/85 text-xs font-bold uppercase tracking-widest mb-2 block">
                        {service.category}
                      </span>
                      <h3 className="text-2xl lg:text-3xl font-light text-white mb-4">
                        {service.title}
                      </h3>
                      <p className="text-white/95 text-sm lg:text-base leading-relaxed">
                        {service.description}
                      </p>
                      <ul className="mt-5 space-y-2 text-white/92 text-sm">
                        {(service.offerings || []).map((item, itemIndex) => (
                          <li key={itemIndex} className="flex gap-2">
                            <span className="text-accent-500">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <Link to="/contact" className="px-6 py-3 border border-white/40 rounded-lg text-white text-sm font-medium backdrop-blur-sm hover:bg-white hover:text-gray-900 transition-all duration-300 inline-block">
                        {t('servicesPage.learnMore')}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="pb-20 lg:pb-32 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8 h-auto lg:h-[600px]">
            {/* Left Image */}
            <div className="lg:w-1/2 rounded-[3rem] overflow-hidden relative h-[400px] lg:h-auto">
              <img
                src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80"
                alt={t('servicesPage.media.ctaImage')}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Right Content */}
            <div className="lg:w-1/2 bg-accent-50 rounded-[3rem] p-12 lg:p-20 flex flex-col justify-center">
              <span className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-4">
                {t('servicesPage.cta.subtitle')}
              </span>
              <h2 className="text-3xl lg:text-5xl font-light text-gray-900 mb-8 leading-tight" dangerouslySetInnerHTML={{ __html: t('servicesPage.cta.title') }} />
              <p className="text-gray-600 text-base lg:text-lg leading-relaxed mb-12 max-w-xl">
                {t('servicesPage.cta.description')}
              </p>
              <div>
                <Link to="/contact" className="bg-primary-600 text-white px-8 py-4 rounded-lg font-medium hover:bg-primary-700 transition-colors inline-block">
                  {t('servicesPage.cta.button')}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;

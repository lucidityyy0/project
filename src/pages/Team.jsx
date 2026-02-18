import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

const Team = () => {
    const { t } = useTranslation();
    const translatedMembers = t('teamPage.members', { returnObjects: true });
    const members = Array.isArray(translatedMembers) ? translatedMembers : [];

    const memberImages = [
        'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=800&q=80'
    ];

    return (
        <div className="font-sans text-gray-800">
            {/* Hero Section */}
            <section className="relative bg-gray-50 min-h-[600px] flex items-center">
                <div className="container mx-auto px-4 relative z-10">
                    <div className="flex flex-col lg:flex-row items-center">
                        {/* Left Content */}
                        <div className="lg:w-1/2 py-12 lg:py-0">
                            <div className="bg-white p-8 lg:p-14 rounded-[3rem] shadow-xl max-w-2xl relative z-20">
                                <h1 className="text-4xl lg:text-6xl font-light text-gray-900 mb-8 leading-tight">{t('teamPage.hero.title')}</h1>
                                <p className="text-gray-500 text-base lg:text-lg leading-relaxed">
                                    {t('teamPage.hero.description')}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Right Image (Background style) */}
                <div className="absolute top-0 right-0 bottom-0 w-full lg:w-[60%] h-full z-0">
                    <img
                        src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1600&q=80"
                        alt={t('teamPage.hero.title')}
                        className="w-full h-full object-cover object-center lg:rounded-bl-[5rem]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-gray-50/80 via-transparent to-transparent lg:hidden"></div>
                </div>
            </section>

            {/* Team Grid */}
            <section className="py-20 lg:py-32 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                        {members.map((member, index) => (
                            <div key={index} className="bg-white rounded-[2rem] p-8 shadow-sm hover:shadow-xl transition-all duration-300 group">
                                <div className="mb-5">
                                    <h3 className="text-2xl font-light text-gray-900 leading-snug">{member.name}</h3>
                                    <p className="text-primary-600 text-sm font-semibold uppercase tracking-wide mt-2">{member.role}</p>
                                </div>

                                <div className="flex justify-center my-6">
                                    <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-gray-50">
                                        <img src={memberImages[index % memberImages.length]} alt={member.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                                    </div>
                                </div>

                                <p className="text-gray-600 leading-relaxed text-sm lg:text-base">{member.description}</p>

                                <div className="flex justify-start items-center pt-6 border-t border-gray-100 mt-6">
                                    <Link to="/contact" className="flex items-center gap-2 text-sm font-bold text-gray-900 hover:text-primary-600 transition-colors">
                                        {t('teamPage.viewProfile')} <FaArrowRight className="-rotate-45" />
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 lg:py-32 bg-white">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col lg:flex-row gap-8">
                        {/* Left Collage */}
                        <div className="lg:w-1/2 grid grid-cols-2 gap-4">
                            <div className="col-span-2 h-64 rounded-[2rem] overflow-hidden">
                                <img src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=800&q=80" className="w-full h-full object-cover" alt={t('teamPage.hero.title')} />
                            </div>
                            <div className="h-48 rounded-[2rem] overflow-hidden">
                                <img src="https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&w=800&q=80" className="w-full h-full object-cover" alt={t('teamPage.hero.title')} />
                            </div>
                            <div className="h-48 rounded-[2rem] overflow-hidden">
                                <img src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80" className="w-full h-full object-cover" alt={t('teamPage.hero.title')} />
                            </div>
                        </div>

                        {/* Right Content */}
                        <div className="lg:w-1/2 bg-primary-600 rounded-[3rem] p-12 lg:p-20 text-white flex flex-col justify-center relative overflow-hidden">
                            <div className="relative z-10">
                                <h2 className="text-3xl lg:text-5xl font-light mb-8 leading-tight" dangerouslySetInnerHTML={{ __html: t('teamPage.cta.title') }} />
                                <p className="text-primary-100/90 text-base lg:text-lg leading-relaxed max-w-xl">
                                    {t('teamPage.cta.description')}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Team;

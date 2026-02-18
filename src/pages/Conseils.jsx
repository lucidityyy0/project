import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const Conseils = () => {
    const { t } = useTranslation();

    const adviceList = [
        {
            title: t('conseilsPage.items.brushing.title'),
            description: t('conseilsPage.items.brushing.description'),
            image: 'https://images.unsplash.com/photo-1559656914-a30970c1affd?auto=format&fit=crop&w=800&q=80'
        },
        {
            title: t('conseilsPage.items.flossing.title'),
            description: t('conseilsPage.items.flossing.description'),
            image: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=800&q=80'
        },
        {
            title: t('conseilsPage.items.diet.title'),
            description: t('conseilsPage.items.diet.description'),
            image: 'https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=800&q=80'
        },
        {
            title: t('conseilsPage.items.visits.title'),
            description: t('conseilsPage.items.visits.description'),
            image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80'
        }
    ];

    return (
        <div className="font-sans text-gray-800">
            {/* Hero Section */}
            <section className="relative h-[400px] lg:h-[500px] overflow-hidden bg-primary-50">
                <div className="container mx-auto px-4 h-full flex items-center justify-center">
                    <div className="text-center max-w-3xl">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-4xl lg:text-6xl font-light text-gray-900 mb-6"
                        >
                            {t('conseilsPage.hero.title')}
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-gray-600 text-lg leading-relaxed"
                        >
                            {t('conseilsPage.hero.description')}
                        </motion.p>
                    </div>
                </div>
            </section>

            {/* Advice Grid */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        {adviceList.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="flex flex-col md:flex-row gap-8 items-center bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow"
                            >
                                <div className="w-full md:w-1/3 h-48 rounded-xl overflow-hidden flex-shrink-0">
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                                    />
                                </div>
                                <div className="w-full md:w-2/3">
                                    <h3 className="text-2xl font-medium text-gray-900 mb-4">{item.title}</h3>
                                    <p className="text-gray-600 leading-relaxed">{item.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Conseils;

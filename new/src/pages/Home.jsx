import React from 'react';
import HeroSection from '../components/Hero/HeroSection';
import { Link } from 'react-router-dom';

const Home = () => {
  const features = [
    {
      icon: '💧',
      title: 'خلوص ۱۰۰٪',
      description: 'آب معدنی طبیعی با بالاترین استانداردهای جهانی',
    },
    {
      icon: '🧊',
      title: 'خنک و گوارا',
      description: 'تجربه طعم واقعی تازگی و خنکی',
    },
    {
      icon: '🏔️',
      title: 'منابع کوهستانی',
      description: 'استخراج از چشمه‌های طبیعی کوه‌های افغانستان',
    },
    {
      icon: '✅',
      title: 'تاییدیه بهداشت',
      description: 'دارای مجوزهای رسمی از وزارت بهداشت',
    },
  ];

  const products = [
    { name: 'آب معدنی ۵۰۰ میلی‌لیتر', size: '500ml', image: '/images/bottle-500.png' },
    { name: 'آب معدنی ۱.۵ لیتر', size: '1.5L', image: '/images/bottle-1500.png' },
    { name: 'آب معدنی ۵ گالنی', size: '5 Gallon', image: '/images/gallon-5.png' },
  ];

  return (
    <div className="bg-white dark:bg-gray-900 transition-colors duration-300">
      <HeroSection />

      {/* Features Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              چرا آب خوشگوار؟
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              کیفیت برتر، سلامتی پایدار
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-700 rounded-2xl p-8 shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 text-center"
              >
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Preview */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              محصولات ما
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              متنوع‌ترین بسته‌بندی‌ها برای نیازهای مختلف
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-gray-800 dark:to-gray-700 rounded-3xl p-8 shadow-lg hover:shadow-2xl transform hover:-translate-y-3 transition-all duration-300 text-center"
              >
                <div className="w-48 h-48 mx-auto mb-6 bg-white dark:bg-gray-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <span className="text-6xl">💧</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  {product.name}
                </h3>
                <p className="text-blue-600 dark:text-blue-400 font-bold text-lg">
                  {product.size}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/products"
              className="inline-block px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-full font-bold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              مشاهده همه محصولات
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-blue-800 dark:to-cyan-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            آماده سفارش هستید؟
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            همین حالا با ما تماس بگیرید و آب معدنی خوشگوار را به خانه خود ببرید
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+93701234567"
              className="px-8 py-4 bg-white text-blue-600 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              📞 تماس: ۰۷۰۱۲۳۴۵۶۷
            </a>
            <Link
              to="/contact"
              className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-full font-bold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              فرم تماس
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
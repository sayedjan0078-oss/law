import React from 'react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-cyan-50 to-blue-100 dark:from-gray-900 dark:via-blue-900 dark:to-gray-900 transition-colors duration-300">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-400/30 dark:bg-blue-600/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-400/30 dark:bg-cyan-600/20 rounded-full blur-3xl animate-pulse delay-1000" />
        
        {/* Water Drops Animation */}
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-4 h-4 bg-blue-400/40 dark:bg-blue-500/30 rounded-full animate-bounce"
            style={{
              left: `${10 + i * 15}%`,
              top: `${20 + (i % 3) * 25}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${3 + i * 0.5}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-right space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-extrabold text-gray-900 dark:text-white leading-tight">
                آب معدنی
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-blue-400 dark:to-cyan-300">
                  خوشگوار
                </span>
              </h1>
              <p className="text-2xl lg:text-3xl text-gray-600 dark:text-gray-300 font-medium">
                خنک‌تر از یخ، گواراتر از همیشه
              </p>
            </div>

            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              با بیش از دو دهه تجربه در تولید آب معدنی با کیفیت، سلامتی و تازگی را به خانواده‌های افغان هدیه می‌دهیم
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                to="/products"
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-full font-bold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                مشاهده محصولات
              </Link>
              <Link
                to="/contact"
                className="px-8 py-4 bg-white dark:bg-gray-800 text-blue-600 dark:text-blue-400 border-2 border-blue-600 dark:border-blue-400 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                تماس با ما
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-300 dark:border-gray-700">
              <div className="text-center lg:text-right">
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">+۲۰</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">سال تجربه</div>
              </div>
              <div className="text-center lg:text-right">
                <div className="text-3xl font-bold text-cyan-600 dark:text-cyan-400">+۵۰</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">شهر تحت پوشش</div>
              </div>
              <div className="text-center lg:text-right">
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">+۱M</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">مشتری راضی</div>
              </div>
            </div>
          </div>

          {/* Product Image */}
          <div className="relative animate-float">
            <div className="relative z-10 bg-gradient-to-br from-blue-400/20 to-cyan-400/20 dark:from-blue-600/20 dark:to-cyan-600/20 rounded-full p-8 lg:p-12 backdrop-blur-sm">
              <img
                src="/images/water-bottle.png"
                alt="Khoshgowar Water Bottle"
                className="w-full max-w-md mx-auto drop-shadow-2xl transform hover:rotate-3 transition-transform duration-500"
              />
            </div>
            {/* Ice cubes decoration */}
            <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-white/30 dark:bg-blue-400/20 rounded-2xl rotate-12 blur-sm" />
            <div className="absolute -top-5 -right-5 w-24 h-24 bg-cyan-300/30 dark:bg-cyan-400/20 rounded-xl -rotate-12 blur-sm" />
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-gray-400 dark:text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
import React from 'react';

const About = () => {
  const values = [
    { title: 'کیفیت', desc: 'تضمین بالاترین استاندارد کیفیت' },
    { title: 'سلامتی', desc: 'حفظ سلامت مشتریان اولویت ماست' },
    { title: 'محیط زیست', desc: 'حفاظت از منابع طبیعی افغانستان' },
    { title: 'نوآوری', desc: 'استفاده از تکنولوژی‌های روز دنیا' },
  ];

  return (
    <div className="bg-white dark:bg-gray-900 min-h-screen pt-20 transition-colors duration-300">
      {/* Header */}
      <section className="bg-gradient-to-br from-blue-600 to-cyan-500 dark:from-blue-800 dark:to-cyan-700 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-white mb-6">درباره خوشگوار</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            بیش از دو دهه تعهد به ارائه آب معدنی با کیفیت برتر برای مردم شریف افغانستان
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                داستان ما
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                شرکت آب معدنی خوشگوار در سال ۱۳۰ با هدف ارائه آب معدنی طبیعی و با کیفیت به مردم افغانستان تأسیس شد. ما از چشمه‌های طبیعی کوه‌های کشورمان آب استخراج کرده و با استفاده از پیشرفته‌ترین تکنولوژی‌های تصفیه، آن را به دست مصرف‌کنندگان می‌رسانیم.
              </p>
              <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                امروز خوشگوار به یکی از برندهای معتبر و مورد اعتماد در افغانستان تبدیل شده و در بیش از ۵۰ شهر کشور فعال است.
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-100 to-cyan-100 dark:from-gray-800 dark:to-gray-700 rounded-3xl p-8 h-96 flex items-center justify-center">
              <span className="text-9xl">🏔️</span>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            ارزش‌های ما
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-blue-600 dark:bg-blue-500 rounded-full flex items-center justify-center">
                  <span className="text-2xl text-white">{index + 1}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
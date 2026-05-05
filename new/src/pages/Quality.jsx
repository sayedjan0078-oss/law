import React from 'react';

const Quality = () => {
  const certifications = [
    { name: 'ISO 9001', desc: 'سیستم مدیریت کیفیت' },
    { name: 'ISO 22000', desc: 'ایمنی مواد غذایی' },
    { name: 'HACCP', desc: 'تحلیل خطر و نقاط کنترل بحرانی' },
    { name: 'وزارت بهداشت', desc: 'تاییدیه رسمی وزارت بهداشت افغانستان' },
  ];

  const process = [
    { step: '۱', title: 'استخراج', desc: 'استخراج از چشمه‌های طبیعی کوهستانی' },
    { step: '۲', title: 'تصفیه', desc: 'تصفیه با پیشرفته‌ترین تکنولوژی' },
    { step: '۳', title: 'کنترل کیفیت', desc: 'بررسی دقیق در آزمایشگاه' },
    { step: '۴', title: 'بسته‌بندی', desc: 'بسته‌بندی بهداشتی و استاندارد' },
    { step: '۵', title: 'توزیع', desc: 'توزیع سریع در سراسر کشور' },
  ];

  return (
    <div className="bg-white dark:bg-gray-900 min-h-screen pt-20 transition-colors duration-300">
      <section className="bg-gradient-to-br from-blue-600 to-cyan-500 dark:from-blue-800 dark:to-cyan-700 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-white mb-6">کیفیت و استانداردها</h1>
          <p className="text-xl text-blue-100">
            تعهد ما به ارائه بالاترین کیفیت
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            فرآیند تولید
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {process.map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                  {item.step}
                </div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            گواهینامه‌ها و استانداردها
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-white dark:bg-gray-700 rounded-2xl p-8 text-center shadow-lg">
                <div className="text-5xl mb-4">✅</div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {cert.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {cert.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Quality;
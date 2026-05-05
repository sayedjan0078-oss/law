import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('پیام شما ارسال شد! به زودی با شما تماس می‌گیریم.');
    setFormData({ name: '', phone: '', email: '', message: '' });
  };

  const branches = [
    {
      city: 'کابل',
      address: 'کابل، ناحیه ۱۰، سرک اصلی',
      phone: '۰۲۰-۲۳۴۵۶۷۸',
      mobile: '۰۷۰-۱۲۳-۴۵۶۷',
    },
    {
      city: 'هرات',
      address: 'هرات، سرک کمربندی',
      phone: '۰۴۰-۱۲۳۴۵۶۷',
      mobile: '۰۷۸-۱۲۳-۴۵۶۷',
    },
    {
      city: 'مزار شریف',
      address: 'مزار شریف، ناحیه ۵',
      phone: '۰۵۰-۱۲۳۴۵۶۷',
      mobile: '۰۷۷-۱۲۳-۴۵۶۷',
    },
    {
      city: 'قندهار',
      address: 'قندهار، سرک حلقوی',
      phone: '۰۳۰-۱۲۳۴۵۶۷',
      mobile: '۰۷۹-۱۲۳-۴۵۶',
    },
  ];

  return (
    <div className="bg-white dark:bg-gray-900 min-h-screen pt-20 transition-colors duration-300">
      {/* Header */}
      <section className="bg-gradient-to-br from-blue-600 to-cyan-500 dark:from-blue-800 dark:to-cyan-700 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-white mb-6">تماس با ما</h1>
          <p className="text-xl text-blue-100">
            ما همیشه آماده پاسخگویی به سوالات شما هستیم
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl p-8">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
                فرم تماس
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-gray-700 dark:text-gray-300 mb-2">
                    نام کامل
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 dark:text-gray-300 mb-2">
                    شماره تماس
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 dark:text-gray-300 mb-2">
                    ایمیل
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 dark:text-gray-300 mb-2">
                    پیام
                  </label>
                  <textarea
                    rows="4"
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-full font-bold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                >
                  ارسال پیام
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-gray-800 dark:to-gray-700 rounded-3xl p-8">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                  اطلاعات تماس
                </h2>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4 space-x-reverse">
                    <span className="text-3xl">📞</span>
                    <div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">تلفن:</div>
                      <div className="text-lg font-bold text-gray-900 dark:text-white">۰۲۰-۲۳۴۵۶۷۸</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4 space-x-reverse">
                    <span className="text-3xl">📱</span>
                    <div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">موبایل:</div>
                      <div className="text-lg font-bold text-gray-900 dark:text-white">۰۷-۱۲۳-۴۵۶۷</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4 space-x-reverse">
                    <span className="text-3xl">📧</span>
                    <div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">ایمیل:</div>
                      <div className="text-lg font-bold text-gray-900 dark:text-white">info@khoshgowar.af</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4 space-x-reverse">
                    <span className="text-3xl">🏢</span>
                    <div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">آدرس مرکزی:</div>
                      <div className="text-lg font-bold text-gray-900 dark:text-white">کابل، ناحیه ۱۰، سرک اصلی</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Branches */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  شعبات ما
                </h3>
                <div className="space-y-4">
                  {branches.map((branch, index) => (
                    <div key={index} className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
                      <h4 className="text-xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                        {branch.city}
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400 mb-2">{branch.address}</p>
                      <p className="text-gray-600 dark:text-gray-400">تلفن: {branch.phone}</p>
                      <p className="text-gray-600 dark:text-gray-400">موبایل: {branch.mobile}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
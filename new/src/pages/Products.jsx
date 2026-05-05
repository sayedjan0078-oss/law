import React from 'react';

const Products = () => {
  const products = [
    {
      name: 'آب معدنی ۵۰۰ میلی‌لیتر',
      size: '500ml',
      price: '۱۵ افغانی',
      description: 'مناسب برای استفاده شخصی و همراه',
      features: ['بسته‌بندی ۲۴ تایی', 'سبک و قابل حمل', 'درب پیچی'],
    },
    {
      name: 'آب معدنی ۱.۵ لیتر',
      size: '1.5L',
      price: '۳۵ افغانی',
      description: 'ایده‌آل برای خانواده و سفر',
      features: ['بسته‌بندی ۱۲ تایی', 'اقتصادی', 'نگهداری آسان'],
    },
    {
      name: 'آب معدنی ۵ گالنی',
      size: '5 Gallon',
      price: '۲۵۰ افغانی',
      description: 'مناسب برای ادارات و منازل',
      features: ['قابل استفاده در دیسپنسر', 'اقتصادی‌ترین گزینه', 'تحویل رایگان'],
    },
  ];

  return (
    <div className="bg-white dark:bg-gray-900 min-h-screen pt-20 transition-colors duration-300">
      <section className="bg-gradient-to-br from-blue-600 to-cyan-500 dark:from-blue-800 dark:to-cyan-700 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-white mb-6">محصولات ما</h1>
          <p className="text-xl text-blue-100">
            متنوع‌ترین بسته‌بندی‌ها برای هر نیازی
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300"
              >
                <div className="h-64 bg-gradient-to-br from-blue-100 to-cyan-100 dark:from-gray-700 dark:to-gray-600 flex items-center justify-center">
                  <span className="text-8xl">💧</span>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    {product.name}
                  </h3>
                  <p className="text-blue-600 dark:text-blue-400 font-bold text-xl mb-4">
                    {product.size}
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 mb-6">
                    {product.description}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {product.features.map((feature, i) => (
                      <li key={i} className="text-gray-600 dark:text-gray-400 flex items-center">
                        <span className="text-green-500 ml-2">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-4">
                      {product.price}
                    </div>
                    <a
                      href="tel:+93701234567"
                      className="block w-full py-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-full font-bold hover:shadow-lg transition-all duration-300"
                    >
                      سفارش دهید
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
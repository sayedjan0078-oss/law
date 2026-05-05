import React, { useState, useEffect } from 'react';
import { FaQuoteRight, FaStar } from 'react-icons/fa';

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      name: 'احمد محمدی',
      role: 'مدیرعامل شرکت آریا',
      text: 'خدمات شبکه قدرت نظری تکنالوژی فوق‌العاده بود. سرعت و کیفیت WiFi شرکت ما به شکل چشمگیری بهبود یافت. تیم پشتیبانی بسیار حرفه‌ای و پاسخگو هستند.',
      rating: 5,
      avatar: '👨‍💼',
    },
    {
      name: 'سارا احمدزاده',
      role: 'مدیر IT بیمارستان نور',
      text: 'بعد از همکاری با قدرت نظری، مشکلات شبکه ما کاملاً حل شد. پایداری شبکه ۹۹.۹٪ و پشتیبانی ۲۴ ساعته واقعاً قابل اعتماد است.',
      rating: 5,
      avatar: '👩‍⚕️',
    },
    {
      name: 'علی رضایی',
      role: 'صاحب هتل پارسیان',
      text: 'نصب WiFi در هتل ما با کیفیت عالی انجام شد. مهمانان ما از سرعت و پوشش اینترنت بسیار راضی هستند. ممنون از تیم حرفه‌ای قدرت نظری.',
      rating: 5,
      avatar: '👨‍💻',
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section style={{
      padding: '100px 24px',
      background: 'var(--bg-secondary)',
      position: 'relative',
    }}>
      <div style={{ maxWidth: 800, margin: '0 auto' }}>
        <div className="section-title animate-slide-up">
          <span style={{
            fontSize: '0.85rem',
            fontWeight: 600,
            color: 'var(--primary)',
            textTransform: 'uppercase',
            letterSpacing: 2,
          }}>
            نظرات مشتریان
          </span>
          <h2>مشتریان ما <span className="gradient-text">چه می‌گویند؟</span></h2>
          <div className="section-divider" />
        </div>

        <div className="glass-card" style={{
          padding: 40,
          textAlign: 'center',
          minHeight: 280,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          <div style={{ fontSize: '3rem', marginBottom: 16 }}>
            {testimonials[activeIndex].avatar}
          </div>
          <div style={{ color: 'var(--primary)', marginBottom: 16 }}>
            <FaQuoteRight size={24} />
          </div>
          <p style={{
            fontSize: '1.1rem',
            color: 'var(--text-secondary)',
            lineHeight: 2,
            marginBottom: 24,
            fontStyle: 'italic',
          }}>
            "{testimonials[activeIndex].text}"
          </p>
          <div style={{ display: 'flex', gap: 4, marginBottom: 12, justifyContent: 'center' }}>
            {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
              <FaStar key={i} color="#ffc107" size={16} />
            ))}
          </div>
          <h4 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: 4 }}>
            {testimonials[activeIndex].name}
          </h4>
          <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
            {testimonials[activeIndex].role}
          </p>
        </div>

        {/* Dots */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: 10,
          marginTop: 24,
        }}>
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              style={{
                width: activeIndex === i ? 32 : 10,
                height: 10,
                borderRadius: 5,
                background: activeIndex === i ? 'var(--gradient-1)' : 'var(--border-color)',
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
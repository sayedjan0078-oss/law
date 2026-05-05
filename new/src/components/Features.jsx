import React from 'react';
import { FaBolt, FaWifi, FaClock, FaUsers, FaAward, FaCogs } from 'react-icons/fa';

const Features = () => {
  const features = [
    {
      icon: <FaBolt size={28} />,
      title: 'سرعت فوق‌العاده',
      desc: 'اینترنت با سرعت گیگابیتی برای تجربه‌ای بی‌نظیر',
      percentage: 98,
      color: '#00d4ff',
    },
    {
      icon: <FaWifi size={28} />,
      title: 'پوشش سراسری',
      desc: 'پوشش WiFi کامل در تمام نقاط ساختمان',
      percentage: 95,
      color: '#7b2ff7',
    },
    {
      icon: <FaClock size={28} />,
      title: 'آپتایم ۹۹.۹٪',
      desc: 'تضمین دسترسی دائمی و بدون قطعی',
      percentage: 99,
      color: '#00ff88',
    },
    {
      icon: <FaUsers size={28} />,
      title: 'پشتیبانی ۲۴/۷',
      desc: 'تیم پشتیبانی حرفه‌ای در تمام ساعات',
      percentage: 97,
      color: '#ff6b35',
    },
    {
      icon: <FaAward size={28} />,
      title: 'تضمین کیفیت',
      desc: 'بهترین تجهیزات و استانداردهای جهانی',
      percentage: 96,
      color: '#ff2d55',
    },
    {
      icon: <FaCogs size={28} />,
      title: 'مدیریت هوشمند',
      desc: 'کنترل و مدیریت آسان شبکه از پنل اختصاصی',
      percentage: 94,
      color: '#5856d6',
    },
  ];

  return (
    <section id="features" style={{
      padding: '100px 24px',
      background: 'var(--bg-primary)',
      position: 'relative',
    }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <div className="section-title animate-slide-up">
          <span style={{
            fontSize: '0.85rem',
            fontWeight: 600,
            color: 'var(--secondary)',
            textTransform: 'uppercase',
            letterSpacing: 2,
          }}>
            چرا ما؟
          </span>
          <h2>ویژگی‌های <span className="gradient-text-2">منحصر به فرد</span></h2>
          <div className="section-divider" style={{ background: 'var(--gradient-2)' }} />
          <p>دلایلی که مشتریان ما را انتخاب می‌کنند</p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
          gap: 30,
        }}>
          {features.map((feature, i) => (
            <div
              key={i}
              className="glass-card"
              style={{
                padding: 32,
                display: 'flex',
                gap: 20,
                alignItems: 'flex-start',
                animation: `slideRight 0.6s ease ${i * 0.1}s forwards`,
                opacity: 0,
              }}
            >
              <div style={{
                width: 60,
                height: 60,
                borderRadius: 16,
                background: `${feature.color}15`,
                border: `1px solid ${feature.color}30`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: feature.color,
                flexShrink: 0,
              }}>
                {feature.icon}
              </div>
              <div style={{ flex: 1 }}>
                <h3 style={{
                  fontSize: '1.15rem',
                  fontWeight: 700,
                  marginBottom: 8,
                  color: 'var(--text-primary)',
                }}>
                  {feature.title}
                </h3>
                <p style={{
                  fontSize: '0.9rem',
                  color: 'var(--text-secondary)',
                  lineHeight: 1.7,
                  marginBottom: 16,
                }}>
                  {feature.desc}
                </p>
                {/* Progress Bar */}
                <div style={{
                  height: 6,
                  background: 'var(--bg-secondary)',
                  borderRadius: 3,
                  overflow: 'hidden',
                }}>
                  <div style={{
                    height: '100%',
                    width: `${feature.percentage}%`,
                    background: `linear-gradient(90deg, ${feature.color}, ${feature.color}80)`,
                    borderRadius: 3,
                    transition: 'width 1.5s ease',
                  }} />
                </div>
                <div style={{
                  marginTop: 6,
                  fontSize: '0.75rem',
                  color: feature.color,
                  fontWeight: 700,
                }}>
                  {feature.percentage}٪ رضایت مشتریان
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
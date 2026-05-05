import React from 'react';
import {
  FaWifi, FaNetworkWired, FaShieldAlt, FaTools,
  FaServer, FaMobileAlt, FaLock, FaChartLine
} from 'react-icons/fa';

const Services = () => {
  const services = [
    {
      icon: <FaWifi size={32} />,
      title: 'نصب و راه‌اندازی WiFi',
      desc: 'نصب حرفه‌ای شبکه WiFi با پوشش کامل برای منازل، ادارات و فضاهای عمومی',
      color: '#00d4ff',
      gradient: 'linear-gradient(135deg, #00d4ff20, #00d4ff05)',
    },
    {
      icon: <FaNetworkWired size={32} />,
      title: 'طراحی شبکه',
      desc: 'طراحی و پیاده‌سازی زیرساخت شبکه با بهترین تجهیزات و استانداردها',
      color: '#7b2ff7',
      gradient: 'linear-gradient(135deg, #7b2ff720, #7b2ff705)',
    },
    {
      icon: <FaShieldAlt size={32} />,
      title: 'امنیت شبکه',
      desc: 'تأمین امنیت شبکه با فایروال‌های پیشرفته و سیستم‌های تشخیص نفوذ',
      color: '#00ff88',
      gradient: 'linear-gradient(135deg, #00ff8820, #00ff8805)',
    },
    {
      icon: <FaTools size={32} />,
      title: 'تعمیر و نگهداری',
      desc: 'خدمات نگهداری دوره‌ای و رفع مشکلات شبکه با سرعت بالا',
      color: '#ff6b35',
      gradient: 'linear-gradient(135deg, #ff6b3520, #ff6b3505)',
    },
    {
      icon: <FaServer size={32} />,
      title: 'سرور و دیتاسنتر',
      desc: 'راه‌اندازی و مدیریت سرورها و زیرساخت‌های دیتاسنتر حرفه‌ای',
      color: '#ff2d55',
      gradient: 'linear-gradient(135deg, #ff2d5520, #ff2d5505)',
    },
    {
      icon: <FaMobileAlt size={32} />,
      title: 'شبکه موبایل',
      desc: 'بهینه‌سازی اتصال موبایل و راه‌حل‌های شبکه برای دستگاه‌های همراه',
      color: '#5856d6',
      gradient: 'linear-gradient(135deg, #5856d620, #5856d605)',
    },
    {
      icon: <FaLock size={32} />,
      title: 'VPN اختصاصی',
      desc: 'ایجاد شبکه خصوصی مجازی امن برای ارتباطات سازمانی و دورکاری',
      color: '#ff9500',
      gradient: 'linear-gradient(135deg, #ff950020, #ff950005)',
    },
    {
      icon: <FaChartLine size={32} />,
      title: 'مانیتورینگ شبکه',
      desc: 'نظارت ۲۴/۷ بر عملکرد شبکه و ارائه گزارش‌های تحلیلی دقیق',
      color: '#34c759',
      gradient: 'linear-gradient(135deg, #34c75920, #34c75905)',
    },
  ];

  return (
    <section id="services" style={{
      padding: '100px 24px',
      background: 'var(--bg-secondary)',
      position: 'relative',
    }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <div className="section-title animate-slide-up">
          <span style={{
            fontSize: '0.85rem',
            fontWeight: 600,
            color: 'var(--primary)',
            textTransform: 'uppercase',
            letterSpacing: 2,
          }}>
            خدمات ما
          </span>
          <h2 className="gradient-text">خدمات تخصصی <span style={{ color: 'var(--text-primary)' }}>شبکه و WiFi</span></h2>
          <div className="section-divider" />
          <p>مجموعه کاملی از خدمات شبکه و ارتباطات بی‌سیم با بالاترین کیفیت</p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: 24,
        }}>
          {services.map((service, i) => (
            <div
              key={i}
              className="glass-card"
              style={{
                padding: 32,
                animation: `slideUp 0.6s ease ${i * 0.1}s forwards`,
                opacity: 0,
                cursor: 'pointer',
              }}
            >
              <div style={{
                width: 70,
                height: 70,
                borderRadius: 18,
                background: service.gradient,
                border: `1px solid ${service.color}30`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: 20,
                color: service.color,
              }}>
                {service.icon}
              </div>
              <h3 style={{
                fontSize: '1.2rem',
                fontWeight: 700,
                marginBottom: 12,
                color: 'var(--text-primary)',
              }}>
                {service.title}
              </h3>
              <p style={{
                fontSize: '0.9rem',
                color: 'var(--text-secondary)',
                lineHeight: 1.8,
              }}>
                {service.desc}
              </p>
              <div style={{
                marginTop: 20,
                display: 'flex',
                alignItems: 'center',
                gap: 8,
                color: service.color,
                fontSize: '0.85rem',
                fontWeight: 600,
              }}>
                <span>بیشتر بدانید</span>
                <span>←</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
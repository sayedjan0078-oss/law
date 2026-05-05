import React from 'react';
import { FaCheckCircle, FaUsers, FaProjectDiagram, FaTrophy } from 'react-icons/fa';

const About = () => {
  const highlights = [
    'بیش از ۱۰ سال تجربه در صنعت شبکه و WiFi',
    'تیم متخصص و دارای مدارک بین‌المللی',
    'استفاده از تجهیزات روز دنیا',
    'پشتیبانی ۲۴ ساعته و ۷ روز هفته',
    'مشاوره رایگان قبل از اجرا',
    'گارانتی خدمات تا ۳ سال',
  ];

  const teamStats = [
    { icon: <FaUsers size={24} />, value: '+۵۰', label: 'عضو تیم' },
    { icon: <FaProjectDiagram size={24} />, value: '+۱۰۰۰', label: 'پروژه موفق' },
    { icon: <FaTrophy size={24} />, value: '+۵۰۰', label: 'مشتری راضی' },
  ];

  return (
    <section id="about" style={{
      padding: '100px 24px',
      background: 'var(--bg-secondary)',
      position: 'relative',
      overflow: 'hidden',
    }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 60,
          alignItems: 'center',
        }}>
          {/* Content */}
          <div>
            <span style={{
              fontSize: '0.85rem',
              fontWeight: 600,
              color: 'var(--accent)',
              textTransform: 'uppercase',
              letterSpacing: 2,
            }}>
              درباره ما
            </span>
            <h2 style={{
              fontSize: '2.5rem',
              fontWeight: 800,
              marginTop: 12,
              marginBottom: 20,
              lineHeight: 1.3,
            }}>
              <span className="gradient-text">قدرت نظری</span> تکنالوژی
              <br />
              <span style={{ fontSize: '1.5rem', fontWeight: 600, color: 'var(--text-secondary)' }}>
                پیشرو در خدمات شبکه
              </span>
            </h2>
            <p style={{
              fontSize: '1rem',
              color: 'var(--text-secondary)',
              lineHeight: 2,
              marginBottom: 30,
            }}>
              شرکت قدرت نظری تکنالوژی با بیش از یک دهه تجربه در زمینه ارائه خدمات شبکه و WiFi،
              یکی از معتبرترین شرکت‌های فناوری اطلاعات در منطقه است. ما با تکیه بر دانش فنی
              روز و تجهیزات پیشرفته، بهترین راه‌حل‌های ارتباطی را برای مشتریان خود فراهم می‌کنیم.
            </p>

            <div style={{ marginBottom: 30 }}>
              {highlights.map((item, i) => (
                <div
                  key={i}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 12,
                    marginBottom: 14,
                    animation: `slideRight 0.5s ease ${i * 0.1}s forwards`,
                    opacity: 0,
                  }}
                >
                  <FaCheckCircle color="var(--primary)" size={18} />
                  <span style={{
                    fontSize: '0.95rem',
                    color: 'var(--text-primary)',
                    fontWeight: 500,
                  }}>
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* Team Stats */}
            <div style={{ display: 'flex', gap: 20 }}>
              {teamStats.map((stat, i) => (
                <div
                  key={i}
                  className="glass-card"
                  style={{
                    padding: '20px 24px',
                    textAlign: 'center',
                    borderRadius: 16,
                  }}
                >
                  <div style={{ color: 'var(--primary)', marginBottom: 8, display: 'flex', justifyContent: 'center' }}>
                    {stat.icon}
                  </div>
                  <div style={{ fontSize: '1.4rem', fontWeight: 800 }}>{stat.value}</div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Visual */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
            <div style={{
              position: 'relative',
              width: '100%',
              maxWidth: 480,
            }}>
              {/* Main Card */}
              <div
                className="glass-card animate-pulse-glow"
                style={{
                  padding: 40,
                  borderRadius: 24,
                  textAlign: 'center',
                }}
              >
                <div style={{
                  width: 120,
                  height: 120,
                  borderRadius: 30,
                  background: 'var(--gradient-1)',
                  margin: '0 auto 24px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                  <span style={{ fontSize: '3rem' }}>🌐</span>
                </div>
                <h3 style={{
                  fontSize: '1.5rem',
                  fontWeight: 800,
                  marginBottom: 12,
                }}>
                  <span className="gradient-text">قدرت نظری</span> تکنالوژی
                </h3>
                <p style={{
                  color: 'var(--text-secondary)',
                  fontSize: '0.9rem',
                  lineHeight: 1.8,
                  marginBottom: 24,
                }}>
                  از سال ۱۳۹۵ در خدمت شما هستیم
                </p>

                {/* Mini Stats */}
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: 12,
                }}>
                  {[
                    { label: 'رضایت مشتری', value: '۹۸٪' },
                    { label: 'سرعت پاسخگویی', value: '< ۵ دقیقه' },
                    { label: 'پروژه فعال', value: '+۱۲۰' },
                    { label: 'شهر تحت پوشش', value: '۳۴' },
                  ].map((item, i) => (
                    <div
                      key={i}
                      style={{
                        background: 'var(--bg-secondary)',
                        borderRadius: 12,
                        padding: '14px 10px',
                      }}
                    >
                      <div style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--primary)' }}>
                        {item.value}
                      </div>
                      <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>
                        {item.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          section#about > div > div {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};

export default About;
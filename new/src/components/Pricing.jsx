import React, { useState } from 'react';
import { FaCheck, FaWifi, FaCrown, FaBuilding } from 'react-icons/fa';

const Pricing = () => {
  const [isYearly, setIsYearly] = useState(false);
  const toPersian = n => n.toString().replace(/\d/g, d => '۰۱۲۳۴۵۶۷۸۹'[d]);

  const plans = [
    { icon:<FaWifi size={22}/>, name:'پایه', desc:'مناسب منازل', monthly:150, yearly:1500, color:'#00d4ff', features:['نصب رایگان روتر','پوشش تا ۱۵۰ متر','سرعت تا ۱۰۰ مگابیت','پشتیبانی تلفنی','گارانتی ۱ ساله'], popular:false },
    { icon:<FaCrown size={22}/>, name:'حرفه‌ای', desc:'مناسب شرکت‌ها', monthly:350, yearly:3500, color:'#7b2ff7', features:['نصب تجهیزات پیشرفته','پوشش تا ۵۰۰ متر','سرعت تا ۱ گیگابیت','پشتیبانی ۲۴/۷','گارانتی ۲ ساله','فایروال و امنیت'], popular:true },
    { icon:<FaBuilding size={22}/>, name:'سازمانی', desc:'مناسب سازمان‌ها', monthly:750, yearly:7500, color:'#ff6b35', features:['طراحی اختصاصی','پوشش نامحدود','سرعت گیگابیتی+','تیم پشتیبانی اختصاصی','گارانتی ۳ ساله','مانیتورینگ ۲۴/۷','مشاوره رایگان'], popular:false }
  ];

  return (
    <section id="pricing" className="section" style={{ background:'var(--bg-secondary)' }}>
      <div className="container">
        <div className="section-title animate-slide-up">
          <span style={{ fontSize:'0.8rem', fontWeight:600, color:'var(--primary)', letterSpacing:1 }}>تعرفه‌ها</span>
          <h2>پلن‌های <span className="gradient-text">قیمت‌گذاری</span></h2>
          <div className="section-divider" />
          <p>بهترین پلن را متناسب با نیاز خود انتخاب کنید</p>

          <div className="pricing-toggle" style={{ display:'flex', alignItems:'center', justifyContent:'center', gap:14, marginTop:24 }}>
            <span style={{ fontSize:'0.85rem', fontWeight:600, color:!isYearly?'var(--primary)':'var(--text-muted)' }}>ماهانه</span>
            <button onClick={()=>setIsYearly(!isYearly)} style={{ width:50, height:28, borderRadius:14, background:isYearly?'var(--gradient-1)':'var(--bg-card)', border:`2px solid ${isYearly?'var(--primary)':'var(--border-color)'}`, position:'relative', cursor:'pointer', transition:'all 0.3s' }}>
              <div style={{ width:20, height:20, borderRadius:'50%', background:'#fff', position:'absolute', top:2, right:isYearly?2:'auto', left:isYearly?'auto':2, transition:'all 0.3s', boxShadow:'0 2px 5px rgba(0,0,0,0.2)' }} />
            </button>
            <span style={{ fontSize:'0.85rem', fontWeight:600, color:isYearly?'var(--primary)':'var(--text-muted)' }}>سالانه <span style={{ background:'var(--gradient-2)', color:'#fff', fontSize:'0.65rem', padding:'2px 6px', borderRadius:8, marginRight:6, fontWeight:700 }}>۲۰٪ تخفیف</span></span>
          </div>
        </div>

        <div className="grid-auto" style={{ alignItems:'start' }}>
          {plans.map((p,i)=>(
            <div key={i} className="glass-card animate-scale-in" style={{ padding:p.popular?28:20, position:'relative', borderColor:p.popular?p.color:'var(--border-color)', transform:p.popular?'scale(1.02)':'scale(1)', animationDelay:`${i*0.15}s` }}>
              {p.popular && <div style={{ position:'absolute', top:-10, left:'50%', transform:'translateX(-50%)', background:'var(--gradient-2)', color:'#fff', padding:'4px 14px', borderRadius:16, fontSize:'0.7rem', fontWeight:700 }}>⭐ پیشنهادی</div>}
              <div style={{ textAlign:'center', marginBottom:18 }}>
                <div style={{ width:54, height:54, borderRadius:14, background:`${p.color}15`, border:`1px solid ${p.color}30`, display:'flex', alignItems:'center', justifyContent:'center', margin:'0 auto 12px', color:p.color }}>{p.icon}</div>
                <h3 style={{ fontSize:'1.2rem', fontWeight:800, marginBottom:4 }}>{p.name}</h3>
                <p style={{ fontSize:'0.8rem', color:'var(--text-muted)' }}>{p.desc}</p>
              </div>
              <div style={{ textAlign:'center', marginBottom:18 }}>
                <span style={{ fontSize:'clamp(2rem, 6vw, 2.6rem)', fontWeight:900, color:p.color }}>{toPersian(isYearly?p.yearly:p.monthly)}</span>
                <span style={{ fontSize:'0.8rem', color:'var(--text-muted)', marginRight:4 }}>{isYearly?'هزار تومان / سال':'هزار تومان / ماه'}</span>
              </div>
              <div style={{ marginBottom:18 }}>
                {p.features.map((f,fi)=>(
                  <div key={fi} style={{ display:'flex', alignItems:'center', gap:8, padding:'8px 0', borderBottom:`1px solid var(--border-color)` }}>
                    <FaCheck size={12} color={p.color} />
                    <span style={{ fontSize:'0.85rem', color:'var(--text-secondary)' }}>{f}</span>
                  </div>
                ))}
              </div>
              <button className={p.popular?'btn-primary':'btn-outline'} style={{ width:'100%', padding:12, fontSize:'0.9rem' }}>انتخاب پلن</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Pricing;
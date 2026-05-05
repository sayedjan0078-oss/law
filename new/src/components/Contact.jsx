import React, { useState } from 'react';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaPaperPlane } from 'react-icons/fa';

const Contact = () => {
  const [form, setForm] = useState({ name:'', email:'', phone:'', subject:'', message:'' });
  const [sent, setSent] = useState(false);

  const submit = e => { e.preventDefault(); setSent(true); setTimeout(()=>setSent(false),3000); setForm({ name:'', email:'', phone:'', subject:'', message:'' }); };
  const change = e => setForm({...form, [e.target.name]:e.target.value});

  const info = [
    { icon:<FaMapMarkerAlt size={16}/>, title:'آدرس', text:'کابل، افغانستان، سرک اصلی' },
    { icon:<FaPhone size={16}/>, title:'تلفن', text:'۰۷۰۰-۰۰۰-۰۰۰' },
    { icon:<FaEnvelope size={16}/>, title:'ایمیل', text:'info@qudratnazari.com' },
    { icon:<FaClock size={16}/>, title:'ساعات کاری', text:'شنبه تا پنجشنبه: ۸ صبح - ۶ عصر' },
  ];

  const Input = ({name,label,type,placeholder}) => (
    <div style={{width:'100%'}}>
      <label style={{display:'block',fontSize:'0.8rem',fontWeight:600,marginBottom:4,color:'var(--text-secondary)'}}>{label}</label>
      <input type={type} name={name} value={form[name]} onChange={change} placeholder={placeholder} required style={{
        width:'100%', padding:'10px 12px', borderRadius:10, border:'1px solid var(--border-color)',
        background:'var(--bg-secondary)', color:'var(--text-primary)', fontFamily:'inherit', fontSize:'0.85rem', outline:'none'
      }} onFocus={e=>e.target.style.borderColor='var(--primary)'} onBlur={e=>e.target.style.borderColor='var(--border-color)'} />
    </div>
  );

  return (
    <section id="contact" className="section" style={{background:'var(--bg-primary)'}}>
      <div className="container">
        <div className="section-title animate-slide-up">
          <span style={{fontSize:'0.8rem',fontWeight:600,color:'var(--primary)',letterSpacing:1}}>تماس با ما</span>
          <h2>با ما در <span className="gradient-text">ارتباط باشید</span></h2>
          <div className="section-divider" />
        </div>

        <div className="grid-2" style={{alignItems:'start'}}>
          <div>
            <div style={{marginBottom:24}}>
              {info.map((c,i)=>(
                <div key={i} className="glass-card" style={{display:'flex',alignItems:'center',gap:12,padding:14,marginBottom:12,borderRadius:12}}>
                  <div style={{width:40,height:40,borderRadius:10,background:'var(--gradient-1)',display:'flex',alignItems:'center',justifyContent:'center',color:'#fff',flexShrink:0}}>{c.icon}</div>
                  <div><div style={{fontSize:'0.7rem',color:'var(--text-muted)'}}>{c.title}</div><div style={{fontSize:'0.85rem',fontWeight:600}}>{c.text}</div></div>
                </div>
              ))}
            </div>
            <div style={{display:'flex',gap:10,justifyContent:'center',flexWrap:'wrap'}}>
              {['📘','📸','🐦','💬'].map((ic,i)=>(
                <button key={i} style={{width:42,height:42,borderRadius:12,background:'var(--bg-card)',border:'1px solid var(--border-color)',display:'flex',alignItems:'center',justifyContent:'center',fontSize:'1.1rem',cursor:'pointer'}}>{ic}</button>
              ))}
            </div>
          </div>

          <div className="glass-card" style={{padding:24,borderRadius:18}}>
            {sent ? (
              <div style={{textAlign:'center',padding:'40px 20px'}}>
                <div style={{fontSize:'3rem',marginBottom:12}}>✅</div>
                <h3 style={{fontSize:'1.3rem',fontWeight:800,marginBottom:6}}>پیام شما ارسال شد!</h3>
                <p style={{color:'var(--text-secondary)',fontSize:'0.9rem'}}>به زودی با شما تماس خواهیم گرفت</p>
              </div>
            ) : (
              <form onSubmit={submit}>
                <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit, minmax(180px, 1fr))',gap:12,marginBottom:12}}>
                  <Input name="name" label="نام" type="text" placeholder="نام خود را وارد کنید" />
                  <Input name="email" label="ایمیل" type="email" placeholder="example@email.com" />
                  <Input name="phone" label="تلفن" type="tel" placeholder="۰۷۰۰-۰۰۰-۰۰۰" />
                  <Input name="subject" label="موضوع" type="text" placeholder="موضوع پیام" />
                </div>
                <div style={{marginBottom:16}}>
                  <label style={{display:'block',fontSize:'0.8rem',fontWeight:600,marginBottom:4,color:'var(--text-secondary)'}}>پیام</label>
                  <textarea name="message" value={form.message} onChange={change} placeholder="پیام خود را بنویسید..." required rows={4} style={{
                    width:'100%',padding:'10px 12px',borderRadius:10,border:'1px solid var(--border-color)',
                    background:'var(--bg-secondary)',color:'var(--text-primary)',fontFamily:'inherit',fontSize:'0.85rem',outline:'none',resize:'vertical'
                  }} onFocus={e=>e.target.style.borderColor='var(--primary)'} onBlur={e=>e.target.style.borderColor='var(--border-color)'} />
                </div>
                <button type="submit" className="btn-primary" style={{width:'100%',padding:12,fontSize:'0.9rem',display:'flex',alignItems:'center',justifyContent:'center',gap:8}}>
                  <FaPaperPlane size={14} /> ارسال پیام
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
export default Contact;
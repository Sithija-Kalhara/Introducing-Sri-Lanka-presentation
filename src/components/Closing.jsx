import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import './Closing.css'; 

// Clean Inline SVG Component to guarantee Sri Lankan flag renders perfectly across all devices
const SriLankaSVGFlag = () => (
  <svg className="svg-flag-srilanka" viewBox="0 0 24 12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="24" height="12" fill="#F4A261"/>
    <rect width="7" height="12" fill="#E76F51"/>
    <rect x="7" width="2" height="12" fill="#2A9D8F"/>
    <rect x="9" width="15" height="12" fill="#A855F7" fillOpacity="0.3"/>
    <circle cx="16.5" cy="6" r="2.5" fill="#FDB913"/>
  </svg>
);

export default function Closing() {
  const { t, language } = useLanguage();
  
  // Generate particles for background
  const particles = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    top: Math.random() * 100,
    delay: Math.random() * 10,
    duration: 6 + Math.random() * 8,
    size: 2 + Math.random() * 3
  }));

  // Helper function to get label text based on language
  const getPortfolioLabel = () => {
    return language === 'ja' ? "開発者プロフィール" : (t.portfolio || "Developer Profile");
  };

  const getPortfolioDesc = () => {
    return language === 'ja' ? "Eyerone 創業者 兼 CEO｜メカ • AIデータサイエンティスト" : "Founder & CEO of Eyerone • AI Data Scientist";
  };

  const getOnlineSlidesLabel = () => {
    return language === 'ja' ? "オンラインスライドとアクセス" : "ONLINE SLIDES & ACCESS";
  };

  const getConcludingText = () => {
    return language === 'ja' ? "結論プレゼンテーションスライド" : "CONCLUDING PRESENTATION SLIDE";
  };

  const getCopyrightText = () => {
    return language === 'ja' ? "Eyeroneチーム。無断転載を禁じます。" : "Eyerone Team. All Rights Reserved.";
  };

  return (
    <section className="fullscreen-slide closing-section">
      
      {/* Particle Background */}
      <div className="closing-particles">
        {particles.map(particle => (
          <div
            key={particle.id}
            className="closing-particle"
            style={{
              left: `${particle.left}%`,
              top: `${particle.top}%`,
              animationDelay: `${particle.delay}s`,
              animationDuration: `${particle.duration}s`,
              width: `${particle.size}px`,
              height: `${particle.size}px`
            }}
          />
        ))}
      </div>
      
      {/* Decorative Floating Elements */}
      <div className="closing-floating-elements">
        <div className="floating-element elem-1">✦</div>
        <div className="floating-element elem-2">●</div>
        <div className="floating-element elem-3">◆</div>
        <div className="floating-element elem-4">■</div>
      </div>
      
      <div className="closing-content">
        
        {/* Main Header Title With Spacing Animations */}
        <motion.h1 
          className="closing-title"
          initial={{ opacity: 0, letterSpacing: '20px' }}
          whileInView={{ opacity: 1, letterSpacing: '6px' }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          {language === 'en' ? 'Thank you for\nyour attention' : 'ご清聴ありがとう\nございました'}
        </motion.h1>
        
        <p className="closing-subtitle">{getConcludingText()}</p>
        
        {/* Profile & Presentation Links Card */}
        <motion.div 
          className="closing-card"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          whileHover={{ y: -6, borderColor: 'rgba(168, 85, 247, 0.4)' }}
          viewport={{ once: true }}
        >
          <span className="closing-card-label">{getPortfolioLabel()}</span>
          
          <a 
            href="https://sithijakalhara.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            style={{ textDecoration: 'none' }}
          >
            <h2 className="closing-portfolio-url">sithijakalhara.com</h2>
          </a>        
          
          <p className="closing-portfolio-desc">{getPortfolioDesc()}</p>

          <hr className="closing-divider" style={{ border: 'none', height: '1px', backgroundColor: 'rgba(255,255,255,0.1)', margin: '15px 0' }} />

          
          {/* Fixed Vector Flag Segment */}
          <div className="closing-ayubowan-container" style={{ marginTop: '20px' }}>
            <span className="closing-ayubowan">{t.ayubowan || (language === 'ja' ? 'アユボワン！' : 'Ayubowan!')}</span>
          </div>
        </motion.div>
        
      </div>

      {/* Right Added Copyright Segment with Japanese Translation */}
      <div className="eyerone-copyright">
        <span>&copy; {new Date().getFullYear()} {getCopyrightText()}</span>
      </div>
      
    </section>
  );
}
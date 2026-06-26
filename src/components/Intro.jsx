import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaYoutube, FaGithub, FaLinkedin, FaFacebook, FaTiktok, FaXmark } from 'react-icons/fa6';
import { IoGlobeOutline } from 'react-icons/io5';
import { useLanguage } from '../context/LanguageContext';
import './Intro.css';

// Images
import firstImg from '../assets/Srilanka.jpg';
import secondImg from '../assets/Full- Stack Development.png';
import thirdImg from '../assets/mypc.jpg';
import fourthImg from '../assets/Sri Lankan Koththu.png';
import fifthImg from '../assets/Eyerone.png';

export default function Intro({ activeSection }) {
  const { t } = useLanguage();
  const [activePopup, setActivePopup] = useState(null);

  const introNodes = [
    { id: 1, label: t.intro1Label, main: t.intro1Main, detail: t.intro1Detail, cardIcon: '🌏', modalImage: firstImg },
    { 
      id: 2, label: t.intro2Label, main: t.intro2Main, detail: t.intro2Detail, cardIcon: '💻', modalImage: secondImg,
      links: [
        { type: 'youtube', url: 'https://www.youtube.com/@mrflexy1', icon: <FaYoutube size={18}/>, label: 'Gaming YT' },
        { type: 'github', url: 'https://github.com/Sithija-Kalhara', icon: <FaGithub size={18}/>, label: 'GitHub' },
        { type: 'linkedin', url: 'https://www.linkedin.com/in/sithija-kalhara/', icon: <FaLinkedin size={18}/>, label: 'LinkedIn' },
        { type: 'facebook', url: 'https://www.facebook.com/sithijakalhara0', icon: <FaFacebook size={18}/>, label: 'Facebook' },
        { type: 'website', url: 'https://sithijakalhara.com', icon: <IoGlobeOutline size={18}/>, label: 'Portfolio' }
      ]
    },
    { 
      id: 3, label: t.intro3Label, main: t.intro3Main, detail: t.intro3Detail, cardIcon: '🎮', modalImage: thirdImg,
      links: [
        { type: 'youtube', url: 'https://www.youtube.com/@mrflexy1', icon: <FaYoutube size={18}/>, label: 'Gaming YT' },
        { type: 'tiktok', url: 'https://www.tiktok.com/@mr._.flexy', icon: <FaTiktok size={18}/>, label: 'TikTok' },
        { type: 'facebook', url: 'https://www.facebook.com/mrflexy2', icon: <FaFacebook size={18}/>, label: 'Facebook' },
      ]
    },
    { id: 4, label: t.intro4Label, main: t.intro4Main, detail: t.intro4Detail, cardIcon: '🍛', modalImage: fourthImg },
    { id: 5, label: t.intro5Label, main: t.intro5Main, detail: t.intro5Detail, cardIcon: '🚀', modalImage: fifthImg }
  ];

  useEffect(() => {
    const handleNumberKeys = (e) => {
      if(activeSection !== 'intro') return;
      if (document.activeElement.tagName === 'INPUT' || document.activeElement.tagName === 'TEXTAREA') {
        return;
      }

      const keyNum = parseInt(e.key);
      if (keyNum >= 1 && keyNum <= 5) {
        e.preventDefault();
        
        const targetNode = introNodes.find(node => node.id === keyNum);
        setActivePopup(prev => (prev?.id === keyNum ? null : targetNode));
      }

      if (e.key === 'Escape') {
        setActivePopup(null);
      }
    };

    window.addEventListener('keydown', handleNumberKeys);
    return () => {
      window.removeEventListener('keydown', handleNumberKeys);
    };
  }, [activePopup, activeSection]); 

  const handleCardClick = (node) => {
    if (activePopup?.id === node.id) {
      setActivePopup(null);
    } else {
      setActivePopup(node);
    }
  };

  return (
    <section className="fullscreen-slide intro-section">
      <h2 className="slide-title-neon">{t.introTitle}</h2>
      
      <div className="intro-container">
        {introNodes.map((node) => (
          <motion.div 
            key={node.id} 
            className="intro-card"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
            onClick={() => handleCardClick(node)}
            tabIndex={0} 
            role="button" 
            aria-expanded={activePopup?.id === node.id}
          >
            <div className="intro-card-glow"></div>
            <div className="intro-card-icon">{node.cardIcon}</div>
            <span className="intro-card-label">{node.label}</span>
            <h3 className="intro-card-title">{node.main}</h3>
            <span className="intro-card-expand">{t.clickExpand}</span>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {activePopup && (
          <div className="intro-modal-overlay" onClick={() => setActivePopup(null)}>
            <motion.div 
              className="intro-modal-content"
              initial={{ scale: 0.9, opacity: 0 }} 
              animate={{ scale: 1, opacity: 1 }} 
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button className="intro-modal-close" onClick={() => setActivePopup(null)}>
                <FaXmark size={20} />
              </button>
              
              <div className="intro-modal-scroll">
                <h4 className="intro-modal-label">{activePopup.label}</h4>
                <h2 className="intro-modal-title">{activePopup.main}</h2>
                <p className="intro-modal-detail">{activePopup.detail}</p>

                {activePopup.links && (
                  <div className="intro-social-links">
                    {activePopup.links.map((link, index) => (
                      <a 
                        key={index} 
                        href={link.url} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className={`social-btn ${link.type}`}
                      >
                        {link.icon}
                        <span>{link.label}</span>
                      </a>
                    ))}
                  </div>
                )}

                {activePopup.modalImage && (
                  <div className="intro-modal-image-container">
                    <img 
                      src={activePopup.modalImage} 
                      alt={activePopup.main} 
                      className="intro-modal-img" 
                    />
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
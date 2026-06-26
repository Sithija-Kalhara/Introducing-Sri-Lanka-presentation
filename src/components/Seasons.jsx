import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import './Seasons.css';

// Optimized image imports with proper sizing
import yalaImg from '../assets/Yala Monsoon.png';
import mahaImg from '../assets/Maha Monsoon.png';
import interImg from '../assets/Inter-Monsoon.png';

export default function Seasons({ activeSection }) {
  const { t } = useLanguage();
  const [selectedSeason, setSelectedSeason] = useState(null);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  // Season icons/emojis
  const seasonIcons = ['🌧️', '☀️', '⛅'];

  // Dynamic Array mapping to Language Context
  const SEASONS_DATA = [
    {
      id: 1,
      title: t.yalaTitle || "Yala Monsoon",
      japanese: t.yalaSub || "(南西モンスーン)",
      date: t.yalaDate || "May - August",
      desc: t.yalaDesc || "Brings rainfall to Southern and Western parts of Sri Lanka, essential for tea plantations and hydroelectric power generation.",
      descJa: "スリランカ南部と西部に降雨をもたらし、茶園と水力発電に不可欠です。",
      img: yalaImg,
      color: "#a855f7",
      icon: "🌧️",
      alt: "Yala Monsoon rainfall visualization",
      altJa: "ヤラモンスーン 降雨図",
      details: "Southwest monsoon brings heavy rainfall to the wet zone, supporting the country's tea industry and providing water for reservoirs."
    },
    {
      id: 2,
      title: t.mahaTitle || "Maha Monsoon",
      japanese: t.mahaSub || "(北東モンスーン)",
      date: t.mahaDate || "October - January",
      desc: t.mahaDesc || "Brings rainfall to Northern and Eastern zones, vital for rice farming and replenishing water sources.",
      descJa: "北部と東部に降雨をもたらし、稲作と水源の補充に不可欠です。",
      img: mahaImg,
      color: "#fdb913",
      icon: "☀️",
      alt: "Maha Monsoon weather pattern",
      altJa: "マハモンスーン 気象パターン",
      details: "Northeast monsoon is crucial for the dry zone, providing water for agriculture and filling tanks and reservoirs."
    },
    {
      id: 3,
      title: t.interTitle || "Inter-Monsoon",
      japanese: t.interSub || "(間欠期)",
      date: t.interDate || "Feb - Mar & Sept",
      desc: t.interDesc || "Characterized by afternoon thunderstorms and high humidity, bringing unpredictable weather patterns.",
      descJa: "午後の雷雨と高湿度が特徴で、予測不可能な天候パターンをもたらします。",
      img: interImg,
      color: "#ffffff",
      icon: "⛅",
      alt: "Inter-Monsoon thunderstorm",
      altJa: "間欠期 雷雨",
      details: "Inter-monsoon periods feature convectional rainfall, with sudden afternoon showers and vibrant lightning shows."
    }
  ];

  // Preload images
  useEffect(() => {
    const loadImages = async () => {
      const imagePromises = SEASONS_DATA.map((season) => {
        return new Promise((resolve) => {
          const img = new Image();
          img.src = season.img;
          img.onload = () => resolve(true);
          img.onerror = () => resolve(false);
        });
      });

      await Promise.all(imagePromises);
      setImagesLoaded(true);
    };

    loadImages();
  }, []);

  // Generate random particles
  const particles = Array.from({ length: 30 }, (_, i) => ({
    id: i, 
    left: Math.random() * 100, 
    top: Math.random() * 100, 
    delay: Math.random() * 8, 
    duration: 5 + Math.random() * 5
  }));

  useEffect(() => {
    const handleNumberKeys = (e) => {
      if (activeSection !== 'seasons') return;
      
      if (document.activeElement.tagName === 'INPUT' || document.activeElement.tagName === 'TEXTAREA') {
        return;
      }

      const keyNum = parseInt(e.key);
      if (keyNum >= 1 && keyNum <= 3) {
        e.preventDefault();
        
        const targetSeason = SEASONS_DATA.find(season => season.id === keyNum);
        setSelectedSeason(prev => (prev?.id === keyNum ? null : targetSeason));
      }

      if (e.key === 'Escape') {
        setSelectedSeason(null);
      }
    };

    window.addEventListener('keydown', handleNumberKeys);
    return () => {
      window.removeEventListener('keydown', handleNumberKeys);
    };
  }, [selectedSeason, activeSection]);

  const handleCardClick = (season) => {
    if (selectedSeason?.id === season.id) {
      setSelectedSeason(null);
    } else {
      setSelectedSeason(season);
    }
  };

  // Helper function to get description based on language
  const getDesc = (season) => {
    return t.language === 'ja' ? season.descJa : season.desc;
  };

  // Helper function to get title with Japanese
  const getFullTitle = (season) => {
    return t.language === 'ja' 
      ? `${season.title} ${season.japanese}` 
      : season.title;
  };

  const getRankText = (index) => t.language === 'ja' ? `第${index + 1}期` : `SEASON ${index + 1}`;
  const getSeasonDetailsLabel = () => t.language === 'ja' ? "季節の詳細" : "Season Details";
  const getImageAlt = (season) => t.language === 'ja' ? season.altJa : season.alt;

  return (
    <section className="fullscreen-slide seasons-full-section">
      <div className="season-particles">
        {particles.map(particle => (
          <div 
            key={particle.id} 
            className="season-particle" 
            style={{ 
              left: `${particle.left}%`, 
              top: `${particle.top}%`, 
              animationDelay: `${particle.delay}s`, 
              animationDuration: `${particle.duration}s` 
            }} 
          />
        ))}
      </div>

      <h2 className="slide-title-neon">
        {t.seasonsMainTitle || "季節"}
      </h2>

      <div className="seasons-container">
        {SEASONS_DATA.map((season, index) => (
          <motion.div
            key={season.id}
            className={`season-card season-card-${season.id === 1 ? 'yala' : season.id === 2 ? 'maha' : 'inter'}`}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -8 }}
            onClick={() => handleCardClick(season)}
            tabIndex={0}
            role="button"
            aria-expanded={selectedSeason?.id === season.id}
          >
            <span className="season-badge">{getRankText(index)}</span>
            <div className="season-icon">{season.icon}</div>
            <div className="season-card-content">
              <h3 style={{ color: season.color }}>
                {getFullTitle(season)}
              </h3>
              <p>{season.date}</p>
              <div 
                className="season-card-accent" 
                style={{ background: season.color }}
              />
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedSeason && (
          <motion.div 
            className="modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedSeason(null)}
          >
            <motion.div 
              className="modal-content"
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button className="modal-close" onClick={() => setSelectedSeason(null)}>✕</button>
              
              
              
              <div className="modal-image-container">
                <img 
                  src={selectedSeason.img} 
                  alt={getImageAlt(selectedSeason)}
                  className="modal-image"
                  loading="lazy"
                  decoding="async"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.parentElement.innerHTML = `
                      <div class="modal-image-placeholder" style="
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        min-height: 250px;
                        background: rgba(168, 85, 247, 0.05);
                        border-radius: 16px;
                        color: rgba(255,255,255,0.3);
                        font-size: 1rem;
                      ">
                        🌧️ ${selectedSeason.title}
                      </div>
                    `;
                  }}
                />
              </div>
              
              <h2 className="modal-title" style={{ color: selectedSeason.color }}>
                {selectedSeason.title}
              </h2>
              
              <div className="modal-desc">{getDesc(selectedSeason)}</div>
              
              <div className="modal-date" style={{ 
                color: selectedSeason.color,
                borderColor: selectedSeason.color 
              }}>
                📅 {selectedSeason.date}
              </div>

              {selectedSeason.details && (
                <div className="modal-season-details">
                  <strong style={{ color: selectedSeason.color }}>
                    {getSeasonDetailsLabel()}:
                  </strong>
                  <p>{selectedSeason.details}</p>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="season-decoration">
        {t.language === 'ja' ? '✦ 季節分析 2025 ✦' : '✦ SEASONAL ANALYSIS 2025 ✦'}
      </div>
    </section>
  );
}
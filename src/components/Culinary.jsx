import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import './Culinary.css';

// Images
import riceAndCurryImg from '../assets/Rice and Curry.jpg';
import kottuImg from '../assets/Kothu Paratha.jpg';
import HoppersImg1 from '../assets/hoppers1.jpg';
import HoppersImg2 from '../assets/hoppers2.jpg';
import HoppersImg3 from '../assets/hoppers3.jpg';
import SpicesImg1 from '../assets/Ceylon Spices.jpg';

export default function Culinary({ activeSection }) {
  const { t } = useLanguage();
  const [selectedDish, setSelectedDish] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  // Dynamic Array Mapping keys to Language Context
  const dishes = [
    {
      id: 'rice-curry',
      numericId: 1,
      icon: '🍛',
      title: t.dish1Title || "Rice & Curry",
      subtitle: t.dish1Sub || "The Daily Staple",
      subtitleJa: "毎日の主食",
      spicesEn: ["Cinnamon", "Cardamom", "Curry Leaves", "Coconut Milk"],
      spicesJa: ["シナモン", "カルダモン", "カレーリーフ", "ココナッツミルク"],
      description: t.dish1Desc,
      descriptionJa: "スリランカ料理の究極の基盤です。大皿のライスの周りに、焙煎スパイスと濃厚なココナッツミルクで力強く味付けされた、色鮮やかな副菜カレー（魚、鶏肉、またはレンズ豆）が並びます。",
      img: riceAndCurryImg,
      color: '#fdb913'
    },
    {
      id: 'kottu',
      numericId: 2,
      icon: '👨‍🍳',
      title: t.dish2Title || "Kottu Roti",
      subtitle: t.dish2Sub || "The Street Food King",
      subtitleJa: "ストリートフードの王様",
      spicesEn: ["Chili Flakes", "Ginger", "Garlic", "Godamba Roti"],
      spicesJa: ["唐辛子フレーク", "ショウガ", "ニンニク", "ゴダンバロティ"],
      description: t.dish2Desc,
      descriptionJa: "スリランカで最も象徴的な屋台料理体験。刻んだゴダンバ・ロティ（フラットブレッド）を、野菜、卵、肉、 tender なカレーソースとともに熱した鉄板の上でリズミカルに刻みながら炒めた料理です。",
      img: kottuImg,
      color: '#ff6b35'
    },
    {
      id: 'hoppers',
      numericId: 3,
      icon: '🥥',
      title: t.dish3Title || "Hoppers (Appa)",
      subtitle: t.dish3Sub || "The Breakfast Classic",
      subtitleJa: "定番の朝食",
      spicesEn: ["Rice Flour", "Coconut Toddy", "Egg"],
      spicesJa: ["米粉", "ココナッツトディ", "卵"],
      description: t.dish3Desc,
      descriptionJa: "米粉とココナッツミルクの発酵生地で作る、お椀型のサクサクしたクレープ。中央に卵を落として焼き上げた「エッグホッパー」に、スパイシーなシニサンボルを添えて食べるのが一般的です。",
      img: HoppersImg1,
      img2: HoppersImg2,
      img3: HoppersImg3,
      color: '#4c9f70'
    },
    {
      id: 'spices',
      numericId: 4,
      icon: '🌶️',
      title: t.dish4Title || "Ceylon Spices",
      subtitle: t.dish4Sub || "The Island Heritage",
      subtitleJa: "島の歴史遺産",
      spicesEn: ["True Cinnamon", "Black Pepper", "Cloves", "Nutmeg"],
      spicesJa: ["セイロンシナモン", "ブラックペッパー", "クローブ", "ナツメグ"],
      description: t.dish4Desc,
      descriptionJa: "スリランカは世界のスパイス交易路における歴史的な拠点です。世界の高級純粋シナモン市場の80%以上を占める「本物のシナモン（セイロンシナモン）」の故郷です。",
      img: SpicesImg1,
      color: '#d4a373'
    }
  ];

  // Keyboard shortcut event listener for keys 1 to 4
  useEffect(() => {
    const handleNumberKeys = (e) => {
      if (activeSection !== 'culinary') return;

      if (document.activeElement.tagName === 'INPUT' || document.activeElement.tagName === 'TEXTAREA') {
        return;
      }

      const keyNum = parseInt(e.key);
      if (keyNum >= 1 && keyNum <= 4) {
        e.preventDefault();
        const targetDish = dishes.find(dish => dish.numericId === keyNum);
        setSelectedDish(prev => (prev?.numericId === keyNum ? null : targetDish));
      }

      if (e.key === 'Escape') {
        setSelectedDish(null);
      }
    };

    window.addEventListener('keydown', handleNumberKeys);
    return () => {
      window.removeEventListener('keydown', handleNumberKeys);
    };
  }, [selectedDish, activeSection]);

  // Handle active slide indexing for Hoppers image layout
  useEffect(() => {
    if (selectedDish?.id === 'hoppers') {
      const container = document.querySelector('.slider-container');
      if (container) {
        const handleScroll = () => {
          setCurrentSlide(Math.round(container.scrollLeft / container.clientWidth));
        };
        container.addEventListener('scroll', handleScroll);
        return () => container.removeEventListener('scroll', handleScroll);
      }
    }
  }, [selectedDish]);

  const handleCardClick = (dish) => {
    if (selectedDish?.id === dish.id) {
      setSelectedDish(null);
    } else {
      setSelectedDish(dish);
    }
  };

  const handleDotClick = (index) => {
    const container = document.querySelector('.slider-container');
    if (container) {
      container.scrollTo({ left: container.clientWidth * index, behavior: 'smooth' });
      setCurrentSlide(index);
    }
  };

  // Language helpers
  const getSubtitle = (dish) => {
    return t.language === 'ja' ? dish.subtitleJa : dish.subtitle;
  };

  const getDescription = (dish) => {
    return t.language === 'ja' ? dish.descriptionJa : dish.description;
  };

  const getSpices = (dish) => {
    return t.language === 'ja' ? dish.spicesJa : dish.spicesEn;
  };

  const getDecorationText = () => {
    return t.language === 'ja' ? '✦ スパイスルートの遺産 ✦' : '✦ Spice Route Heritage ✦';
  };

  const particles = Array.from({ length: 40 }, (_, i) => ({
    id: i, left: Math.random() * 100, top: Math.random() * 100, delay: Math.random() * 10, duration: 6 + Math.random() * 6
  }));

  return (
    <section className="fullscreen-slide culinary-section">
      <div className="culinary-spice-icon spice-1">🌶️</div>
      <div className="culinary-spice-icon spice-2">🌿</div>
      <div className="culinary-spice-icon spice-3">🥥</div>
      <div className="culinary-spice-icon spice-4">🍛</div>
      
      <div className="culinary-particles">
        {particles.map(particle => (
          <div key={particle.id} className="culinary-particle" style={{ left: `${particle.left}%`, top: `${particle.top}%`, animationDelay: `${particle.delay}s`, animationDuration: `${particle.duration}s` }} />
        ))}
      </div>
      
      <h2 className="slide-title-neon">
        {t.language === 'ja' ? '' : ''}{t.culinaryTitle}
      </h2>
      
      <div className="culinary-container">
        <div className="culinary-text-content">
          <h1 className="culinary-dish-name">{t.culinaryName || "Spice & Flavor"}</h1>
          <p className="culinary-dish-subtitle">{t.culinarySub || "A Food Culture Profile"}</p>
          <p className="culinary-dish-description">{t.culinaryDesc}</p>
          <div className="culinary-cta">
            <span className="culinary-cta-icon">✦</span>
            <span>{t.culinaryCTA || "CLICK CARDS TO EXPLORE DISHES & INGREDIENTS"}</span>
            <span className="culinary-cta-icon">✦</span>
          </div>
        </div>
        
        <div className="culinary-grid">
          {dishes.map((dish, index) => (
            <motion.div 
              key={dish.id} 
              className="culinary-mini-card" 
              style={{ borderBottomColor: dish.color }} 
              initial={{ opacity: 0, x: 30 }} 
              animate={{ opacity: 1, x: 0 }} 
              transition={{ delay: index * 0.1 }} 
              whileHover={{ y: -8 }} 
              whileTap={{ scale: 0.98 }} 
              onClick={() => handleCardClick(dish)}
              tabIndex={0}
              role="button"
              aria-expanded={selectedDish?.id === dish.id}
            >
              <div className="card-food-icon">{dish.icon}</div>
              <h3 className="culinary-card-title">{dish.title}</h3>
              <span className="culinary-card-subtitle">{getSubtitle(dish)}</span>
              <div className="culinary-card-hover-effect"></div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedDish && (
          <motion.div className="culinary-modal-overlay" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setSelectedDish(null)}>
            <motion.div className="culinary-modal-content" initial={{ scale: 0.9, y: 20, opacity: 0 }} animate={{ scale: 1, y: 0, opacity: 1 }} exit={{ scale: 0.9, y: 20, opacity: 0 }} transition={{ type: "spring", damping: 25 }} onClick={(e) => e.stopPropagation()}>
              <button className="culinary-modal-close" onClick={() => setSelectedDish(null)}>✕</button>
              
              <h2 className="culinary-modal-title" style={{ color: selectedDish.color || '#fdb913' }}>{selectedDish.title}</h2>
              <span className="culinary-modal-subtitle">{getSubtitle(selectedDish)}</span>

              <div className="culinary-modal-img-wrapper">
                {selectedDish.id === 'hoppers' && selectedDish.img2 && selectedDish.img3 ? (
                  <div className="culinary-image-slider">
                    <div className="slider-container">
                      <img src={selectedDish.img} alt={`${selectedDish.title} - 1`} className="culinary-modal-img slider-img" />
                      <img src={selectedDish.img2} alt={`${selectedDish.title} - 2`} className="culinary-modal-img slider-img" />
                      <img src={selectedDish.img3} alt={`${selectedDish.title} - 3`} className="culinary-modal-img slider-img" />
                    </div>
                    <button className="slider-btn slider-prev" onClick={(e) => { e.stopPropagation(); document.querySelector('.slider-container').scrollBy({ left: -document.querySelector('.slider-container').clientWidth, behavior: 'smooth' }); }}>❮</button>
                    <button className="slider-btn slider-next" onClick={(e) => { e.stopPropagation(); document.querySelector('.slider-container').scrollBy({ left: document.querySelector('.slider-container').clientWidth, behavior: 'smooth' }); }}>❯</button>
                    <div className="slider-dots">
                      {[0, 1, 2].map((dotIndex) => (
                        <span key={dotIndex} className={`slider-dot ${currentSlide === dotIndex ? 'active' : ''}`} onClick={(e) => { e.stopPropagation(); handleDotClick(dotIndex); }} />
                      ))}
                    </div>
                  </div>
                ) : (
                  <img src={selectedDish.img} alt={selectedDish.title} className="culinary-modal-img" />
                )}
              </div>

              <div className="spice-badge-container">
                {getSpices(selectedDish).map((spice, idx) => (
                  <span key={idx} className="spice-badge" style={{ borderColor: selectedDish.color }}>{spice}</span>
                ))}
              </div>
              <p className="culinary-modal-description">{getDescription(selectedDish)}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      <div className="culinary-decoration">
        <span>{getDecorationText()}</span>
      </div>
    </section>
  );
}
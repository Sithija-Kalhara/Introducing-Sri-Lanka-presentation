import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import './Population.css'; 

// image
import populationImg from '../assets/population.png';

export default function Population() {
  const { t } = useLanguage();
  
  return (
    <section className="fullscreen-slide">
      <h2 className="slide-title-neon">{t.populationTitle}</h2>
      
      <div className="population-container">
        
        {/* Flag Card */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }} 
          whileInView={{ opacity: 1, scale: 1 }} 
          className="flag-card"
        >
          <div className="flag-wrapper">
            <img src={populationImg} alt="Population" />
          </div>
        </motion.div>
        
        {/* Text Content */}
        <div>
          <span className="population-subtitle">{t.populationTitle}</span>
          <h1 className="population-number">21.8M</h1>
          <p className="population-description">{t.populationDesc}</p>
        </div>
        
      </div>
    </section>
  );
}
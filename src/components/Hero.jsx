// Hero.jsx - Flag on Top, Not as background
import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import './Hero.css';  
import FlagImage from '../assets/inline_image_preview.jpg'

export default function Hero() {
  const { language } = useLanguage();
  
  return (
    <section className="fullscreen-slide hero-section">
      
      {/* Floating Particles - Background */}
      <div className="hero-particles">
        <div className="hero-particle particle-1"></div>
        <div className="hero-particle particle-2"></div>
        <div className="hero-particle particle-3"></div>
        <div className="hero-particle particle-4"></div>
        <div className="hero-particle particle-5"></div>
        <div className="hero-particle particle-6"></div>
        <div className="hero-particle particle-7"></div>
        <div className="hero-particle particle-8"></div>
      </div>
      
      {/* Flag - On Top, Large Size */}
      <div className="flag-container">
        <img src={FlagImage} alt="Sri Lanka Flag" className="flag-image" />
      </div>
      
      {/* Text Content - Below Flag */}
      <motion.div 
        className="hero-content"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="hero-badge">
          DATA PRESENTATION
        </div>
        
        <h1 className="hero-title">
          {language === 'ja' ? (
            <>
              私の国に関する<br/>
              <span className="hero-title-highlight">
                データの紹介
              </span>
            </>
          ) : (
            <>
              Introducing data<br/>
              <span className="hero-title-highlight">
                about my country
              </span>
            </>
          )}
        </h1>
      </motion.div>
      
      {/* Decorative text */}
      <div className="hero-decoration">
        <span>✦ DATA DRIVEN PRESENTATION ✦</span>
      </div>
      
    </section>
  );
}
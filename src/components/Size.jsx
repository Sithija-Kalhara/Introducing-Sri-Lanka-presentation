import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import './Size.css';

// images
import islandImg from '../assets/size.png';

export default function Size() {
  const { t } = useLanguage();

  return (
    <section className="fullscreen-slide">
      <h2 className="slide-title-neon">{t.sizeMainTitle || "２．出身国の紹介 // (2) 面積 Size"}</h2>
      <div className="size-container">
        <div>
          <span className="size-subtitle">{t.sizeAreaLabel || "面積 (Area)"}</span>
          <h1 className="size-value">65,610 km²</h1>
          <p className="size-description">{t.sizeDesc || "A strategically positioned island in the Indian Ocean, optimizing major sea trading lanes."}</p>
        </div>
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }} 
          whileInView={{ opacity: 1, scale: 1 }} 
          className="island-card"
        >
          <div className="island-wrapper">
            <img src={islandImg} alt="Island" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
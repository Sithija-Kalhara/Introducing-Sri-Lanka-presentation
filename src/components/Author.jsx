import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import ProfilePic from '../assets/Profile3.jpg';
import Eyerone from '../assets/Bg-remove-logo.png';
import './Author.css';

export default function Author() {
  const { t } = useLanguage();
  
  return (
    <section className="fullscreen-slide author-full-section">
      {/* Background Image - Responsive */}
      {Eyerone && (
        <div className="author-bg-container">
          <img 
            src={Eyerone} 
            alt="Background Decoration" 
            className="author-background-img" 
          />
        </div>
      )}
      
      <div className="author-section">
        
        {/* Left Side - Text Content */}
        <motion.div 
          className="author-content"
          initial={{ opacity: 0, x: -30 }} 
          whileInView={{ opacity: 1, x: 0 }} 
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="author-student-id">
            <span className="author-label">{t.authorLabelId || "STUDENT ID"}</span>
            <h1 className="author-id-number">26D26</h1>
          </div>
          
          <div className="author-name-section">
            <span className="author-label">{t.authorLabelName || "FULL NAME"}</span>
            <h1 className="author-name">{t.authorname || "Sithija Kalhara"}</h1>
            <p className="author-title">{t.authorTitle || " FOUNDER & CEO at Eyerone | Full-Stack Developer & Designer | Gaming Video Creator & Live Streamer"}</p>
          </div>
        </motion.div>
        
        {/* Right Side - Profile Image */}
        <motion.div 
          className="author-avatar-wrapper"
          initial={{ scale: 0.8, opacity: 0 }} 
          whileInView={{ scale: 1, opacity: 1 }} 
          transition={{ duration: 0.8 }}
          whileHover={{ scale: 1.02 }}
          viewport={{ once: true }}
        >
          <div className="author-avatar-inner">
            <img 
              src={ProfilePic} 
              alt="Sithija Kalhara Profile" 
              className="author-avatar-image" 
            />
          </div>
        </motion.div>
        
      </div>
    </section>
  );
}
import React, { useEffect, useState, useRef, useCallback } from 'react';
import { useLanguage } from '../context/LanguageContext';
import './Navbar.css';
import ENFlag from '../assets/united-kingdom_8363562.png';
import JPFlag from '../assets/japan_4628642.png';
import navlanka from '../assets/navlanka.png';

export default function Navbar() {
  const { t, language, toggleLanguage } = useLanguage();
  const [activeSection, setActiveSection] = useState('hero');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isHovering, setIsHovering] = useState(false);
  
  const lastScrollTopRef = useRef(0);
  const observerRef = useRef(null);
  const timeoutRef = useRef(null);

  const allSections = [
    { id: 'hero', title: t.navHome || "Home" },
    { id: 'author', title: t.navProfile || "Profile" },
    { id: 'intro', title: t.navIntro || "Introduction" },
    { id: 'population', title: t.navPopulation || "Population" },
    { id: 'size', title: t.navSize || "Size" },
    { id: 'seasons', title: t.navSeasons || "Seasons" },
    { id: 'exports', title: t.navExports || "Exports" },
    { id: 'imports', title: t.navImports || "Imports" },
    { id: 'culinary', title: t.navCuisine || "Cuisine" },
    { id: 'excel', title: t.navExcel || "Data Sheet" },
    { id: 'charts', title: t.navCharts || "Charts" },
    { id: 'analysis', title: t.navAnalysis || "Analysis" },
    { id: 'closing', title: t.navThankYou || "Conclusion" }
  ];

  const sectionIdsString = allSections.map(s => s.id).join(',');

  // Handle scroll to section
  const handleScrollTo = useCallback((id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setActiveSection(id);
      setIsMobileMenuOpen(false);
    }
  }, []);

  // Setup Intersection Observer for active section tracking
  useEffect(() => {
    const ids = sectionIdsString.split(',');
    
    const observerOptions = {
      root: null,
      rootMargin: '-30% 0px -35% 0px',
      threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5]
    };

    const observerCallback = (entries) => {
      let visibleSection = null;
      
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const ratio = entry.intersectionRatio;
          const currentSection = entry.target.id;
          
          if (!visibleSection || ratio > visibleSection.ratio) {
            visibleSection = { id: currentSection, ratio };
          }
        }
      });
      
      if (visibleSection && visibleSection.id !== activeSection) {
        setActiveSection(visibleSection.id);
      }
    };

    observerRef.current = new IntersectionObserver(observerCallback, observerOptions);

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observerRef.current.observe(el);
    });

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [sectionIdsString, activeSection]);

  // Handle navbar visibility on scroll
  useEffect(() => {
    const handleScrollVisibility = () => {
      const container = document.querySelector('.slides-wrapper') || window;
      let currentScrollY;
      
      if (container === window) {
        currentScrollY = window.pageYOffset || document.documentElement.scrollTop;
      } else {
        currentScrollY = container.scrollTop;
      }
      
      if (currentScrollY > lastScrollTopRef.current && currentScrollY > 80 && !isHovering) {
        setIsVisible(false);
      } else if (currentScrollY < lastScrollTopRef.current || currentScrollY <= 80 || isHovering) {
        setIsVisible(true);
      }
      
      lastScrollTopRef.current = currentScrollY;
    };

    const debouncedHandleScroll = () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      timeoutRef.current = setTimeout(handleScrollVisibility, 10);
    };

    const scrollTarget = document.querySelector('.slides-wrapper') || window;
    scrollTarget.addEventListener('scroll', debouncedHandleScroll, { passive: true });
    
    handleScrollVisibility();

    return () => {
      scrollTarget.removeEventListener('scroll', debouncedHandleScroll);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [isHovering]);

  // Mouse enter/leave handlers for navbar
  const handleNavMouseEnter = useCallback(() => {
    setIsHovering(true);
    setIsVisible(true);
  }, []);

  const handleNavMouseLeave = useCallback(() => {
    setIsHovering(false);
    setTimeout(() => {
      const container = document.querySelector('.slides-wrapper') || window;
      let currentScrollY;
      if (container === window) {
        currentScrollY = window.pageYOffset || document.documentElement.scrollTop;
      } else {
        currentScrollY = container.scrollTop;
      }
      if (currentScrollY > 80) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    }, 100);
  }, []);

  // Close mobile menu on escape key
  useEffect(() => {
    const handleEscapeKey = (e) => {
      if (e.key === 'Escape' && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };
    
    document.addEventListener('keydown', handleEscapeKey);
    return () => document.removeEventListener('keydown', handleEscapeKey);
  }, [isMobileMenuOpen]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      {/* Top Brand Header with Language Switcher */}
      <div 
        className={`brand-header ${!isVisible ? 'hidden' : ''}`}
        onMouseEnter={handleNavMouseEnter}
        onMouseLeave={handleNavMouseLeave}
      >
          <img src={navlanka} alt="" className='navlanka'/>
        <div className="brand-header-content">
          <span className="brand-header-text">
            {language === 'en' ? 'PEARL OF THE INDIAN OCEAN' : 'インド洋の真珠'}
          </span>
        </div>
        
        <div className="brand-header-right">
          {/* Language Switcher Button */}
          <button 
            className="lang-switch-btn"
            onClick={toggleLanguage}
            aria-label="Switch language"
          >
            <span className="lang-icon">
              <img 
                src={language === 'en' ? JPFlag : ENFlag} 
                alt={language === 'en' ? 'Japanese' : 'English'}
              />
            </span>
            <span className="lang-text">
              {language === 'en' ? '日本語' : 'English'}
            </span>
          </button>
          
          {/* Mobile Menu Button */}
          <button 
            className="mobile-menu-btn" 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            <span className={`menu-icon ${isMobileMenuOpen ? 'open' : ''}`}>
              <span></span>
              <span></span>
              <span></span>
            </span>
          </button>
        </div>
      </div>
      
      {/* Desktop Navigation Dots */}
      <nav 
        className={`side-navigation-dock ${!isVisible ? 'hidden' : ''}`}
        onMouseEnter={handleNavMouseEnter}
        onMouseLeave={handleNavMouseLeave}
      >
        {allSections.map((sec, index) => (
          <div 
            key={sec.id} 
            className={`nav-dot-wrapper ${activeSection === sec.id ? 'active-node' : ''}`}
            onClick={() => handleScrollTo(sec.id)}
            style={{ transitionDelay: `${index * 0.02}s` }}
          >
            <span className="nav-tooltip-label">{sec.title}</span>
            <div className="indicator-bullet"></div>
          </div>
        ))}
      </nav>

      {/* Mobile Navigation Drawer Panel */}
      <div className={`mobile-navigation ${isMobileMenuOpen ? 'open' : ''}`}>
        <div className="mobile-nav-header">
          <span>Navigation Menu</span>
          <button 
            className="mobile-nav-close"
            onClick={() => setIsMobileMenuOpen(false)}
            aria-label="Close menu"
          >
            ✕
          </button>
        </div>
        <div className="mobile-nav-items">
          {allSections.map((sec, index) => (
            <div 
              key={sec.id} 
              className={`mobile-nav-item ${activeSection === sec.id ? 'active' : ''}`}
              onClick={() => handleScrollTo(sec.id)}
              style={{ animationDelay: `${index * 0.03}s` }}
            >
              <span className="mobile-nav-dot"></span>
              <span className="mobile-nav-title">{sec.title}</span>
            </div>
          ))}
        </div>
        {/* Language Switcher in Mobile Menu */}
        <div className="mobile-nav-footer">
          <button 
            className="mobile-lang-switch"
            onClick={toggleLanguage}
          >
            <span className="mobile-lang-icon">
              <img 
                src={language === 'en' ? JPFlag : ENFlag} 
                alt={language === 'en' ? 'Japanese' : 'English'}
              />
            </span>
            <span>
              {language === 'en' ? 'Switch to 日本語' : 'Switch to English'}
            </span>
          </button>
        </div>
      </div>
      
      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="mobile-overlay" onClick={() => setIsMobileMenuOpen(false)}></div>
      )}
    </>
  );
}
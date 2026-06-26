import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Author from '../components/Author';
import Intro from '../components/Intro';
import Population from '../components/Population';
import Size from '../components/Size';
import Seasons from '../components/Seasons';
import Exports from '../components/Exports';
import Imports from '../components/Imports';
import Culinary from '../components/Culinary';
import ExcelData from '../components/ExcelData';
import Charts from '../components/Charts';
import Analysis from '../components/Analysis';
import Closing from '../components/Closing';
import './Home.css';

const Home = () => {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const observerOptions = {
      root: document.querySelector('.scroll-container'), 
      rootMargin: '0px',
      threshold: 0.6, 
    };

    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id); 
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, observerOptions);

    const sections = document.querySelectorAll('.scroll-container > section');
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <div className="Home">
      <Navbar activeSection={activeSection} />
      <div className="scroll-container">
        <section id="hero"><Hero activeSection={activeSection} /></section>
        <section id="author"><Author activeSection={activeSection} /></section>
        <section id="intro"><Intro activeSection={activeSection} /></section>
        <section id="population"><Population activeSection={activeSection} /></section>
        <section id="size"><Size activeSection={activeSection} /></section>
        <section id="seasons"><Seasons activeSection={activeSection} /></section>
        <section id="exports"><Exports activeSection={activeSection} /></section>
        <section id="imports"><Imports activeSection={activeSection} /></section>
        <section id="culinary"><Culinary activeSection={activeSection} /></section>
        <section id="excel"><ExcelData activeSection={activeSection} /></section>
        <section id="charts"><Charts activeSection={activeSection} /></section>
        <section id="analysis"><Analysis activeSection={activeSection} /></section>
        <section id="closing"><Closing activeSection={activeSection} /></section>
      </div>
    </div>
  );
};

export default Home;
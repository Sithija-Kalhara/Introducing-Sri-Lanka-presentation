import React from 'react';
import { motion } from 'framer-motion';
import { AreaChart, Area, ResponsiveContainer, Tooltip, XAxis, YAxis, CartesianGrid, Legend } from 'recharts';
import { useLanguage } from '../context/LanguageContext';
import { TrendingUp, Target, Lightbulb, Users, BarChart2 } from 'lucide-react';
import './Analysis.css';  

export default function Analysis() {
  const { t } = useLanguage();

  // 1. Demographic Comparison History Data (1950 - 2025) - Millions
  const populationTrendData = [
    { year: '1950', 'Sri Lanka': 7.95, 'Japan': 84.35 },
    { year: '1965', 'Sri Lanka': 11.18, 'Japan': 98.85 },
    { year: '1980', 'Sri Lanka': 15.09, 'Japan': 116.81 },
    { year: '1995', 'Sri Lanka': 18.25, 'Japan': 125.47 },
    { year: '2010', 'Sri Lanka': 20.63, 'Japan': 128.07 },
    { year: '2025', 'Sri Lanka': 22.00, 'Japan': 121.96 }
  ];

  // Generate particles for background
  const particles = Array.from({ length: 35 }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    top: Math.random() * 100,
    delay: Math.random() * 10,
    duration: 5 + Math.random() * 7
  }));

  // 2. Demographic Dynamic Insights List (ජනගහන දත්ත වලට ගැලපෙන පරිදි වෙනස් කරන ලදි)
  const insightsList = [
    { 
      id: 1, 
      icon: <Lightbulb size={18} color="#ffb703" />, 
      text: t.insight1 || "Japan hit its historic peak population (~128M) around 2010 and is currently in a steady contraction phase." 
    },
    { 
      id: 2, 
      icon: <Target size={18} color="#00b4d8" />, 
      text: t.insight2 || "Sri Lanka exhibits continuous linear growth over 75 years, stabilizing near the 22 million margin by 2025." 
    },
    { 
      id: 3, 
      icon: <Users size={18} color="#a855f7" />, 
      text: t.insight3 || "The structural workforce gap widens as Japan's median age shifts higher compared to Sri Lanka's demographic layout." 
    },
    { 
      id: 4, 
      icon: <BarChart2 size={18} color="#4ade80" />, 
      text: t.insight4 || "Contrast analysis reveals stark differences between an aging post-industrial society and a growing developing nation." 
    }
  ];

  return (
    <section className="fullscreen-slide analysis-full-section">
      
      {/* Particle Background */}
      <div className="analysis-particles">
        {particles.map(particle => (
          <div
            key={particle.id}
            className="analysis-particle"
            style={{
              left: `${particle.left}%`,
              top: `${particle.top}%`,
              animationDelay: `${particle.delay}s`,
              animationDuration: `${particle.duration}s`
            }}
          />
        ))}
      </div>
      
      <div className="analysis-section">
        
        {/* Left Side: Modern Fragmented Insights */}
        <motion.div 
          className="analysis-left-panel"
          initial={{ opacity: 0, x: -30 }} 
          whileInView={{ opacity: 1, x: 0 }} 
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="analysis-badge">{t.analysisTitle || "Demographic Overview"}</span>
          <h2 className="analysis-title">Sri Lanka vs Japan Analysis</h2>
          
          <div className="analysis-insights-grid">
            {insightsList.map((insight, idx) => (
              <motion.div 
                key={insight.id}
                className="insight-feature-card"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="insight-card-header">
                  <div className="insight-icon-wrapper">
                    {insight.icon}
                  </div>
                  <span className="insight-observation">Observation {insight.id}</span>
                </div>
                <p className="insight-card-desc">{insight.text}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
        
        {/* Right Side: Interactive Population Scale Performance Indicator */}
        <motion.div 
          className="analysis-stats-card"
          initial={{ opacity: 0, scale: 0.95 }} 
          whileInView={{ opacity: 1, scale: 1 }} 
          transition={{ duration: 0.6 }}
          whileHover={{ y: -5 }}
          viewport={{ once: true }}
        >
          <div className="stats-card-top">
            <h3 className="analysis-stats-title">{t.growthRate || "Combined Peak Volume"}</h3>
            <p className="analysis-stats-number">143.9M</p>
            <p className="analysis-stats-label">
              <TrendingUp size={12} style={{ marginRight: '4px', display: 'inline' }} />
              {t.yoyGrowth || "Total Aggregate Scale (Year 2025)"}
            </p>
          </div>

          {/* Premium Embedded Performance Area Graph (Dual Area Chart) */}
          <div className="analysis-chart-wrapper" style={{ minHeight: '220px', marginTop: '15px' }}>
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={populationTrendData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <defs>
                  {/* Japan Neon Blue Gradient */}
                  <linearGradient id="japanGlow" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#00b4d8" stopOpacity={0.4}/>
                    <stop offset="95%" stopColor="#00b4d8" stopOpacity={0}/>
                  </linearGradient>
                  {/* Sri Lanka Neon Gold Gradient */}
                  <linearGradient id="sriLankaGlow" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#ffb703" stopOpacity={0.4}/>
                    <stop offset="95%" stopColor="#ffb703" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.03)" />
                <XAxis dataKey="year" stroke="#888" fontSize={11} tickLine={false} />
                <YAxis stroke="#888" fontSize={11} tickLine={false} axisLine={false} domain={[0, 140]} />
                <Tooltip 
                  contentStyle={{ 
                    background: '#0a0a0f', 
                    border: '1px solid rgba(255, 255, 255, 0.1)', 
                    borderRadius: '8px',
                    backdropFilter: 'blur(10px)',
                    padding: '8px 12px'
                  }}
                  labelStyle={{ color: '#fff', fontWeight: 'bold' }}
                  formatter={(value) => [`${value} Million`, '']}
                />
                <Legend verticalAlign="top" height={30} iconType="circle" />
                
                {/* Area Layers */}
                <Area 
                  type="monotone" 
                  dataKey="Japan" 
                  stroke="#00b4d8" 
                  strokeWidth={2.5} 
                  fillOpacity={1} 
                  fill="url(#japanGlow)" 
                  activeDot={{ r: 5 }}
                />
                <Area 
                  type="monotone" 
                  dataKey="Sri Lanka" 
                  stroke="#ffb703" 
                  strokeWidth={2.5} 
                  fillOpacity={1} 
                  fill="url(#sriLankaGlow)" 
                  activeDot={{ r: 5 }}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>

          {/* Stats Footer Mapping Historical Milestones */}
          <div className="stats-footer">
            <div className="stat-footer-item">
              <span className="stat-footer-label">1950 Total</span>
              <span className="stat-footer-value">92.3M</span>
            </div>
            <div className="stat-footer-item">
              <span className="stat-footer-label">2025 Total</span>
              <span className="stat-footer-value">143.9M</span>
            </div>
            <div className="stat-footer-item">
              <span className="stat-footer-label">Net Growth</span>
              <span className="stat-footer-value positive">+55.9%</span>
            </div>
          </div>
        </motion.div>
        
      </div>

      <div className="analysis-decoration">
        <span>✦ DEMOGRAPHIC COMPARATIVE ANALYSIS ✦</span>
      </div>
    </section>
  );
}
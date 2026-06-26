import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { useLanguage } from '../context/LanguageContext';
import { Table, BarChart3 } from 'lucide-react';
import './ExcelData.css';  

export default function ExcelData() {
  const { t } = useLanguage();
  const [viewMode, setViewMode] = useState('chart'); // Options: 'table' or 'chart'
  
  // Keyboard event listener for hotkeys '1' and '2'
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === '1') {
        setViewMode('chart');
      } else if (event.key === '2') {
        setViewMode('table');
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    
    // Clean up event listener on unmount
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  // 1. Table Sheet Data Matrix
  const rows = [
    { target: "Sri Lanka", y50: '7.95 M', y75: '13.79 M', y00: '19.60 M', y25: '22.00 M', avg: '15.72 M', color: '#ffb703' },
    { target: "Japan", y50: '84.35 M', y75: '111.57 M', y00: '126.84 M', y25: '121.96 M', avg: '119.69 M', color: '#00b4d8' }
  ];

  // 2. Recharts Structured Historical Timeline Data Points
  const chartTimelineData = [
    { year: '1950', 'Sri Lanka': 7.95, 'Japan': 84.35 },
    { year: '1960', 'Sri Lanka': 9.89, 'Japan': 94.06 },
    { year: '1970', 'Sri Lanka': 12.55, 'Japan': 103.40 },
    { year: '1980', 'Sri Lanka': 15.09, 'Japan': 116.81 },
    { year: '1990', 'Sri Lanka': 17.28, 'Japan': 123.48 },
    { year: '2000', 'Sri Lanka': 19.60, 'Japan': 126.84 },
    { year: '2010', 'Sri Lanka': 20.63, 'Japan': 128.07 },
    { year: '2020', 'Sri Lanka': 21.92, 'Japan': 126.26 },
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

  return (
    <section className="fullscreen-slide exceldata-section">
      
      {/* Particle Background */}
      <div className="exceldata-particles">
        {particles.map(particle => (
          <div
            key={particle.id}
            className="exceldata-particle"
            style={{
              left: `${particle.left}%`,
              top: `${particle.top}%`,
              animationDelay: `${particle.delay}s`,
              animationDuration: `${particle.duration}s`
            }}
          />
        ))}
      </div>
      
      <div className="exceldata-grid-icon">📊</div>
      
      <h2 className="slide-title-neon exceldata-title">
        {t.excelTitle || "Historical Population Matrix"}
      </h2>
      
      <div className="exceldata-table-wrapper">
        
        {/* View Mode Controller Switches */}
        <div className="exceldata-controls">
          <button 
            className={`excel-toggle-btn ${viewMode === 'chart' ? 'active' : ''}`}
            onClick={() => setViewMode('chart')}
            title="Press '1' key for Chart View"
          >
            <BarChart3 size={14} style={{ marginRight: '6px', verticalAlign: 'middle' }} />
            Visual Chart View 
          </button>
          <button 
            className={`excel-toggle-btn ${viewMode === 'table' ? 'active' : ''}`}
            onClick={() => setViewMode('table')}
            title="Press '2' key for Sheet View"
          >
            <Table size={14} style={{ marginRight: '6px', verticalAlign: 'middle' }} />
            Data Sheet View 
          </button>
        </div>

        {/* Dynamic Display Board */}
        <div className="exceldata-card">
          <AnimatePresence mode="wait">
            {viewMode === 'table' ? (
              <motion.div
                key="table-view"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="exceldata-table-container"
              >
                <div className="exceldata-table-responsive">
                  <table className="exceldata-table">
                    <thead>
                      <tr>
                        <th>{t.sector || "Country / Indicator"}</th>
                        <th>1950</th>
                        <th>1975</th>
                        <th>2000</th>
                        <th>2025</th>
                        <th>{t.avg || "Median Value"}</th>
                      </tr>
                    </thead>
                    <tbody>
                      {rows.map((row, index) => (
                        <tr key={index}>
                          <td style={{ fontWeight: '600', color: row.color }}>
                            <span className="exceldata-sector-indicator" style={{ background: row.color }}></span>
                            {row.target}
                          </td>
                          <td>{row.y50}</td>
                          <td>{row.y75}</td>
                          <td>{row.y00}</td>
                          <td>{row.y25}</td>
                          <td className="exceldata-avg-cell">{row.avg}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="chart-view"
                className="multi-chart-container"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={chartTimelineData} margin={{ top: 15, right: 20, left: -10, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" vertical={false} />
                    <XAxis 
                      dataKey="year" 
                      stroke="#aaa" 
                      fontSize={11} 
                      tickLine={false}
                      axisLine={{ stroke: 'rgba(255,255,255,0.1)' }}
                      tick={{ fill: '#fff' }}
                    />
                    <YAxis 
                      stroke="#aaa" 
                      fontSize={11} 
                      tickLine={false}
                      axisLine={{ stroke: 'rgba(255,255,255,0.1)' }}
                      unit="M" 
                      domain={[0, 140]} 
                      tick={{ fill: '#aaa' }}
                    />
                    <Tooltip 
                      contentStyle={{ 
                        background: '#0a0a0f', 
                        border: '1px solid rgba(255, 183, 3, 0.3)', 
                        borderRadius: '12px',
                        backdropFilter: 'blur(10px)'
                      }}
                      itemStyle={{ fontSize: '13px' }}
                      labelStyle={{ color: '#fff', fontWeight: 'bold' }}
                      formatter={(value) => [`${value} Million`, '']}
                    />
                    <Legend 
                      iconType="circle" 
                      wrapperStyle={{ 
                        fontSize: '12px', 
                        paddingTop: '15px',
                        color: '#fff'
                      }} 
                    />
                    
                    <Line 
                      type="monotone" 
                      dataKey="Japan" 
                      stroke="#00b4d8" 
                      strokeWidth={3} 
                      activeDot={{ r: 6, fill: '#00b4d8' }} 
                      dot={{ r: 3, fill: '#00b4d8' }}
                    />
                    <Line 
                      type="monotone" 
                      dataKey="Sri Lanka" 
                      stroke="#ffb703" 
                      strokeWidth={3} 
                      activeDot={{ r: 6, fill: '#ffb703' }} 
                      dot={{ r: 3, fill: '#ffb703' }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <p className="exceldata-description">
          📊 {t.excelDesc || "75-Year Population Dataset Overview (1950-2025)"}
        </p>
      </div>
      
      <div className="exceldata-decoration">
        <span>✦ DATA DRIVEN INSIGHTS ✦</span>
      </div>
    </section>
  );
}
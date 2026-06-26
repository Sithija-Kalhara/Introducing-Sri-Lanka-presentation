import React from 'react';
import { motion } from 'framer-motion';
import { 
  XAxis, YAxis, Tooltip, ResponsiveContainer, 
  Cell, ComposedChart, Scatter, ErrorBar, LineChart, Line, CartesianGrid, Bar, Legend
} from 'recharts';
import { useLanguage } from '../context/LanguageContext';
import './Charts.css';

export default function Charts() {
  const { t } = useLanguage();

  // 1. Line Chart Data (1950 - 2025)
  const populationTrendData = [
    { year: '1950', 'Sri Lanka': 7.95, 'Japan': 84.35 },
    { year: '1955', 'Sri Lanka': 8.75, 'Japan': 89.09 },
    { year: '1960', 'Sri Lanka': 9.89, 'Japan': 94.06 },
    { year: '1965', 'Sri Lanka': 11.18, 'Japan': 98.85 },
    { year: '1970', 'Sri Lanka': 12.55, 'Japan': 103.40 },
    { year: '1975', 'Sri Lanka': 13.79, 'Japan': 111.57 },
    { year: '1980', 'Sri Lanka': 15.09, 'Japan': 116.81 },
    { year: '1985', 'Sri Lanka': 16.35, 'Japan': 120.84 },
    { year: '1990', 'Sri Lanka': 17.28, 'Japan': 123.48 },
    { year: '1995', 'Sri Lanka': 18.25, 'Japan': 125.47 },
    { year: '2000', 'Sri Lanka': 19.60, 'Japan': 126.84 },
    { year: '2005', 'Sri Lanka': 20.22, 'Japan': 127.77 },
    { year: '2010', 'Sri Lanka': 20.63, 'Japan': 128.07 },
    { year: '2015', 'Sri Lanka': 21.17, 'Japan': 128.00 },
    { year: '2020', 'Sri Lanka': 21.92, 'Japan': 126.26 },
    { year: '2025', 'Sri Lanka': 22.00, 'Japan': 121.96 },
  ];


  const realBoxPlotData = [
    { 
      country: 'Sri Lanka', 
      boxMin: 11.18,      
      boxMax: 19.60,     
      boxHeight: [11.18, 19.60], 
      medianLine: 15.72, 
      low: 7.95,          
      high: 22.18,       
      color: '#3b82f6',  
      lineColor: '#1d4ed8' 
    },
    { 
      country: 'Japan', 
      boxMin: 98.85,      // Q1
      boxMax: 126.26,     // Q3
      boxHeight: [98.85, 126.26], 
      medianLine: 119.69, // Median
      low: 84.35,         // Min
      high: 128.07,       // Max
      color: '#10b981',   
      lineColor: '#047857' 
    }
  ];

  // Particle background logic
  const particles = Array.from({ length: 40 }, (_, i) => ({
    id: i, left: Math.random() * 100, top: Math.random() * 100, delay: Math.random() * 10, duration: 5 + Math.random() * 8
  }));

  return (
    <section className="fullscreen-slide charts-section">
      
      <div className="charts-particles">
        {particles.map(particle => (
          <div key={particle.id} className="charts-particle" style={{ left: `${particle.left}%`, top: `${particle.top}%`, animationDelay: `${particle.delay}s`, animationDuration: `${particle.duration}s` }} />
        ))}
      </div>
      
      <h2 className="slide-title-neon">
        {t.chartsTitle || "Historical Population Analytics (1950 - 2025)"}
      </h2>
      
      <div className="charts-container">
        
        {/* 1. Population Growth Line Chart */}
        <motion.div className="chart-card" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
          <div className="chart-header">
            <h4 className="chart-title" style={{ color: '#a855f7' }}>{t.lineChartTitle || "Population Growth Timeline"}</h4>
            <span className="chart-badge" style={{ background: 'rgba(168,85,247,0.1)', color: '#a855f7' }}>Unit: Millions</span>
          </div>
          <div className="chart-viz-wrapper">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={populationTrendData} margin={{ top: 15, right: 15, left: -10, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
                <XAxis dataKey="year" stroke="#aaa" fontSize={11} tickLine={false} tick={{ fill: '#fff' }} />
                <YAxis stroke="#aaa" fontSize={11} tickLine={false} axisLine={false} tick={{ fill: '#aaa' }} domain={[0, 140]} />
                <Tooltip contentStyle={{ background: '#0a0a0f', border: '1px solid rgba(168, 85, 247, 0.3)', borderRadius: '10px', backdropFilter: 'blur(10px)' }} labelStyle={{ color: '#fff' }} />
                <Legend verticalAlign="top" height={36} iconType="plainline" />
                <Line type="monotone" dataKey="Japan" stroke="#10b981" strokeWidth={3} dot={{ r: 2 }} />
                <Line type="monotone" dataKey="Sri Lanka" stroke="#3b82f6" strokeWidth={3} dot={{ r: 2 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
          <p className="chart-description">{t.lineDesc || "75-year population trajectory."}</p>
        </motion.div>

        {/* 2. Real Box-Plot Chart - MATCHED TO YOUR IMAGE */}
        <motion.div className="chart-card" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} viewport={{ once: true }}>
          <div className="chart-header">
            <h4 className="chart-title" style={{ color: '#10b981' }}>{t.boxplotTitle || "Box Plot Chart"}</h4>
            <span className="chart-badge" style={{ background: 'rgba(16,185,129,0.1)', color: '#10b981' }}>Metric: Millions</span>
          </div>

          <div className="chart-viz-wrapper">
            <ResponsiveContainer width="100%" height="100%">
              <ComposedChart data={realBoxPlotData} margin={{ top: 15, right: 15, left: -10, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.03)" />
                <XAxis dataKey="country" stroke="#aaa" fontSize={12} tickLine={false} axisLine={false} tick={{ fill: '#fff' }} />
                <YAxis stroke="#aaa" fontSize={11} tickLine={false} axisLine={false} tick={{ fill: '#aaa' }} domain={[0, 140]} ticks={[0, 50, 100]} />
                
                <Tooltip 
                  contentStyle={{ background: '#0a0a0f', border: '1px solid rgba(16,185,129,0.3)', borderRadius: '10px' }}
                  labelStyle={{ color: '#fff' }}
                  formatter={(value, name, props) => {
                    if (name === "boxHeight") {
                      return [`${props.payload.low}M - ${props.payload.high}M`, "Full Range"];
                    }
                    if (name === "medianLine") return [`${value} M`, "Median (Middle Line)"];
                    return [value, name];
                  }}
                />

                {/* 1. Whiskers (I-Lines) - Min සිට Max දක්වා යන සිහින් ඉර */}
                <Scatter dataKey="medianLine" fill="none">
                  {realBoxPlotData.map((entry, index) => (
                    <ErrorBar 
                      key={index}
                      dataKey="medianLine" 
                      width={16} 
                      strokeWidth={2} 
                      stroke={entry.color} 
                      direction="y"
                      // low සහ high අගයන් ගණනය කර Whiskers සාදයි
                      boxMin={entry.low} 
                      boxMax={entry.high}
                    />
                  ))}
                </Scatter>

                {/* 2. Main Solid Box - සම්පූර්ණ කොටුවම එකම පාටකින් ඇඳීම */}
                <Bar dataKey="boxHeight" barSize={45}>
                  {realBoxPlotData.map((entry, index) => (
                    <Cell key={index} fill={entry.color} fillOpacity={0.7} stroke={entry.color} strokeWidth={2} />
                  ))}
                </Bar>

                {/* 3. Median Line - කොටුව මැදින් යන තද පාට තිරස් ඉර */}
                <Scatter dataKey="medianLine" shape={(props) => {
                  const { cx, cy, payload } = props;
                  return (
                    <line x1={cx - 22} y1={cy} x2={cx + 22} y2={cy} stroke={payload.lineColor} strokeWidth={4} />
                  );
                }} />

                {/* 4. Mean Indicator - ඔයාගේ රූපයේ තියෙන මැද සුදු Diamond (රොම්බස්) හැඩය */}
                <Scatter dataKey="medianLine" shape={(props) => {
                  const { cx, cy } = props;
                  return (
                    <polygon points={`${cx},${cy-7} ${cx+7},${cy} ${cx},${cy+7} ${cx-7},${cy}`} fill="#ffffff" stroke="#ffffff" strokeWidth={1} />
                  );
                }} />

              </ComposedChart>
            </ResponsiveContainer>
          </div>
          <p className="chart-description">{t.boxplotDesc || "Quartile distribution & variance analysis matching standard box plot layout."}</p>
        </motion.div>
        
      </div>
    </section>
  );
}
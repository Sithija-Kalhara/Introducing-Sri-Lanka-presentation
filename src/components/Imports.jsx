import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BarChart, Bar, XAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { useLanguage } from '../context/LanguageContext';
import './Imports.css';

export default function Imports({ activeSection }) {
  const { t } = useLanguage();
  const [activeItem, setActiveItem] = useState(null);

  // 2025 Forecasted Import Data (In USD Billions)
  const chartData = [
    { name: t.chartFuel || 'Fuel', nameJa: '燃料', value: 4.8 },
    { name: t.chartMachinery || 'Machinery', nameJa: '機械', value: 3.2 },
    { name: t.chartFood || 'Food', nameJa: '食品', value: 1.8 },
    { name: t.chartOthers || 'Others', nameJa: 'その他', value: 6.5 }
  ];

  // Helper function to get chart label based on language
  const getChartLabel = (entry) => {
    return t.language === 'ja' ? entry.nameJa : entry.name;
  };

  const importItems = [
    {
      id: 'fuel',
      numericId: 1,  
      icon: '⛽',
      title: t.impFuelTitle || "Fuel & Energy",
      titleJa: "燃料・エネルギー",
      value: '$4.8B',
      year: '2025 Forecast',
      yearJa: '2025年予測',
      growth: '+14.2%',
      color: '#3b82f6',
      cardType: 'fuel',
      highlight: t.impFuelHighlight || "Refined petroleum and crude oil represent the nation's largest import expenditure.",
      highlightJa: "精製石油と原油は、国家にとって最大の輸入支出項目です。",
      details: t.impFuelDetails || "Energy security is a top priority. Sri Lanka imports nearly all fossil fuels required for transportation and thermal power generation. A strategic shift to renewable energy is underway to reduce this massive expenditure by 2030.",
      detailsJa: "エネルギー安全保障は最優先事項です。スリランカは運輸や火力発電に必要な化石燃料のほぼすべてを輸入に頼っています。2030年までにこの莫大な支出を削減するため、再生可能エネルギーへの戦略的移行が進められています。",
      impact: t.impFuelImpact || "Accounts for approximately 25% of total import expenditure.",
      impactJa: "総輸入支出の約25%を占めています。"
    },
    {
      id: 'machinery',
      numericId: 2, 
      icon: '🏭',
      title: t.impMachTitle || "Machinery & Tech",
      titleJa: "機械・テクノロジー",
      value: '$3.2B',
      year: '2025 Forecast',
      yearJa: '2025年予測',
      growth: '+5.7%',
      color: '#ff2525',
      cardType: 'machinery',
      highlight: t.impMachHighlight || "Essential industrial equipment for manufacturing and construction sectors.",
      highlightJa: "製造業および建設セクターに不可欠な産業用設備です。",
      details: t.impMachDetails || "This includes electronics, telecommunications hardware, and heavy machinery for industrial zones. With the nation's digitalization, imports of high-tech components and medical equipment are steadily rising.",
      detailsJa: "これには、電子機器、電気通信ハードウェア、工業地帯向けの重機械が含まれます。国家のデジタル化に伴い、ハイテク部品や医療機器の輸入が着実に増加しています。",
      impact: t.impMachImpact || "Critical for sustaining apparel and construction industries.",
      impactJa: "アパレル産業および建設産業の維持に不可欠です。"
    },
    {
      id: 'food',
      numericId: 3, 
      icon: '🍚',
      title: t.impFoodTitle || "Food & Beverages",
      titleJa: "食品・飲料",
      value: '$1.8B',
      year: '2025 Forecast',
      yearJa: '2025年予測',
      growth: '+3.1%',
      color: '#41ff54',
      cardType: 'food',
      highlight: t.impFoodHighlight || "Essential imports to ensure food security and nutritional diversity.",
      highlightJa: "食料安全保障と栄養の多様性を確保するための必需品の輸入。",
      details: t.impFoodDetails || "Key imports include wheat, sugar, lentils, and dairy products. While Sri Lanka is self-sufficient in rice (the staple food), it relies on international markets for certain agricultural products to meet the diverse dietary needs of its 22 million citizens.",
      detailsJa: "主な輸入項目は、小麦、砂糖、レンズ豆、乳製品です。スリランカは主食の米に関しては自給自足していますが、2200万人の国民の多様な食生活を満たすために特定の農産物を国際市場に依存しています。",
      impact: t.impFoodImpact || "Maintains price stability for essential household items.",
      impactJa: "一般家庭の必需品の価格安定を維持しています。"
    }
  ];

  useEffect(() => {
    const handleNumberKeys = (e) => {
      if (activeSection !== 'imports') return;
      
      if (document.activeElement.tagName === 'INPUT' || document.activeElement.tagName === 'TEXTAREA') {
        return;
      }

      const keyNum = parseInt(e.key);
      if (keyNum >= 1 && keyNum <= 3) {
        e.preventDefault();
        
        const targetItem = importItems.find(item => item.numericId === keyNum);
        setActiveItem(prev => (prev?.numericId === keyNum ? null : targetItem));
      }

      if (e.key === 'Escape') {
        setActiveItem(null);
      }
    };

    window.addEventListener('keydown', handleNumberKeys);
    return () => {
      window.removeEventListener('keydown', handleNumberKeys);
    };
  }, [activeItem, activeSection]);

  const handleCardClick = (item) => {
    if (activeItem?.id === item.id) {
      setActiveItem(null);
    } else {
      setActiveItem(item);
    }
  };

  // Helper functions to get current language text
  const getTitle = (item) => t.language === 'ja' ? item.titleJa : item.title;
  const getYear = (item) => t.language === 'ja' ? item.yearJa : item.year;
  const getHighlight = (item) => t.language === 'ja' ? item.highlightJa : item.highlight;
  const getDetails = (item) => t.language === 'ja' ? item.detailsJa : item.details;
  const getImpact = (item) => t.language === 'ja' ? item.impactJa : item.impact;

  // Generate random particles
  const particles = Array.from({ length: 30 }, (_, i) => ({
    id: i, left: Math.random() * 100, top: Math.random() * 100, delay: Math.random() * 8, duration: 5 + Math.random() * 5
  }));

  const getRankText = (index) => t.language === 'ja' ? `第${index + 1}位` : `RANK ${index + 1}`;
  const getForecastLabel = () => t.language === 'ja' ? "2025年 予想支出額 (単位: 十億米ドル)" : (t.impForecastLabel || "2025 Forecasted Expenditure (USD Billions)");
  const getStrategicImpactLabel = () => t.language === 'ja' ? "戦略的影響：" : (t.impStrategicImpact || "Strategic Impact:");

  return (
    <section className="fullscreen-slide imports-section">
      <div className="import-particles">
        {particles.map(particle => (
          <div key={particle.id} className="import-particle" style={{ left: `${particle.left}%`, top: `${particle.top}%`, animationDelay: `${particle.delay}s`, animationDuration: `${particle.duration}s` }} />
        ))}
      </div>

      <h2 className="slide-title-neon">
        {t.importsTitle}
      </h2>

      <div className="imports-container">
        {importItems.map((item, index) => (
          <motion.div
            key={item.id}
            className={`import-card import-card-${item.cardType}`}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -8 }}
            onClick={() => handleCardClick(item)}
            tabIndex={0}
            role="button"
            aria-expanded={activeItem?.id === item.id}
          >
            <span className="import-stat-badge">{getRankText(index)}</span>
            <div className="import-icon">{item.icon}</div>
            <div className="import-card-content">
              <h3 className="import-title">{getTitle(item)}</h3>
              <div className={`import-value import-value-${item.cardType}`}>{item.value}</div>
              <div className="import-year">{getYear(item)}</div>
              <div className={`import-growth import-growth-positive`}>
                <span className="import-growth-icon">▲</span>
                <span>{item.growth}</span>
              </div>
              <p className="import-description">{getHighlight(item)}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {activeItem && (
          <motion.div className="import-modal-overlay" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setActiveItem(null)}>
            {/* ===== TWO-COLUMN MODAL LAYOUT ===== */}
            <motion.div 
              className="import-modal-content" 
              initial={{ scale: 0.9, y: 20 }} 
              animate={{ scale: 1, y: 0 }} 
              exit={{ scale: 0.9, y: 20 }} 
              onClick={(e) => e.stopPropagation()}
            >
              <button className="import-modal-close" onClick={() => setActiveItem(null)}>✕</button>
              
              <div className="modal-title">
                <span className="modal-icon">{activeItem.icon}</span>
                <span style={{ color: activeItem.color }}>{getTitle(activeItem)}</span>
              </div>

              <div className="modal-layout">
                {/* LEFT COLUMN - Chart and Highlight */}
                <div className="modal-left">
                  <div className="industry-highlight" style={{ borderColor: activeItem.color }}>
                    <p>{getHighlight(activeItem)}</p>
                  </div>

                  <div className="import-chart-wrapper">
                    <p className="chart-label">
                      {getForecastLabel()}
                    </p>
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={chartData}>
                        <XAxis 
                          dataKey={(entry) => getChartLabel(entry)} 
                          stroke="#444" 
                          fontSize={11} 
                          tickLine={false} 
                          axisLine={false} 
                        />
                        <Tooltip 
                          cursor={{ fill: 'rgba(59,130,246,0.05)' }} 
                          contentStyle={{ background: '#0a0f1a', border: '1px solid #333', borderRadius: '8px' }}
                          formatter={(value) => [`$${value}B`, t.language === 'ja' ? '金額' : 'Amount']}
                          labelFormatter={(label) => t.language === 'ja' ? `カテゴリー: ${label}` : `Category: ${label}`}
                        />
                        <Bar dataKey="value" radius={[4, 4, 0, 0]} barSize={45}>
                          {chartData.map((entry, index) => (
                            <Cell 
                              key={`cell-${index}`} 
                              fill={entry.name.toLowerCase().includes(activeItem.id) || 
                                    (activeItem.id === 'fuel' && (entry.name === 'Fuel' || entry.name === '燃料')) || 
                                    (activeItem.id === 'machinery' && (entry.name === 'Machinery' || entry.name === '機械')) ||
                                    (activeItem.id === 'food' && (entry.name === 'Food' || entry.name === '食品')) 
                                    ? activeItem.color : '#222'} 
                            />
                          ))}
                        </Bar>
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </div>

                {/* RIGHT COLUMN - Details and Impact */}
                <div className="modal-right">
                  <div className="strategic-impact" style={{ borderColor: activeItem.color }}>
                    <strong style={{ color: activeItem.color }}>
                      {getStrategicImpactLabel()}
                    </strong>
                    <p>{getDetails(activeItem)}</p>
                    <div className="impact-badge" style={{ borderColor: activeItem.color }}>
                      💡 {getImpact(activeItem)}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="import-decoration">
        {t.language === 'ja' ? '✦ 輸入分析 2025 ✦' : '✦ IMPORT ANALYSIS 2025 ✦'}
      </div>
    </section>
  );
}
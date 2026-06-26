import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BarChart, Bar, XAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { useLanguage } from '../context/LanguageContext';
import './Exports.css';

// Images
import MASImg from '../assets/MAS.png';
import BrandixImg from '../assets/brandix.png';
import HirdaramaniImg from '../assets/hidarmani.png';
import DilmahImg from '../assets/dilhma.jpg';
import AkbarImg from '../assets/Ceylon Loose Large-Leaf Black & Green Tea with Flowers _Orient Mystery.jpg';
import HayleysImg from '../assets/heyleys.jpg';
import LoadstarImg from '../assets/casmo.png';

export default function Exports({ activeSection }) {
  const { t } = useLanguage();
  const [activeItem, setActiveItem] = useState(null);

  // 2025 Forecasted Export Data (In USD Billions)
  const chartData = [
    { name: t.chartApparel || 'Apparel', nameJa: 'アパレル', value: 5.3 },
    { name: t.chartTea || 'Tea', nameJa: '紅茶', value: 1.5 },
    { name: t.chartRubber || 'Rubber', nameJa: 'ゴム', value: 1.2 },
    { name: t.chartOthers || 'Others', nameJa: 'その他', value: 5.5 }
  ];

  // Helper function to get chart label based on language
  const getChartLabel = (entry) => {
    return t.language === 'ja' ? entry.nameJa : entry.name;
  };

  const exportItems = [
    {
      id: 'apparel',
      numericId: 1,
      icon: '👕',
      title: t.expApparelTitle || "Apparel & Textiles",
      titleJa: "アパレル・繊維",
      value: '$5.3B',
      year: '2025 Forecast',
      yearJa: '2025年予測',
      growth: '+18.4%',
      color: '#a855f7',
      cardType: 'apparel',
      highlight: t.expApparelHighlight || "Sri Lanka's largest export sector, driving economic growth.",
      highlightJa: "スリランカ最大の輸出セクターであり、経済成長を牽引しています。",
      details: t.expApparelDetails || "The apparel industry accounts for nearly 40% of Sri Lanka's total exports, employing over 350,000 workers directly. Renowned for ethical manufacturing, sustainability, and innovation, Sri Lankan apparel is a global leader.",
      detailsJa: "アパレル産業はスリランカの総輸出の約40%を占め、35万人以上の労働者を直接雇用しています。倫理的な製造、持続可能性、革新性で知られるスリランカのアパレルは、世界のリーダーです。",
      impact: t.expApparelImpact || "Employs 18% of Sri Lanka's workforce and contributes significantly to GDP.",
      impactJa: "スリランカの労働力の18%を雇用し、GDPに大きく貢献しています。",
      players: [
        { 
          name: "MAS Holdings", 
          nameJa: "MASホールディングス",
          impact: "18% of workforce", 
          impactJa: "労働力の18%",
          desc: "South Asia's largest intimate and activewear manufacturer with $2B+ turnover.",
          descJa: "南アジア最大のランジェリー・アクティブウェアメーカー。売上高20億ドル以上。",
          img: MASImg
        },
        { 
          name: "Brandix", 
          nameJa: "ブランディックス",
          impact: "10% of total earnings", 
          impactJa: "総収益の10%",
          desc: "The nation's single largest apparel exporter, managing massive vertical supply chains.",
          descJa: "スリランカ最大のアパレル輸出企業。大規模な垂直統合サプライチェーンを管理。",
          img: BrandixImg 
        },
        { 
          name: "Hirdaramani", 
          nameJa: "ヒラダラマニ",
          impact: "Global Footprint", 
          impactJa: "グローバル展開",
          desc: "A century-old pioneer with net-zero certified factories and operations in 6 countries.",
          descJa: "100年以上の歴史を持つパイオニア。ネットゼロ認証工場を保有し、6か国で事業展開。",
          img: HirdaramaniImg 
        }
      ]
    },
    {
      id: 'tea',
      numericId: 2,
      icon: '🍃',
      title: t.expTeaTitle || "Ceylon Tea",
      titleJa: "セイロンティー",
      value: '$1.5B',
      year: '2025 Forecast',
      yearJa: '2025年予測',
      growth: '+6.2%',
      color: '#fdb913',
      cardType: 'tea',
      highlight: t.expTeaHighlight || "World-renowned for exceptional quality and unique flavor.",
      highlightJa: "卓越した品質とユニークな風味で世界的に有名です。",
      details: t.expTeaDetails || "Ceylon tea is a globally recognized brand, prized for its distinct taste and aroma. The industry supports over 1 million livelihoods across the island, with exports reaching over 80 countries worldwide.",
      detailsJa: "セイロンティーは世界的に認知されたブランドであり、その独特な味と香りで高く評価されています。この産業は島全体で100万人以上の生活を支え、輸出は世界80か国以上に及んでいます。",
      impact: t.expTeaImpact || "Supports over 1 million livelihoods and is a key foreign exchange earner.",
      impactJa: "100万人以上の生活を支え、主要な外貨獲得源です。",
      players: [
        { 
          name: "Dilmah Tea", 
          nameJa: "ディルマ紅茶",
          impact: "Family-owned Global Brand", 
          impactJa: "家族経営のグローバルブランド",
          desc: "The world's first producer-owned tea brand, promoting 'Single Origin' purity.",
          descJa: "世界初の生産者所有紅茶ブランド。「単一産地」の純粋さを推進。",
          img: DilmahImg 
        },
        { 
          name: "Akbar Brothers", 
          nameJa: "アクバル・ブラザーズ",
          impact: "Largest Exporter", 
          impactJa: "最大の紅茶輸出業者",
          desc: "Exports over 50 million kilos of tea annually to over 80 countries.",
          descJa: "年間5,000万キロ以上の紅茶を80か国以上に輸出。",
          img: AkbarImg 
        }
      ]
    },
    {
      id: 'rubber',
      numericId: 3,
      icon: '🥥',
      title: t.expRubberTitle || "Rubber & Coconut",
      titleJa: "ゴム・ココナッツ",
      value: '$1.2B',
      year: '2025 Forecast',
      yearJa: '2025年予測',
      growth: '+4.8%',
      color: '#3b82f6',
      cardType: 'rubber',
      highlight: t.expRubberHighlight || "Essential industrial materials with growing global demand.",
      highlightJa: "世界的な需要が高まる重要な産業資材です。",
      details: t.expRubberDetails || "Sri Lanka's rubber industry produces high-quality products including tires, gloves, and industrial components. Coconut-based products like desiccated coconut and coconut oil are also major exports.",
      detailsJa: "スリランカのゴム産業は、タイヤ、手袋、産業用部品などの高品質な製品を生産しています。乾燥ココナッツやココナッツオイルなどのココナッツ製品も主要な輸出品です。",
      impact: t.expRubberImpact || "Growing demand from global automotive and manufacturing sectors.",
      impactJa: "世界の自動車・製造業セクターからの需要が拡大しています。",
      players: [
        { 
          name: "Hayleys PLC", 
          nameJa: "ヘイリースPLC",
          impact: "Massive Diversified Group", 
          impactJa: "巨大複合企業グループ",
          desc: "A world leader in activated carbon and fabric-supported gloves.",
          descJa: "活性炭と布製サポート手袋の世界的リーダー。",
          img: HayleysImg 
        },
        { 
          name: "Loadstar (Camso)", 
          nameJa: "ロードスター（カムソ）",
          impact: "World Tire Leader", 
          impactJa: "世界のタイヤリーダー",
          desc: "Supplies a significant portion of the world's industrial solid tires.",
          descJa: "世界の産業用ソリッドタイヤの大部分を供給。",
          img: LoadstarImg 
        }
      ]
    }
  ];

  useEffect(() => {
    const handleNumberKeys = (e) => {
      if (activeSection !== 'exports') return;
      
      if (document.activeElement.tagName === 'INPUT' || document.activeElement.tagName === 'TEXTAREA') {
        return;
      }

      const keyNum = parseInt(e.key);
      if (keyNum >= 1 && keyNum <= 3) {
        e.preventDefault();
        
        const targetItem = exportItems.find(item => item.numericId === keyNum);
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
  const getPlayerName = (player) => t.language === 'ja' ? player.nameJa : player.name;
  const getPlayerImpact = (player) => t.language === 'ja' ? player.impactJa : player.impact;
  const getPlayerDesc = (player) => t.language === 'ja' ? player.descJa : player.desc;

  // Generate random particles
  const particles = Array.from({ length: 30 }, (_, i) => ({
    id: i, left: Math.random() * 100, top: Math.random() * 100, delay: Math.random() * 8, duration: 5 + Math.random() * 5
  }));

  const getRankText = (index) => t.language === 'ja' ? `第${index + 1}位` : `RANK ${index + 1}`;
  const getForecastLabel = () => t.language === 'ja' ? "2025年 予想収益額 (単位: 十億米ドル)" : (t.expForecastLabel || "2025 Forecasted Revenue (USD Billions)");
  const getStrategicImpactLabel = () => t.language === 'ja' ? "戦略的影響：" : (t.expStrategicImpact || "Strategic Impact:");

  return (
    <section className="fullscreen-slide exports-section">
      <div className="export-particles">
        {particles.map(particle => (
          <div key={particle.id} className="export-particle" style={{ left: `${particle.left}%`, top: `${particle.top}%`, animationDelay: `${particle.delay}s`, animationDuration: `${particle.duration}s` }} />
        ))}
      </div>

      <h2 className="slide-title-neon">
        {t.exportsTitle}
      </h2>

      <div className="exports-container">
        {exportItems.map((item, index) => (
          <motion.div
            key={item.id}
            className={`export-card export-card-${item.cardType}`}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -8 }}
            onClick={() => handleCardClick(item)}
            tabIndex={0}
            role="button"
            aria-expanded={activeItem?.id === item.id}
          >
            <span className="export-stat-badge">{getRankText(index)}</span>
            <div className="export-icon">{item.icon}</div>
            <div className="export-card-content">
              <h3 className="export-title">{getTitle(item)}</h3>
              <div className={`export-value export-value-${item.cardType}`}>{item.value}</div>
              <div className="export-year">{getYear(item)}</div>
              <div className="export-growth export-growth-positive">
                <span className="export-growth-icon">▲</span>
                <span>{item.growth}</span>
              </div>
              <p className="export-description">{getHighlight(item)}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {activeItem && (
          <motion.div className="export-modal-overlay" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setActiveItem(null)}>
            {/* ===== TWO-COLUMN MODAL LAYOUT ===== */}
            <motion.div 
              className="export-modal-content" 
              initial={{ scale: 0.9, y: 20 }} 
              animate={{ scale: 1, y: 0 }} 
              exit={{ scale: 0.9, y: 20 }} 
              onClick={(e) => e.stopPropagation()}
            >
              <button className="export-modal-close" onClick={() => setActiveItem(null)}>✕</button>
              
              <div className="modal-title">
                <span style={{ color: activeItem.color }}>{getTitle(activeItem)}</span>
              </div>

              <div className="modal-layout">
                {/* LEFT COLUMN - Chart and Highlight */}
                <div className="modal-left">
                  <div className="industry-highlight" style={{ borderColor: activeItem.color }}>
                    <p>{getHighlight(activeItem)}</p>
                  </div>

                  <div className="export-chart-wrapper">
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
                          cursor={{ fill: 'rgba(168,85,247,0.05)' }} 
                          contentStyle={{ background: '#0a0f1a', border: '1px solid #333', borderRadius: '8px' }}
                          formatter={(value) => [`$${value}B`, t.language === 'ja' ? '金額' : 'Amount']}
                          labelFormatter={(label) => t.language === 'ja' ? `カテゴリー: ${label}` : `Category: ${label}`}
                        />
                        <Bar dataKey="value" radius={[4, 4, 0, 0]} barSize={45}>
                          {chartData.map((entry, index) => (
                            <Cell 
                              key={`cell-${index}`} 
                              fill={entry.name.toLowerCase().includes(activeItem.id) || 
                                    (activeItem.id === 'apparel' && (entry.name === 'Apparel' || entry.name === 'アパレル')) || 
                                    (activeItem.id === 'tea' && (entry.name === 'Tea' || entry.name === '紅茶')) ||
                                    (activeItem.id === 'rubber' && (entry.name === 'Rubber' || entry.name === 'ゴム')) 
                                    ? activeItem.color : '#222'} 
                            />
                          ))}
                        </Bar>
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </div>

                {/* RIGHT COLUMN - Details, Impact, Players */}
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

                  {activeItem.players && (
                    <div className="export-players-section">
                      <h4 style={{ color: activeItem.color }}>{t.expMarketLeaders || "🏆 Market Leaders"}</h4>
                      <div className="export-players-grid">
                        {activeItem.players.map(player => (
                          <div key={player.name} className="export-player-card">
                            <div className="export-player-img-wrapper">
                              <img src={player.img} alt={player.name} className="export-player-logo" />
                            </div>
                            <div className="export-player-info">
                              <h5>{getPlayerName(player)}</h5>
                              <span className="export-player-impact" style={{ color: activeItem.color }}>{getPlayerImpact(player)}</span>
                              <p>{getPlayerDesc(player)}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="export-decoration">
        {t.language === 'ja' ? '✦ 輸出分析 2025 ✦' : '✦ EXPORT ANALYSIS 2025 ✦'}
      </div>
    </section>
  );
}
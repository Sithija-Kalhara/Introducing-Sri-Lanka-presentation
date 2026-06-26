import React, { createContext, useState, useContext } from 'react';

// Translations for entire app (All sections mapped to data files)
export const translations = {
  en: {
    // Hero Slider
    heroTitle: "Introducing data about my country",
    heroSub: "Introducing data about my country",
    heroMainTitle: "Introducing data\nabout my country",
    
    // Author Section
    studentId: "Student ID",
    name: "Name",
    founder: "Founder of Eyerone • Data Analyst",
    authorLabelId: "STUDENT ID",
    authorLabelName: "FULL NAME",
    authorname: "Sithija Kalhara",
    authorTitle: "FOUNDER & CEO at Eyerone | Full-Stack Developer & Designer | Gaming Content Creator & Live Streamer",
    
    // Intro section
    introTitle: "Self Introduction",
    intro1Label: "Home Country",
    intro1Main: "Sri Lanka",
    intro1Detail: "A beautiful tropical island nation located in the Indian Ocean, known as the Pearl of the Indian Ocean.",
    intro2Label: "What did you do in your home country?",
    intro2Main: "Full-Stack Developer",
    intro2Detail: "I was building high-performance web platforms, writing clean architectures, and diving into AI core systems.",
    intro3Label: "What are your hobbies?",
    intro3Main: "Gaming & Tech - Mr.Flexy ",
    intro3Detail: "Known as Mr.Flexy in the gaming arena—deeply passionate about real-time gaming technology, streaming setups, and creative digital media production.",
    intro4Label: "What is your favorite food?",
    intro4Main: "Kottu Roti",
    intro4Detail: "A famous, spicy Sri Lankan street food made from chopped flatbread, vegetables, eggs, spices, and melting cheese.",
    intro5Label: "What is your dream for the future?",
    intro5Main: "Build Eyerone",
    intro5Detail: "To launch Eyerone globally, architecting scalable world-class digital platforms and pushing the boundaries of technology.",
    clickExpand: "▼ CLICK TO EXPAND",
    
    // Population Section
    populationTitle: "Population",
    populationSubtitle: "Total Population",
    populationDesc: "Total population of Sri Lanka exhibits a vibrant demographic structure centered around dynamic regional commercial sectors, scaling up to 21.8 million.",
    
    // Size Section
    sizeMainTitle: "Size & Area",
    sizeAreaLabel: "Area",
    sizeDesc: "A strategically positioned island in the Indian Ocean, optimizing major sea trading lanes.",
    
    // Seasons Section
    seasonsMainTitle: "Seasons",
    yalaTitle: "Yala Monsoon",
    yalaSub: "(Southwest Monsoon)",
    yalaDate: "May - August",
    yalaDesc: "Brings rainfall to Southern and Western parts of Sri Lanka.",
    mahaTitle: "Maha Monsoon",
    mahaSub: "(Northeast Monsoon)",
    mahaDate: "October - January",
    mahaDesc: "Brings rainfall to Northern and Eastern zones, vital for rice farming.",
    interTitle: "Inter-Monsoon",
    interSub: "(Inter-monsoon Period)",
    interDate: "Feb - Mar & Sept",
    interDesc: "Characterized by afternoon thunderstorms and high humidity.",
    
    // Exports Section
    exportsTitle: "National Exports",
    expApparelTitle: "Apparel & Textiles",
    expApparelHighlight: "Sri Lanka's top export, contributing 43% of total national export earnings.",
    expApparelDetails: "The sector reached a post-pandemic high in 2025. Over 80% of exports are sourced by top global brands under 'Garments without Guilt' ethical standards. The top 10 companies drive nearly 50% of the entire industry's revenue.",
    expTeaTitle: "Ceylon Tea",
    expTeaHighlight: "World's cleanest tea (Ozone-friendly) and the largest producer of orthodox black tea.",
    expTeaDetails: "Ceylon Tea is grown in seven agro-climatic regions, each producing a unique flavor profile. Sri Lanka exports nearly 95% of its production, with top markets in the Middle East, Russia, and the UK.",
    expRubberTitle: "Rubber & Coconut",
    expRubberHighlight: "Global leader in industrial solid tires and high-end surgical gloves.",
    expRubberDetails: "Sri Lanka's rubber is prized for its high latex content. Additionally, coconut exports have surged due to global demand for activated carbon and organic coconut water.",
    expMarketLeaders: "Market Leaders",
    expStrategicOverview: "Strategic Overview:",
    
    // Imports Section
    importsTitle: "National Imports",
    impFuelTitle: "Fuel & Energy",
    impFuelHighlight: "Refined petroleum and crude oil are the largest import expenses for the nation.",
    impFuelDetails: "Energy security is a top priority. Sri Lanka imports nearly all its fossil fuel requirements for transportation and thermal power generation. Strategic shifts towards renewable energy aim to reduce this heavy expenditure by 2030.",
    impFuelImpact: "Accounts for approx. 25% of total import expenditure.",
    impMachTitle: "Machinery & Tech",
    impMachHighlight: "Critical equipment for the manufacturing and construction sectors.",
    impMachDetails: "This includes electronic equipment, telecommunications hardware, and heavy machinery for industrial zones. As the nation digitalizes, the import of high-tech components and medical equipment has seen steady growth.",
    impMachImpact: "Essential for maintaining the Apparel and Construction industries.",
    impFoodTitle: "Food & Beverages",
    impFoodHighlight: "Importing essentials to ensure food security and nutritional diversity.",
    impFoodDetails: "Major imports include wheat, sugar, lentils, and dairy products. While Sri Lanka is self-sufficient in rice, it relies on global markets for various commodities to meet the dietary needs of its 21.8 million citizens.",
    impFoodImpact: "Maintains price stability for essential household commodities.",
    impForecastLabel: "2025 Forecasted Expenditure (USD Billions)",
    impStrategicImpact: "Strategic Impact:",
    
    // Chart translations for Imports
    chartFuel: "Fuel",
    chartMachinery: "Machinery",
    chartFood: "Food",
    chartOthers: "Others",
    
    // Culinary Section
    culinaryTitle: "Famous Dishes & Food Culture",
    culinaryName: "Spice & Flavor",
    culinarySub: "A Food Culture Profile",
    culinaryDesc: "Sri Lankan cuisine is a vivid explosion of flavors, shaped by centuries of historical trade routes, tropical agriculture, and local spice production.",
    culinaryCTA: "CLICK CARDS TO EXPLORE DISHES & INGREDIENTS",
    dish1Title: "Rice & Curry",
    dish1Sub: "The Daily Staple",
    dish1Desc: "The ultimate culinary foundation of Sri Lanka. It consists of a large portion of rice served with an array of colorful side curries (fish, chicken, or dhal) intensely flavored with roasted spices and rich coconut milk.",
    dish2Title: "Kottu Roti",
    dish2Sub: "The Street Food King",
    dish2Desc: "Sri Lanka's most iconic street food experience. Made from shredded Godamba roti flatbread, stir-fried on a heated iron sheet with vegetables, eggs, meat, and heavily spiced curry sauce, producing a rhythmic chopping sound.",
    dish3Title: "Hoppers (Appa)",
    dish3Sub: "Traditional Favorite",
    dish3Desc: "Bowl-shaped crispy pancakes made from a fermented batter of rice flour and coconut milk. Often served with a whole egg cooked inside the center (Egg Hopper) paired with fiery Seeni Sambol.",
    dish4Title: "Ceylon Spices",
    dish4Sub: "The Island Heritage",
    dish4Desc: "Sri Lanka is historical ground for the global spice trading route. Home to 'True Cinnamon' (Ceylon Cinnamon), which makes up over 80% of the world's premium pure cinnamon market.",

    // Excel Data Section
    excelTitle: "Overview of the Population Dataset for Sri Lanka and Japan",
    excelDesc: "75-Year Population Dataset Overview (1950-2025)",
    sector: "Country / Indicator",
    avg: "Median Value",
    
    // Charts Component
    chartsTitle: "Analysis Results - Charts",
    lineChartTitle: "Population Growth Timeline",
    lineDesc: "75-year population trajectory. Japan shows stabilization and recent decline, while Sri Lanka indicates steady growth.",
    boxplotTitle: "Box Plot Chart",
    boxplotDesc: "Quartile distribution & variance analysis matching standard box plot layout.",
    totalPopulation: "Total Population Comparison",
    popDesc: "Comparing the total population size of Sri Lanka and Japan.",
    
    // Analysis Component
    analysisTitle: "Demographic Overview",
    insight1: "Japan hit its historic peak population (~128M) around 2010 and is currently in a steady contraction phase.",
    insight2: "Sri Lanka exhibits continuous linear growth over 75 years, stabilizing near the 21.8 million margin by 2025.",
    insight3: "The structural workforce gap widens as Japan's median age shifts higher compared to Sri Lanka's demographic layout.",
    insight4: "Contrast analysis reveals stark differences between an aging post-industrial society and a growing developing nation.",
    growthRate: "Combined Peak Volume",
    yoyGrowth: "Total Aggregate Scale (Year 2025)",
    
    // Closing Section
    thankYou: "Thank you for your attention",
    portfolio: "Developer Profile",
    ayubowan: "Ayubowan!",
    
    // Navbar items
    navHome: "Home",
    navProfile: "Profile",
    navIntro: "Intro",
    navPopulation: "Population",
    navSize: "Size",
    navSeasons: "Seasons",
    navExports: "Exports",
    navImports: "Imports",
    navCuisine: "Cuisine",
    navExcel: "Excel Data",
    navCharts: "Charts",
    navAnalysis: "Analysis",
    navThankYou: "Thank You"
  },
  ja: {
    // Hero Slider
    heroTitle: "Introducing data about my country",
    heroSub: "私の国に関するデータの紹介",
    heroMainTitle: "私の国に関する\nデータの紹介",
    
    // Author Section
    studentId: "学籍番号（がくせきばんごう）",
    name: "氏名（しめい）",
    founder: "Eyerone創業者 • データアナリスト",
    authorLabelId: "学籍番号",
    authorLabelName: "氏名（フルネーム）",
    authorname:"シティジャ　カルハーラ",
    authorTitle: "アイローン（Eyerone）のそうぎょうしゃ けん シーイーオー、フルスタックエンジニア と デザイナー、そして ゲームはいしんしゃ です。",
    
    // Intro section
    introTitle: "自己紹介（じこしょうかい）",
    intro1Label: "出身国（しゅっしんこく）",
    intro1Main: "スリランカ",
    intro1Detail: "インド洋に位置する美しい熱帯の島国で、「インド洋の真珠」として知られています。",
    intro2Label: "出身国で何をしていましたか？",
    intro2Main: "フルスタック開発者",
    intro2Detail: "高性能なWebプラットフォームの構築、クリーンなアーキテクチャの作成、AIコアシステムの開発をしていました。",
    intro3Label: "趣味（しゅみ）は何ですか？",
    intro3Main: "ゲーム＆テクノロジー - Mr.Flexy",
    intro3Detail: "ゲーム界では「Mr.Flexy」として知られ、リアルタイムゲーム技術、配信セットアップ、 ואודיジタルメディア制作に深い情熱を注いでいます。",    intro4Label: "（４）好きな食べ物は何ですか？",
    intro4Main: "コットゥロティ",
    intro4Detail: "刻んだフラットブレッド、野菜、卵、スパイス、とろけるチーズで作られた、有名なスリランカのスパイシーな屋台料理です。",
    intro5Label: "将来（しょうらい）の夢（ゆめ）は何ですか？",
    intro5Main: "Eyeroneを構築する",
    intro5Detail: "Eyeroneをグローバルに立ち上げ、スケーラブルなワールドクラスのデジタルプラットフォームをアーキテクチャし、テクノロジーの限界を押し広げること。",
    clickExpand: "▼ クリックで拡大",
    
    // Population Section
    populationTitle: "人口（じんこう）",
    populationSubtitle: "総人口",
    populationDesc: "スリランカの総人口は約2180万人で、主要な商業都市セクターを中心に、活気ある人口成長構造を示しています。",    
    // Size Section
    sizeMainTitle: "面積",
    sizeAreaLabel: "面積",
    sizeDesc: "インド洋に戦略的に位置する島で、主要な海上交易路を最適化しています。",
    
    // Seasons Section
    seasonsMainTitle: "季節",
    yalaTitle: "ヤーラモンスーン",
    yalaSub: "(南西モンスーン)",
    yalaDate: "5月〜8月",
    yalaDesc: "スリランカの南部および西部に強い降雨をもたらします。",
    mahaTitle: "マハモンスーン",
    mahaSub: "(北東モンスーン)",
    mahaDate: "10月〜1月",
    mahaDesc: "北部および東部に降雨をもたらし、米作りに不可欠な恵みの雨となります。",
    interTitle: "間欠期",
    interSub: "(モンスーン間の合間)",
    interDate: "2月〜3月 & 9月",
    interDesc: "午後の激しい雷雨と高い湿度が特徴の時期です。",
    
    // Exports Section
    exportsTitle: "輸出（ゆしゅつ）",
    expApparelTitle: "アパレル＆繊維",
    expApparelHighlight: "スリランカのトップ輸出産業であり、総輸出収益の43%を占めています。",
    expApparelDetails: "このセクターは2025年にポストパンデミックの最高値を記録しました。輸出の80%以上が「Garments without Guilt（罪なき衣服）」という倫理的基準のもと、世界のトップブランドに供給されています。上位10社が業界全体の収益の約50%を牽引しています。",
    expTeaTitle: "セイロンティー",
    expTeaHighlight: "世界で最もクリーンな紅茶（オゾンフレンドリー）であり、オーソドックス黒茶の最大生産国です。",
    expTeaDetails: "セイロンティーは7つの環境・気候地域で栽培され、それぞれ独自の風味を持っています。スリランカは生産量の約95%を輸出しており、主な市場は中東、ロシア、英国です。",
    expRubberTitle: "ゴム＆ココナッツ",
    expRubberHighlight: "産業用ソリッドタイヤおよび高級手術用手袋の世界的リーダーです。",
    expRubberDetails: "スリランカ産のゴムは、ラテックス含有量が高いことで高く評価されています。また、活性炭や有機ココナッツウォーターの世界的な需要増加に伴い、ココナッツの輸出も急増しています。",
    expMarketLeaders: "市場のリーダー企業",
    expStrategicOverview: "戦略的概要：",
    
    // Imports Section
    importsTitle: "輸入（ゆにゅう）",
    impFuelTitle: "燃料・エネルギー",
    impFuelHighlight: "精製石油と原油は、国家にとって最大の輸入支出項目です。",
    impFuelDetails: "エネルギー安全保障は最優先事項です。スリランカは運輸や火力発電に必要な化石燃料のほぼすべてを輸入に頼っています。2030年までにこの莫大な支出を削減するため、再生可能エネルギーへの戦略的移行が進められています。",
    impFuelImpact: "総輸入支出の約25%を占めています。",
    impMachTitle: "機械・テクノロジー",
    impMachHighlight: "製造業および建設セクターに不可欠な産業用設備です。",
    impMachDetails: "これには、電子機器、電気通信ハードウェア、工業地帯向けの重機械が含まれます。国家のデジタル化に伴い、ハイテク部品や医療機器の輸入が着実に増加しています。",
    impMachImpact: "アパレル産業および建設産業の維持に不可欠です。",
    impFoodTitle: "食品・飲料",
    impFoodHighlight: "食料安全保障と栄養の多様性を確保するための必需品の輸入。",
    impFoodDetails: "主な輸入項目は、小麦、砂糖、レンズ豆、乳製品です。スリランカは主食の米に関しては自給自足していますが、2180万人の国民の多様な食生活を満たすために特定の農産物を国際市場に依存しています。",
    impFoodImpact: "一般家庭の必需品の価格安定を維持しています。",
    impForecastLabel: "2025年 予想支出額 (単位: 十億米ドル)",
    impStrategicImpact: "戦略的影響：",
    
    // Chart translations for Imports
    chartFuel: "燃料",
    chartMachinery: "機械",
    chartFood: "食品",
    chartOthers: "その他",
    
    // Culinary Section
    culinaryTitle: "有名な料理（ゆうめいなりょうり）",
    culinaryName: "スパイス ＆ フレーバー",
    culinarySub: "フードカルチャー・プロファイル",
    culinaryDesc: "スリランカ料理は、何世紀にもわたる歴史的な交易路、熱帯農業、推して地元のスパイス生産によって形作られた、風味の鮮やかな爆発です。",
    culinaryCTA: "カードをクリックして料理や食材の詳細を見る",
    dish1Title: "ライス＆カレー",
    dish1Sub: "日常の主食",
    dish1Desc: "スリランカ料理の究極の基盤です。大皿のライスの周りに、焙煎スパイスと濃厚なココナッツミルクで力強く味付けされた、色鮮やかな副菜カレー（魚、鶏肉、またはレンズ豆）が並びます。",
    dish2Title: "コットゥロティ",
    dish2Sub: "ストリートフードの王様",
    dish2Desc: "スリランカで最も象徴的な屋台料理体験。刻んだゴダンバ・ロティ（フラットブレッド）を、野菜、卵、肉、そしてスパイシーなカレーソースとともに熱した鉄板の上でリズミカルに刻みながら炒めた料理です。",
    dish3Title: "ホッパー (アーッパ)",
    dish3Sub: "定番の朝食",
    dish3Desc: "米粉とココナッツミルクの発酵生地で作る、お椀型のサクサクしたクレープ。中央に卵を落として焼き上げた「エッグホッパー」に、スパイシーなシニサンボルを添えて食べるのが一般的です。",
    dish4Title: "セイロンスパイス",
    dish4Sub: "島の歴史遺産",
    dish4Desc: "スリランカは世界のスパイス交易路における歴史的な拠点です。世界の高級純粋シナモン市場の80%以上を占める「本物のシナモン（セイロンシナモン）」の故郷です。",

    // Excel Data Section
    excelTitle: "スリランカと日本の人口データセットの概要",
    excelDesc: "75年間の人口データセット概要 (1950-2025)",
    sector: "国 / 指標",
    avg: "中央値",
    
    // Charts Component
    chartsTitle: "データの分析結果 // チャート",
    lineChartTitle: "人口推移のタイムライン",
    lineDesc: "75年間の人口軌道。日本は安定期を経て近年減少傾向にあり、スリランカは着実な成長を示しています。",
    boxplotTitle: "箱ひげ図チャート",
    boxplotDesc: "標準的な箱ひげ図のレイアウトに合わせた、四分位分布および分散分析。",
    totalPopulation: "総人口の比較",
    popDesc: "スリランカと日本の総人口規模の比較。",
    
    // Analysis Component
    analysisTitle: "人口動態の概要",
    insight1: "日本は2010年頃に歴史的な人口ピーク（約1億2800万人）に達し、現在は緩やかな減少局面に入っています。",
    insight2: "スリランカは75年間にわたり継続的な直線的成長を示し、2025年までに約2180万人の水準で安定しています。",
    insight3: "スリランカの人口構成と比較して、日本の平均年齢が上昇するにつれ、構造的な労働力格差が拡大しています。",
    insight4: "対比分析により、高齢化が進むポスト工業社会と、成長を続ける開発途上国の間の明確な違いが浮き彫りになります。",
    growthRate: "合計ピーク規模",
    yoyGrowth: "総人口規模（2025年時点）",
    
    // Insights Section
    insightsBadge: "戦略的分析",
    insightsTitle: "分野別の戦略的考察",
    techAdoption: "平均年齢の要因",
    techAdoptionDesc: "日本の平均年齢の推移は、拡大するシルバーエコノミーを示唆しています。",
    techPoint1: "SaaS移行により、ローカルでのハードウェア保守費用を30%削減。",
    techPoint2: "AIインテグレーションによる在庫管理業務のデータ処理最適化。",
    techPoint3: "セキュアなクラウドパイプラインによる稼働停止時間ほぼゼロの維持。",
    manufacturing: "労働力の確保",
    manufacturingDesc: "スリランカは生産年齢人口（労働世代）の高い割合を維持しています。",
    mfgPoint1: "IoTテレメトリパイプラインにより、物理的な設備の予期せぬ摩耗を低減。",
    mfgPoint2: "厳格な国際コンプライアンスを満たす高精度な生産ワークフロー。",
    mfgPoint3: "工場の高負荷電力に対応するグリーンエネルギーインフラの導入。",
    tradeRank: "人口動態トレンド",
    tradeRankDesc: "人口の安定化と持続的な人口減少との間の明確な対比。",
    tradePoint1: "ハブ構築によるルーティング最適化で海上輸送の遅延を大幅に短縮。",
    tradePoint2: "クロスドッキングプロトコルの実装による地域倉庫の滞留サイクル最小化。",
    tradePoint3: "デジタル貨物通関による国際コンプライアンス項目の自動トラッキング。",
    
    // Closing Section
    thankYou: "ご清聴ありがとうございました",
    portfolio: "開発者プロフィール",
    ayubowan: "アユボワン！",
    
    // Navbar items
    navHome: "ホーム",
    navProfile: "プロフィール",
    navIntro: "自己紹介",
    navPopulation: "人口",
    navSize: "面積",
    navSeasons: "季節",
    navExports: "輸出",
    navImports: "輸入",
    navCuisine: "料理",
    navExcel: "エクセル",
    navCharts: "チャート",
    navAnalysis: "分析",
    navInsights: "データ考察",
    navThankYou: "感謝"
  }
};

const LanguageContext = createContext();

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en');
  
  const t = translations[language];
  
  // Add language property to t object for easy access
  t.language = language;
  
  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'ja' : 'en');
  };
  
  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};
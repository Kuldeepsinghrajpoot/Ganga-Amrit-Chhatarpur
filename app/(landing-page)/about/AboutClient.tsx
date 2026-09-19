"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import {
  Target,
  Heart,
  Globe,
  Leaf,
  ArrowRight,
  ShieldCheck,
  BadgeCheck,
  FlaskConical,
  Snowflake,
  Flame,
  Package,
  Refrigerator,
  Cog,
  Users,
  Languages,
  HandHeart,
} from 'lucide-react';
import { Reveal } from '../../components/Reveal';
import MilkJourney from '../../components/MilkJourney';
import MilkMachine from '../../components/MilkMachine';
import LicenseBadges from '../../components/LicenseBadges';
import GradientText from '../../components/GradientText';

type Lang = 'en' | 'hi';

const INFRASTRUCTURE = [
  { label: 'Milk Testing Laboratory', icon: FlaskConical, bg: 'bg-blue-100', text: 'text-blue-600' },
  { label: 'Bulk Milk Cooling (BMC) System', icon: Snowflake, bg: 'bg-cyan-100', text: 'text-cyan-600' },
  { label: 'Pasteurization System', icon: Flame, bg: 'bg-orange-100', text: 'text-orange-600' },
  { label: 'Automatic Milk Packaging', icon: Package, bg: 'bg-purple-100', text: 'text-purple-600' },
  { label: 'Cold Storage', icon: Refrigerator, bg: 'bg-indigo-100', text: 'text-indigo-600' },
  { label: 'Stainless-Steel Processing Equipment', icon: Cog, bg: 'bg-slate-200', text: 'text-slate-700' },
  { label: 'Dedicated Quality Control Team', icon: ShieldCheck, bg: 'bg-green-100', text: 'text-green-600' },
];

const PRODUCTS: Record<Lang, { name: string; tagline: string; desc: string; image: string }[]> = {
  en: [
    {
      name: 'Ganga Amrit Gold',
      tagline: 'Full Cream Milk',
      desc: 'Rich and wholesome milk for those who love a fuller taste.',
      image: '/products/gold-full-cream.png',
    },
    {
      name: 'Ganga Amrit Chai Special',
      tagline: 'Milk',
      desc: 'Crafted especially for a richer and more satisfying cup of chai.',
      image: '/products/chai-special.png',
    },
    {
      name: 'Ganga Amrit Double Toned',
      tagline: 'Milk',
      desc: 'A lighter everyday choice without compromising on our focus on quality.',
      image: '/products/double-toned.png',
    },
  ],
  hi: [
    {
      name: 'Ganga Amrit Gold',
      tagline: 'Full Cream Milk',
      desc: 'Bhare hue, satisfying taste pasand karne walon ke liye rich aur wholesome milk.',
      image: '/products/gold-full-cream.png',
    },
    {
      name: 'Ganga Amrit Chai Special',
      tagline: 'Milk',
      desc: 'Ek behtar aur satisfying cup chai banane ke liye khaas taur par banaya gaya milk.',
      image: '/products/chai-special.png',
    },
    {
      name: 'Ganga Amrit Double Toned',
      tagline: 'Milk',
      desc: 'Quality se koi compromise kiye bina, ek halka everyday choice.',
      image: '/products/double-toned.png',
    },
  ],
};

const CONTENT: Record<
  Lang,
  {
    heroTitle: string;
    heroTitleAccent: string;
    heroSubtitle: string;
    storyEyebrow: string;
    storyHeading: string;
    storyP1a: string;
    storyFounder: string;
    storyP1b: string;
    storyP2: string;
    farmersEyebrow: string;
    farmersHeading: string;
    farmersP1: string;
    farmersP2: string;
    qualityEyebrow: string;
    qualityHeading: string;
    qualityP: string;
    socialEyebrow: string;
    socialHeading: string;
    socialP1: string;
    socialP2: string;
    mvvHeading: string;
    mvvSub: string;
    missionTitle: string;
    missionText: string;
    visionTitle: string;
    visionText: string;
    valuesTitle: string;
    values: { k: string; v: string }[];
    productsHeading: string;
    productsFooter: string;
    certHeading: string;
    cert1Title: string;
    cert1Text: string;
    cert2Title: string;
    cert2Text: string;
    promiseHeading: string;
    promiseP1: string;
    promiseP2: string;
    promiseP3: string;
    ctaHeading: string;
    ctaText: string;
    ctaButton: string;
  }
> = {
  en: {
    heroTitle: 'Ganga Amrit',
    heroTitleAccent: 'A Promise of Purity',
    heroSubtitle:
      "Born in Chhatarpur, Madhya Pradesh, on 3 September 2026 — built to be Chhatarpur's first milk brand, trusted by every family.",
    storyEyebrow: 'Our Story',
    storyHeading: 'A brand built for Chhatarpur, by Chhatarpur.',
    storyP1a: 'Founded by',
    storyFounder: 'Deepansh Gupta',
    storyP1b:
      ", a proud native of Chhatarpur, Ganga Amrit began on 3 September 2026 with a simple dream — to build the city's own first milk-packet brand, one that could stand for quality and purity for its own people.",
    storyP2: 'For us, purity is not just a claim — it is a responsibility.',
    farmersEyebrow: 'Our Farmers',
    farmersHeading: 'From Local Farmers to Your Family.',
    farmersP1:
      'We collect milk directly from local farmers and dairy farms, with a focus on transparency, fair pricing and regular procurement. We believe in building strong, trustworthy relationships with our farmers, and in supporting them with the guidance they need to maintain freshness and quality.',
    farmersP2:
      'Our aim is to create a transparent ecosystem where farmers, dairy farms and consumers grow together.',
    qualityEyebrow: 'Quality at Every Step',
    qualityHeading: 'Quality begins right from the source.',
    qualityP:
      'At our plant, milk goes through quality testing, chilling, pasteurization and hygienic processing before it reaches production. Our modern setup includes a milk testing laboratory, a Bulk Milk Cooling (BMC) system, pasteurization system, automatic packing machine, cold storage and stainless-steel processing equipment — run by a dedicated Quality Control Team. Every product is checked before it goes to market, with purity, freshness and hygiene prioritized at every stage.',
    socialEyebrow: 'Social Responsibility',
    socialHeading: 'Empowering Local Families.',
    socialP1:
      "Ganga Amrit is not just a business — it's an effort to help our own city move forward. We are committed to creating dignified, local-level employment opportunities for the women and men of Chhatarpur.",
    socialP2:
      "We believe that when every family has a stable income, their children get access to better education and a brighter future. Behind every packet, alongside our promise of purity, is a commitment to helping local families become self-reliant and to giving the next generation's education new wings.",
    mvvHeading: 'Driven by Purpose.',
    mvvSub: 'Our guiding principles shape every batch we pack.',
    missionTitle: 'Our Mission',
    missionText:
      'To make milk that represents freshness, purity, quality and trust for every family in Chhatarpur.',
    visionTitle: 'Our Vision',
    visionText:
      'To start from Chhatarpur and grow into a trusted milk brand across the whole region. In the years ahead, we plan to bring several new dairy products under Ganga Amrit — but one thing will always stay the same: no compromise on quality.',
    valuesTitle: 'Our Values',
    values: [
      { k: 'Purity', v: 'Never a compromise, ever.' },
      { k: 'Transparency', v: 'Fair to farmers and families alike.' },
      { k: 'Freshness', v: 'Fast collection to pouch.' },
      { k: 'Trust', v: 'The same promise, every day.' },
    ],
    productsHeading: 'Our Products, Today.',
    productsFooter: 'And this is just the beginning.',
    certHeading: 'Certified & Trusted.',
    cert1Title: 'Quality Tested',
    cert1Text: 'Daily testing by our quality control team.',
    cert2Title: 'Hygiene Standards',
    cert2Text: 'Hygiene and process controls, followed daily.',
    promiseHeading: 'GANGA AMRIT — शुद्धता का वादा',
    promiseP1:
      'From the farms around Chhatarpur to the homes of our community, we are committed to delivering milk with purity, freshness and care.',
    promiseP2: 'Today, we begin for the people of Chhatarpur. Tomorrow, we carry this same trust to the entire region.',
    promiseP3:
      'Because for us, every packet is more than milk — it is a promise of purity, freshness, trust, and a brighter tomorrow for our community.',
    ctaHeading: 'Want to stock Ganga Amrit?',
    ctaText: 'Reach out for distributorship, bulk supply, or retail stocking.',
    ctaButton: 'Talk to our team',
  },
hi: {
  heroTitle: 'Ganga Amrit',
  heroTitleAccent: 'शुद्धता का वादा',
  heroSubtitle:
    'छतरपुर से शुरू हुई एक ऐसी यात्रा, जिसका उद्देश्य सिर्फ दूध देना नहीं, बल्कि हर घर तक शुद्धता, ताजगी और भरोसे का एहसास पहुँचाना है।',

  storyEyebrow: 'हमारी कहानी',
  storyHeading: 'Ganga Amrit की शुरुआत, छतरपुर के अपने लोगों के लिए।',
  storyP1a: 'Ganga Amrit की शुरुआत 3 September 2026 को Founder',
  storyFounder: 'Deepansh Gupta',
  storyP1b:
    ', छतरपुर के ही एक व्यक्ति के अपने शहर के सपने के साथ हुई — छतरपुर का अपना पहला milk packet brand खड़ा करना, जो अपने लोगों के लिए quality और purity की एक नई पहचान बन सके।',
  storyP2: 'हमारे लिए शुद्धता सिर्फ एक शब्द नहीं, बल्कि एक जिम्मेदारी है।',

  farmersEyebrow: 'हमारे किसान',
  farmersHeading: 'स्थानीय किसानों से आपके घर तक।',
  farmersP1:
    'Ganga Amrit में दूध स्थानीय किसानों से सीधे एकत्र किया जाता है। किसानों के साथ पारदर्शिता, उचित मूल्य और नियमित दूध खरीद के माध्यम से एक मजबूत और भरोसेमंद संबंध बनाने पर हम विश्वास करते हैं। साथ ही, किसानों और dairy farms को दूध की ताजगी और गुणवत्ता बनाए रखने के लिए आवश्यक मार्गदर्शन और सहयोग देने पर भी हमारा ध्यान है।',
  farmersP2:
    'हमारा उद्देश्य एक ऐसी पारदर्शी व्यवस्था बनाना है, जहाँ किसान, dairy farms और consumers साथ मिलकर आगे बढ़ें।',

  qualityEyebrow: 'हर चरण पर गुणवत्ता',
  qualityHeading: 'शुद्धता की शुरुआत स्रोत से ही होती है।',
  qualityP:
    'Plant पर दूध को production से पहले quality testing, chilling, pasteurization और hygienic processing की प्रक्रिया से गुजारा जाता है। हमारे modern setup में milk testing laboratory, BMC, pasteurization system, automatic packing machine, cold storage और stainless-steel processing equipment के साथ dedicated Quality Control Team काम करती है। हर product को market में भेजने से पहले quality checks से गुजारा जाता है। Purity, freshness और hygiene को हर चरण पर प्राथमिकता दी जाती है।',

  socialEyebrow: 'हमारी सामाजिक जिम्मेदारी',
  socialHeading: 'स्थानीय परिवारों को सशक्त बनाना',
  socialP1:
    'Ganga Amrit सिर्फ एक व्यवसाय नहीं, बल्कि अपने शहर को आगे बढ़ाने का एक प्रयास है। हम अपने शहर की महिलाओं और पुरुषों को स्थानीय स्तर पर सम्मानजनक रोजगार के अवसर देने के लिए प्रतिबद्ध हैं।',
  socialP2:
    'हमारा विश्वास है कि जब हर परिवार के पास एक स्थिर आय होगी, तभी उनके बच्चों को बेहतर शिक्षा और एक सुनहरा भविष्य मिल सकेगा। हर packet के पीछे शुद्धता के साथ-साथ अपने शहर के परिवारों को आत्मनिर्भर बनाने और अगली पीढ़ी की शिक्षा को नए पंख देने का संकल्प जुड़ा है।',

  mvvHeading: 'एक उद्देश्य के साथ।',
  mvvSub: 'यही सिद्धांत हमारे हर packet में दिखाई देते हैं।',

  missionTitle: 'हमारा मिशन',
  missionText:
    'ऐसा दूध उपलब्ध कराना जो छतरपुर के हर घर के लिए ताजगी, शुद्धता, गुणवत्ता और भरोसे की पहचान बने।',

  visionTitle: 'हमारा विज़न',
  visionText:
    'हमारा विज़न सरल है — छतरपुर से शुरुआत करके पूरे क्षेत्र का एक trusted milk brand बनना। आने वाले समय में हम Ganga Amrit के साथ कई नए dairy products लेकर आना चाहते हैं, लेकिन एक चीज़ हमेशा समान रहेगी — quality से कोई compromise नहीं।',

  valuesTitle: 'हमारे मूल्य',
  values: [
    { k: 'Purity', v: 'कभी समझौता नहीं, कभी नहीं।' },
    { k: 'Transparency', v: 'किसानों और परिवारों, दोनों के साथ उचित व्यवहार।' },
    { k: 'Freshness', v: 'Collection से pouch तक, तेज़ प्रक्रिया।' },
    { k: 'Trust', v: 'हर दिन, वही वादा।' },
  ],

  productsHeading: 'हमारे Products',
  productsFooter: 'और यह सिर्फ शुरुआत है।',

  certHeading: 'प्रमाणित और भरोसेमंद।',
  cert1Title: 'गुणवत्ता की जाँच',
  cert1Text: 'हमारी Quality Control Team द्वारा प्रतिदिन परीक्षण।',
  cert2Title: 'स्वच्छता के मानक',
  cert2Text: 'स्वच्छता और प्रक्रिया से जुड़े मानकों का प्रतिदिन पालन किया जाता है।',

  promiseHeading: 'GANGA AMRIT — शुद्धता का वादा',
  promiseP1:
    'छतरपुर के आसपास के farms से लेकर हमारे समुदाय के घरों तक, हम शुद्धता, ताजगी और देखभाल के साथ दूध पहुँचाने के लिए प्रतिबद्ध हैं।',
  promiseP2:
    'आज हम छतरपुर के अपने लोगों के लिए शुरू हुए हैं। कल इसी भरोसे को पूरे क्षेत्र तक ले जाना है।',
  promiseP3:
    'क्योंकि हमारे लिए हर packet सिर्फ दूध से बढ़कर है — यह शुद्धता, ताजगी, भरोसे और हमारे समुदाय के उज्ज्वल कल का वादा है।',

  ctaHeading: 'Ganga Amrit का stock रखना चाहते हैं?',
  ctaText:
    'Distributorship, bulk supply या retail stocking के लिए हमसे संपर्क करें।',
  ctaButton: 'हमारी टीम से बात करें',
},



export default function AboutClient() {
  const [lang, setLang] = useState<Lang>('en');
  const t = CONTENT[lang];
  const products = PRODUCTS[lang];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-orange-100 selection:text-orange-900 scroll-smooth">
      {/* Language toggle - floats above the page so it's reachable from anywhere */}
      <div className="fixed bottom-20 md:bottom-6 left-4 md:left-6 z-50">
        <div className="relative flex items-center bg-white/95 backdrop-blur-md rounded-full shadow-xl border border-slate-200 p-1">
          <Languages className="w-4 h-4 text-slate-400 ml-2 mr-1 hidden sm:block" />
          {(['en', 'hi'] as Lang[]).map((option) => (
            <button
              key={option}
              type="button"
              onClick={() => setLang(option)}
              aria-pressed={lang === option}
              className={`relative z-10 px-3.5 py-2 text-xs sm:text-sm font-bold rounded-full transition-colors ${
                lang === option ? 'text-white' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {lang === option && (
                <motion.span
                  layoutId="lang-toggle-pill"
                  transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  className="absolute inset-0 -z-10 rounded-full bg-orange-600"
                />
              )}
              {option === 'en' ? 'English' : 'हिंदी'}
            </button>
          ))}
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.main
          key={lang}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
        {/* HERO SECTION */}
        <section className="relative py-16 md:py-24 bg-slate-900 overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1565610222536-ef125c59da2c?auto=format&fit=crop&w=2000&q=80"
              alt="Factory exterior at dawn"
              className="w-full h-full object-cover opacity-20"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 via-slate-900/80 to-slate-900"></div>
          </div>
          <Reveal className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight leading-tight">
                {t.heroTitle} <span className="text-orange-500">{t.heroTitleAccent}</span>
              </h1>
              <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
                {t.heroSubtitle}
              </p>
            </div>
          </Reveal>
        </section>

        {/* Our Story Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
              <Reveal className="relative h-80 lg:h-[460px] rounded-2xl overflow-hidden shadow-2xl mb-10 lg:mb-0 bg-gradient-to-b from-orange-50 to-white">
                <Image
                  src="/products/gold-full-cream.png"
                  alt="Ganga Amrit Gold pouch"
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-contain p-10"
                />
              </Reveal>
              <Reveal delay={0.15}>
                <div>
                  <div className="inline-flex items-center space-x-2 bg-orange-50 px-4 py-2 rounded-full text-orange-700 font-medium text-sm mb-6">
                    <Heart className="w-4 h-4" />
                    <span className="tracking-wide uppercase text-xs font-bold">{t.storyEyebrow}</span>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-6 tracking-tight">
                    {t.storyHeading}
                  </h2>
                  <div className="space-y-5 text-lg text-slate-600 leading-relaxed">
                    <p>
                      {t.storyP1a} <strong className="text-slate-900">{t.storyFounder}</strong>
                      {t.storyP1b}
                    </p>
                    <p>{t.storyP2}</p>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* From Local Farmers to Your Family */}
        <section className="py-16 bg-slate-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center space-x-2 bg-green-50 px-4 py-2 rounded-full text-green-700 font-medium text-sm mb-6">
              <Users className="w-4 h-4" />
              <span className="tracking-wide uppercase text-xs font-bold">{t.farmersEyebrow}</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-6 tracking-tight">
              {t.farmersHeading}
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-4">{t.farmersP1}</p>
            <p className="text-lg text-slate-600 leading-relaxed">{t.farmersP2}</p>
          </div>
        </section>

        {/* Quality at Every Step */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <div className="inline-flex items-center space-x-2 bg-orange-50 px-4 py-2 rounded-full text-orange-700 font-medium text-sm mb-6">
                <ShieldCheck className="w-4 h-4" />
                <span className="tracking-wide uppercase text-xs font-bold">{t.qualityEyebrow}</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight mb-4">
                {t.qualityHeading}
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed">{t.qualityP}</p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mb-14">
              {INFRASTRUCTURE.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ delay: i * 0.07, duration: 0.4 }}
                  whileHover={{ y: -5, scale: 1.03 }}
                  className="bg-white border border-slate-200/70 rounded-2xl p-5 shadow-sm hover:shadow-lg flex flex-col items-center text-center gap-3"
                >
                  <motion.span
                    animate={{ scale: [1, 1.08, 1] }}
                    transition={{ duration: 2.4, repeat: Infinity, delay: i * 0.3 }}
                    className={`w-12 h-12 rounded-full flex items-center justify-center ${item.bg}`}
                  >
                    <item.icon className={`w-6 h-6 ${item.text}`} />
                  </motion.span>
                  <span className="text-sm font-bold text-slate-700 leading-snug">{item.label}</span>
                </motion.div>
              ))}
            </div>

            <div className="max-w-2xl mx-auto mb-14 bg-slate-50 rounded-2xl border border-slate-100 p-6">
              <MilkMachine className="w-full h-auto" />
            </div>
            <MilkJourney />
          </div>
        </section>

        {/* Social Responsibility */}
        <section className="py-16 bg-orange-50/40">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center space-x-2 bg-white px-4 py-2 rounded-full text-orange-700 font-medium text-sm mb-6 shadow-sm">
              <HandHeart className="w-4 h-4" />
              <span className="tracking-wide uppercase text-xs font-bold">{t.socialEyebrow}</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-6 tracking-tight">
              {t.socialHeading}
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-4">{t.socialP1}</p>
            <p className="text-lg text-slate-600 leading-relaxed">{t.socialP2}</p>
          </div>
        </section>

        {/* Mission, Vision, Values */}
        <section className="py-16 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4 tracking-tight">{t.mvvHeading}</h2>
              <p className="text-xl text-slate-600">{t.mvvSub}</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <Reveal delay={0}>
                <motion.div whileHover={{ y: -8, rotate: -1.5 }} transition={{ type: 'spring', stiffness: 250, damping: 18 }} className="bg-white p-7 rounded-2xl shadow-sm hover:shadow-xl border border-slate-200/60 flex flex-col items-center text-center h-full">
                  <div className="w-16 h-16 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center mb-6">
                    <Target className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-4">{t.missionTitle}</h3>
                  <p className="text-slate-600 leading-relaxed">{t.missionText}</p>
                </motion.div>
              </Reveal>
              <Reveal delay={0.12}>
                <motion.div whileHover={{ y: -8, rotate: 1.5 }} transition={{ type: 'spring', stiffness: 250, damping: 18 }} className="bg-white p-7 rounded-2xl shadow-sm hover:shadow-xl border border-slate-200/60 flex flex-col items-center text-center h-full">
                  <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
                    <Globe className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-4">{t.visionTitle}</h3>
                  <p className="text-slate-600 leading-relaxed">{t.visionText}</p>
                </motion.div>
              </Reveal>
              <Reveal delay={0.24}>
                <motion.div whileHover={{ y: -8, rotate: -1.5 }} transition={{ type: 'spring', stiffness: 250, damping: 18 }} className="bg-white p-7 rounded-2xl shadow-sm hover:shadow-xl border border-slate-200/60 flex flex-col items-center text-center h-full">
                  <div className="w-16 h-16 bg-red-100 text-red-600 rounded-full flex items-center justify-center mb-6">
                    <Heart className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-4">{t.valuesTitle}</h3>
                  <ul className="text-slate-600 leading-relaxed space-y-2 text-left">
                    {t.values.map((item) => (
                      <li key={item.k}>
                        <strong>{item.k}:</strong> {item.v}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Our Products */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight">{t.productsHeading}</h2>
            </div>
            <div className="grid sm:grid-cols-3 gap-6">
              {products.map((p, i) => (
                <Reveal key={p.name} delay={i * 0.1}>
                  <div className="bg-slate-50 rounded-2xl border border-slate-100 p-6 h-full flex flex-col items-center text-center">
                    <div className="relative w-28 h-36 mb-4">
                      <Image src={p.image} alt={p.name} fill sizes="112px" className="object-contain" />
                    </div>
                    <h3 className="font-bold text-slate-900">{p.name}</h3>
                    <div className="text-xs text-orange-600 font-bold uppercase tracking-wide mb-2">{p.tagline}</div>
                    <p className="text-sm text-slate-500 leading-relaxed">{p.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
            <p className="text-center text-slate-500 mt-8 font-medium">{t.productsFooter}</p>
          </div>
        </section>

        {/* Certified & Trusted */}
        <section className="py-16 bg-slate-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-12 tracking-tight">{t.certHeading}</h2>
            <div className="grid sm:grid-cols-2 gap-6">
              <Reveal delay={0}>
                <motion.div whileHover={{ y: -6 }} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200/60 flex flex-col items-center text-center h-full">
                  <div className="w-16 h-16 bg-amber-100 text-amber-600 rounded-full flex items-center justify-center mb-5">
                    <BadgeCheck className="w-8 h-8" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{t.cert1Title}</h3>
                  <p className="text-slate-500 text-sm">{t.cert1Text}</p>
                </motion.div>
              </Reveal>
              <Reveal delay={0.12}>
                <motion.div whileHover={{ y: -6 }} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200/60 flex flex-col items-center text-center h-full">
                  <div className="w-16 h-16 bg-teal-100 text-teal-600 rounded-full flex items-center justify-center mb-5">
                    <Leaf className="w-8 h-8" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{t.cert2Title}</h3>
                  <p className="text-slate-500 text-sm">{t.cert2Text}</p>
                </motion.div>
              </Reveal>
            </div>
            <div className="mt-8 flex justify-center">
              <LicenseBadges />
            </div>
          </div>
        </section>

        {/* Our Promise */}
        <section className="py-20 bg-slate-950 text-center">
          <Reveal className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div>
              <h2 className="text-2xl sm:text-3xl font-black tracking-tight mb-6">
                <GradientText from="from-orange-400" via="via-amber-300" to="to-orange-400">
                  {t.promiseHeading}
                </GradientText>
              </h2>
              <p className="text-lg text-slate-300 leading-relaxed mb-6">{t.promiseP1}</p>
              <p className="text-slate-400 italic mb-8">{t.promiseP2}</p>
              <p className="text-orange-400 font-bold text-lg">{t.promiseP3}</p>
            </div>
          </Reveal>
        </section>

        {/* CTA */}
        <section className="py-16 bg-orange-600">
          <Reveal className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div>
              <h2 className="text-3xl font-extrabold text-white mb-4 tracking-tight">{t.ctaHeading}</h2>
              <p className="text-orange-100 mb-8">{t.ctaText}</p>
              <Link href="/contact">
                <motion.span
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center bg-white text-orange-700 hover:bg-orange-50 font-bold px-8 py-4 rounded-xl text-lg transition-colors shadow-xl cursor-pointer"
                >
                  {t.ctaButton} <ArrowRight className="ml-2 w-5 h-5" />
                </motion.span>
              </Link>
            </div>
          </Reveal>
        </section>
        </motion.main>
      </AnimatePresence>
    </div>
  );
}
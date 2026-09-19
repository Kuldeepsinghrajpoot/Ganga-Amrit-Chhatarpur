"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Reveal } from './components/Reveal';
import MarqueeBanner from './components/MarqueeBanner';
import Testimonials from './components/Testimonials';
import CountUp from './components/CountUp';
import ProductsStrip from './components/ProductsStrip';
import TrustBadges from './components/TrustBadges';
import CtaBanner from './components/CtaBanner';
import FloatingMilkDrops from './components/FloatingMilkDrops';
import MilkMachine from './components/MilkMachine';
import MilkProcessVideo from './components/MilkProcessVideo';
import TypewriterText from './components/TypewriterText';
import MagneticButton from './components/MagneticButton';
import GradientText from './components/GradientText';
import AnimatedBlobBackground from './components/AnimatedBlobBackground';
import LicenseBadges from './components/LicenseBadges';
import FactoryGallery from './components/FactoryGallery';
import {
    Droplet,
    Milk,
    Store,
    CheckCircle2,
    ShieldCheck,
    Factory,
    Truck,
    Users,
    Cog,
    ThermometerSnowflake,
    FlaskConical,
    HelpCircle,
    ChevronDown,
    Database,
    Warehouse,
    Package,
    Flame,
    ArrowRight
} from 'lucide-react';

export default function App() {
    // Computed only on the client after mount so the server-rendered HTML
    // and the initial client render match exactly (avoids hydration
    // mismatch from server/client clock or timezone differences).
    const [greeting, setGreeting] = useState('Welcome to');

    useEffect(() => {
        const hour = new Date().getHours();
        if (hour < 12) setGreeting('Good Morning! Welcome to');
        else if (hour < 17) setGreeting('Good Afternoon! Welcome to');
        else setGreeting('Good Evening! Welcome to');
    }, []);

    const { scrollYProgress } = useScroll();
    const heroBgY = useTransform(scrollYProgress, [0, 0.2], [0, 60]);

    return (
        <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-orange-100 selection:text-orange-900">
            <main>
                {/* HERO SECTION: B2B/Industrial Focus */}
                <section className="relative -mt-20 pt-20 pb-32 lg:pt-32 lg:pb-48 overflow-hidden bg-orange-50/30">
                    {/* Background video - plays muted, looped, on every device.
                        The -mt-20/pt-20 pair pulls this section up underneath the
                        (transparent, fixed-height) navbar so the video is visible
                        behind it too, while the inner content still starts right
                        below the nav thanks to the matching pt-20. */}
                    <div className="absolute inset-0 z-0">
                        <video
                            className="w-full h-full object-cover"
                            autoPlay
                            loop
                            muted
                            playsInline
                            preload="auto"
                            poster="/video/hero-poster.jpg"
                        >
                            <source src="/video/hero-bg.webm" type="video/webm" />
                            <source src="/video/hero-bg.mp4" type="video/mp4" />
                        </video>
                        <div className="absolute inset-0 bg-linear-to-b from-white/45 via-orange-50/35 to-white/75" />
                    </div>

                    <FloatingMilkDrops count={8} />
                    <AnimatedBlobBackground />
                    <motion.div style={{ y: heroBgY }} className="absolute inset-0 overflow-hidden opacity-10">
                        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                            <path d="M0,0 C30,40 70,40 100,0 L100,100 L0,100 Z" fill="url(#grad1)" />
                            <defs>
                                <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
                                    <stop offset="0%" style={{ stopColor: 'rgb(255,237,213)', stopOpacity: 1 }} />
                                    <stop offset="100%" style={{ stopColor: 'rgb(255,255,255)', stopOpacity: 1 }} />
                                </linearGradient>
                            </defs>
                        </svg>
                    </motion.div>

                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                        <div className="lg:grid lg:grid-cols-2 gap-16 items-center">
                            <Reveal>
                                <div className="inline-flex items-center space-x-2 text-orange-700 font-bold text-sm tracking-widest uppercase mb-6 bg-orange-100 px-4 py-2 rounded-full">
                                    <Factory className="w-4 h-4" />
                                    <span>{greeting} Ganga Amrit</span>
                                </div>

                                <div className="mb-4">
                                    <TypewriterText
                                        text="शुद्धता का वादा"
                                        className="text-2xl sm:text-3xl font-extrabold text-orange-600"
                                    />
                                </div>

                                <h1 className="text-5xl lg:text-7xl font-extrabold text-slate-900 tracking-tight mb-6 leading-[1.1]">
                                    Fresh Milk,
                                    <span className="text-orange-600"> Made in Chhatarpur.</span>
                                </h1>
                                <p className="text-xl text-slate-700 leading-relaxed mb-10 max-w-lg">
                                    Ganga Amrit is Chhatarpur&apos;s first milk brand - fresh, pure milk processed
                                    right here and delivered with our promise: शुद्धता का वादा.
                                </p>

                                <div className="">
                                    <MagneticButton>
                                        <Link href="/contact" className="inline-flex flex-col items-center px-8 py-3 text-base font-bold text-white bg-orange-600 hover:bg-orange-700 transition-all rounded-lg shadow-lg shadow-orange-200">
                                            <span>Enquiry for Distributor &amp; Agency</span>
                                            <span className="text-sm font-medium text-orange-100">वितरक और एजेंसी हेतु पूछताछ</span>
                                        </Link>
                                    </MagneticButton>
                                </div>

                                {/* Quick Trust Signals */}
                                <div className="mt-12 pt-8 border-t border-orange-200/50 space-y-4">
                                    <TrustBadges className="justify-center md:justify-start" />
                                    <LicenseBadges className="justify-center md:justify-start" />
                                </div>
                            </Reveal>
                        </div>
                    </div>
                </section>

                {/* Key Metrics */}
                <section className="relative z-20 -mt-24 px-4">
                    <Reveal delay={0.1}>
                        <div className="max-w-7xl mx-auto bg-white rounded-2xl shadow-xl border border-slate-100 p-6 lg:p-10">
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 divide-y md:divide-y-0 md:divide-x divide-slate-100">
                                <div className="pb-6 md:pb-0 md:pr-6 text-center md:text-left flex flex-col justify-center">
                                    <div className="flex items-center justify-center md:justify-start text-orange-600 mb-3">
                                        <Droplet className="w-6 h-6 mr-2" />
                                        <span className="font-bold uppercase tracking-wider text-sm">Milk Variants</span>
                                    </div>
                                    <div className="text-4xl lg:text-5xl font-extrabold text-slate-900">
                                        <CountUp value={3} />
                                    </div>
                                    <div className="text-slate-500 text-sm mt-2 font-medium">Gold, Chai Special &amp; Double Toned</div>
                                </div>
                                <div className="py-6 md:py-0 md:px-6 text-center md:text-left flex flex-col justify-center">
                                    <div className="flex items-center justify-center md:justify-start text-green-600 mb-3">
                                        <Users className="w-6 h-6 mr-2" />
                                        <span className="font-bold uppercase tracking-wider text-sm">Sourcing</span>
                                    </div>
                                    <div className="text-4xl lg:text-5xl font-extrabold text-slate-900">
                                        <CountUp value={100} suffix="%" />
                                    </div>
                                    <div className="text-slate-500 text-sm mt-2 font-medium">Sourced from local Chhatarpur farmers</div>
                                </div>
                                <div className="pt-6 md:pt-0 md:pl-6 text-center md:text-left flex flex-col justify-center">
                                    <div className="flex items-center justify-center md:justify-start text-blue-600 mb-3">
                                        <Truck className="w-6 h-6 mr-2" />
                                        <span className="font-bold uppercase tracking-wider text-sm">Reach</span>
                                    </div>
                                    <div className="text-4xl lg:text-5xl font-extrabold text-slate-900">
                                        <CountUp value={1} suffix="+ State" />
                                    </div>
                                    <div className="text-slate-500 text-sm mt-2 font-medium">Starting in Chhatarpur, Madhya Pradesh, growing steadily</div>
                                </div>
                            </div>
                        </div>
                    </Reveal>
                </section>

                {/* Promo banner strip #1 */}
                <div className="mt-16 bg-orange-600 text-white py-3 border-y border-orange-700/40">
                    <MarqueeBanner
                        items={[
                            "🥛 Fresh from Chhatarpur, MP",
                            "✅ FSSAI Licensed",
                            "🚚 Daily Distribution",
                            "🏆 Trusted by Retailers & Distributors",
                        ]}
                    />
                </div>

                {/* Real product photos */}
                <ProductsStrip />

                {/* "Video" - animated process reel */}
                <section className="py-16 bg-slate-950">
                    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center max-w-2xl mx-auto mb-10">
                            <h2 className="text-orange-400 font-bold uppercase tracking-widest mb-3">Watch The Journey</h2>
                            <h3 className="text-3xl sm:text-4xl font-extrabold text-white">
                                <GradientText from="from-orange-400" via="via-amber-300" to="to-orange-400">
                                    Farm to shop, animated.
                                </GradientText>
                            </h3>
                        </div>
                        <div className="rounded-2xl overflow-hidden border border-slate-800 shadow-2xl bg-slate-900 p-4 sm:p-6">
                            <MilkProcessVideo className="w-full h-auto" />
                        </div>
                    </div>
                </section>

                {/* Factory Operations Detail */}
                <section className="py-20 bg-slate-50">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center max-w-3xl mx-auto mb-16">
                            <h2 className="text-orange-600 font-bold uppercase tracking-widest mb-4">Factory Operations</h2>
                            <h3 className="text-4xl font-extrabold text-slate-900 mb-6">From Farm to Factory Gate.</h3>
                            <p className="text-xl text-slate-600 leading-relaxed">
                                Our vertically integrated supply chain ensures traceability and quality control at every step before it reaches our dealers.
                            </p>
                        </div>

                        <Reveal className="mb-14">
                            <div className="max-w-2xl mx-auto  rounded-sm   p-6">
                                <MilkMachine className="w-full h-auto" />
                            </div>
                                <div className="relative bottom-8 left-1/2 -translate-x-1/2  w-96 h-3 bg-black/30 blur-md rounded-[50%]" />
                        </Reveal>

                        <div className="grid md:grid-cols-3 gap-6">
                            {/* Op Card 1 */}
                            <Reveal delay={0}>
                                <div className=" p-6 rounded-md border border-slate-100 h-full">
                                    <div className="w-12 h-12 bg-green-100 text-green-700 rounded-md flex items-center justify-center mb-6">
                                        <Store className="w-6 h-6" />
                                    </div>
                                    <h4 className="text-xl font-bold text-slate-900 mb-3">1. Collection</h4>
                                    <p className="text-slate-600 leading-relaxed">
                                        Milk is collected directly from local farmers and dairy farms around Chhatarpur, with fair pricing and regular procurement.
                                    </p>
                                </div>
                            </Reveal>
                            {/* Op Card 2 */}
                            <Reveal delay={0.12}>
                                <div className=" p-6 rounded-md border border-slate-100 h-full">
                                    <div className="w-12 h-12 bg-blue-100 text-blue-700 rounded-md flex items-center justify-center mb-6">
                                        <ThermometerSnowflake className="w-6 h-6" />
                                    </div>
                                    <h4 className="text-xl font-bold text-slate-900 mb-3">2. Testing &amp; Chilling</h4>
                                    <p className="text-slate-600 leading-relaxed">
                                        Every batch is tested for Fat% and SNF%, then chilled quickly at our Bulk Milk Cooling (BMC) system to keep it fresh.
                                    </p>
                                </div>
                            </Reveal>
                            {/* Op Card 3 */}
                            <Reveal delay={0.24}>
                                <div className=" p-6 rounded-md border border-slate-100 h-full">
                                    <div className="w-12 h-12 bg-orange-100 text-orange-700 rounded-md flex items-center justify-center mb-6">
                                        <Cog className="w-6 h-6" />
                                    </div>
                                    <h4 className="text-xl font-bold text-slate-900 mb-3">3. Pasteurization &amp; Packing</h4>
                                    <p className="text-slate-600 leading-relaxed">
                                        Milk is pasteurized and packed on our automatic packaging line, using stainless-steel equipment throughout.
                                    </p>
                                </div>
                            </Reveal>
                        </div>
                    </div>
                </section>

                {/* Factory Photo Gallery */}
                <FactoryGallery />

                {/* Infrastructure & Assets */}
                <section className="py-20 bg-white overflow-hidden">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center max-w-2xl mx-auto mb-14">
                            <div className="inline-flex items-center space-x-2 text-slate-500 font-bold text-sm tracking-widest uppercase mb-6 bg-slate-100 px-4 py-2 rounded-full">
                                <Database className="w-4 h-4" />
                                <span>Infrastructure &amp; Assets</span>
                            </div>
                            <h2 className="text-4xl font-extrabold text-slate-900 mb-6 leading-tight">Built the Right Way.</h2>
                            <p className="text-lg text-slate-600 leading-relaxed">
                                A modern, hygienic facility equipped to process fresh milk safely, every single day.
                            </p>
                        </div>

                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                            <Reveal delay={0}>
                                <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100 h-full text-center">
                                    <FlaskConical className="w-9 h-9 text-blue-600 mb-4 mx-auto" />
                                    <h3 className="text-sm font-bold text-slate-900">Milk Testing Lab</h3>
                                </div>
                            </Reveal>
                            <Reveal delay={0.08}>
                                <div className="bg-cyan-50 p-6 rounded-2xl border border-cyan-100 h-full text-center">
                                    <ThermometerSnowflake className="w-9 h-9 text-cyan-600 mb-4 mx-auto" />
                                    <h3 className="text-sm font-bold text-slate-900">Bulk Milk Cooling (BMC)</h3>
                                </div>
                            </Reveal>
                            <Reveal delay={0.16}>
                                <div className="bg-orange-50 p-6 rounded-2xl border border-orange-100 h-full text-center">
                                    <Flame className="w-9 h-9 text-orange-600 mb-4 mx-auto" />
                                    <h3 className="text-sm font-bold text-slate-900">Pasteurization System</h3>
                                </div>
                            </Reveal>
                            <Reveal delay={0.24}>
                                <div className="bg-purple-50 p-6 rounded-2xl border border-purple-100 h-full text-center">
                                    <Package className="w-9 h-9 text-purple-600 mb-4 mx-auto" />
                                    <h3 className="text-sm font-bold text-slate-900">Automatic Packaging</h3>
                                </div>
                            </Reveal>
                            <Reveal delay={0.32}>
                                <div className="bg-indigo-50 p-6 rounded-2xl border border-indigo-100 h-full text-center">
                                    <Warehouse className="w-9 h-9 text-indigo-600 mb-4 mx-auto" />
                                    <h3 className="text-sm font-bold text-slate-900">Cold Storage</h3>
                                </div>
                            </Reveal>
                            <Reveal delay={0.4}>
                                <div className="bg-slate-100 p-6 rounded-2xl border border-slate-200 h-full text-center">
                                    <Cog className="w-9 h-9 text-slate-600 mb-4 mx-auto" />
                                    <h3 className="text-sm font-bold text-slate-900">Stainless-Steel Equipment</h3>
                                </div>
                            </Reveal>
                            <Reveal delay={0.48}>
                                <div className="bg-green-50 p-6 rounded-2xl border border-green-100 h-full text-center">
                                    <ShieldCheck className="w-9 h-9 text-green-600 mb-4 mx-auto" />
                                    <h3 className="text-sm font-bold text-slate-900">Quality Control Team</h3>
                                </div>
                            </Reveal>
                            <Reveal delay={0.56}>
                                <div className="bg-amber-50 p-6 rounded-2xl border border-amber-100 h-full text-center">
                                    <Users className="w-9 h-9 text-amber-600 mb-4 mx-auto" />
                                    <h3 className="text-sm font-bold text-slate-900">Local Farmer Network</h3>
                                </div>
                            </Reveal>
                        </div>
                    </div>
                </section>

                {/* Capabilities Section */}
                <section id="capabilities" className="py-20 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center max-w-3xl mx-auto mb-20">
                            <h2 className="text-orange-600 font-bold uppercase tracking-widest mb-4">Our Process</h2>
                            <h3 className="text-4xl font-extrabold text-slate-900 mb-6">How We Keep It Fresh.</h3>
                            <p className="text-xl text-slate-600 leading-relaxed">
                                Simple, hygienic steps from collection to your home.
                            </p>
                            <Link href="/products" className="inline-flex items-center mt-6 text-orange-600 font-bold hover:text-orange-700 transition-colors group">
                                View full product range
                                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>

                        <Reveal className="grid lg:grid-cols-3 gap-6">
                            {/* Card 1: Milk Specs */}
                            <div className="bg-orange-50/50 rounded-md p-8 lg:p-10 border border-orange-100 hover:border-orange-300 transition-all">
                                <div className="flex items-center mb-6">
                                    <div className="w-12 h-12 bg-white text-orange-600 flex items-center justify-center rounded-md mr-4">
                                        <Milk className="w-6 h-6" />
                                    </div>
                                    <h4 className="text-2xl font-bold text-slate-900">Our Milk</h4>
                                </div>
                                <p className="text-slate-600 mb-6 leading-relaxed text-sm">
                                    Three variants, each standardized for a consistent Fat% and SNF%.
                                </p>
                                <ul className="space-y-3">
                                    <li className="flex items-start text-slate-700 text-sm font-medium">
                                        <CheckCircle2 className="w-5 h-5 text-orange-600 mr-3 shrink-0" />
                                        <span>Gold - Full Cream (6% Fat)</span>
                                    </li>
                                    <li className="flex items-start text-slate-700 text-sm font-medium">
                                        <CheckCircle2 className="w-5 h-5 text-orange-600 mr-3 shrink-0" />
                                        <span>Chai Special (4.5% Fat min.)</span>
                                    </li>
                                    <li className="flex items-start text-slate-700 text-sm font-medium">
                                        <CheckCircle2 className="w-5 h-5 text-orange-600 mr-3 shrink-0" />
                                        <span>Double Toned (1.5% Fat)</span>
                                    </li>
                                </ul>
                            </div>

                            {/* Card 2: Cold Chain */}
                            <div className="bg-blue-50/50 rounded-2xl p-8 lg:p-10 border border-blue-100 hover:border-blue-300 transition-all">
                                <div className="flex items-center mb-6">
                                    <div className="w-12 h-12 bg-white text-blue-600 shadow-sm flex items-center justify-center rounded-xl mr-4">
                                        <ThermometerSnowflake className="w-6 h-6" />
                                    </div>
                                    <h4 className="text-2xl font-bold text-slate-900">Cold Chain</h4>
                                </div>
                                <p className="text-slate-600 mb-6 leading-relaxed text-sm">
                                    Milk is chilled soon after collection and kept cold through storage and dispatch.
                                </p>
                                <ul className="space-y-3">
                                    <li className="flex items-start text-slate-700 text-sm font-medium">
                                        <CheckCircle2 className="w-5 h-5 text-blue-600 mr-3 shrink-0" />
                                        <span><strong>Storage:</strong> Bulk milk coolers</span>
                                    </li>
                                    <li className="flex items-start text-slate-700 text-sm font-medium">
                                        <CheckCircle2 className="w-5 h-5 text-blue-600 mr-3 shrink-0" />
                                        <span><strong>Transport:</strong> Chilled dispatch</span>
                                    </li>
                                    <li className="flex items-start text-slate-700 text-sm font-medium">
                                        <CheckCircle2 className="w-5 h-5 text-blue-600 mr-3 shrink-0" />
                                        <span><strong>Monitoring:</strong> Checked at every stage</span>
                                    </li>
                                </ul>
                            </div>

                            {/* Card 3: Packaging & Hygiene */}
                            <div className="bg-green-50/50 rounded-2xl p-8 lg:p-10 border border-green-100 hover:border-green-300 transition-all">
                                <div className="flex items-center mb-6">
                                    <div className="w-12 h-12 bg-white text-green-600 shadow-sm flex items-center justify-center rounded-xl mr-4">
                                        <ShieldCheck className="w-6 h-6" />
                                    </div>
                                    <h4 className="text-2xl font-bold text-slate-900">Packaging &amp; Hygiene</h4>
                                </div>
                                <p className="text-slate-600 mb-6 leading-relaxed text-sm">
                                    Automatic pouch packing keeps every batch consistent and hygienic from filling to sealing.
                                </p>
                                <ul className="space-y-3">
                                    <li className="flex items-start text-slate-700 text-sm font-medium">
                                        <CheckCircle2 className="w-5 h-5 text-green-600 mr-3 shrink-0" />
                                        <span><strong>Packing:</strong> Automatic pouch filling</span>
                                    </li>
                                    <li className="flex items-start text-slate-700 text-sm font-medium">
                                        <CheckCircle2 className="w-5 h-5 text-green-600 mr-3 shrink-0" />
                                        <span><strong>Sizes:</strong> 180 ml, 500 ml &amp; 1 L pouches</span>
                                    </li>
                                    <li className="flex items-start text-slate-700 text-sm font-medium">
                                        <CheckCircle2 className="w-5 h-5 text-green-600 mr-3 shrink-0" />
                                        <span><strong>Hygiene:</strong> Sanitized filling lines</span>
                                    </li>
                                </ul>
                            </div>
                        </Reveal>
                    </div>
                </section>

                {/* Promo banner strip #2 */}
                <div className="bg-slate-900 text-orange-300 py-3 border-y border-slate-800">
                    <MarqueeBanner
                        reverse
                        speed={26}
                        items={[
                            "गंगा Amrit - शुद्धता का वादा",
                            "Gold • Double Toned • Chai Special",
                            "Now delivering across Chhatarpur",
                        ]}
                    />
                </div>

                {/* Customer testimonials */}
                {/* <Testimonials /> */}

                <CtaBanner />

                {/* FAQ SECTION */}
                <section className="py-16 bg-slate-50 border-t border-slate-100">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        <Reveal>
                            <div className="text-center mb-16">
                                <div className="inline-flex items-center justify-center w-12 h-12 bg-orange-100 text-orange-600 rounded-xl mb-4">
                                    <HelpCircle className="w-6 h-6" />
                                </div>
                                <h2 className="text-3xl font-extrabold text-slate-900">Quick Questions</h2>
                                <p className="text-slate-600 mt-4">A few things people usually ask us.</p>
                            </div>
                        </Reveal>

                        <Reveal delay={0.1} className="space-y-4">
                            <div>
                                <details className="group bg-white rounded-md border border-slate-200 open:border-orange-400 transition-all">
                                    <summary className="flex cursor-pointer items-center justify-between p-6 text-slate-900 font-bold text-lg list-none [&::-webkit-details-marker]:hidden">
                                        <span>Which milk products do you offer?</span>
                                        <ChevronDown className="w-5 h-5 text-orange-500 transition-transform group-open:rotate-180" />
                                    </summary>
                                    <div className="px-6 pb-6 text-slate-600 leading-relaxed border-t border-slate-100 pt-4">
                                        Gold (Full Cream), Chai Special, and Double Toned Milk. See our Products page for Fat% and SNF% details.
                                    </div>
                                </details>

                                <details className="group bg-white rounded-2xl border border-slate-200 open:border-orange-400 transition-all">
                                    <summary className="flex cursor-pointer items-center justify-between p-6 text-slate-900 font-bold text-lg list-none [&::-webkit-details-marker]:hidden">
                                        <span>Is Ganga Amrit FSSAI licensed and GST registered?</span>
                                        <ChevronDown className="w-5 h-5 text-orange-500 transition-transform group-open:rotate-180" />
                                    </summary>
                                    <div className="px-6 pb-6 text-slate-600 leading-relaxed border-t border-slate-100 pt-4">
                                        Yes, both. See our footer for the license and registration numbers.
                                    </div>
                                </details>

                                <details className="group bg-white rounded-2xl border border-slate-200 open:border-orange-400 transition-all">
                                    <summary className="flex cursor-pointer items-center justify-between p-6 text-slate-900 font-bold text-lg list-none [&::-webkit-details-marker]:hidden">
                                        <span>How can I become a distributor or retailer?</span>
                                        <ChevronDown className="w-5 h-5 text-orange-500 transition-transform group-open:rotate-180" />
                                    </summary>
                                    <div className="px-6 pb-6 text-slate-600 leading-relaxed border-t border-slate-100 pt-4">
                                        Reach out through our Contact page or WhatsApp with your city and expected volume, and our team will get back to you.
                                    </div>
                                </details>
                            </div>
                            <div className="text-center pt-4">
                                <Link href="/faq" className="inline-flex items-center text-orange-600 font-bold hover:text-orange-700 transition-colors group">
                                    See all FAQs
                                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </div>
                        </Reveal>
                    </div>
                </section>

                {/* CTA */}
                <section id="contact" className="py-20 bg-orange-50 relative overflow-hidden border-t border-orange-100">
                    <Reveal className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                        <div>
                            <motion.div
                                animate={{ y: [0, -6, 0] }}
                                transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
                                className="inline-flex items-center justify-center w-20 h-20 bg-orange-600 text-white rounded-full mb-12 shadow-xl shadow-orange-200"
                            >
                                <Milk className="w-10 h-10" />
                            </motion.div>
                            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-8 tracking-tight leading-[1.2]">
                                Let&apos;s bring Ganga Amrit<br />to your shop.
                            </h2>
                            <p className="text-slate-700 text-xl max-w-2xl mx-auto mb-12 leading-relaxed">
                                Interested in stocking our milk or becoming a distributor?{' '}
                                <Link
                                    href="/contact"
                                    className="font-bold text-orange-600 underline underline-offset-4 decoration-orange-300 hover:text-orange-700 hover:decoration-orange-500 transition-colors"
                                >
                                    Contact us
                                </Link>{' '}
                                and we&apos;ll get back to you soon.
                            </p>
                            <Link href="/contact">
                                <motion.span
                                    whileHover={{ scale: 1.04 }}
                                    whileTap={{ scale: 0.97 }}
                                    className="inline-flex flex-col items-center bg-orange-600 text-white hover:bg-orange-700 font-bold px-10 py-5 text-lg rounded-lg transition-colors shadow-xl shadow-orange-600/20 cursor-pointer"
                                >
                                    <span className="inline-flex items-center">Enquiry for Distributor &amp; Agency <ArrowRight className="ml-2 w-5 h-5" /></span>
                                    <span className="text-sm font-medium text-orange-100 mt-1">वितरक और एजेंसी हेतु पूछताछ</span>
                                </motion.span>
                            </Link>
                        </div>
                    </Reveal>
                </section>
            </main>
        </div>
    );
}
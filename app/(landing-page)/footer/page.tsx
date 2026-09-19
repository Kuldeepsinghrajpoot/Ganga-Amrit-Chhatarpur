'use client';

import { BadgeCheck, Facebook, FileCheck2, Home, HelpCircle, Info, Instagram, Milk, Leaf, Mail, MapPin, Phone, Youtube, FileText, ShieldQuestion, Send, Sparkles } from 'lucide-react';
import Link from 'next/link';
import Logo from '../../components/Logo';
import { Reveal } from '../../components/Reveal';
import LicenseBadges from '../../components/LicenseBadges';
import TypewriterText from '../../components/TypewriterText';
import { SITE } from '../../lib/site';

const QUICK_LINKS = [
  { name: 'Home', href: '/', icon: Home },
  { name: 'Our Products', href: '/products', icon: Milk },
  { name: 'About Us', href: '/about', icon: Info },
  { name: 'Contact', href: '/contact', icon: Send },
  { name: 'FAQ', href: '/faq', icon: HelpCircle },
  { name: 'Terms & Conditions', href: '/terms', icon: FileText },
  { name: 'Privacy Policy', href: '/privacy-policy', icon: ShieldQuestion },
];

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 py-16 border-t border-slate-900">
      <Reveal>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 md:gap-8 mb-12">
          <div className="sm:col-span-2 md:col-span-1 md:pr-4 md:border-r md:border-slate-800">
            <div className="flex items-center text-white mb-2">
              <Logo variant="white" className="h-14 w-auto" />
            </div>
            <div className="mb-6 text-orange-400 font-bold text-sm h-5">
              <TypewriterText text={SITE.tagline} speed={110} startDelay={600} />
            </div>
            <p className="max-w-md mb-6 text-sm leading-relaxed text-slate-500">
              {SITE.brandName} is a modern dairy manufacturer processing fresh milk under strict
              quality standards, from our own facility in Chhatarpur, Madhya Pradesh.
            </p>
            <div className="flex items-center gap-3">
              <a
                href={SITE.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-9 h-9 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center hover:bg-blue-600 hover:border-blue-600 hover:text-white transition-colors text-blue-400"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href={SITE.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center hover:bg-pink-600 hover:border-pink-600 hover:text-white transition-colors text-pink-400"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={SITE.social.youtube}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="w-9 h-9 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center hover:bg-red-600 hover:border-red-600 hover:text-white transition-colors text-red-400"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div className="md:px-4 md:border-r md:border-slate-800">
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Quick Links</h4>
            <ul className="space-y-3 text-sm font-medium">
              {QUICK_LINKS.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="flex items-center gap-2.5 hover:text-orange-400 transition-colors">
                    <l.icon className="w-4 h-4 shrink-0" />
                    {l.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:px-4 md:border-r md:border-slate-800">
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Accreditations</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li className="flex items-center"><FileCheck2 className="w-4 h-4 mr-3 text-blue-400" /> GST Registered</li>
              <li className="flex items-center"><BadgeCheck className="w-4 h-4 mr-3 text-green-400" /> FSSAI Licensed</li>
              <li className="flex items-center"><Leaf className="w-4 h-4 mr-3 text-teal-400" /> Hygiene Standards</li>
            </ul>
          </div>

          <div className="md:pl-4">
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Contact HQ</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start group">
                <MapPin className="w-5 h-5 mr-3 text-slate-600 group-hover:text-orange-500 transition-colors shrink-0" />
                <span className="group-hover:text-slate-300 transition-colors">
                  {SITE.address.line1},<br />{SITE.address.line2},<br />{SITE.address.line3}
                </span>
              </li>
              <li className="flex items-center group">
                <Phone className="w-5 h-5 mr-3 text-slate-600 group-hover:text-orange-500 transition-colors shrink-0" />
                <a href={`tel:${SITE.phoneTel}`} className="group-hover:text-slate-300 transition-colors">
                  {SITE.phoneDisplay}
                </a>
              </li>
              <li className="flex items-center group">
                <Mail className="w-5 h-5 mr-3 text-slate-600 group-hover:text-orange-500 transition-colors shrink-0" />
                <a href={`mailto:${SITE.email}`} className="group-hover:text-slate-300 transition-colors break-all">
                  {SITE.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-10 border-b border-slate-800">
          <LicenseBadges dark className="justify-center" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 text-xs font-medium tracking-wide text-center text-slate-600 space-y-4">
          <p>© {new Date().getFullYear()} {SITE.brandName}. All rights reserved.</p>
          <a
            href="https://lexicalsoftware.in"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 bg-slate-900 border border-slate-700 hover:border-orange-500 rounded-full px-4 py-2 text-slate-300 hover:text-orange-400 transition-colors"
          >
            <Sparkles className="w-3.5 h-3.5 text-orange-400" />
            Website created by <span className="font-bold text-white">Lexical Software</span>
          </a>
        </div>
      </Reveal>
    </footer>
  );
}

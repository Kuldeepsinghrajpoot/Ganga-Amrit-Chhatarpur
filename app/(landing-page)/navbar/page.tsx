'use client';

import { ArrowRight, Menu, X, Home, Package, Info} from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Logo from '../../components/Logo';

const Navbar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const isActive = (path: string) => pathname === path;

  const navLinks = [
    { name: 'Home', href: '/', icon: <Home className="w-3.5 h-3.5" /> },
    { name: 'Products', href: '/products', icon: <Package className="w-3.5 h-3.5" /> },
    { name: 'About Us', href: '/about', icon: <Info className="w-3.5 h-3.5" /> },
  ];

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-xl shadow-md border-b border-slate-100'
          : 'bg-white/80 backdrop-blur-xl border-b border-gray-100'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">

          {/* Logo */}
          <Link href="/">
            <motion.div
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="flex-shrink-0 flex items-center gap-3 cursor-pointer"
            >
              <Logo className="h-10 w-10 mr-3 drop-shadow-sm" />
              <span className="font-black text-xl tracking-tighter text-slate-900">
                Ganga Amrit<span className="text-orange-600">.</span>
              </span>
              <Logo className="h-14 w-auto object-contain drop-shadow-sm" />
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-sm transition-all border ${
                  isActive(link.href)
                    ? 'text-blue-700 bg-blue-50 border-blue-100 font-bold'
                    : 'text-slate-500 hover:text-slate-900 hover:bg-slate-50 border-transparent font-medium'
                }`}
              >
                {link.icon}
                {link.name}
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:block">
            <Link href="/contact">
              <motion.span
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="group bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 rounded-lg text-sm font-bold transition-all duration-300 shadow-md hover:shadow-blue-500/25 flex items-center cursor-pointer"
              >
                B2B Inquiries
                <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </motion.span>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            onClick={() => setIsOpen((v) => !v)}
            className="md:hidden inline-flex items-center justify-center p-2 rounded-lg text-slate-700 hover:bg-slate-100 transition-colors"
            aria-label="Toggle navigation menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="md:hidden overflow-hidden border-t border-gray-100 bg-white"
          >
            <div className="px-4 sm:px-6 lg:px-8 py-4 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`flex items-center gap-2.5 px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                    isActive(link.href)
                      ? 'text-blue-700 bg-blue-50'
                      : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                  }`}
                >
                  <span className={isActive(link.href) ? 'text-blue-600' : 'text-slate-400'}>
                    {link.icon}
                  </span>
                  {link.name}
                </Link>
              ))}
              <Link
                href="/contact"
                className="flex items-center justify-center mt-3 bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 rounded-lg text-sm font-bold transition-all"
              >
                B2B Inquiries <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;

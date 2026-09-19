'use client';

import { ArrowRight, ArrowUpRight, Camera, Home, Info, Menu, Milk, X } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from 'framer-motion';
import Logo from '../../components/Logo';

const Navbar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [prevPathname, setPrevPathname] = useState(pathname);
  const [scrolled, setScrolled] = useState(false);

  // Close the mobile menu on route change - adjusting state during render
  // (React's recommended pattern) instead of a useEffect, which avoids an
  // extra cascading render.
  if (pathname !== prevPathname) {
    setPrevPathname(pathname);
    setIsOpen(false);
  }

  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, 'change', (y) => {
    setScrolled(y > 12);
  });

  const isActive = (path: string) => pathname === path;

  const navLinks = [
    { name: 'Home', href: '/', icon: Home },
    { name: 'Products', href: '/products', icon: Milk },
    { name: 'About Us', href: '/about', icon: Info },
    { name: 'Gallery', href: '/#factory-gallery', icon: Camera },
  ];

  return (
    <nav
      className={`sticky top-0 z-50 w-full backdrop-blur-xl border-b transition-colors duration-300 ${
        scrolled ? 'bg-white/90 border-gray-200 shadow-sm' : 'bg-white/35 border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link href="/">
            <motion.div
              initial={{ opacity: 0, x: -12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="relative flex-shrink-0 flex items-center group cursor-pointer"
            >
              <motion.span
                className="absolute -inset-2 rounded-full bg-orange-300/40 blur-lg -z-10"
                animate={{ opacity: [0.35, 0.7, 0.35] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              />
              <Logo className="h-10 w-auto drop-shadow-sm" />
            </motion.div>
          </Link>

          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`group relative px-4 py-2 text-sm transition-colors ${
                    isActive(link.href)
                      ? 'text-orange-700 font-bold'
                      : 'text-slate-500 hover:text-slate-900 font-medium'
                  }`}
                >
                  <span className="inline-flex items-center gap-1.5">
                    <link.icon className="w-4 h-4" />
                    {link.name}
                    <ArrowUpRight
                      className={`w-3.5 h-3.5 transition-all duration-300 ${
                        isActive(link.href)
                          ? 'opacity-100 translate-x-0 translate-y-0'
                          : 'opacity-0 -translate-x-1 translate-y-1 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0'
                      }`}
                    />
                  </span>
                  {isActive(link.href) && (
                    <motion.span
                      layoutId="navbar-active-underline"
                      className="absolute left-3 right-3 -bottom-0.5 h-0.5 rounded-full bg-orange-600"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  {!isActive(link.href) && (
                    <span className="absolute left-3 right-3 -bottom-0.5 h-0.5 rounded-full bg-slate-300 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" />
                  )}
                </Link>
              ))}
            </div>
          </div>

          <div className="hidden md:block">
            <Link href="/contact">
              <motion.span
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="group bg-slate-900 hover:bg-orange-600 text-white px-6 py-3 rounded-lg text-sm font-bold transition-all duration-300 shadow-md hover:shadow-orange-500/25 flex items-center cursor-pointer"
              >
                B2B Inquiries
                <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </motion.span>
            </Link>
          </div>

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
                      ? 'text-orange-700 bg-orange-50'
                      : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                  }`}
                >
                  <link.icon className="w-4 h-4" />
                  {link.name}
                </Link>
              ))}
              <Link
                href="/contact"
                className="flex items-center justify-center mt-3 bg-slate-900 hover:bg-orange-600 text-white px-6 py-3 rounded-lg text-sm font-bold transition-all"
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
"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Sun, Moon, Menu, X } from "lucide-react";
import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const currentTheme = theme === 'system' ? systemTheme : theme;
  const isDark = currentTheme === 'dark';

  // 🚀 在这里加上了“服务报价”的专属链接
  const navLinks = [
    { name: "核心服务", href: "/services" },
    { name: "AI 智能体", href: "/services/ai-agent" },
    { name: "案例展示", href: "/cases" },
    { name: "服务报价", href: "/pricing" }, 
    { name: "专家支持", href: "/services/tech-support" },
    { name: "技术专栏", href: "/blog" },
    { name: "关于我们", href: "/about" },
  ];

  return (
    <nav className="relative z-50 max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
      <Link href="/" className="flex items-center gap-2 group z-50">
        <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center font-bold text-white italic group-hover:bg-blue-500 transition-colors">F</div>
        <span className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
          霏乐科技 <span className="text-blue-600 dark:text-blue-500 text-sm font-mono uppercase">Finer</span>
        </span>
      </Link>

      <div className="hidden md:flex items-center space-x-6 lg:space-x-8 text-sm font-medium text-gray-600 dark:text-gray-400">
        {navLinks.map((link, index) => (
          <Link key={index} href={link.href} className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
            {link.name}
          </Link>
        ))}
      </div>
      
      <div className="flex items-center gap-4 z-50">
        {mounted && (
          <button 
            onClick={() => setTheme(isDark ? 'light' : 'dark')}
            className="p-2 rounded-full bg-gray-100 dark:bg-white/10 hover:bg-gray-200 dark:hover:bg-white/20 text-gray-700 dark:text-gray-300 transition-all"
            aria-label="Toggle Dark Mode"
          >
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        )}

        <Link href="/#contact" className="hidden md:block px-5 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-full text-sm font-medium transition-all shadow-lg shadow-blue-500/30 hover:-translate-y-0.5">
          开始咨询
        </Link>

        <button 
          className="md:hidden p-2 text-gray-700 dark:text-gray-300"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="absolute top-[80px] left-0 w-full bg-white/95 dark:bg-[#050505]/95 backdrop-blur-xl border-b border-gray-200 dark:border-white/10 shadow-2xl flex flex-col md:hidden z-40"
          >
            <div className="flex flex-col px-6 py-8 space-y-6">
              {navLinks.map((link, index) => (
                <Link 
                  key={index} 
                  href={link.href} 
                  className="text-lg font-bold text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 border-b border-gray-100 dark:border-white/5 pb-4"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <Link 
                href="/#contact" 
                className="w-full text-center px-6 py-4 bg-blue-600 text-white rounded-xl font-bold mt-4"
                onClick={() => setIsOpen(false)}
              >
                立即咨询专家
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
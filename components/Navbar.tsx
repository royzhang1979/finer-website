"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Sun, Moon, Menu, X } from "lucide-react";
import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  // 控制手机端菜单的开关状态
  const [isOpen, setIsOpen] = useState(false);
  
  // 主题切换逻辑
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const currentTheme = theme === 'system' ? systemTheme : theme;
  const isDark = currentTheme === 'dark';

  // 统一定义导航链接，方便以后修改
  const navLinks = [
    { name: "AI 智能体", href: "/services/ai-agent" },
    { name: "核心服务", href: "/services" },
    { name: "案例展示", href: "/cases" },
    { name: "专家支持", href: "/services/tech-support" },
    { name: "关于我们", href: "/about" },
  ];

  return (
    <nav className="relative z-50 max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
      {/* 1. 左侧 Logo 区 (电脑和手机都显示) */}
      <Link href="/" className="flex items-center gap-2 group z-50">
        <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center font-bold text-white italic group-hover:bg-blue-500 transition-colors">F</div>
        <span className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
          霏乐科技 <span className="text-blue-600 dark:text-blue-500 text-sm font-mono uppercase">Finer</span>
        </span>
      </Link>

      {/* 2. 中间菜单区 (仅电脑端显示) */}
      <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-gray-600 dark:text-gray-400">
        {navLinks.map((link, index) => (
          <Link key={index} href={link.href} className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
            {link.name}
          </Link>
        ))}
      </div>
      
      {/* 3. 右侧操作区 (电脑端显示按钮，手机端显示汉堡菜单) */}
      <div className="flex items-center gap-4 z-50">
        {/* 深浅色切换按钮 (所有设备都显示) */}
        {mounted && (
          <button 
            onClick={() => setTheme(isDark ? 'light' : 'dark')}
            className="p-2 rounded-full bg-gray-100 dark:bg-white/10 hover:bg-gray-200 dark:hover:bg-white/20 text-gray-700 dark:text-gray-300 transition-all"
            aria-label="Toggle Dark Mode"
          >
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        )}

        {/* 电脑端咨询按钮 */}
        <Link href="/#contact" className="hidden md:block px-5 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-full text-sm font-medium transition-all shadow-lg shadow-blue-500/30 hover:-translate-y-0.5">
          开始咨询
        </Link>

        {/* 🚀 手机端汉堡菜单按钮 (仅手机端显示 md:hidden) */}
        <button 
          className="md:hidden p-2 text-gray-700 dark:text-gray-300"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* 4. 🚀 手机端下拉菜单 (带平滑动画) */}
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
                  onClick={() => setIsOpen(false)} // 点击链接后自动关闭菜单
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
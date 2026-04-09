"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <nav className="flex items-center justify-between p-6 max-w-7xl mx-auto relative z-50">
      <Link href="/" className="flex items-center gap-2">
        <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center font-bold text-white italic">F</div>
        <span className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">霏乐科技 <span className="text-blue-500 text-sm font-mono uppercase">Finer</span></span>
      </Link>
      
    <div className="hidden md:flex space-x-8 text-sm font-medium text-gray-600 dark:text-gray-400">
        <Link href="/services/ai-agent" className="hover:text-black dark:hover:text-white transition-colors">AI 智能体</Link>
        <Link href="/services" className="hover:text-black dark:hover:text-white transition-colors">核心服务</Link>
          <Link href="/services/tech-support" className="hover:text-black dark:hover:text-white transition-colors">专家支持</Link>
        <Link href="/cases" className="hover:text-black dark:hover:text-white transition-colors">案例展示</Link>
      
        <Link href="/about" className="hover:text-black dark:hover:text-white transition-colors">关于我们</Link>
      </div>
      
      <div className="flex items-center gap-4">
        <button 
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="p-2 rounded-full bg-gray-200 dark:bg-white/10 hover:bg-gray-300 dark:hover:bg-white/20 text-gray-700 dark:text-gray-300 transition-all"
        >
          {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
        </button>
        <Link href="/#contact" className="px-5 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-full text-sm font-medium transition-all shadow-lg shadow-blue-500/30">
          开始咨询
        </Link>
      </div>
    </nav>
  );
}
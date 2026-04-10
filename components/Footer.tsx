"use client";
import { Mail } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-black border-t border-gray-200 dark:border-white/10 pt-16 pb-8 relative z-10 transition-colors duration-500">
      {/* 🚀 这里的网格从 4 列改成了 5 列，给业务列表留出更宽的空间 */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-5 gap-8 mb-12">
        
        {/* 左侧公司简介 (占 2 列) */}
        <div className="md:col-span-2 space-y-4 pr-4">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-6 h-6 bg-blue-600 rounded flex items-center justify-center font-bold text-white italic text-xs">F</div>
            <span className="text-lg font-bold tracking-tight text-gray-900 dark:text-white">霏乐科技 <span className="text-blue-600 dark:text-blue-500 text-xs font-mono uppercase">Finer Tech</span></span>
          </div>
          <p className="text-gray-600 dark:text-gray-500 text-sm leading-relaxed max-w-sm">
            用前沿的数字全栈架构与二十年沉淀的硬核底层维保经验，为企业数字化出海与转型提供坚实的底座保障。
          </p>
        </div>
        
        {/* 🚀 核心业务 (占 2 列，内部改为 grid-cols-2 并排两列) */}
        <div className="md:col-span-2">
          <h4 className="font-bold mb-4 text-gray-900 dark:text-gray-200">核心业务</h4>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-3 text-sm text-gray-600 dark:text-gray-500">
            <li><Link href="/services/web" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">全栈门户与官网建设</Link></li>
            <li><Link href="/services/visual" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">商业级数字视觉工程</Link></li>
            <li><Link href="/services/low-code" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">低代码敏捷业务中台</Link></li>
            <li><Link href="/services/network" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">高可用安全网络基建</Link></li>
            <li><Link href="/services/ai-agent" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">私有化 AI 智能体部署</Link></li>
            <li><Link href="/services/tech-support" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">硬件运维与技术支撑</Link></li>
          </ul>
        </div>
        
        {/* 联系我们 (占 1 列) */}
        <div className="md:col-span-1">
          <h4 className="font-bold mb-4 text-gray-900 dark:text-gray-200">联系我们</h4>
          <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-500">
            <li className="flex items-center gap-2"><Mail size={14}/> contact@finer.net.cn</li>
            <li className="flex items-center gap-2">地址：中国 · 石家庄</li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 border-t border-gray-200 dark:border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 dark:text-gray-600">
        <p>© {new Date().getFullYear()} 霏乐科技有限公司 (Finer Technology Co., Ltd.) 保留所有权利。</p>
        <div className="mt-4 md:mt-0 flex space-x-4">
          <a href="https://beian.miit.gov.cn/" target="_blank" rel="noreferrer" className="hover:text-gray-900 dark:hover:text-gray-400 transition-colors">
            冀ICP备XXXXXX号-1
          </a>
          <Link href="/privacy" className="hover:text-gray-900 dark:hover:text-gray-400 transition-colors">隐私政策</Link>
          <Link href="/terms" className="hover:text-gray-900 dark:hover:text-gray-400 transition-colors">服务条款</Link>
       </div>
      </div>
    </footer>
  );
}
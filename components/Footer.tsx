"use client";
import { Mail } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-black border-t border-gray-200 dark:border-white/10 pt-16 pb-8 relative z-10 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
        <div className="md:col-span-2 space-y-4">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-6 h-6 bg-blue-600 rounded flex items-center justify-center font-bold text-white italic text-xs">F</div>
            <span className="text-lg font-bold tracking-tight text-gray-900 dark:text-white">霏乐科技 <span className="text-blue-600 dark:text-blue-500 text-xs font-mono uppercase">Finer Tech</span></span>
          </div>
          <p className="text-gray-600 dark:text-gray-500 text-sm leading-relaxed max-w-sm">
            用前沿的私有化 AI 算力与二十年沉淀的硬核底层架构，为企业数字化转型提供坚实的数字底座保障。
          </p>
        </div>
        <div>
          <h4 className="font-bold mb-4 text-gray-900 dark:text-gray-200">核心业务</h4>
          <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-500">
            <li><a href="/services/ai-agent" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">私有化 AI 智能体</a></li>
            <li><a href="/services/low-code" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">低代码业务中台</a></li>
            <li><a href="/services/network" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">企业级网络基建</a></li>
            <li><a href="/services/tech-support" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">网站建设及技术支撑服务</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-4 text-gray-900 dark:text-gray-200">联系我们</h4>
          <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-500">
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
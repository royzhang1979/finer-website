"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Cpu, Globe, Rocket, Eye, Briefcase, ShieldCheck, Mail, ChevronRight, Sun, Moon } from "lucide-react";
import Image from "next/image";

export default function Home() {
  // 1. 设置主题状态，默认深色（因为科技感更强）
  const [isDark, setIsDark] = useState(true);

  // 2. 避免客户端和服务器渲染不匹配的小技巧
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    // 这里的 isDark ? "dark" : "" 是控制全局深浅色的核心开关
    <div className={isDark ? "dark" : ""}>
      {/* 所有的颜色都增加了针对浅色的配置，比如 bg-white dark:bg-[#050505] */}
      <main className="min-h-screen bg-gray-50 dark:bg-[#050505] text-gray-900 dark:text-white overflow-hidden selection:bg-blue-500/30 transition-colors duration-500">
        
        {/* 科技感背景网格 (自适应深浅色) */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

        {/* 顶部导航 */}
        <nav className="flex items-center justify-between p-6 max-w-7xl mx-auto relative z-10">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center font-bold text-white italic">F</div>
            <span className="text-xl font-bold tracking-tight">霏乐科技 <span className="text-blue-500 text-sm font-mono">FINER</span></span>
          </div>
          <div className="hidden md:flex space-x-8 text-sm font-medium text-gray-600 dark:text-gray-400">
            <a href="#ai-agent" className="hover:text-black dark:hover:text-white transition-colors">AI 智能体</a>
            <a href="#solutions" className="hover:text-black dark:hover:text-white transition-colors">行业解决方案</a>
            <a href="#about" className="hover:text-black dark:hover:text-white transition-colors">关于我们</a>
          </div>
          
          <div className="flex items-center gap-4">
            {/* 主题切换按钮 */}
            <button 
              onClick={() => setIsDark(!isDark)}
              className="p-2 rounded-full bg-gray-200 dark:bg-white/10 hover:bg-gray-300 dark:hover:bg-white/20 text-gray-700 dark:text-gray-300 transition-all"
              aria-label="Toggle Dark Mode"
            >
              {isDark ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button className="px-5 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-full text-sm font-medium transition-all shadow-lg shadow-blue-500/30">
              开始咨询
            </button>
          </div>
        </nav>

        {/* 主视觉区 */}
        <section className="relative pt-24 pb-20 px-4 text-center z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-1.5 mb-6 text-xs font-medium tracking-wider text-blue-600 dark:text-blue-400 uppercase bg-blue-100 dark:bg-blue-400/10 border border-blue-200 dark:border-blue-400/20 rounded-full">
              Future-Ready Intelligence
            </span>
            <h1 className="text-5xl md:text-8xl font-black mb-8 tracking-tighter">
              重构<span className="bg-clip-text text-transparent bg-gradient-to-b from-gray-900 to-gray-500 dark:from-white dark:to-gray-500">数字生产力</span>
            </h1>
            <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-400 text-lg md:text-xl leading-relaxed mb-12">
              霏乐科技致力于为企业提供私有化 AI 智能体部署、低代码业务架构及高性能网络基建，让您的业务在智能时代实现跃迁。
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <button className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-bold shadow-lg shadow-blue-600/20 transition-all hover:-translate-y-1">
                获取方案
              </button>
              <button className="px-8 py-4 bg-white dark:bg-white/5 border border-gray-300 dark:border-white/10 hover:bg-gray-50 dark:hover:bg-white/10 text-gray-900 dark:text-white rounded-xl font-bold transition-all shadow-sm">
                查看案例
              </button>
            </div>
          </motion.div>
        </section>

        {/* 特色卡片区域 */}
        <section id="ai-agent" className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 px-6 pb-20 relative z-10">
          {[
            { icon: <Cpu />, title: "AI 智能体", desc: "本地化私有部署，确保核心数据绝对不出域。" },
            { icon: <Rocket />, title: "敏捷系统", desc: "低代码快速交付，直击业务痛点，告别漫长开发。" },
            { icon: <Globe />, title: "网络基建", desc: "高可用底层架构，赋能全球跨国业务极速流转。" }
          ].map((item, idx) => (
            <div key={idx} className="p-8 bg-white dark:bg-white/[0.02] border border-gray-200 dark:border-white/5 rounded-2xl hover:border-blue-500/50 dark:hover:border-blue-500/30 transition-all group cursor-pointer shadow-sm dark:shadow-none hover:shadow-md">
              <div className="text-blue-600 dark:text-blue-500 mb-4 group-hover:scale-110 transition-transform">{item.icon}</div>
              <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{item.title}</h3>
              <p className="text-gray-600 dark:text-gray-500 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </section>
        
        {/* 核心运营中心展示区 */}
        <section className="max-w-7xl mx-auto px-6 py-12 space-y-12 relative z-10">
          <div className="space-y-4 text-center">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-500/10 border border-blue-200 dark:border-blue-500/20 text-blue-600 dark:text-blue-400 text-sm font-medium">
                <Eye size={16} /> 核心运营中心
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white">智能与业务的无缝融合</h2>
              <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed max-w-3xl mx-auto">
                将企业级私有化 AI 智能体工作流（节点式本地化处理器）与敏捷的低代码 CRM 业务看板深度打通，为您打造数据绝对安全、敏捷可控的现代化数字基座。
              </p>
          </div>
          
          <div className="w-full aspect-video bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-2xl relative overflow-hidden group hover:border-blue-500/30 transition-colors shadow-2xl shadow-gray-300 dark:shadow-blue-900/20">
              <Image 
                src="/finer_operations_center.png" 
                alt="霏乐科技（FINER）智能运营中心融合可视化"
                fill 
                className="object-cover" 
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" 
              />
          </div>
        </section>

        {/* 行业解决方案与业务实力 */}
        <section id="solutions" className="max-w-7xl mx-auto px-6 py-24 relative z-10 border-t border-gray-200 dark:border-white/5 mt-12">
          <div className="flex flex-col md:flex-row gap-16 items-center">
            <div className="flex-1 space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">立足二十年行业沉淀<br/><span className="text-blue-600 dark:text-blue-500">用前沿算力重塑外贸供应链</span></h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg">
                真正的技术不仅存在于实验室，更应解决真实的商业痛点。我们将深厚的全球供应链管理经验与尖端数字技术结合，为您打破业务瓶颈。
              </p>
              <ul className="space-y-6">
                <li className="flex gap-4">
                  <div className="mt-1 w-10 h-10 rounded-lg bg-blue-100 dark:bg-blue-500/10 flex items-center justify-center shrink-0 border border-blue-200 dark:border-blue-500/20"><Briefcase size={20} className="text-blue-600 dark:text-blue-400"/></div>
                  <div>
                    <h4 className="font-bold text-lg mb-1 text-gray-900 dark:text-white">自动化询盘与大客户管理</h4>
                    <p className="text-gray-600 dark:text-gray-500 text-sm">针对高净值 B2B 客户群，利用 AI 智能体自动解析跨国询盘，生成精准多语种报价，配合专属 CRM 实时追踪商机转化。</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="mt-1 w-10 h-10 rounded-lg bg-purple-100 dark:bg-purple-500/10 flex items-center justify-center shrink-0 border border-purple-200 dark:border-purple-500/20"><ShieldCheck size={20} className="text-purple-600 dark:text-purple-400"/></div>
                  <div>
                    <h4 className="font-bold text-lg mb-1 text-gray-900 dark:text-white">极速订单与柔性履约系统</h4>
                    <p className="text-gray-600 dark:text-gray-500 text-sm">通过低代码平台快速搭建的业务中台，完美适配复杂规格（如多款式、多材质）的商品出口订单流转，确保交期绝对可控。</p>
                  </div>
                </li>
              </ul>
              <button className="flex items-center gap-2 text-blue-600 dark:text-blue-400 font-semibold hover:text-blue-700 dark:hover:text-blue-300 transition-colors">
                深入了解行业解决方案 <ChevronRight size={16} />
              </button>
            </div>
            
            <div className="flex-1 w-full grid grid-cols-2 gap-4">
              <div className="space-y-4 pt-8">
                <div className="bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-2xl p-6 hover:shadow-md transition-shadow">
                  <div className="text-3xl font-black text-gray-900 dark:text-white mb-2">20<span className="text-blue-600 dark:text-blue-500">+</span></div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">年深耕垂直领域供应链积累</div>
                </div>
                <div className="bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-2xl p-6 hover:shadow-md transition-shadow">
                  <div className="text-3xl font-black text-gray-900 dark:text-white mb-2">100<span className="text-blue-600 dark:text-blue-500">%</span></div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">核心业务数据私有化部署保障</div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-blue-50 dark:bg-gradient-to-br dark:from-blue-900/40 dark:to-black border border-blue-200 dark:border-blue-500/30 rounded-2xl p-6 hover:border-blue-400 dark:hover:border-blue-500/60 transition-colors">
                  <div className="text-3xl font-black text-blue-700 dark:text-white mb-2">AI</div>
                  <div className="text-sm text-blue-800/80 dark:text-gray-400">专属智能体 24/7 驱动业务流转</div>
                </div>
                <div className="bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-2xl p-6 hover:shadow-md transition-shadow">
                  <div className="text-3xl font-black text-gray-900 dark:text-white mb-2">7<span className="text-blue-600 dark:text-blue-500">Days</span></div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">低代码核心业务系统敏捷交付</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 标准企业页脚 */}
        <footer id="about" className="bg-white dark:bg-black border-t border-gray-200 dark:border-white/10 pt-16 pb-8 relative z-10 transition-colors duration-500">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="md:col-span-2 space-y-4">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-6 h-6 bg-blue-600 rounded flex items-center justify-center font-bold text-white italic text-xs">F</div>
                <span className="text-lg font-bold tracking-tight text-gray-900 dark:text-white">霏乐科技 <span className="text-blue-600 dark:text-blue-500 text-xs font-mono">FINER TECH</span></span>
              </div>
              <p className="text-gray-600 dark:text-gray-500 text-sm leading-relaxed max-w-sm">
                用前沿的私有化 AI 算力与敏捷低代码架构，为全球化贸易及实业发展提供坚实的数字底座保障。
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-gray-900 dark:text-gray-200">核心业务</h4>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-500">
                <li><a href="#" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">私有化 AI 智能体</a></li>
                <li><a href="#" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">低代码定制 CRM/OA</a></li>
                <li><a href="#" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">全球化网络基建</a></li>
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
              <a href="#" className="hover:text-gray-900 dark:hover:text-gray-400 transition-colors">隐私政策</a>
              <a href="#" className="hover:text-gray-900 dark:hover:text-gray-400 transition-colors">服务条款</a>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
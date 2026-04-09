"use client";
import { motion } from "framer-motion";
import { Cpu, Globe, Rocket } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050505] text-white overflow-hidden selection:bg-blue-500/30">
      {/* 科技感背景网格 */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

      {/* 顶部导航 */}
      <nav className="flex items-center justify-between p-6 max-w-7xl mx-auto relative z-10">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center font-bold italic">F</div>
          <span className="text-xl font-bold tracking-tight">霏乐科技 <span className="text-blue-500 text-sm font-mono">FINER</span></span>
        </div>
        <div className="hidden md:flex space-x-8 text-sm text-gray-400">
          <a href="#" className="hover:text-white transition-colors">AI 智能体</a>
          <a href="#" className="hover:text-white transition-colors">敏捷系统</a>
          <a href="#" className="hover:text-white transition-colors">关于我们</a>
        </div>
        <button className="px-5 py-2 bg-white/5 border border-white/10 hover:bg-white/10 rounded-full text-sm transition-all">
          开始咨询
        </button>
      </nav>

      {/* 主视觉区 */}
      <section className="relative pt-24 pb-20 px-4 text-center z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block px-4 py-1.5 mb-6 text-xs font-medium tracking-wider text-blue-400 uppercase bg-blue-400/10 border border-blue-400/20 rounded-full">
            Future-Ready Intelligence
          </span>
          <h1 className="text-5xl md:text-8xl font-black mb-8 tracking-tighter">
            重构<span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-500">数字生产力</span>
          </h1>
          <p className="max-w-2xl mx-auto text-gray-400 text-lg md:text-xl leading-relaxed mb-12">
            霏乐科技致力于为企业提供私有化 AI 智能体部署、低代码业务架构及高性能网络基建，让您的业务在智能时代实现跃迁。
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <button className="px-8 py-4 bg-blue-600 hover:bg-blue-500 rounded-xl font-bold shadow-lg shadow-blue-600/20 transition-all hover:-translate-y-1">
              获取方案
            </button>
            <button className="px-8 py-4 bg-white/5 border border-white/10 hover:bg-white/10 rounded-xl font-bold transition-all">
              查看案例
            </button>
          </div>
        </motion.div>
      </section>

      {/* 极简特色卡片 */}
      <section className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 px-6 pb-20 relative z-10">
        {[
          { icon: <Cpu />, title: "AI 智能体", desc: "本地化私有部署，确保数据不出域" },
          { icon: <Rocket />, title: "敏捷系统", desc: "低代码快速交付，直击业务痛点" },
          { icon: <Globe />, title: "网络基建", desc: "高可用架构，赋能全球业务流转" }
        ].map((item, idx) => (
          <div key={idx} className="p-8 bg-white/[0.02] border border-white/5 rounded-2xl hover:border-blue-500/30 transition-all group">
            <div className="text-blue-500 mb-4 group-hover:scale-110 transition-transform">{item.icon}</div>
            <h3 className="text-xl font-bold mb-2">{item.title}</h3>
            <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </section>
    </main>
  );
}
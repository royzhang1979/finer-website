"use client";
import { motion } from "framer-motion";
import { BookOpen, PlayCircle, Clock, ArrowRight, Terminal } from "lucide-react";
import Link from "next/link";

const ARTICLES = [
  {
    title: "企业级网络架构：如何通过 QoS 策略彻底解决跨国会议卡顿？",
    category: "硬核网络",
    date: "2026-04-05",
    readTime: "8 分钟阅读",
    summary: "跨国视频会议频繁断线不仅是带宽问题，更可能是骨干路由的流量争抢。本文拆解了如何通过企业级路由器底层刷写与 QoS 精细化调优彻底根治此问题。",
  },
  {
    title: "本地大模型微调实战：在 Mac Mini 上跑通 OpenClaw 智能体",
    category: "AI 算力",
    date: "2026-03-28",
    readTime: "12 分钟阅读",
    summary: "公有云数据泄露频发？教你如何榨干 16G M系列芯片的极致算力，在企业内网完全本地化部署一套能自动处理询盘的私有化 AI。",
  }
];

const VLOGS = [
  {
    title: "【现场实录】7 天极限挑战：用 NocoBase 重构工厂传统 ERP 系统",
    duration: "15:24",
    thumbnail: "bg-blue-900/50" // 以后可以换成真实的视频封面图
  },
  {
    title: "硬核排障记录：RAID 阵列崩溃后的底层十六进制数据提取",
    duration: "08:45",
    thumbnail: "bg-orange-900/50"
  }
];

export default function Blog() {
  return (
    <main className="min-h-screen bg-gray-50 dark:bg-[#050505] text-gray-900 dark:text-white pb-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] z-0 pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-16">
        <div className="mb-20 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-100 dark:bg-cyan-500/10 border border-cyan-200 dark:border-cyan-500/20 text-cyan-600 dark:text-cyan-400 text-sm font-medium">
            <Terminal size={16} /> Finer Tech Journal
          </div>
          <h1 className="text-4xl md:text-6xl font-black tracking-tight">
            技术专栏与 <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">实战 Vlog</span>
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl">
            分享我们在底层硬件架构、私有化 AI 部署及企业级系统开发中的实战经验与硬核技术洞察。
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* 左侧/上侧：技术文章列表 (占 2 列) */}
          <div className="lg:col-span-2 space-y-8">
            <h2 className="text-2xl font-bold flex items-center gap-2 mb-6">
              <BookOpen className="text-blue-500" /> 深度技术长文
            </h2>
            <div className="space-y-6">
              {ARTICLES.map((article, idx) => (
                <div key={idx} className="group p-6 md:p-8 bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-3xl hover:border-blue-500/30 transition-all shadow-sm cursor-pointer">
                  <div className="flex items-center gap-4 text-xs font-bold text-gray-400 dark:text-gray-500 uppercase tracking-wider mb-4">
                    <span className="text-blue-600 dark:text-blue-400">{article.category}</span>
                    <span>•</span>
                    <span className="flex items-center gap-1"><Clock size={14} /> {article.date}</span>
                    <span>•</span>
                    <span>{article.readTime}</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{article.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">{article.summary}</p>
                  <div className="text-blue-600 dark:text-blue-400 font-medium inline-flex items-center gap-2 group-hover:gap-3 transition-all">
                    阅读全文 <ArrowRight size={18} />
                  </div>
                </div>
              ))}
            </div>
            
            {/* 提示信息 */}
            <div className="p-6 border border-dashed border-gray-300 dark:border-white/20 rounded-2xl text-center text-gray-500 dark:text-gray-400 mt-8">
              更多硬核文章正在极客键盘上敲击中...
            </div>
          </div>

          {/* 右侧/下侧：Vlog 视频专区 (占 1 列) */}
          <div className="space-y-8">
            <h2 className="text-2xl font-bold flex items-center gap-2 mb-6">
              <PlayCircle className="text-cyan-500" /> 技术实录 Vlog
            </h2>
            <div className="space-y-6">
              {VLOGS.map((vlog, idx) => (
                <div key={idx} className="group bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-3xl overflow-hidden hover:border-cyan-500/30 transition-all shadow-sm cursor-pointer">
                  <div className={`w-full aspect-video ${vlog.thumbnail} relative flex items-center justify-center group-hover:opacity-90 transition-opacity`}>
                    {/* 模拟播放按钮 */}
                    <div className="w-12 h-12 rounded-full bg-black/50 backdrop-blur flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                      <PlayCircle size={24} className="ml-1" />
                    </div>
                    <div className="absolute bottom-3 right-3 px-2 py-1 bg-black/70 text-white text-xs font-mono rounded">
                      {vlog.duration}
                    </div>
                  </div>
                  <div className="p-5">
                    <h4 className="font-bold text-gray-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors line-clamp-2">
                      {vlog.title}
                    </h4>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="p-6 bg-cyan-50 dark:bg-cyan-500/10 rounded-2xl text-center">
              <p className="text-sm text-cyan-800 dark:text-cyan-200 font-medium mb-3">想要观看最新技术实录？</p>
              <button className="px-6 py-2 bg-cyan-600 hover:bg-cyan-500 text-white rounded-xl text-sm font-bold transition-colors w-full">
                订阅我们的频道
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
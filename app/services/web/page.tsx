// app/services/web/page.tsx
"use client";
import { motion } from "framer-motion";
import { Layout, Globe, Zap, Shield, ArrowLeft, CheckCircle2, Code2, Rocket } from "lucide-react";
import Link from "next/link";

export default function WebDevelopment() {
  return (
    <main className="min-h-screen bg-gray-50 dark:bg-[#050505] text-gray-900 dark:text-white pb-24 relative overflow-hidden transition-colors duration-500">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] z-0 pointer-events-none"></div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 pt-20">
        <Link href="/services" className="inline-flex items-center gap-2 text-pink-600 dark:text-pink-400 hover:underline mb-12 font-bold transition-all hover:-translate-x-1">
          <ArrowLeft size={18} /> 返回核心服务
        </Link>

        {/* 头部区域 */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-100 dark:bg-pink-500/10 border border-pink-200 dark:border-pink-500/20 text-pink-600 dark:text-pink-400 text-sm font-medium mb-6">
            <Layout size={16} /> 现代全栈开发与独立站
          </div>
          <h1 className="text-4xl md:text-6xl font-black mb-6 tracking-tight">
            告别老旧模板<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">打造全球秒开的出海数字门户</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed max-w-3xl">
            在流量极度内卷的时代，您的官网就是跨国业务的“第一张脸”。我们采用硅谷前沿的 Next.js 全栈架构，为您重构极速、高转化、SEO 友好的企业级独立站。
          </p>
        </motion.div>

        {/* 核心痛点与对比 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="p-8 bg-red-50 dark:bg-red-900/10 border border-red-100 dark:border-red-900/30 rounded-3xl">
            <h3 className="text-xl font-bold text-red-700 dark:text-red-400 mb-6 flex items-center gap-2">
              传统外贸建站的致命痛点
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-red-800/80 dark:text-red-300/80"><span className="mt-1">❌</span> 臃肿的 WordPress 模板，海外客户打开需等待 5 秒以上，跳出率极高。</li>
              <li className="flex items-start gap-3 text-red-800/80 dark:text-red-300/80"><span className="mt-1">❌</span> 纯前端渲染导致谷歌爬虫无法抓取核心业务数据，SEO 形同虚设。</li>
              <li className="flex items-start gap-3 text-red-800/80 dark:text-red-300/80"><span className="mt-1">❌</span> 手机端适配粗糙，无法承接来自移动社交媒体的碎片化流量。</li>
            </ul>
          </motion.div>
          
          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="p-8 bg-pink-50 dark:bg-pink-900/10 border border-pink-200 dark:border-pink-500/30 rounded-3xl">
            <h3 className="text-xl font-bold text-pink-700 dark:text-pink-400 mb-6 flex items-center gap-2">
              霏乐科技的极客级重构
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-pink-900/80 dark:text-pink-200/80"><CheckCircle2 className="text-pink-500 shrink-0 mt-0.5" size={20} /> 基于 Vercel/Cloudflare 边缘网络部署，跨国访问毫秒级响应。</li>
              <li className="flex items-start gap-3 text-pink-900/80 dark:text-pink-200/80"><CheckCircle2 className="text-pink-500 shrink-0 mt-0.5" size={20} /> 服务端渲染 (SSR) 架构，出厂自带顶级 SEO 骨架结构。</li>
              <li className="flex items-start gap-3 text-pink-900/80 dark:text-pink-200/80"><CheckCircle2 className="text-pink-500 shrink-0 mt-0.5" size={20} /> 打通 B2B 询盘中台，表单直达邮件与内部 CRM，线索零流失。</li>
            </ul>
          </motion.div>
        </div>

        {/* 技术栈引擎 */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold mb-10 text-center">驱动增长的底层引擎</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: <Zap />, title: "极致性能 (Performance)", desc: "Lighthouse 跑分 95+，打破海外访问的物理延迟束缚。" },
              { icon: <Code2 />, title: "现代代码 (Modern Stack)", desc: "React + Tailwind CSS，拒绝多余代码，保持数字资产的长期可维护性。" },
              { icon: <Globe />, title: "纯静态化 (SSG)", desc: "剥离臃肿的传统数据库，将页面转化为纯静态文件，安全且极速。" },
              { icon: <Shield />, title: "高防架构 (Security)", desc: "天生免疫 SQL 注入与传统 CMS 常见漏洞，保障数据绝对安全。" }
            ].map((item, idx) => (
              <div key={idx} className="p-6 bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-2xl hover:border-pink-500/50 transition-colors">
                <div className="text-pink-500 mb-4">{item.icon}</div>
                <h4 className="font-bold mb-2 text-gray-900 dark:text-white">{item.title}</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 底部行动呼吁 */}
        <div className="bg-pink-600 dark:bg-pink-900 rounded-3xl p-12 text-center text-white relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
          <div className="relative z-10 space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">准备好升级您的全球数字门面了吗？</h2>
            <p className="text-pink-100 text-lg max-w-2xl mx-auto">与我们的架构师聊聊，为您的出海业务量身定制高性能门户方案。</p>
            <Link href="/#contact" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-pink-600 rounded-xl font-bold hover:bg-pink-50 transition-all hover:scale-105">
              <Rocket size={20} /> 获取建站技术评估
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
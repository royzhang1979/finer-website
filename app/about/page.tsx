"use client";
import { motion } from "framer-motion";
import { Terminal, ShieldCheck, Zap, Code2, Server } from "lucide-react";
import Link from "next/link";


export default function About() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-[#050505] text-gray-900 dark:text-white transition-colors duration-500 selection:bg-blue-500/30">
      {/* 科技感背景网格 */}
      <div className="fixed inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none z-0"></div>

      {/* 🚀 调用公共导航栏 */}
  

      <main className="relative z-10 max-w-4xl mx-auto px-6 pb-24 mt-8"> {/* 增加了 top margin，避免内容贴着导航栏 */}
        {/* 头部标题区 */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6 pb-16 border-b border-gray-200 dark:border-white/10"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-500/10 border border-blue-200 dark:border-blue-500/20 text-blue-600 dark:text-blue-400 text-sm font-medium">
            <Terminal size={16} /> Code is Law
          </div>
          <h1 className="text-4xl md:text-6xl font-black tracking-tight">
            我们不造概念，<br />
            <span className="text-blue-600 dark:text-blue-500">只交付极致算力与数字底座。</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed max-w-2xl">
            霏乐科技 (FINER TECH) 是一家由极客驱动的高科技网络公司。我们致力于打破传统 IT 架构的臃肿与数据风险，通过私有化大模型节点与敏捷低代码技术，为企业重构数字生产力。
          </p>
        </motion.div>

        {/* 核心价值观 / 技术实力 */}
        <div className="py-16 space-y-12">
          <h2 className="text-2xl font-bold">支撑我们前行的三大基石：</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* 基石 1：私有化安全 */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="p-8 rounded-2xl bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 rounded-xl bg-purple-100 dark:bg-purple-500/20 flex items-center justify-center text-purple-600 dark:text-purple-400 mb-6">
                <ShieldCheck size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">数据主权与绝对安全</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                在这个数据就是命脉的时代，公有云 AI 往往意味着机密外泄的风险。我们擅长在企业内网本地化部署 AI 智能体，确保每一行核心商业数据物理隔离，绝不出域。
              </p>
            </motion.div>

            {/* 基石 2：极客底层架构 */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="p-8 rounded-2xl bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 rounded-xl bg-blue-100 dark:bg-blue-500/20 flex items-center justify-center text-blue-600 dark:text-blue-400 mb-6">
                <Server size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">极客级的底层掌控力</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                从复杂的跨国路由节点配置，到基于前沿架构的本地大模型微调，我们拥有从网络基建到应用层开发的全局掌控能力，为业务流转提供坚不可摧的底层支撑。
              </p>
            </motion.div>

            {/* 基石 3：敏捷交付 */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="p-8 rounded-2xl bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 shadow-sm md:col-span-2 hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 rounded-xl bg-green-100 dark:bg-green-500/20 flex items-center justify-center text-green-600 dark:text-green-400 mb-6">
                <Zap size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">抛弃冗长，极致敏捷</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                我们全面引入 NocoBase 等现代化低代码底层，将传统按“月”计算的开发周期压缩至按“天”交付。像搭积木一样为您构建定制化的核心业务中台，并能随着您的业务发展随时无缝扩展。
              </p>
            </motion.div>
          </div>
        </div>

        {/* 底部 CTA */}
        <div className="mt-8 text-center p-12 rounded-3xl bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10">
          <Code2 size={32} className="mx-auto mb-4 text-blue-600 dark:text-blue-500" />
          <h2 className="text-2xl font-bold mb-4">准备好重构您的业务系统了吗？</h2>
          <Link href="/#contact" className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-bold transition-all shadow-lg shadow-blue-500/20">
            联系技术专家
          </Link>
        </div>
      </main>
    </div>
  );
}
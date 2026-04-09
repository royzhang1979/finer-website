"use client";
import { motion } from "framer-motion";
import { Bot, Lock, Cpu, ArrowLeft } from "lucide-react";
import Link from "next/link";


export default function AiAgent() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-[#050505] text-gray-900 dark:text-white transition-colors duration-500">
      <div className="fixed inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] z-0"></div>
     
      <main className="relative z-10 max-w-4xl mx-auto px-6 pb-24 mt-8">
        <Link href="/services" className="inline-flex items-center gap-2 text-gray-500 hover:text-blue-600 mb-12 transition-colors font-medium">
          <ArrowLeft size={18} /> 返回核心服务
        </Link>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-6 mb-16">
          <div className="w-16 h-16 rounded-2xl bg-blue-100 dark:bg-blue-500/20 flex items-center justify-center text-blue-600 dark:text-blue-400 mb-6">
            <Bot size={32} />
          </div>
          <h1 className="text-4xl md:text-5xl font-black">企业级私有化 AI 智能体部署</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
            将大语言模型的强大算力封存在您的企业内网。我们专注于基于 OpenClaw 等前沿架构的本地化节点搭建，让 AI 为您所用，绝不窥探您的商业机密。
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-8 bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-2xl">
            <Lock className="text-blue-600 dark:text-blue-500 mb-4" size={28} />
            <h3 className="text-xl font-bold mb-3">100% 数据物理隔离</h3>
            <p className="text-gray-600 dark:text-gray-400">拒绝公有云 API 的数据传输风险。模型运行在您的专属硬件上，所有的分析、决策、生成都在防火墙内完成，确保核心资产绝对安全。</p>
          </div>
          <div className="p-8 bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-2xl">
            <Cpu className="text-blue-600 dark:text-blue-500 mb-4" size={28} />
            <h3 className="text-xl font-bold mb-3">极致的边缘硬件调优</h3>
            <p className="text-gray-600 dark:text-gray-400">从独立 GPU 服务器到 Mac Mini 边缘节点，我们拥有深厚的底层硬件显存与内存（如 16GB RAM 极限压榨）优化经验，保障智能体全天候高效运转。</p>
          </div>
        </div>
      </main>
    </div>
  );
}
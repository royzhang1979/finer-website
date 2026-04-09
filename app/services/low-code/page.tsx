"use client";
import { motion } from "framer-motion";
import { Layers, Zap, Database, ArrowLeft } from "lucide-react";
import Link from "next/link";


export default function LowCode() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-[#050505] text-gray-900 dark:text-white transition-colors duration-500">
      <div className="fixed inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] z-0"></div>
     
      <main className="relative z-10 max-w-4xl mx-auto px-6 pb-24 mt-8">
        <Link href="/services" className="inline-flex items-center gap-2 text-gray-500 hover:text-green-600 mb-12 transition-colors font-medium">
          <ArrowLeft size={18} /> 返回核心服务
        </Link>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-6 mb-16">
          <div className="w-16 h-16 rounded-2xl bg-green-100 dark:bg-green-500/20 flex items-center justify-center text-green-600 dark:text-green-400 mb-6">
            <Layers size={32} />
          </div>
          <h1 className="text-4xl md:text-5xl font-black">低代码敏捷业务中台</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
            告别传统软件开发的漫长等待。我们通过 NocoBase 等企业级低代码引擎，为您将业务逻辑快速转化为可落地的交互系统。
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-8 bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-2xl">
            <Zap className="text-green-600 dark:text-green-500 mb-4" size={28} />
            <h3 className="text-xl font-bold mb-3">按天计算的交付速度</h3>
            <p className="text-gray-600 dark:text-gray-400">利用数据驱动的底层架构，像搭积木一样快速构建 OA、CRM、订单流转等复杂中后台应用，极大缩短数字化项目的落地周期。</p>
          </div>
          <div className="p-8 bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-2xl">
            <Database className="text-green-600 dark:text-green-500 mb-4" size={28} />
            <h3 className="text-xl font-bold mb-3">强大的数据模型掌控力</h3>
            <p className="text-gray-600 dark:text-gray-400">系统不仅交付快，底子更稳。我们擅长设计复杂的关系型数据结构，支持精细化的 RBAC 权限管控与定制化 API 接口生成。</p>
          </div>
        </div>
      </main>
    </div>
  );
}
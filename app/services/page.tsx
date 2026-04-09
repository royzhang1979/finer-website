"use client";
import { motion } from "framer-motion";
import { Bot, Layers, Network, ArrowRight, CheckCircle2, Wrench } from "lucide-react";
import Link from "next/link";


export default function Services() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-[#050505] text-gray-900 dark:text-white transition-colors duration-500 selection:bg-blue-500/30">
      <div className="fixed inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none z-0"></div>

      

      <main className="relative z-10 max-w-7xl mx-auto px-6 pb-24 mt-8">
        {/* 头部标题区 */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-6">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-black tracking-tight"
          >
            全域技术栈覆盖<br />
            <span className="text-blue-600 dark:text-blue-500">从物理底层到人工智能</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed"
          >
            我们不仅提供前沿的 AI 与低代码方案，更凭借二十年的行业深耕，为您解决从硬件架构、安全网络到软件开发的各类复杂技术挑战。
          </motion.p>
        </div>

        {/* 1. AI 智能体 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-6">
            <div className="w-14 h-14 rounded-2xl bg-blue-100 dark:bg-blue-500/20 flex items-center justify-center text-blue-600 dark:text-blue-400">
              <Bot size={28} />
            </div>
            <h2 className="text-3xl font-bold">企业级私有化 AI 智能体</h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">基于 OpenClaw 架构，在本地高性能硬件（如 Mac Mini）上部署完全隔离的 AI 工作流。</p>
            <Link href="/services/ai-agent" className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 font-bold hover:gap-3 transition-all">
              查看 AI 部署详情 <ArrowRight size={18} />
            </Link>
          </motion.div>
          <div className="h-64 lg:h-80 rounded-3xl bg-blue-50/50 dark:bg-white/5 border border-dashed border-blue-200 dark:border-blue-500/20 flex items-center justify-center">
             <Bot size={100} className="text-blue-200 dark:text-blue-500/20" />
          </div>
        </div>

        {/* 2. 敏捷业务中台 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <div className="order-2 lg:order-1 h-64 lg:h-80 rounded-3xl bg-green-50/50 dark:bg-white/5 border border-dashed border-green-200 dark:border-green-500/20 flex items-center justify-center">
            <Layers size={100} className="text-green-200 dark:text-green-500/20" />
          </div>
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="order-1 lg:order-2 space-y-6">
            <div className="w-14 h-14 rounded-2xl bg-green-100 dark:bg-green-500/20 flex items-center justify-center text-green-600 dark:text-green-400">
              <Layers size={28} />
            </div>
            <h2 className="text-3xl font-bold">低代码敏捷业务中台</h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">利用 NocoBase 引擎极速交付定制化 CRM、OA 系统，支持企业级二次开发。</p>
            <Link href="/services/low-code" className="inline-flex items-center gap-2 text-green-600 dark:text-green-400 font-bold hover:gap-3 transition-all">
              查看低代码平台详情 <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>

        {/* 3. 网络基建 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-6">
            <div className="w-14 h-14 rounded-2xl bg-purple-100 dark:bg-purple-500/20 flex items-center justify-center text-purple-600 dark:text-purple-400">
              <Network size={28} />
            </div>
            <h2 className="text-3xl font-bold">高可用安全网络基建</h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">提供硅谷节点管理、企业级路由固件调优及安全代理隧道方案。</p>
            <Link href="/services/network" className="inline-flex items-center gap-2 text-purple-600 dark:text-purple-400 font-bold hover:gap-3 transition-all">
              查看网络基建详情 <ArrowRight size={18} />
            </Link>
          </motion.div>
          <div className="h-64 lg:h-80 rounded-3xl bg-purple-50/50 dark:bg-white/5 border border-dashed border-purple-200 dark:border-purple-500/20 flex items-center justify-center">
             <Network size={100} className="text-purple-200 dark:text-purple-500/20" />
          </div>
        </div>

        {/* 🚀 4. 新增：深度技术支持 (包含维修、组装、解密等) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <div className="order-2 lg:order-1 h-64 lg:h-80 rounded-3xl bg-orange-50/50 dark:bg-white/5 border border-dashed border-orange-200 dark:border-orange-500/20 flex items-center justify-center">
            <Wrench size={100} className="text-orange-200 dark:text-orange-500/20" />
          </div>
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="order-1 lg:order-2 space-y-6">
            <div className="w-14 h-14 rounded-2xl bg-orange-100 dark:bg-orange-500/20 flex items-center justify-center text-orange-600 dark:text-orange-400">
              <Wrench size={28} />
            </div>
            <h2 className="text-3xl font-bold">深度技术支持与基建定制</h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">解决 99% 的 IT 疑难杂症：从物理层布线、高性能算力工作站组装，到系统级故障修复与解密咨询。</p>
            <ul className="space-y-2 pb-2">
              <li className="flex items-center gap-2 text-sm text-gray-500"><CheckCircle2 size={16} className="text-orange-500" /> 企业级硬件生命周期维护与排障</li>
              <li className="flex items-center gap-2 text-sm text-gray-500"><CheckCircle2 size={16} className="text-orange-500" /> 结构化布线与全屋/楼宇网络覆盖</li>
              <li className="flex items-center gap-2 text-sm text-gray-500"><CheckCircle2 size={16} className="text-orange-500" /> 高级数据恢复与底层逻辑解密</li>
            </ul>
            <Link href="/services/tech-support" className="inline-flex items-center gap-2 text-orange-600 dark:text-orange-400 font-bold hover:gap-3 transition-all">
              了解专家级技术支持 <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>

        {/* 底部行动呼吁 */}
        <div className="mt-16 text-center">
          <Link href="/#contact" className="inline-flex items-center gap-2 px-8 py-4 bg-gray-900 dark:bg-white text-white dark:text-black rounded-xl font-bold transition-all hover:-translate-y-1">
            联系专家团队 <ArrowRight size={18} />
          </Link>
        </div>
      </main>
    </div>
  );
}
"use client";
import { motion } from "framer-motion";
import { Bot, Layers, Network, ArrowRight, CheckCircle2, Wrench, MonitorPlay, Layout, Code2 } from "lucide-react";
import Link from "next/link";
import Image from "next/image"; // 🚀 引入图片组件

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
            <span className="text-blue-600 dark:text-blue-500">从物理底层到前端视觉</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed"
          >
            我们凭借二十年的深厚积累，为您提供从硬件修护、安全网络、业务系统、独立站建设到 AI 算力部署的全链路级数字武装。
          </motion.p>
        </div>

        {/* 1. AI 智能体 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-6">
            <div className="w-14 h-14 rounded-2xl bg-blue-100 dark:bg-blue-500/20 flex items-center justify-center text-blue-600 dark:text-blue-400">
              <Bot size={28} />
            </div>
            <h2 className="text-3xl font-bold italic tracking-tight">企业级私有化 AI 智能体</h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg">基于 OpenClaw 架构，在本地高性能硬件（如 Mac Mini）上部署完全隔离的 AI 工作流，确保核心数据不出域。</p>
            <Link href="/services/ai-agent" className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 font-bold hover:gap-3 transition-all">
              查看 AI 部署详情 <ArrowRight size={18} />
            </Link>
          </motion.div>
          <div className="relative h-80 lg:h-[450px] rounded-3xl overflow-hidden border border-gray-200 dark:border-white/10 shadow-2xl group">
             <Image src="/service-ai.png" alt="AI Agent" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
             <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent"></div>
          </div>
        </div>

        {/* 2. 现代全栈开发与网站建设 */}
        <div id="web" className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
          <div className="order-2 lg:order-1 relative h-80 lg:h-[450px] rounded-3xl overflow-hidden border border-gray-200 dark:border-white/10 shadow-2xl group">
             <Image src="/service-web.png" alt="Web Dev" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
             <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent"></div>
          </div>
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="order-1 lg:order-2 space-y-6">
            <div className="w-14 h-14 rounded-2xl bg-pink-100 dark:bg-pink-500/20 flex items-center justify-center text-pink-600 dark:text-pink-400">
              <Layout size={28} />
            </div>
            <h2 className="text-3xl font-bold italic tracking-tight">现代全栈开发与出海官网</h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg">告别臃肿缓慢的传统模板。我们采用硅谷前沿的 Next.js 架构，为您打造极速响应、对搜索引擎极度友好的企业级独立门户。</p>
            <ul className="space-y-3 pb-2">
              <li className="flex items-center gap-2 text-sm text-gray-500 font-medium"><CheckCircle2 size={16} className="text-pink-500" /> 全球边缘网络部署，跨国访问秒级响应</li>
              <li className="flex items-center gap-2 text-sm text-gray-500 font-medium"><CheckCircle2 size={16} className="text-pink-500" /> B2B 高转化动态表单与邮件自动化引擎</li>
            </ul>
            <Link href="/services/web" className="inline-flex items-center gap-2 text-pink-600 dark:text-pink-400 font-bold hover:gap-3 transition-all mt-4">
              查看全栈架构与建站详情 <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>

        {/* 3. 敏捷业务中台 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-6">
            <div className="w-14 h-14 rounded-2xl bg-green-100 dark:bg-green-500/20 flex items-center justify-center text-green-600 dark:text-green-400">
              <Layers size={28} />
            </div>
            <h2 className="text-3xl font-bold italic tracking-tight">低代码敏捷业务中台</h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg">利用 NocoBase 引擎极速交付定制化 CRM、ERP 系统，精准适配业务逻辑，将开发周期从月缩短至周。</p>
            <Link href="/services/low-code" className="inline-flex items-center gap-2 text-green-600 dark:text-green-400 font-bold hover:gap-3 transition-all">
              查看低代码平台详情 <ArrowRight size={18} />
            </Link>
          </motion.div>
          <div className="relative h-80 lg:h-[450px] rounded-3xl overflow-hidden border border-gray-200 dark:border-white/10 shadow-2xl group">
             <Image src="/service-lowcode.png" alt="Low Code" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
             <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent"></div>
          </div>
        </div>

        {/* 4. 网络基建 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
          <div className="order-2 lg:order-1 relative h-80 lg:h-[450px] rounded-3xl overflow-hidden border border-gray-200 dark:border-white/10 shadow-2xl group">
             <Image src="/service-network.png" alt="Network" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
             <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent"></div>
          </div>
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="order-1 lg:order-2 space-y-6">
            <div className="w-14 h-14 rounded-2xl bg-purple-100 dark:bg-purple-500/20 flex items-center justify-center text-purple-600 dark:text-purple-400">
              <Network size={28} />
            </div>
            <h2 className="text-3xl font-bold italic tracking-tight">高可用安全网络基建</h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg">提供底层核心节点管理、企业级路由固件调优及跨国安全隧道方案，保障跨境办公通信不掉线、不卡顿。</p>
            <Link href="/services/network" className="inline-flex items-center gap-2 text-purple-600 dark:text-purple-400 font-bold hover:gap-3 transition-all">
              查看网络基建详情 <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>

        {/* 5. 商业级数字视觉工程 */}
        <div id="visual" className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-6">
            <div className="w-14 h-14 rounded-2xl bg-cyan-100 dark:bg-cyan-500/20 flex items-center justify-center text-cyan-600 dark:text-cyan-400">
              <MonitorPlay size={28} />
            </div>
            <h2 className="text-3xl font-bold italic tracking-tight">商业级数字视觉工程</h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg">利用达芬奇剪辑引擎与 AI 视觉工具，为您的外贸及制造业务打造具备全球化审美、高转化质感的视频资产。</p>
            <ul className="space-y-3 pb-2">
              <li className="flex items-center gap-2 text-sm text-gray-500 font-medium"><CheckCircle2 size={16} className="text-cyan-500" /> DaVinci Resolve 商业级视频调色与后期包装</li>
              <li className="flex items-center gap-2 text-sm text-gray-500 font-medium"><CheckCircle2 size={16} className="text-cyan-500" /> 面向海外社交媒体的高频短视频素材矩阵</li>
            </ul>
            <Link href="/services/visual" className="inline-flex items-center gap-2 text-cyan-600 dark:text-cyan-400 font-bold hover:gap-3 transition-all mt-4">
              查看商业视觉包装详情 <ArrowRight size={18} />
            </Link>
          </motion.div>
          <div className="relative h-80 lg:h-[450px] rounded-3xl overflow-hidden border border-gray-200 dark:border-white/10 shadow-2xl group">
             <Image src="/service-visual.png" alt="Visual Engineering" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
             <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent"></div>
          </div>
        </div>

        {/* 6. 深度技术支持 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
          <div className="order-2 lg:order-1 relative h-80 lg:h-[450px] rounded-3xl overflow-hidden border border-gray-200 dark:border-white/10 shadow-2xl group">
             <Image src="/service-support.png" alt="Tech Support" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
             <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent"></div>
          </div>
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="order-1 lg:order-2 space-y-6">
            <div className="w-14 h-14 rounded-2xl bg-orange-100 dark:bg-orange-500/20 flex items-center justify-center text-orange-600 dark:text-orange-400">
              <Wrench size={28} />
            </div>
            <h2 className="text-3xl font-bold italic tracking-tight">硬件运维与深度技术支持</h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg">坚实的物理层保障。解决从办公电脑死机、工作站组装、服务器维护到系统级逻辑损坏数据恢复的各类 IT 痛点。</p>
            <ul className="space-y-3 pb-2">
              <li className="flex items-center gap-2 text-sm text-gray-500 font-medium"><CheckCircle2 size={16} className="text-orange-500" /> 企业级全生命周期维保，1小时内极速响应</li>
              <li className="flex items-center gap-2 text-sm text-gray-500 font-medium"><CheckCircle2 size={16} className="text-orange-500" /> 硬盘与 RAID 阵列底层数据恢复及解密服务</li>
            </ul>
            <Link href="/services/tech-support" className="inline-flex items-center gap-2 text-orange-600 dark:text-orange-400 font-bold hover:gap-3 transition-all">
              了解专家级维保支持 <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>

        {/* 底部行动呼吁 */}
        <div className="mt-16 text-center">
          <Link href="/#contact" className="inline-flex items-center gap-2 px-10 py-5 bg-blue-600 hover:bg-blue-500 text-white rounded-2xl font-bold transition-all hover:-translate-y-1 shadow-xl shadow-blue-600/20 text-lg">
            立即预约全栈技术专家 <ArrowRight size={22} />
          </Link>
        </div>
      </main>
    </div>
  );
}
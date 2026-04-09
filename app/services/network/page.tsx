"use client";
import { motion } from "framer-motion";
import { Network, Server, Globe2, ArrowLeft } from "lucide-react";
import Link from "next/link";


export default function NetworkService() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-[#050505] text-gray-900 dark:text-white transition-colors duration-500">
      <div className="fixed inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] z-0"></div>
      <Navbar />
      <main className="relative z-10 max-w-4xl mx-auto px-6 pb-24 mt-8">
        <Link href="/services" className="inline-flex items-center gap-2 text-gray-500 hover:text-purple-600 mb-12 transition-colors font-medium">
          <ArrowLeft size={18} /> 返回核心服务
        </Link>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-6 mb-16">
          <div className="w-16 h-16 rounded-2xl bg-purple-100 dark:bg-purple-500/20 flex items-center justify-center text-purple-600 dark:text-purple-400 mb-6">
            <Network size={32} />
          </div>
          <h1 className="text-4xl md:text-5xl font-black">高可用安全网络基建</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
            强大的上层应用需要极其稳固的底层网络。从硅谷高可用 VPS 节点，到企业级路由安全隧道，我们为您扫除一切网络互通障碍。
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-8 bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-2xl">
            <Globe2 className="text-purple-600 dark:text-purple-400 mb-4" size={28} />
            <h3 className="text-xl font-bold mb-3">海外核心节点与专线级隧道</h3>
            <p className="text-gray-600 dark:text-gray-400">精通 V2Ray、X-UI 等前沿代理架构与复杂路由协议配置。我们在硅谷等地搭建专有中转服务器集群，确保跨国业务数据极速、抗干扰传输。</p>
          </div>
          <div className="p-8 bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-2xl">
            <Server className="text-purple-600 dark:text-purple-400 mb-4" size={28} />
            <h3 className="text-xl font-bold mb-3">企业级网络硬件极客调优</h3>
            <p className="text-gray-600 dark:text-gray-400">从底层掌控硬件。我们具备对企业路由器进行 OpenWrt/Padavan 固件级定制刷写的能力，通过底层防火墙和路由表配置，实现全局网络资源的最优分配与绝对安全管控。</p>
          </div>
        </div>
      </main>
    </div>
  );
}
"use client";
import { motion } from "framer-motion";
import { Wrench, ShieldAlert, Laptop, MonitorCheck, ArrowLeft, Unlock, Terminal } from "lucide-react";
import Link from "next/link";


export default function TechSupport() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-[#050505] text-gray-900 dark:text-white transition-colors duration-500">
      <div className="fixed inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] z-0"></div>
      
      <main className="relative z-10 max-w-5xl mx-auto px-6 pb-24 mt-8">
        <Link href="/services" className="inline-flex items-center gap-2 text-gray-500 hover:text-orange-600 mb-12 transition-colors font-medium">
          <ArrowLeft size={18} /> 返回核心服务
        </Link>
        
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-6 mb-16">
          <div className="w-16 h-16 rounded-2xl bg-orange-100 dark:bg-orange-500/20 flex items-center justify-center text-orange-600 dark:text-orange-400 mb-6">
            <Wrench size={32} />
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white">深度技术支持与高级架构咨询</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed max-w-3xl">
            我们不仅提供前沿的 AI 方案，更拥有二十年沉淀的底层硬件与网络工程经验。解决从物理链路到逻辑协议的一切“疑难杂症”。
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* 业务 1: 疑难故障排除 */}
          <div className="p-8 bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-2xl hover:shadow-lg transition-all">
            <ShieldAlert className="text-orange-600 mb-4" size={28} />
            <h3 className="text-xl font-bold mb-3">深度系统排障与数据恢复</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
              针对计算机系统崩溃、硬盘损坏或底层引导错误提供专家级修复。涵盖复杂环境下的数据冷备份提取、分区表重建及遗忘权限的合法合规安全接管。
            </p>
          </div>

          {/* 业务 2: 高性能算力定制 */}
          <div className="p-8 bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-2xl hover:shadow-lg transition-all">
            <Laptop className="text-orange-600 mb-4" size={28} />
            <h3 className="text-xl font-bold mb-3">企业级工作站与服务器定制</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
              拒绝同质化组装。我们根据 AI 算力、全栈开发或大规模渲染需求，为您精准调优硬件配比（CPU/GPU/I-O），打造具备生产力的定制化算力底座。
            </p>
          </div>

          {/* 业务 3: 物理基建工程 */}
          <div className="p-8 bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-2xl hover:shadow-lg transition-all">
            <MonitorCheck className="text-orange-600 mb-4" size={28} />
            <h3 className="text-xl font-bold mb-3">结构化布线与核心网络覆盖</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
              为办公楼宇、IDC机房提供从物理链路、交换路由到全屋无缝漫游漫游的闭环工程。解决网络延迟、丢包及拓扑混乱等原生技术痛点。
            </p>
          </div>

          {/* 业务 4: 软件定制与逆向 */}
          <div className="p-8 bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-2xl hover:shadow-lg transition-all">
            <Terminal className="text-orange-600 mb-4" size={28} />
            <h3 className="text-xl font-bold mb-3">行业级程序设计与解密咨询</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
              承接高性能单页/多页应用开发。同时针对旧系统的协议逆向、加密数据库的结构化迁移及各类底层逻辑锁死提供高级咨询服务。
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
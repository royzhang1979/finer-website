"use client";
import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

export default function TermsOfService() {
  return (
    <main className="min-h-screen bg-gray-50 dark:bg-[#050505] text-gray-900 dark:text-white relative overflow-hidden pb-24">
      {/* 科技感背景网格 */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] z-0 pointer-events-none"></div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 pt-20">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
          <div className="w-16 h-16 rounded-2xl bg-purple-100 dark:bg-purple-500/20 flex items-center justify-center text-purple-600 dark:text-purple-400 mx-auto mb-6">
            <Briefcase size={32} />
          </div>
          <h1 className="text-4xl md:text-5xl font-black mb-6">服务条款 (TOS)</h1>
          <p className="text-gray-500 dark:text-gray-400">请在使用霏乐科技服务前仔细阅读本条款。</p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ delay: 0.2 }}
          className="bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-3xl p-8 md:p-12 shadow-sm space-y-8"
        >
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white border-l-4 border-purple-600 pl-4">1. 服务性质说明</h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              霏乐科技（下称“我们”）通过本网站展示并提供包括但不限于：私有化 AI 智能体部署、低代码业务中台开发、高可用网络基建以及深度硬件技术支持等企业级 IT 服务。本网站的展示内容不构成具有法律约束力的即时合同，具体的服务交付标准、周期与权责将以双方签署的正式《技术开发/技术服务合同》为准。
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white border-l-4 border-purple-600 pl-4">2. 合法合规性承诺</h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              在为您提供底层网络排障、数据应急恢复或 AI 算力部署时，我们承诺遵循相关国家及地区的法律法规。客户应保证其提供的基础数据、网络环境及业务逻辑合法合规。我们拒绝为任何灰黑产、侵权或违法的业务系统提供技术架构支持或算力服务。
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white border-l-4 border-purple-600 pl-4">3. 知识产权归属</h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              除非在正式商业合同中另有约定，我们通过 NocoBase 引擎为您定制开发的业务流转系统、微调的 AI 节点工作流以及相关二次开发代码的使用权归您所有；但我们保留作为底层架构服务商对此类通用架构设计的署名权及展示权（不包含您的脱敏数据）。
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white border-l-4 border-purple-600 pl-4">4. 免责声明</h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              虽然我们在硬件生命周期运维与高可用网络部署中追求极致的稳定性（如 99.99%），但因不可抗力（包括但不限于骨干网光缆中断、公有云区域性宕机、硬件自然老化损毁等）造成的业务中断，我们在法律允许的范围内不承担连带赔偿责任。我们将尽“极客”之最大努力为您提供应急响应与灾备恢复。
            </p>
          </section>
        </motion.div>
      </div>
    </main>
  );
}
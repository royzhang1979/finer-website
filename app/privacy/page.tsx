"use client";
import { motion } from "framer-motion";
import { Shield } from "lucide-react";

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-gray-50 dark:bg-[#050505] text-gray-900 dark:text-white relative overflow-hidden pb-24">
      {/* 科技感背景网格 */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] z-0 pointer-events-none"></div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 pt-20">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
          <div className="w-16 h-16 rounded-2xl bg-blue-100 dark:bg-blue-500/20 flex items-center justify-center text-blue-600 dark:text-blue-400 mx-auto mb-6">
            <Shield size={32} />
          </div>
          <h1 className="text-4xl md:text-5xl font-black mb-6">隐私政策</h1>
          <p className="text-gray-500 dark:text-gray-400">最后更新日期：{new Date().getFullYear()}年 {new Date().getMonth() + 1}月</p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ delay: 0.2 }}
          className="bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-3xl p-8 md:p-12 shadow-sm space-y-8"
        >
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white border-l-4 border-blue-600 pl-4">1. 信息收集的范围</h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              霏乐科技（FINER TECH）深知数据主权的重要性。当您访问本网站或提交咨询表单时，我们仅收集履行服务所必需的信息，包括：您的姓名、企业名称、联系邮箱以及您主动提交的业务需求描述。我们不会通过隐藏脚本收集您的生物识别或深度设备信息。
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white border-l-4 border-blue-600 pl-4">2. 数据的使用方式</h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              您提供的信息将严格用于以下用途：<br/>
              - 我们的技术架构师与您取得联系，提供初步的技术评估与报价方案。<br/>
              - 在我们正式建立合作后，作为项目建档的初始依据。<br/>
              - 我们郑重承诺：绝不向任何第三方机构出售、出租或交换您的企业信息。
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white border-l-4 border-blue-600 pl-4">3. B2B 核心数据保护声明</h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              作为一家提供“私有化 AI 节点”与“物理级隔离网络”的技术公司，我们以最高标准对待客户隐私。本网站所有提交的表单数据均经过 TLS 协议加密传输。对于未来在业务合作中产生的核心代码、商业逻辑及客户数据，我们将严格遵循独立 NDA（保密协议）进行最高等级的物理级保护。
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white border-l-4 border-blue-600 pl-4">4. 您的权利</h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              您随时有权要求我们更新或彻底删除您在我们系统中留存的咨询记录。如需行使此权利，请发送邮件至：<strong>contact@finer.net.cn</strong>。
            </p>
          </section>
        </motion.div>
      </div>
    </main>
  );
}
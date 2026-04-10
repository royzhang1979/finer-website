"use client";
import { motion } from "framer-motion";
import { Check, ArrowRight, HelpCircle, Zap, ShieldCheck, Target } from "lucide-react";
import Link from "next/link";

const PRICING_Tiers = [
  {
    name: "基础型 (Basic)",
    desc: "解决生存与效率痛点",
    price: "￥8,000 起",
    features: ["核心功能快速部署", "基础安全防护", "标准售后支持", "敏捷交付周期"],
    cta: "预约初步评估",
    color: "gray"
  },
  {
    name: "企业型 (Professional)",
    desc: "主力利润区，全方位数字化赋能",
    price: "￥25,000 起",
    features: ["定制化业务逻辑", "全球加速网络支持", "深度 AI 智能体集成", "24/7 优先响应"],
    cta: "获取定制方案",
    featured: true,
    color: "blue"
  },
  {
    name: "旗舰型 (Enterprise)",
    desc: "行业标杆级架构与视觉重构",
    price: "￥80,000 起",
    features: ["100% 源码交付与部署", "私有化算力集群重构", "品牌级数字视觉包", "专属架构师年度支持"],
    cta: "预约架构师咨询",
    color: "purple"
  }
];

export default function Pricing() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-[#050505] text-gray-900 dark:text-white transition-colors duration-500">
      
      <main className="relative z-10 max-w-7xl mx-auto px-6 py-24">
        {/* 头部 */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-6">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-4xl md:text-6xl font-black tracking-tight">
            透明定价，<span className="text-blue-600">价值驱动</span>
          </motion.h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            我们不卖廉价的劳动力，我们卖的是能帮您降本增效、重塑溢价的数字资产。
          </p>
        </div>

        {/* 报价卡片 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {PRICING_Tiers.map((tier, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`relative bg-white dark:bg-white/5 border ${tier.featured ? 'border-blue-500 shadow-2xl shadow-blue-500/10' : 'border-gray-200 dark:border-white/10'} rounded-3xl p-8 flex flex-col`}
            >
              {tier.featured && (
                <div className="absolute top-0 right-8 -translate-y-1/2 bg-blue-600 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
                  推荐方案 / Popular
                </div>
              )}
              <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">{tier.desc}</p>
              <div className="text-4xl font-black mb-8">{tier.price}</div>
              
              <ul className="space-y-4 mb-10 flex-grow">
                {tier.features.map((feat, fIdx) => (
                  <li key={fIdx} className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-300">
                    <Check size={16} className="text-blue-600 shrink-0" /> {feat}
                  </li>
                ))}
              </ul>

              <Link 
                href="/#contact" 
                className={`w-full py-4 rounded-xl font-bold text-center transition-all ${tier.featured ? 'bg-blue-600 text-white hover:bg-blue-500 shadow-lg shadow-blue-600/20' : 'bg-gray-100 dark:bg-white/10 hover:bg-gray-200 dark:hover:bg-white/20'}`}
              >
                {tier.cta}
              </Link>
            </motion.div>
          ))}
        </div>

        {/* ROI 逻辑展示 */}
        <div className="bg-blue-50 dark:bg-blue-900/10 border border-blue-100 dark:border-blue-500/20 rounded-3xl p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">为什么选择霏乐科技？</h2>
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-500/20 flex items-center justify-center shrink-0"><Target className="text-blue-600" /></div>
                  <div>
                    <h4 className="font-bold mb-1">精准 ROI 导向</h4>
                    <p className="text-sm text-gray-500">我们不仅仅是在交付系统，更是在为您计算每一分技术投入带来的利润增长点。</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-500/20 flex items-center justify-center shrink-0"><ShieldCheck className="text-blue-600" /></div>
                  <div>
                    <h4 className="font-bold mb-1">20年底层经验背书</h4>
                    <p className="text-sm text-gray-500">从石家庄到硅谷，我们深知从硬件物理层到 AI 算法层的每一个坑，确保您的业务永不断线。</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white dark:bg-black/40 p-8 rounded-2xl border border-gray-100 dark:border-white/5 space-y-4">
              <h4 className="text-lg font-bold flex items-center gap-2"><Zap className="text-yellow-500" /> 价值公式</h4>
              <p className="text-2xl font-black italic text-gray-400">“技术投资 - 节省的人工成本 - 挽回的流失客户 = 纯利润增量”</p>
              <p className="text-sm text-gray-500 leading-relaxed italic">
                —— 霏乐科技始终坚持：如果一项技术不能为您创造超过其成本 3 倍以上的价值，那么我们就建议您暂缓部署。
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
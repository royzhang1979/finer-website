// app/services/visual/page.tsx
"use client";
import { motion } from "framer-motion";
import { MonitorPlay, Sparkles, Video, TrendingUp, ArrowLeft, CheckCircle2, Wand2 } from "lucide-react";
import Link from "next/link";

export default function VisualEngineering() {
  return (
    <main className="min-h-screen bg-gray-50 dark:bg-[#050505] text-gray-900 dark:text-white pb-24 relative overflow-hidden transition-colors duration-500">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] z-0 pointer-events-none"></div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 pt-20">
        <Link href="/services" className="inline-flex items-center gap-2 text-cyan-600 dark:text-cyan-400 hover:underline mb-12 font-bold transition-all hover:-translate-x-1">
          <ArrowLeft size={18} /> 返回核心服务
        </Link>

        {/* 头部区域 */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-100 dark:bg-cyan-500/10 border border-cyan-200 dark:border-cyan-500/20 text-cyan-600 dark:text-cyan-400 text-sm font-medium mb-6">
            <MonitorPlay size={16} /> 商业级数字视觉工程
          </div>
          <h1 className="text-4xl md:text-6xl font-black mb-6 tracking-tight">
            用视觉重塑产品溢价<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500">打造降维打击的出海数字资产</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed max-w-3xl">
            硬核的技术与产品，需要与之匹配的商业级视觉呈现。我们利用影视级后期流程与 AI 生态工具，为企业重构品牌张力，让每一次曝光都转化为高端客户的信任。
          </p>
        </motion.div>

        {/* 核心打法 */}
        <div className="space-y-12 mb-20">
          {/* 影视级剪辑 */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row gap-12 items-center">
            <div className="w-24 h-24 shrink-0 rounded-full bg-cyan-50 dark:bg-cyan-900/20 flex items-center justify-center text-cyan-500 border border-cyan-100 dark:border-cyan-500/30">
              <Video size={40} />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4">DaVinci Resolve 商业级视频制作</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                摒弃低端套模板的宣传片。我们采用好莱坞工业标准的达芬奇引擎，为您的产品细节进行节点级精准调色（Color Grading）与核心工艺的动效重构，让出海宣传片具备顶级工业质感。
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-gray-700 dark:text-gray-300 font-medium">
                <li className="flex items-center gap-2"><CheckCircle2 className="text-cyan-500" size={16}/> 电影级色彩管理</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="text-cyan-500" size={16}/> 产品卖点三维动画拆解</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="text-cyan-500" size={16}/> 多语种字幕与音效混音</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="text-cyan-500" size={16}/> YouTube/TikTok 矩阵适配</li>
              </ul>
            </div>
          </motion.div>

          {/* AI 视觉中台 */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row gap-12 items-center">
            <div className="w-24 h-24 shrink-0 rounded-full bg-purple-50 dark:bg-purple-900/20 flex items-center justify-center text-purple-500 border border-purple-100 dark:border-purple-500/30">
              <Wand2 size={40} />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4">AI 驱动的全媒体高转化图文矩阵</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                在 B2B 赛道，高频的干货输出是建立权威的关键。我们利用本地化 AI 节点与商业图库结合，将您的硬核技术与工厂实录，自动重塑为高转化率的商业图文海报与深度博客配图。
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-gray-700 dark:text-gray-300 font-medium">
                <li className="flex items-center gap-2"><CheckCircle2 className="text-purple-500" size={16}/> AIGC 商业图库生成</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="text-purple-500" size={16}/> 品牌视觉规范化 (VI) 统一</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="text-purple-500" size={16}/> 海外社交媒体素材批处理</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="text-purple-500" size={16}/> B2B 平台详情页爆款重构</li>
              </ul>
            </div>
          </motion.div>
        </div>

        {/* 底部行动呼吁 */}
        <div className="bg-cyan-600 dark:bg-cyan-900 rounded-3xl p-12 text-center text-white relative overflow-hidden shadow-2xl">
          <div className="relative z-10 space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">用顶级视觉，去降维打击您的竞争对手</h2>
            <p className="text-cyan-100 text-lg max-w-2xl mx-auto">优秀的工业产品不该被劣质的宣传物料埋没。联系我们，开启您的视觉资产重构计划。</p>
            <Link href="/#contact" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-cyan-600 rounded-xl font-bold hover:bg-cyan-50 transition-all hover:scale-105">
              <Sparkles size={20} /> 评估视觉重构方案
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
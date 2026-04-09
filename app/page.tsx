"use client";
import { sendEmail } from "./actions"; 
import { motion } from "framer-motion";
import { Cpu, Globe, Rocket, Eye, Briefcase, ShieldCheck, Mail, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link"; // 🚀 新增：导入 Next.js 官方链接组件


export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 dark:bg-[#050505] text-gray-900 dark:text-white overflow-hidden selection:bg-blue-500/30 transition-colors duration-500">
      
      {/* 科技感背景网格 */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

      {/* 主视觉区 */}
      <section className="relative pt-24 pb-20 px-4 text-center z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block px-4 py-1.5 mb-6 text-xs font-medium tracking-wider text-blue-600 dark:text-blue-400 uppercase bg-blue-100 dark:bg-blue-400/10 border border-blue-200 dark:border-blue-400/20 rounded-full">
            Future-Ready Intelligence
          </span>
          <h1 className="text-5xl md:text-8xl font-black mb-8 tracking-tighter">
            重构<span className="bg-clip-text text-transparent bg-gradient-to-b from-gray-900 to-gray-500 dark:from-white dark:to-gray-500">数字生产力</span>
          </h1>
          <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-400 text-lg md:text-xl leading-relaxed mb-12">
            霏乐科技致力于为企业提供私有化 AI 智能体部署、低代码业务架构及高性能网络基建，让您的业务在智能时代实现跃迁。
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <a href="#contact" className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-bold shadow-lg shadow-blue-600/20 transition-all hover:-translate-y-1">
              获取方案
            </a>
            {/* 🚀 修复：替换为空壳按钮，改为跳转到案例页 */}
            <Link href="/cases" className="inline-flex items-center justify-center px-8 py-4 bg-white dark:bg-white/5 border border-gray-300 dark:border-white/10 hover:bg-gray-50 dark:hover:bg-white/10 text-gray-900 dark:text-white rounded-xl font-bold transition-all shadow-sm">
              查看案例
            </Link>
          </div>
        </motion.div>
      </section>

      {/* 特色卡片区域 */}
      <section id="ai-agent" className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 px-6 pb-20 relative z-10">
        {[
          { icon: <Cpu />, title: "AI 智能体", desc: "本地化私有部署，确保核心数据绝对不出域。", link: "/services/ai-agent" },
          { icon: <Rocket />, title: "敏捷系统", desc: "低代码快速交付，直击业务痛点，告别漫长开发。", link: "/services/low-code" },
          { icon: <Globe />, title: "网络基建", desc: "高可用底层架构，赋能全球业务极速流转。", link: "/services/network" }
        ].map((item, idx) => (
          <Link href={item.link} key={idx} className="block p-8 bg-white dark:bg-white/[0.02] border border-gray-200 dark:border-white/5 rounded-2xl hover:border-blue-500/50 dark:hover:border-blue-500/30 transition-all group cursor-pointer shadow-sm dark:shadow-none hover:shadow-md">
            <div className="text-blue-600 dark:text-blue-500 mb-4 group-hover:scale-110 transition-transform">{item.icon}</div>
            <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white group-hover:text-blue-600 transition-colors">{item.title}</h3>
            <p className="text-gray-600 dark:text-gray-500 text-sm leading-relaxed">{item.desc}</p>
          </Link>
        ))}
      </section>
      
      {/* 核心运营中心展示区 */}
      <section className="max-w-7xl mx-auto px-6 py-12 space-y-12 relative z-10">
        <div className="space-y-4 text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-500/10 border border-blue-200 dark:border-blue-500/20 text-blue-600 dark:text-blue-400 text-sm font-medium">
              <Eye size={16} /> 核心运营中心
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white">智能与业务的无缝融合</h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed max-w-3xl mx-auto">
              将企业级私有化 AI 智能体工作流（节点式本地化处理器）与敏捷的低代码 CRM 业务看板深度打通，为您打造数据绝对安全、敏捷可控的现代化数字基座。
            </p>
        </div>
        
        <div className="w-full aspect-video bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-2xl relative overflow-hidden group hover:border-blue-500/30 transition-colors shadow-2xl shadow-gray-300 dark:shadow-blue-900/20">
            <Image 
              src="/finer_operations_center.png" 
              alt="霏乐科技（FINER）智能运营中心融合可视化"
              fill 
              className="object-cover" 
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" 
            />
        </div>
      </section>

      {/* 行业解决方案与业务实力 */}
      <section id="solutions" className="max-w-7xl mx-auto px-6 py-24 relative z-10 border-t border-gray-200 dark:border-white/5 mt-12">
        <div className="flex flex-col md:flex-row gap-16 items-center">
          <div className="flex-1 space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">深研底层架构二十年<br/><span className="text-blue-600 dark:text-blue-500">用前沿算力重塑数字底座</span></h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg">
              真正的技术不仅存在于实验室，更应解决企业真实痛点。我们将深厚的底层网络安全经验与尖端私有化模型技术结合，为您打破业务瓶颈。
            </p>
            <ul className="space-y-6">
              <li className="flex gap-4">
                <div className="mt-1 w-10 h-10 rounded-lg bg-blue-100 dark:bg-blue-500/10 flex items-center justify-center shrink-0 border border-blue-200 dark:border-blue-500/20"><Briefcase size={20} className="text-blue-600 dark:text-blue-400"/></div>
                <div>
                  <h4 className="font-bold text-lg mb-1 text-gray-900 dark:text-white">智能体驱动与业务中台</h4>
                  <p className="text-gray-600 dark:text-gray-500 text-sm">针对高频业务场景，利用本地化 AI 智能体自动解析海量数据，生成精准决策，配合专属低代码系统实时追踪业务流转。</p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="mt-1 w-10 h-10 rounded-lg bg-purple-100 dark:bg-purple-500/10 flex items-center justify-center shrink-0 border border-purple-200 dark:border-purple-500/20"><ShieldCheck size={20} className="text-purple-600 dark:text-purple-400"/></div>
                <div>
                  <h4 className="font-bold text-lg mb-1 text-gray-900 dark:text-white">高可用架构与数据隔离</h4>
                  <p className="text-gray-600 dark:text-gray-500 text-sm">通过极客级网络基建配置，完美适配跨国企业数据交互，确保核心商业机密物理隔离，实现安全可控的数字化升级。</p>
                </div>
              </li>
            </ul>
            {/* 🚀 修复：替换空壳按钮，改为指向 services 页面 */}
            <Link href="/services" className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 font-semibold hover:text-blue-700 dark:hover:text-blue-300 transition-colors">
              深入了解技术解决方案 <ChevronRight size={16} />
            </Link>
          </div>
          
          <div className="flex-1 w-full grid grid-cols-2 gap-4">
            <div className="space-y-4 pt-8">
              <div className="bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-2xl p-6 hover:shadow-md transition-shadow">
                <div className="text-3xl font-black text-gray-900 dark:text-white mb-2">20<span className="text-blue-600 dark:text-blue-500">+</span></div>
                <div className="text-sm text-gray-600 dark:text-gray-400">年深耕底层网络与架构安全</div>
              </div>
              <div className="bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-2xl p-6 hover:shadow-md transition-shadow">
                <div className="text-3xl font-black text-gray-900 dark:text-white mb-2">100<span className="text-blue-600 dark:text-blue-500">%</span></div>
                <div className="text-sm text-gray-600 dark:text-gray-400">核心业务数据私有化部署保障</div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="bg-blue-50 dark:bg-gradient-to-br dark:from-blue-900/40 dark:to-black border border-blue-200 dark:border-blue-500/30 rounded-2xl p-6 hover:border-blue-400 dark:hover:border-blue-500/60 transition-colors">
                <div className="text-3xl font-black text-blue-700 dark:text-white mb-2">AI</div>
                <div className="text-sm text-blue-800/80 dark:text-gray-400">专属智能体驱动核心算力</div>
              </div>
              <div className="bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-2xl p-6 hover:shadow-md transition-shadow">
                <div className="text-3xl font-black text-gray-900 dark:text-white mb-2">7<span className="text-blue-600 dark:text-blue-500">Days</span></div>
                <div className="text-sm text-gray-600 dark:text-gray-400">敏捷交付复杂业务核心系统</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 合作咨询与动态表单区 */}
      <section id="contact" className="max-w-7xl mx-auto px-6 py-24 relative z-10">
        <div className="bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-3xl p-8 md:p-16 shadow-xl dark:shadow-none relative overflow-hidden">
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-72 h-72 bg-blue-500/10 dark:bg-blue-500/20 rounded-full blur-3xl pointer-events-none"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 relative z-10">
            <div className="space-y-8">
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white">
                准备好开启<br/><span className="text-blue-600 dark:text-blue-500">智能化转型</span>了吗？
              </h2>
              <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
                留下您的技术痛点与架构需求，我们的专家团队将在 24 小时内与您联系，为您定制私有化大模型与低代码部署方案。
              </p>
              <div className="space-y-4 pt-4">
                <div className="flex items-center gap-4 text-gray-700 dark:text-gray-300">
                  <div className="w-10 h-10 rounded-full bg-blue-50 dark:bg-blue-500/10 flex items-center justify-center text-blue-600 dark:text-blue-400"><Mail size={18} /></div>
                  <span>contact@finer.net.cn</span>
                </div>
                <div className="flex items-center gap-4 text-gray-700 dark:text-gray-300">
                  <div className="w-10 h-10 rounded-full bg-blue-50 dark:bg-blue-500/10 flex items-center justify-center text-blue-600 dark:text-blue-400"><Briefcase size={18} /></div>
                  <span>专属架构师支持团队</span>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 dark:bg-black/50 p-8 rounded-2xl border border-gray-200 dark:border-white/10">
              <form 
                action={async (formData) => {
                  const res = await sendEmail(formData);
                  if (res.success) {
                    alert("需求提交成功！我们的技术专家将尽快联系您。");
                    (document.getElementById("contact-form") as HTMLFormElement).reset();
                  } else {
                    alert("发送失败: " + res.message);
                  }
                }} 
                id="contact-form"
                className="space-y-4"
              >
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700 dark:text-gray-300">姓名 / Name</label>
                    <input name="name" required type="text" placeholder="您的称呼" className="w-full px-4 py-3 rounded-lg bg-white dark:bg-white/5 border border-gray-300 dark:border-white/10 text-gray-900 dark:text-white focus:outline-none focus:border-blue-500 dark:focus:border-blue-500 transition-colors" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700 dark:text-gray-300">公司 / Company</label>
                    <input name="company" required type="text" placeholder="您的企业名称" className="w-full px-4 py-3 rounded-lg bg-white dark:bg-white/5 border border-gray-300 dark:border-white/10 text-gray-900 dark:text-white focus:outline-none focus:border-blue-500 dark:focus:border-blue-500 transition-colors" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700 dark:text-gray-300">联系邮箱 / Email</label>
                  <input name="email" required type="email" placeholder="name@company.com" className="w-full px-4 py-3 rounded-lg bg-white dark:bg-white/5 border border-gray-300 dark:border-white/10 text-gray-900 dark:text-white focus:outline-none focus:border-blue-500 dark:focus:border-blue-500 transition-colors" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700 dark:text-gray-300">业务需求 / Requirements</label>
                  <textarea name="requirements" required rows={3} placeholder="请简述您的痛点（如：需要私有化大模型部署、低代码 OA 系统定制等）..." className="w-full px-4 py-3 rounded-lg bg-white dark:bg-white/5 border border-gray-300 dark:border-white/10 text-gray-900 dark:text-white focus:outline-none focus:border-blue-500 dark:focus:border-blue-500 transition-colors resize-none"></textarea>
                </div>
                <button type="submit" className="w-full py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-lg transition-colors flex items-center justify-center gap-2 mt-4">
                  提交咨询需求 <ChevronRight size={18} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
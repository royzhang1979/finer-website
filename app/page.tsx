"use client";
import { sendEmail } from "./actions"; 
import { motion } from "framer-motion";
import { Cpu, Globe, Rocket, Eye, Briefcase, ShieldCheck, Mail, ChevronRight, MonitorPlay, Layout, Wrench } from "lucide-react";
import Image from "next/image";
import Link from "next/link"; 
import Script from "next/script"; // 🚀 引入 Next.js 官方脚本组件

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 dark:bg-[#050505] text-gray-900 dark:text-white overflow-hidden selection:bg-blue-500/30 transition-colors duration-500">
      
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

      <section className="relative pt-24 pb-20 px-4 text-center z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <span className="inline-block px-4 py-1.5 mb-6 text-xs font-medium tracking-wider text-blue-600 dark:text-blue-400 uppercase bg-blue-100 dark:bg-blue-400/10 border border-blue-200 dark:border-blue-400/20 rounded-full">
            Future-Ready Intelligence
          </span>
          <h1 className="text-5xl md:text-8xl font-black mb-8 tracking-tighter">
            重构<span className="bg-clip-text text-transparent bg-gradient-to-b from-gray-900 to-gray-500 dark:from-white dark:to-gray-500">数字生产力</span>
          </h1>
          <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-400 text-lg md:text-xl leading-relaxed mb-12">
            霏乐科技为您提供全栈门户建设、私有化 AI 智能体部署、低代码业务架构、高性能网络基建、商业级视觉工程及深度硬件运维，让业务在智能时代实现全面跃迁。
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <a href="#contact" className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-bold shadow-lg shadow-blue-600/20 transition-all hover:-translate-y-1">
              获取方案
            </a>
            <Link href="/cases" className="inline-flex items-center justify-center px-8 py-4 bg-white dark:bg-white/5 border border-gray-300 dark:border-white/10 hover:bg-gray-50 dark:hover:bg-white/10 text-gray-900 dark:text-white rounded-xl font-bold transition-all shadow-sm">
              查看案例
            </Link>
          </div>
        </motion.div>
      </section>

      {/* 六大核心业务体系 3x2 网格 */}
      <section id="services" className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-6 pb-20 relative z-10">
        {[
          { icon: <Layout />, title: "全栈门户建设", desc: "采用 Next.js 极速架构，打造全球秒开、高转化的品牌出海官网。", link: "/services/web" },
          { icon: <MonitorPlay />, title: "数字视觉工程", desc: "商业级视频剪辑与视觉包装，重构高端 B2B 宣传物料。", link: "/services/visual" },
          { icon: <Rocket />, title: "敏捷业务系统", desc: "低代码快速交付，直击业务流转痛点，告别漫长开发期。", link: "/services/low-code" },
          { icon: <Globe />, title: "高可用网络基建", desc: "企业级安全路由调优与核心节点管理，赋能跨国极速协同。", link: "/services/network" },
          { icon: <Cpu />, title: "私有化 AI 智能体", desc: "基于 Mac Mini 的本地化 AI 算力部署，确保核心数据绝对不出域。", link: "/services/ai-agent" },
          { icon: <Wrench />, title: "硬件运维与解密", desc: "从办公电脑排障、工作站组装到系统级数据恢复的深度支持。", link: "/services/tech-support" }
        ].map((item, idx) => (
          <Link href={item.link} key={idx} className="block p-8 bg-white dark:bg-white/[0.02] border border-gray-200 dark:border-white/5 rounded-2xl hover:border-blue-500/50 dark:hover:border-blue-500/30 transition-all group cursor-pointer shadow-sm dark:shadow-none hover:shadow-md">
            <div className="text-blue-600 dark:text-blue-500 mb-4 group-hover:scale-110 transition-transform">{item.icon}</div>
            <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white group-hover:text-blue-600 transition-colors">{item.title}</h3>
            <p className="text-gray-600 dark:text-gray-500 text-sm leading-relaxed">{item.desc}</p>
          </Link>
        ))}
      </section>
      
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

      <section id="solutions" className="max-w-7xl mx-auto px-6 py-24 relative z-10 border-t border-gray-200 dark:border-white/5 mt-12">
        <div className="flex flex-col md:flex-row gap-16 items-center">
          <div className="flex-1 space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">深研底层架构二十年<br/><span className="text-blue-600 dark:text-blue-500">用前沿算力重塑数字底座</span></h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg">
              真正的技术不仅存在于实验室，更应解决企业真实痛点。我们将深厚的底层网络经验、尖端私有化模型技术与前沿视觉工程结合，为您打破全链路业务瓶颈。
            </p>
            <ul className="space-y-6">
              <li className="flex gap-4">
                <div className="mt-1 w-10 h-10 rounded-lg bg-blue-100 dark:bg-blue-500/10 flex items-center justify-center shrink-0 border border-blue-200 dark:border-blue-500/20"><Briefcase size={20} className="text-blue-600 dark:text-blue-400"/></div>
                <div>
                  <h4 className="font-bold text-lg mb-1 text-gray-900 dark:text-white">全栈开发与业务中台</h4>
                  <p className="text-gray-600 dark:text-gray-500 text-sm">从官网视觉重塑到内部复杂 CRM 系统，利用现代敏捷架构，助力企业实现从外到内的数字化升级。</p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="mt-1 w-10 h-10 rounded-lg bg-purple-100 dark:bg-purple-500/10 flex items-center justify-center shrink-0 border border-purple-200 dark:border-purple-500/20"><ShieldCheck size={20} className="text-purple-600 dark:text-purple-400"/></div>
                <div>
                  <h4 className="font-bold text-lg mb-1 text-gray-900 dark:text-white">高可用架构与 AI 隔离</h4>
                  <p className="text-gray-600 dark:text-gray-500 text-sm">通过极客级网络基建配置与本地化 AI 节点部署，确保核心商业机密物理隔离，实现安全可控的算力驱动。</p>
                </div>
              </li>
            </ul>
            <Link href="/services" className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 font-semibold hover:text-blue-700 dark:hover:text-blue-300 transition-colors">
              深入了解技术解决方案 <ChevronRight size={16} />
            </Link>
          </div>
          
          <div className="flex-1 w-full grid grid-cols-2 gap-4">
            <div className="space-y-4 pt-8">
              <div className="bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-2xl p-6 hover:shadow-md transition-shadow">
                <div className="text-3xl font-black text-gray-900 dark:text-white mb-2">20<span className="text-blue-600 dark:text-blue-500">+</span></div>
                <div className="text-sm text-gray-600 dark:text-gray-400">年深耕底层架构与业务安全</div>
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
                <div className="text-sm text-gray-600 dark:text-gray-400">极速交付网站与核心系统</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="max-w-7xl mx-auto px-6 py-24 relative z-10">
        <div className="bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-3xl p-8 md:p-16 shadow-xl dark:shadow-none relative overflow-hidden">
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-72 h-72 bg-blue-500/10 dark:bg-blue-500/20 rounded-full blur-3xl pointer-events-none"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 relative z-10">
            <div className="space-y-8">
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white">
                准备好开启<br/><span className="text-blue-600 dark:text-blue-500">数字化转型</span>了吗？
              </h2>
              <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
                留下您的痛点与需求，我们的专家团队将在 24 小时内与您联系，为您定制从视觉包装到系统底层的全套方案。
              </p>
              <div className="space-y-4 pt-4">
                <div className="flex items-center gap-4 text-gray-700 dark:text-gray-300">
                  <div className="w-10 h-10 rounded-full bg-blue-50 dark:bg-blue-500/10 flex items-center justify-center text-blue-600 dark:text-blue-400"><Mail size={18} /></div>
                  <span>contact@finer.net.cn</span>
                </div>
                <div className="flex items-center gap-4 text-gray-700 dark:text-gray-300">
                  <div className="w-10 h-10 rounded-full bg-blue-50 dark:bg-blue-500/10 flex items-center justify-center text-blue-600 dark:text-blue-400"><Briefcase size={18} /></div>
                  <span>专属架构师与支持团队</span>
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
                  <textarea name="requirements" required rows={3} placeholder="请简述您的需求（如：官网建设、网络部署、修电脑、大模型等）..." className="w-full px-4 py-3 rounded-lg bg-white dark:bg-white/5 border border-gray-300 dark:border-white/10 text-gray-900 dark:text-white focus:outline-none focus:border-blue-500 dark:focus:border-blue-500 transition-colors resize-none"></textarea>
                </div>
                <button type="submit" className="w-full py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-lg transition-colors flex items-center justify-center gap-2 mt-4">
                  提交咨询需求 <ChevronRight size={18} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      {/* 🚀 暂时关闭 Tawk.to 客服
   
      <Script 
        id="tawk-to-homepage" 
        strategy="lazyOnload" 
        dangerouslySetInnerHTML={{
          __html: `
            var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
            (function(){
            var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
            s1.async=true;
            s1.src='https://embed.tawk.to/69d87dcef082711c36c3239d/1jlqqmsis';
            s1.charset='UTF-8';
            s1.setAttribute('crossorigin','*');
            if(s0 && s0.parentNode) { s0.parentNode.insertBefore(s1,s0); } 
            else { document.head.appendChild(s1); }
            })();
          `
        }} 
      />

      */}

    </main>
  );
}
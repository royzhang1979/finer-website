"use client";
import { motion } from "framer-motion";
import { CheckCircle2, TrendingUp, ShieldCheck, Zap, ArrowLeft, BarChart3 } from "lucide-react";
import Link from "next/link";

const CASE_STUDIES = [
  {
    title: "高端 B2B 出海视觉重构：全矩阵短视频与图文引擎",
    tag: "数字视觉工程",
    description: "某拥有 20 年历史的传统实体出口企业（主营高附加值外贸制成品），产品物理工艺极佳。但受限于宣传物料老旧、视频剪辑粗糙，导致在 YouTube 等海外主流 B2B 平台上播放量极低，无法突破客单价天花板。",
    solution: "采用达芬奇（DaVinci Resolve）进行商业级视频调色与剪辑，结合前沿动效对产品核心工艺进行视觉放大；同时运用 AI 配合专业设计，打造多语种、高点击率的图文矩阵进行高频精准分发，彻底重构品牌出海的数字门面。",
    results: [
      { label: "海外社媒曝光", value: "提升 600%" },
      { label: "高质量询盘", value: "增加 45%" },
      { label: "视觉产出效率", value: "提高 3 倍" }
    ],
    color: "cyan"
  },
  {
    title: "企业全栈数字化门户：从品牌设计到高性能部署",
    tag: "全栈网站建设",
    description: "某初创出海企业需要一套既能展示品牌调性，又能适配全球极速访问的 B2B 门户网站。传统模板建站经常出现跨国访问超时、SEO 权重低等问题。",
    solution: "采用 Next.js + Tailwind CSS 极客架构进行响应式开发。集成定制化内容管理系统，并直接部署至全球分布式边缘网络节点，实现 0 维护成本与卓越的谷歌搜索引擎收录。",
    results: [
      { label: "页面加载速度", value: "< 1.5s" },
      { label: "海外收录量", value: "提升 300%" },
      { label: "交付周期", value: "2 周" }
    ],
    color: "pink"
  },
  {
    title: "跨国贸易巨头：私有化 AI 智能体集群部署",
    tag: "AI 算力与安全",
    description: "某大型外贸集团每日需处理数千张非标准化报关单据。因涉及核心商业机密，严禁调用公有云 API，且传统 OCR 识别率不足。",
    solution: "利用 Mac Mini 集群作为边缘算力节点，部署基于 OpenClaw 架构的私有化大模型。通过物理隔离环境实现对复杂单据的自动识别与逻辑提取，数据 100% 物理隔离。",
    results: [
      { label: "单据处理效率", value: "提升 12 倍" },
      { label: "数据出域风险", value: "0" },
      { label: "人工成本", value: "节省 75%" }
    ],
    color: "blue"
  },
  {
    title: "离散制造行业：7 天交付的柔性生产管理中台",
    tag: "敏捷业务架构",
    description: "某精密零件加工厂面临订单碎片化、物料追踪混乱的痛点。传统 ERP 系统修改成本极高，无法匹配其快速多变的排产逻辑，导致库存积压严重。",
    solution: "采用 NocoBase 引擎快速重构底层数据模型。仅用 7 天时间完成从原料入库、工艺流转、QC 质检到财务对账的闭环系统，支持根据生产需求实时调整流程。",
    results: [
      { label: "项目交付周期", value: "仅需 7 天" },
      { label: "库存周转率", value: "提升 45%" },
      { label: "IT 维护成本", value: "降低 90%" }
    ],
    color: "green"
  },
  {
    title: "某金融服务中心：核心网络架构重塑与高可用改造",
    tag: "硬核网络基建",
    description: "该机构办公网出口带宽瓶颈严重，跨国视频会议频繁断线，且遭遇过多轮 DDoS 攻击导致业务中断。",
    solution: "重构物理拓扑，部署安全加速隧道与双机热备防火墙。实施流量精细化管控（QoS）与安全策略隔离，确保跨国业务数据极速、抗干扰传输。",
    results: [
      { label: "网络丢包率", value: "0.01%" },
      { label: "抗攻击能力", value: "提升 500%" },
      { label: "系统可用性", value: "99.99%" }
    ],
    color: "purple"
  },
  {
    title: "集团级 IT 资产运维：软硬件生命周期保障工程",
    tag: "硬件运维与排障",
    description: "某拥有百台设备的办公园区，因设备老化、系统混乱导致办公效率低下。经常出现系统崩溃、网络瘫痪、硬件故障无人修等“IT 泥潭”问题。",
    solution: "实施全量设备健康审计，建立硬件台账。通过系统镜像标准化、物理除尘加固、高性能算力硬件组装以及周期性巡检，将“救火式”维修转变为“主动式”保障。",
    results: [
      { label: "设备故障率", value: "降低 85%" },
      { label: "排障响应时间", value: "4 小时内" },
      { label: "设备寿命平均", value: "延长 2 年" }
    ],
    color: "red"
  }
];

export default function Cases() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-[#050505] text-gray-900 dark:text-white transition-colors duration-500">
      
      <main className="relative z-10 max-w-7xl mx-auto px-6 pb-24 mt-8">
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-6">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-4xl md:text-6xl font-black tracking-tight">
            实战案例：<span className="text-blue-600">从全栈重构到维保落地</span>
          </motion.h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            不管是拯救一台濒临崩溃的办公电脑，还是打造一套惊艳全球的高端出海门户，我们都以极客精神全力以赴。
          </p>
        </div>

        <div className="space-y-12">
          {CASE_STUDIES.map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-3xl overflow-hidden hover:border-blue-500/30 transition-all shadow-sm group"
            >
              <div className="p-8 md:p-12 grid grid-cols-1 lg:grid-cols-3 gap-12">
                <div className="lg:col-span-2 space-y-6">
                  <div className={`inline-block px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 text-xs font-bold uppercase tracking-wider`}>
                    {item.tag}
                  </div>
                  <h2 className="text-3xl font-bold group-hover:text-blue-600 transition-colors">{item.title}</h2>
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-sm font-bold text-gray-400 dark:text-gray-500 uppercase mb-2 tracking-widest">业务痛点 / Challenge</h4>
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{item.description}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-gray-400 dark:text-gray-500 uppercase mb-2 tracking-widest">解决方案 / Solution</h4>
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed font-medium">{item.solution}</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gray-100/50 dark:bg-black/40 p-8 rounded-2xl flex flex-col justify-center space-y-8 border border-gray-100 dark:border-white/5 relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-4 opacity-10">
                    <BarChart3 size={80} />
                  </div>
                  <h4 className="text-center text-xs font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest relative z-10">落地价值 / Value</h4>
                  {item.results.map((result, rIdx) => (
                    <div key={rIdx} className="text-center relative z-10">
                      <div className="text-2xl font-black text-blue-600 dark:text-blue-400">{result.value}</div>
                      <div className="text-sm text-gray-500 dark:text-gray-400 font-medium">{result.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-24 bg-blue-600 rounded-3xl p-12 text-center text-white relative overflow-hidden shadow-2xl">
          <div className="relative z-10 space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">准备好解决您的技术难题了吗？</h2>
            <p className="text-blue-100 text-lg max-w-2xl mx-auto">无论是前沿的视觉营销建站，还是硬核的网络排障维保，技术专家都已准备就绪。</p>
            <Link href="/#contact" className="inline-block px-8 py-4 bg-white text-blue-600 rounded-xl font-bold hover:bg-blue-50 transition-all hover:scale-105">
              立即预约技术咨询
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
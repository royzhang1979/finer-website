"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { BookOpen, PlayCircle, Clock, ArrowRight, Terminal, ChevronLeft, ChevronRight, Search, Loader2 } from "lucide-react";
import Link from "next/link";

// 🚀 定义文章的数据结构
interface Article {
  id: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  summary: string;
}

// Vlog 视频数据库 (视频我们暂时保持不变，依然在这里写死)
const VLOGS = [
  {
    id: "v1",
    title: "【实战实录】Mac Mini 极致压榨：本地化部署 OpenClaw 全过程",
    platform: "bilibili",
    iframeSrc: "//player.bilibili.com/player.html?bvid=BV1GJ411x7h7&page=1&high_quality=1&danmaku=0", 
  },
  {
    id: "v2",
    title: "硬核排障：跨境专线 VPS 节点配置与防封杀策略",
    platform: "youtube",
    iframeSrc: "https://www.youtube.com/embed/dQw4w9WgXcQ?rel=0",
  }
];

export default function Blog() {
  // 🚀 核心状态管理：存储从 API 抓取来的真实文章
  const [articles, setArticles] = useState<Article[]>([]);
  const [isLoading, setIsLoading] = useState(true); // 添加加载状态

  // 分页与搜索状态管理
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState(""); 
  const articlesPerPage = 3; 

  // 🚀 核心动作：页面一打开，就去后台找咱们写的 API 要数据
  useEffect(() => {
    fetch('/api/blog')
      .then(res => res.json())
      .then(data => {
        setArticles(data); // 把抓取到的 md 文件列表存进状态
        setIsLoading(false); // 关闭加载动画
      })
      .catch(err => {
        console.error("读取文章失败:", err);
        setIsLoading(false);
      });
  }, []);
  
  // 根据搜索词过滤文章
  const filteredArticles = articles.filter(article => 
    article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    article.summary.toLowerCase().includes(searchTerm.toLowerCase()) ||
    article.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // 计算当前页需要显示的文章
  const indexOfLastArticle = currentPage * articlesPerPage;
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
  const currentArticles = filteredArticles.slice(indexOfFirstArticle, indexOfLastArticle);
  
  // 计算总页数
  const totalPages = Math.ceil(filteredArticles.length / articlesPerPage);

  // 翻页处理函数
  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // 搜索框输入处理函数
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1);
  };

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-[#050505] text-gray-900 dark:text-white pb-24 relative overflow-hidden transition-colors duration-500">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] z-0 pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-16">
        <div className="mb-20 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-100 dark:bg-cyan-500/10 border border-cyan-200 dark:border-cyan-500/20 text-cyan-600 dark:text-cyan-400 text-sm font-medium">
            <Terminal size={16} /> Finer Tech Journal
          </div>
          <h1 className="text-4xl md:text-6xl font-black tracking-tight">
            技术专栏与 <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">实战 Vlog</span>
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl">
            分享我们在底层硬件架构、私有化 AI 部署及商业级全栈开发中的实战经验与硬核技术洞察。
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* ================= 左侧：技术文章列表区 ================= */}
          <div className="lg:col-span-2 flex flex-col min-h-full">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
              <h2 className="text-2xl font-bold flex items-center gap-2">
                <BookOpen className="text-blue-500" /> 深度技术长文
              </h2>
              
              <div className="relative w-full sm:w-64">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                  <Search size={18} />
                </div>
                <input
                  type="text"
                  placeholder="搜索文章标题、技术栈..."
                  value={searchTerm}
                  onChange={handleSearch}
                  className="w-full pl-10 pr-4 py-2 bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/50 dark:focus:ring-blue-500/30 transition-all text-gray-900 dark:text-white placeholder-gray-400"
                />
              </div>
            </div>
            
            {/* 文章列表加载与渲染逻辑 */}
            <div className="space-y-6 flex-grow">
              {isLoading ? (
                // 🚀 加载动画
                <div className="flex flex-col items-center justify-center py-20 text-blue-500">
                  <Loader2 size={40} className="animate-spin mb-4" />
                  <p className="text-gray-500 font-medium">正在从服务器读取最新文章...</p>
                </div>
              ) : currentArticles.length > 0 ? (
                // 🚀 渲染真实文章列表
                currentArticles.map((article) => (
                  <motion.div 
                    key={article.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="group p-6 md:p-8 bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-3xl hover:border-blue-500/30 transition-all shadow-sm cursor-pointer"
                  >
                    <div className="flex items-center gap-4 text-xs font-bold text-gray-400 dark:text-gray-500 uppercase tracking-wider mb-4">
                      <span className="text-blue-600 dark:text-blue-400">{article.category}</span>
                      <span>•</span>
                      <span className="flex items-center gap-1"><Clock size={14} /> {article.date}</span>
                      <span>•</span>
                      <span>{article.readTime}</span>
                    </div>
                    <h3 className="text-2xl font-bold mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors leading-snug">{article.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">{article.summary}</p>
                    
                    {/* 🚀 核心改动：把空链接换成了动态读取 ID 的真实链接 */}
                    <Link href={`/blog/${article.id}`} className="text-blue-600 dark:text-blue-400 font-medium inline-flex items-center gap-2 group-hover:gap-3 transition-all">
                      阅读全文 <ArrowRight size={18} />
                    </Link>
                  </motion.div>
                ))
              ) : (
                // 搜索无结果时的空状态
                <div className="p-12 text-center border border-dashed border-gray-200 dark:border-white/10 rounded-3xl bg-gray-50/50 dark:bg-white/[0.02]">
                  <Terminal className="mx-auto text-gray-400 mb-4" size={48} />
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">未找到匹配的硬核内容</h3>
                  <p className="text-gray-500 dark:text-gray-400">试试其他关键词，或者清空搜索框看看更多文章。</p>
                </div>
              )}
            </div>
            
            {/* 分页控制组件 */}
            {!isLoading && totalPages > 1 && (
              <div className="mt-12 flex items-center justify-center gap-2">
                <button 
                  onClick={() => paginate(currentPage - 1)} 
                  disabled={currentPage === 1}
                  className="p-2 rounded-xl bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-white/10 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  <ChevronLeft size={20} />
                </button>
                
                {Array.from({ length: totalPages }, (_, i) => (
                  <button
                    key={i + 1}
                    onClick={() => paginate(i + 1)}
                    className={`w-10 h-10 rounded-xl font-bold transition-all ${
                      currentPage === i + 1 
                        ? 'bg-blue-600 text-white shadow-md shadow-blue-600/20' 
                        : 'bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-white/10'
                    }`}
                  >
                    {i + 1}
                  </button>
                ))}

                <button 
                  onClick={() => paginate(currentPage + 1)} 
                  disabled={currentPage === totalPages}
                  className="p-2 rounded-xl bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-white/10 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            )}
          </div>

          {/* ================= 右侧：Vlog 视频真实嵌入区 ================= */}
          <div className="space-y-8 mt-12 lg:mt-0">
            <h2 className="text-2xl font-bold flex items-center gap-2 mb-6">
              <PlayCircle className="text-cyan-500" /> 技术实录 Vlog
            </h2>
            <div className="space-y-8">
              {VLOGS.map((vlog) => (
                <div key={vlog.id} className="bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-3xl overflow-hidden shadow-sm group">
                  <div className="relative w-full aspect-video bg-black">
                    <iframe 
                      src={vlog.iframeSrc} 
                      className="absolute top-0 left-0 w-full h-full border-0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                      allowFullScreen
                    ></iframe>
                  </div>
                  <div className="p-5">
                    <div className="flex items-center gap-2 mb-2">
                      <span className={`text-[10px] px-2 py-0.5 rounded font-bold uppercase ${vlog.platform === 'youtube' ? 'bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400' : 'bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400'}`}>
                        {vlog.platform}
                      </span>
                    </div>
                    <h4 className="font-bold text-gray-900 dark:text-white leading-snug">
                      {vlog.title}
                    </h4>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="p-6 bg-cyan-50 dark:bg-gradient-to-br dark:from-cyan-900/20 dark:to-transparent border border-cyan-100 dark:border-cyan-500/20 rounded-2xl text-center">
              <p className="text-sm text-cyan-800 dark:text-cyan-200 font-medium mb-4">想要观看更多出海实战与硬核基建技术实录？</p>
              <a href="#" className="inline-block px-6 py-3 bg-cyan-600 hover:bg-cyan-500 text-white rounded-xl text-sm font-bold transition-colors w-full shadow-lg shadow-cyan-600/20">
                订阅 YouTube 频道
              </a>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}
"use client";
import { useState } from "react";
import { Copy, CheckCircle2, FileText, Video, Send } from "lucide-react"; // 🚀 这里把 Youtube 换成了通用的 Video
import Link from "next/link";

export default function AdminGenerator() {
  const [activeTab, setActiveTab] = useState<"article" | "vlog">("article");
  const [copied, setCopied] = useState(false);

  // 文章表单状态
  const [articleData, setArticleData] = useState({
    title: "",
    category: "AI 算力",
    date: new Date().toISOString().split('T')[0],
    readTime: "5 分钟阅读",
    summary: ""
  });

  // Vlog表单状态
  const [vlogData, setVlogData] = useState({
    title: "",
    platform: "youtube",
    url: ""
  });

  // 处理文章复制
  const copyArticleCode = () => {
    const code = `{
    id: Date.now(), // 自动生成唯一ID
    title: "${articleData.title}",
    category: "${articleData.category}",
    date: "${articleData.date}",
    readTime: "${articleData.readTime}",
    summary: "${articleData.summary}",
  },`;
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // 处理 Vlog 复制
  const copyVlogCode = () => {
    let iframeSrc = vlogData.url;
    // 简单处理一下 YouTube 链接转换
    if (vlogData.platform === "youtube" && vlogData.url.includes("watch?v=")) {
      const videoId = vlogData.url.split("watch?v=")[1].split("&")[0];
      iframeSrc = `https://www.youtube.com/embed/${videoId}?rel=0`;
    }

    const code = `{
    id: "v_" + Date.now(),
    title: "${vlogData.title}",
    platform: "${vlogData.platform}",
    iframeSrc: "${iframeSrc}", 
  },`;
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-[#050505] text-gray-900 dark:text-white py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <div className="mb-12">
          <h1 className="text-3xl font-black mb-2">Finer Tech 发布台 🚀</h1>
          <p className="text-gray-500">填写内容，一键生成标准数据格式，直接粘贴即发布，告别手动敲代码的繁琐。</p>
        </div>

        {/* 顶部 Tab 切换 */}
        <div className="flex gap-4 mb-8 border-b border-gray-200 dark:border-white/10 pb-4">
          <button 
            onClick={() => setActiveTab("article")}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg font-bold transition-all ${activeTab === "article" ? "bg-blue-600 text-white" : "text-gray-500 hover:bg-gray-200 dark:hover:bg-white/10"}`}
          >
            <FileText size={18} /> 写新文章
          </button>
          <button 
            onClick={() => setActiveTab("vlog")}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg font-bold transition-all ${activeTab === "vlog" ? "bg-red-600 text-white" : "text-gray-500 hover:bg-gray-200 dark:hover:bg-white/10"}`}
          >
            {/* 🚀 这里也把对应的图标改成了 Video */}
            <Video size={18} /> 发新视频
          </button>
        </div>

        {/* 表单区域 */}
        <div className="bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-2xl p-8 shadow-sm">
          
          {/* ========== 文章表单 ========== */}
          {activeTab === "article" && (
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-bold mb-2">文章标题</label>
                <input type="text" value={articleData.title} onChange={e => setArticleData({...articleData, title: e.target.value})} className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-black/50 border border-gray-200 dark:border-white/10 focus:ring-2 focus:ring-blue-500 outline-none" placeholder="例如：如何在 Mac Mini 上部署 AI..." />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-bold mb-2">分类</label>
                  <select value={articleData.category} onChange={e => setArticleData({...articleData, category: e.target.value})} className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-black/50 border border-gray-200 dark:border-white/10 outline-none">
                    <option>硬核网络</option>
                    <option>AI 算力</option>
                    <option>敏捷架构</option>
                    <option>全栈开发</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-bold mb-2">发布日期</label>
                  <input type="date" value={articleData.date} onChange={e => setArticleData({...articleData, date: e.target.value})} className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-black/50 border border-gray-200 dark:border-white/10 outline-none" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold mb-2">内容摘要 (建议 50-100 字)</label>
                <textarea rows={3} value={articleData.summary} onChange={e => setArticleData({...articleData, summary: e.target.value})} className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-black/50 border border-gray-200 dark:border-white/10 outline-none" placeholder="简单介绍一下这篇文章的核心痛点和解决方案..."></textarea>
              </div>

              <div className="pt-4 border-t border-gray-200 dark:border-white/10">
                <button onClick={copyArticleCode} className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white py-4 rounded-xl font-bold transition-all">
                  {copied ? <CheckCircle2 size={20} /> : <Copy size={20} />}
                  {copied ? "代码已复制！快去粘贴吧" : "一键生成并复制数据代码"}
                </button>
              </div>
            </div>
          )}

          {/* ========== Vlog表单 ========== */}
          {activeTab === "vlog" && (
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-bold mb-2">视频标题</label>
                <input type="text" value={vlogData.title} onChange={e => setVlogData({...vlogData, title: e.target.value})} className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-black/50 border border-gray-200 dark:border-white/10 outline-none" placeholder="例如：硬核排障记录..." />
              </div>
              <div>
                <label className="block text-sm font-bold mb-2">视频平台</label>
                <select value={vlogData.platform} onChange={e => setVlogData({...vlogData, platform: e.target.value})} className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-black/50 border border-gray-200 dark:border-white/10 outline-none">
                  <option value="youtube">YouTube</option>
                  <option value="bilibili">Bilibili (B站)</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-bold mb-2">
                  {vlogData.platform === "youtube" ? "YouTube 视频链接" : "B站 Iframe 嵌入代码 / 链接"}
                </label>
                <input type="text" value={vlogData.url} onChange={e => setVlogData({...vlogData, url: e.target.value})} className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-black/50 border border-gray-200 dark:border-white/10 outline-none" placeholder={vlogData.platform === "youtube" ? "https://www.youtube.com/watch?v=..." : "填入 B 站分享的嵌入链接..."} />
              </div>

              <div className="pt-4 border-t border-gray-200 dark:border-white/10">
                <button onClick={copyVlogCode} className="w-full flex items-center justify-center gap-2 bg-red-600 hover:bg-red-500 text-white py-4 rounded-xl font-bold transition-all">
                  {copied ? <CheckCircle2 size={20} /> : <Copy size={20} />}
                  {copied ? "代码已复制！快去粘贴吧" : "一键生成 Vlog 数据代码"}
                </button>
              </div>
            </div>
          )}
        </div>

        <div className="mt-8 text-sm text-gray-500 dark:text-gray-400 bg-blue-50 dark:bg-blue-900/10 p-4 rounded-xl border border-blue-100 dark:border-blue-500/20">
          <p className="font-bold text-blue-600 dark:text-blue-400 mb-1">💡 怎么发布？</p>
          <p>1. 在这里填好内容，点击大按钮复制。<br/>2. 打开你的 <code>app/api/blog/route.ts</code> 代码文件（如果是之前阶段一，就是 <code>app/blog/page.tsx</code>）。<br/>3. 找到顶部的数组代码。<br/>4. 把复制的内容直接粘贴进中括号 <code>[ ]</code> 里的最上面，保存就自动上线了！</p>
        </div>
      </div>
    </main>
  );
}
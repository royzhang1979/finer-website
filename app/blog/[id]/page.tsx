import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeHighlight from 'rehype-highlight';
import 'highlight.js/styles/github-dark.css'; 
import { ArrowLeft, Clock, Calendar, Hash, Share2, Terminal } from "lucide-react";
import Link from "next/link";

// 🚀 核心修复 1：函数前面加上 async，声明 params 是一个 Promise
export default async function ArticleDetail({ params }: { params: Promise<{ id: string }> }) {
  
  // 🚀 核心修复 2：使用 await 等待参数解析完毕，拿到真实的 id (例如：ai-agent-deploy)
  const resolvedParams = await params;
  const articleId = resolvedParams.id;

  // 1. 拼接正确的文件路径
  const fullPath = path.join(process.cwd(), 'posts', `${articleId}.md`);

  // 侦察兵（在 VS Code 终端里看）
  console.log("🤖 【后端探测】真实读取路径：", fullPath);

  // 2. 如果文件不存在，显示 404
  if (!fs.existsSync(fullPath)) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-[#050505] flex flex-col items-center justify-center text-gray-900 dark:text-white">
        <Terminal size={48} className="text-gray-400 mb-4" />
        <h1 className="text-4xl font-black mb-4">404 - 文章未找到</h1>
        <p className="text-gray-500 mb-8">我们翻遍了服务器，没找到 ID 为 {articleId} 的文章。</p>
        <Link href="/blog" className="px-6 py-3 bg-blue-600 text-white rounded-xl font-bold">返回技术专栏</Link>
      </div>
    );
  }

  // 3. 读取并解析文件
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const matterResult = matter(fileContents);
  const article = matterResult.data;
  
  // 🚀 核心优化：自动把正文里的第一个带 # 的大标题干掉，防止和页面顶部的标题重复
  const cleanContent = matterResult.content.replace(/^#\s+.*/m, '');

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-[#050505] text-gray-900 dark:text-white pb-24 transition-colors duration-500">
      
      {/* 顶部标题区 */}
      <div className="w-full bg-white dark:bg-white/5 border-b border-gray-200 dark:border-white/10 pt-24 pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <Link href="/blog" className="inline-flex items-center gap-2 text-gray-500 hover:text-blue-600 dark:hover:text-blue-400 font-medium mb-8 transition-colors">
            <ArrowLeft size={18} /> 返回技术专栏
          </Link>
          
          <div className="flex items-center gap-4 text-sm font-bold text-gray-500 dark:text-gray-400 mb-6">
            <span className="flex items-center gap-1 text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-500/10 px-3 py-1 rounded-full">
              <Hash size={14} /> {article.category || '技术专栏'}
            </span>
            <span className="flex items-center gap-1"><Calendar size={14} /> {article.date || '今日'}</span>
            <span className="flex items-center gap-1"><Clock size={14} /> {article.readTime || '深度长文'}</span>
          </div>

          <h1 className="text-3xl md:text-5xl font-black leading-tight tracking-tight mb-8">
            {article.title || '无标题文章'}
          </h1>
        </div>
      </div>

      {/* 文章正文区 */}
      <div className="max-w-3xl mx-auto px-6 py-16">
        <article className="prose prose-lg dark:prose-invert prose-blue max-w-none">
          <ReactMarkdown 
            remarkPlugins={[remarkGfm]} 
            rehypePlugins={[rehypeHighlight]}
          >
            {cleanContent}
          </ReactMarkdown>
        </article>

        {/* 底部转化按钮 */}
        <div className="mt-20 p-8 bg-blue-50 dark:bg-blue-900/10 border border-blue-100 dark:border-blue-500/20 rounded-3xl text-center">
          <h3 className="text-2xl font-bold mb-4">需要部署类似的数字架构？</h3>
          <p className="text-gray-600 dark:text-gray-400 mb-6">我们的工程师团队已准备好为您提供从底层网络到上层 AI 的一站式服务。</p>
          <Link href="/#contact" className="inline-block px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-bold transition-all shadow-lg shadow-blue-600/20">
            获取企业级专属方案
          </Link>
        </div>
      </div>
    </main>
  );
}
import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export async function GET() {
  // 1. 找到存放文章的 posts 文件夹
  const postsDirectory = path.join(process.cwd(), 'posts');
  
  // 容错处理：如果文件夹不存在，返回空数组
  if (!fs.existsSync(postsDirectory)) {
    return NextResponse.json([]);
  }

  // 2. 读取文件夹下的所有文件名
  const fileNames = fs.readdirSync(postsDirectory);
  
  // 3. 挨个解析 .md 文件
  const articles = fileNames
    .filter(fileName => fileName.endsWith('.md'))
    .map(fileName => {
      // 去掉 .md 后缀，把文件名当成唯一的 ID
      const id = fileName.replace(/\.md$/, ''); 
      const fullPath = path.join(postsDirectory, fileName);
      
      // 读取文件内容
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      
      // 使用 gray-matter 解析文章开头的 --- 元数据 ---
      const matterResult = matter(fileContents);

      return {
        id,
        title: matterResult.data.title || '无标题',
        category: matterResult.data.category || '默认分类',
        date: matterResult.data.date || '刚刚',
        readTime: matterResult.data.readTime || '5 分钟阅读',
        summary: matterResult.data.summary || '这篇文章太硬核了，作者甚至没有写摘要...',
      };
    })
    // 4. 按日期从新到旧排序
    .sort((a, b) => (a.date < b.date ? 1 : -1));

  return NextResponse.json(articles);
}
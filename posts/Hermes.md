---
title: "【实战避坑】彻底清理“大龙虾”残留，零成本开启 Hermes Agent 进化之旅"
date: "2026-04-29"
category: "AI 算力"
coverImage: "/service-ai.png"
readTime: "8 分钟阅读"
summary: "“弃虾投马”，转向了最近在极客圈口碑爆棚的 **Hermes Agent**。"
---

# 【实战避坑】彻底清理“大龙虾”残留，零成本开启 Hermes Agent 进化之旅

自从“大龙虾”（OpenClaw）火起来后，我也在 Mac 上养了一段时间。但最近这阵子，它的脾气越来越怪：更新完动不动就 `500 Internal Server Error`，要么就是新出的白名单机制把我自己写的脚本给拦截了，连不上大模型更是家常便饭。

在折腾了无数个深夜后，我决定“弃虾投马”，转向了最近在极客圈口碑爆棚的 **Hermes Agent**。它最吸引我的地方在于“自进化”：它能通过反思总结，把干过的活变成“技能（Skills）”。

下面是我总结的一套从彻底清理到多方案安装的实战教程。

---

## 第一阶段：彻底拔除“大龙虾”

在装 Hermes 之前，必须把 OpenClaw 的残留清干净，否则后台那个 `gateway-env-wrapper` 脚本会一直占用端口，导致你新装的框架启动失败。

### 1. 强杀后台进程
```bash
pkill -9 -f openclaw
pkill -9 -f gateway-env-wrapper
```

### 2. 清理应用与缓存
```bash
# 移除桌面版
sudo rm -rf /Applications/OpenClaw.app

# 抹除用户目录下的所有隐藏配置（重点）
rm -rf ~/openclaw
rm -rf ~/.openclaw
```

![我本地实操删除大龙虾](/post/images/rm.png)


## 第二阶段：安装 Hermes Agent（三种路径任选）

Hermes 官方提供了多种安装方式，我在这里帮大家梳理一下，你可以根据自己的技术背景来选：

### 方案 A：官网一键安装（最省心）
官方提供的短链接，适合想快速上手的用户。
```bash
curl -fsSL [https://hermes-agent.nousresearch.com/install.sh](https://hermes-agent.nousresearch.com/install.sh) | bash
```
![官网安装说明](/post/images/guanwang.jpg)
### 方案 B：GitHub 脚本安装（推荐，最透明）

这是我最推荐的方式，直接调用 GitHub 仓库里的原厂脚本，过程清晰可见，适合大多数开发者。
```bash
curl -fsSL [https://raw.githubusercontent.com/NousResearch/hermes-agent/main/scripts/install.sh](https://raw.githubusercontent.com/NousResearch/hermes-agent/main/scripts/install.sh) | bash
```

### 方案 C：Git Clone 源码编译（极客专属）
如果你想修改它的底层 Prompt 或者开发私有功能，用这种方式：
```bash
git clone [https://github.com/NousResearch/hermes-agent.git](https://github.com/NousResearch/hermes-agent.git)
cd hermes-agent
npm install
```

---
### 以下是安装过程及我遇到的一些坑和修复方法，有这方面问题的小伙伴可以问我：

![输入GitHub一键安装指令](/post/images/installing.png)

![错误提示](/post/images/error_user.png)
上面的错误提示是因为我没用管理员帐户，Mac提示 /opt/homebrew/Cellar 没有写入权限，我们要转管理员把这个目录权限给了当前用户的：
解决步骤如下：
1. 首先我们要切换到管理员，
```bash 
su 管理员 
```
2，然后修复目录权限
```bash
sudo chown -R AI /opt/homebrew/*
```
3,为了保险起见，建议你直接执行下面这条命令，把整个 Homebrew 目录的归属权都拿回到你当前的用户手里，一劳永逸：
```bash
sudo chown -R $(whoami) /opt/homebrew/*
```
4,做好完记得回到当前用户 输入exit

### 然后继续输入Github一键安装命令，下面窗口显示的是正常了

![成功修改权限后](/post/images/fix_user.png)

## 第三阶段：配置免费的 Gemini 算力大脑

既然 Hermes 这种 Agent 需要频繁调用 API，那 **Google AI Studio** 提供的 Gemini 1.5/2.0 免费额度绝对是首选。

1. 去 [aistudio.google.com](https://aistudio.google.com/) 拿到你的 API KEY。


![Model 选择](/post/images/model_config.png)


![我选的是谷歌免费的](/post/images/google_choose.png)



## 第四阶段：连接微信

1.这个是配置聊天工具的选项，我们选第一个即可

![聊天配置](/post/images/message.png)



![选Wechat](/post/images/Wechat.png)
#### 这里有一个小坑，选择时一定要用空格选上，让旁边那个框里出现箭头才行，我刚开始没选，一直出现没有对话框这个错误，搞了老半天才解决了.

![继续设置微信](/post/images/W1.png)

![](/post/images/W2.png)

![都选默认即可](/post/images/W3.png)


![这个我们要选y](/post/images/wechatqr.png)


![微信配置结束](/post/images/finish_setup1.png)

![GateWay 错误](/post/images/gateway_error.png)

![Fixed Errors](/post/images/fix_gateway_error.png)

### 1. 开启 Web 控制台
Hermes 内置了非常漂亮的 WebUI。安装完成后，在终端运行：
```bash
hermes dashboard
```

![启动Hermes](/post/images/dashboard_start.png)
：

![成功启动Hermes](/post/images/withwechat.png)

你会发现，这里的 Dashboard 比大龙虾简洁太多，而且反应极快。

## 实验Hermes
既然我们已经成功运行了，就测试一把，我用微信跟Hermes Agent聊了聊，反应还是挺快的呢：

![](/post/images/1.png)


![](/post/images/2.png)


![](/post/images/3.PNG)

我们让Hermers控制电脑生成文件，也成功了！
让它帮我在我的Mac桌面建一个文件夹，名字叫 Hermes Tools,里面再建一个文本文件，让它写一句：这是我的Hermes生成的文件测试。
![下命令](/post/images/TEST.PNG)


![](/post/images/TESTING.png)


![生成结果](/post/images/PASS_TEST.png)
还是比较完美的，它既然自己给文件名叫test.txt

### 2. 后续折腾

让我慢慢来开发Hermers吧，感觉比大龙虾要好折腾一些，就是token不知道烧得多不多，后面再折腾本地ollama跑本地模型配置Hermes吧。
---

## 写在最后

折腾工具的过程就是不断寻找最优解的过程。Hermes 配合 Gemini 的免费算力，让我在处理 Next.js 迁移或者 CRM 自动化任务时，感受到了前所未有的顺滑。

如果你在安装过程中遇到报错，或者想深入交流 Hermes 的技能开发，欢迎在我司官网 [finer.net.cn](http://www.finer.net.cn) 留言。

---
*本文首发于 Finer Tech 技术博客。*
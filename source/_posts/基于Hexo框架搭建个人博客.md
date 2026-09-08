---
title: 基于Hexo框架搭建个人博客
date: 2025-06-27 22:39:04
updated: 2026-09-08 08:44:00
tags:
- 博客搭建
- hexo
- 开源的实践活动
cover: https://i1.mcobj.com/uploads/20220112_71ce4921653f8.jpg
top_img: https://img.baiyb.top/file/blog/1771128027478_qqansv7wmrkglaycwaao7t0zf0zhdfg.png
banner: https://img.baiyb.top/file/blog/1771128027478_qqansv7wmrkglaycwaao7t0zf0zhdfg.png
thumbnail: https://i1.mcobj.com/uploads/20220112_71ce4921653f8.jpg
---

# 序言

## 前言

2025年夏季小学期的开源软件开发课程，第一个实践就是使用 Hexo 搭建一个属于自己的个人博客。

其实在上这门课之前，我自己的博客就已经搭建完成了，所以最开始看到这个实践的时候，我的第一反应是：这部分对我来说应该不会太难，跟着大家再走一遍流程就可以了。

但真正开始帮身边的同学搭建之后，我才发现事情并没有想象中那么简单。

同样的一条命令，在我的电脑上可以正常执行，换一台电脑就可能报错；同样都是 Windows，有的人缺环境变量，有的人 Git 连不上，有的人 SSH Key 配好了却还是无法和 GitHub 正常通信；还有人前面的步骤看起来全部正常，到了最后部署时突然蹦出一大串红色报错。

最折磨人的地方在于，这些问题往往并不会按照教程里写好的顺序一个个出现。

于是那几天我基本就在“自己搭一遍——帮别人排错——搜报错——问 AI——再去验证解决办法”之间来回横跳。虽然确实让人头大，但现在回头看，反而是这些报错让我真正理解了博客搭建的整个流程，也让我意识到：**教程真正有价值的地方，并不是把命令复制出来，而是告诉后来的人，我们现在到底在做什么、为什么要这样做，以及出问题的时候应该往哪里找。**

所以有了这篇文章。

我希望它不只是一份“复制命令就能跑”的教程，而是一份我自己踩过坑之后留下来的记录。哪怕你是第一次接触 Git、GitHub、Node.js，甚至之前从来没有自己部署过网站，也希望你能顺着这篇文章，一步一步把自己的博客真正搭起来。

如果最后当你第一次在浏览器里输入自己的网址，看到那个真正属于自己的页面出现时，你应该也会和我当初一样，觉得前面那些报错好像突然都值了。

> 注意！<br>
> **请保证自己的电脑可以正常访问 `github.com`，很多初始化、主题下载以及后续部署都会依赖 GitHub。**<br>
> **建议会基本使用 AI，例如 `ChatGPT` 或 `DeepSeek`。遇到报错时，把完整报错和刚刚执行过的步骤一起发给 AI，通常比只发一句“为什么报错”有效得多。**<br>
> **由于我手头主要是 Windows 设备，并且课程中绝大多数同学使用的也是 Windows，因此本文以 `Windows` 为主要环境。**<br>
> **本文最初写于 2025 年，部分软件界面、版本号以及 GitHub 页面布局以后可能发生变化。若截图和你的页面略有不同，不必慌，先看功能和选项名称是否一致。**

## 这篇文章适合谁

这篇教程主要面向下面几类同学：

- 第一次搭建个人博客，不知道 Hexo、Node.js、Git 分别是干什么的；
- 想拥有一个真正属于自己、可以自由折腾的网站；
- 已经按照别的教程搭过一次，但中间被各种奇奇怪怪的报错劝退；
- 想借搭博客的过程顺手了解一点 Git、GitHub、Markdown 和静态网站部署；
- 单纯觉得别人的博客很好看，也想拥有一个属于自己的“小天地”。

如果你本身已经非常熟悉 Hexo，那么前面的基础部分完全可以快速略过，直接去看后面的主题配置、常见问题和后续折腾方向。

## 声明

本教程不保证包教包会，也不可能覆盖所有电脑、所有系统环境下可能出现的报错，它更多是我自己实际搭建和帮助同学排障过程中的经验整理。<br>

遇到问题时，我比较推荐按照下面这个顺序处理：

1. **先看终端真正报错的那几行，不要看到一大片红字就直接关掉。**
2. 回忆自己刚才做了什么，问题是出现在安装、初始化、本地预览还是部署阶段。
3. 去本文后面的`常见问题`板块找相似问题。
4. 搜索报错关键词，优先看 Hexo、GitHub、主题的官方文档和 issue。
5. 把**完整报错 + 当前目录 + 执行的命令 + 已经做过什么**一起发给 AI，让它帮你分析。

很多时候，真正解决问题的不是“找到一条神奇命令”，而是先判断到底是哪一环出了问题。

Hexo 官方文档：[https://hexo.io/zh-cn/docs/](https://hexo.io/zh-cn/docs/)

## 致谢

感谢以下同学与工具在我搭建和完善博客过程中的帮助：<br>

- XBX：最早给我提供了 Hexo 与 Butterfly 的基础教程，也让我第一次意识到一个 Hexo 博客原来可以被折腾到这种程度。后来不管是博客美化、交互效果，还是部署和访问优化，他的博客都给了我不少思路。【[点击访问 XBXyftx 的博客](https://xbxyftx.top/)】<br>
- ZXJC：提供了基础教程【[点击查看PDF文件](/download/Hexo-Bulider.pdf)】，在实际搭建过程中也一起碰到、解决了不少问题。<br>
- ChatGPT：在看到一些让人完全摸不着头脑的报错时，确实救过我很多次。它不一定每次第一次就能给对答案，但在“帮我理清楚到底哪一步出了问题”这件事上真的很好用。<br>

# 什么是博客

如果只从技术上来说，Hexo 博客其实就是一堆 Markdown 文章，经过框架和主题处理以后生成出来的一套静态网页。

但如果只这样理解博客，我觉得多少有点可惜。

对我来说，博客首先是一个**真正属于自己的地方**。

我们当然可以在 CSDN、知乎、公众号、B站、小红书或者各种社区里发内容，而且这些平台通常拥有更大的流量，也更容易被别人看到。但这些地方终究是平台提供给我们的空间：页面长什么样、文章怎么展示、哪些功能能不能用，绝大多数时候都不是我们说了算。

而自己的博客不一样。

你想把背景换成星空，可以；想在首页放一个奇奇怪怪的动画，可以；想加音乐、友链、留言板、AI 搜索、自己写的小工具，也都可以。甚至哪天你觉得现在的整个页面都看腻了，直接推翻重新做一遍也没人拦着你。

这种自由度其实是我最喜欢博客的一点。

博客也是一个记录自己成长的地方。很多东西在当下感觉平平无奇，但过一两年再翻回去看，感受会完全不同。你会看到自己以前写下的第一段代码、第一次折腾服务器时留下的记录、第一次把一个项目真正做出来时的兴奋，甚至还能看到当时那些现在看来有点幼稚的想法。

这些东西如果不记录，很快就会被忘掉。

与此同时，一个长期维护的博客本身也确实能够展示很多东西。它展示的不只是“我会写文章”，还会慢慢涉及前端、Git、服务器、域名、网络、SEO、性能优化，甚至是设计和审美。博客越往后折腾，就越容易从“我只是想写点东西”变成“这个按钮我是不是还能再改改”“这个加载速度还能不能更快一点”“要不我自己写一个功能”。

然后坑就越挖越大（笑）。

但也正因为如此，博客才会逐渐长成真正属于自己的样子。

下面几个就是我个人很喜欢、也很值得参考的博客。它们并不是简单地把一个主题装上去就结束，而是在原有框架上加入了大量自己的想法和功能。大家可以点进去逛逛，感受一下博客到底能被折腾成什么样。

<style>
.hexo-blog-list{display:flex;flex-direction:column;gap:24px;margin:28px 0;}
.hexo-blog-card{position:relative;overflow:hidden;padding:28px 30px;min-height:180px;border-radius:18px;color:#fff;background:radial-gradient(circle at 90% 10%,rgba(255,255,255,.18),transparent 35%),linear-gradient(135deg,var(--card-color-1),var(--card-color-2));box-shadow:0 10px 30px rgba(0,0,0,.16),inset 0 1px 0 rgba(255,255,255,.12);transition:transform .28s ease,box-shadow .28s ease,filter .28s ease;}
.hexo-blog-card:hover{transform:translateY(-6px) scale(1.008);box-shadow:0 18px 45px rgba(0,0,0,.24),inset 0 1px 0 rgba(255,255,255,.18);filter:brightness(1.05);}
.hexo-blog-card::before{content:"";position:absolute;width:280px;height:280px;right:-100px;top:-140px;border-radius:50%;background:rgba(255,255,255,.12);filter:blur(50px);pointer-events:none;}
.hexo-blog-card-link{position:absolute;inset:0;z-index:10;border-radius:inherit;}
.hexo-blog-card-content{position:relative;z-index:2;pointer-events:none;}
.hexo-blog-card-title{display:flex;align-items:center;flex-wrap:wrap;gap:10px;margin-bottom:18px;font-size:22px;font-weight:700;line-height:1.4;}
.hexo-blog-card-icon{font-size:26px;}
.hexo-blog-card-domain{font-size:18px;font-weight:500;color:rgba(255,255,255,.72);}
.hexo-blog-card-desc{margin:0 0 20px;max-width:900px;color:rgba(255,255,255,.82);font-size:15px;line-height:1.8;}
.hexo-blog-card-tags{display:flex;flex-wrap:wrap;gap:10px;margin-bottom:22px;}
.hexo-blog-card-tag{padding:6px 12px;border-radius:10px;background:rgba(255,255,255,.14);border:1px solid rgba(255,255,255,.08);color:rgba(255,255,255,.92);font-size:13px;font-weight:500;backdrop-filter:blur(8px);-webkit-backdrop-filter:blur(8px);}
.hexo-blog-card-button{display:inline-flex;align-items:center;gap:8px;padding:10px 16px;border-radius:10px;background:rgba(255,255,255,.13);border:1px solid rgba(255,255,255,.28);color:#fff;font-size:15px;font-weight:600;backdrop-filter:blur(8px);-webkit-backdrop-filter:blur(8px);}
@media (max-width:640px){.hexo-blog-list{gap:18px;}.hexo-blog-card{padding:22px 20px;min-height:auto;border-radius:16px;}.hexo-blog-card-title{font-size:19px;margin-bottom:14px;}.hexo-blog-card-domain{width:100%;font-size:14px;margin-left:36px;margin-top:-6px;}.hexo-blog-card-desc{font-size:14px;}}
</style>
<div class="hexo-blog-list">
<div class="hexo-blog-card" style="--card-color-1:#667eea;--card-color-2:#8058b5;">
<a class="hexo-blog-card-link" href="https://blog.zhheo.com/" target="_blank" rel="noopener noreferrer" aria-label="访问张洪Heo博客"></a>
<div class="hexo-blog-card-content">
<div class="hexo-blog-card-title"><span class="hexo-blog-card-icon">🌟</span><span>张洪Heo</span><span class="hexo-blog-card-domain">- blog.zhheo.com</span></div>
<p class="hexo-blog-card-desc">一个在设计和交互上都下了不少功夫的个人博客，里面有许多产品设计、UI/UX以及软件开发相关的内容，同时也加入了AI搜索等自己开发的功能，很适合作为博客美化和功能设计的参考。</p>
<div class="hexo-blog-card-tags"><span class="hexo-blog-card-tag">设计分享</span><span class="hexo-blog-card-tag">UI/UX</span><span class="hexo-blog-card-tag">AI搜索</span></div>
<span class="hexo-blog-card-button">🔗 访问博客</span>
</div>
</div>
<div class="hexo-blog-card" style="--card-color-1:#43a59b;--card-color-2:#59cfaa;">
<a class="hexo-blog-card-link" href="https://www.liushen.fun/" target="_blank" rel="noopener noreferrer" aria-label="访问清羽飞扬博客"></a>
<div class="hexo-blog-card-content">
<div class="hexo-blog-card-title"><span class="hexo-blog-card-icon">🚀</span><span>清羽飞扬</span><span class="hexo-blog-card-domain">- www.liushen.fun</span></div>
<p class="hexo-blog-card-desc">一个前端开发学生的个人博客，主要记录自己的学习和技术成长过程，里面分享了不少开源项目、深度学习经验以及自己开发的实用工具，整体内容还是非常丰富的。</p>
<div class="hexo-blog-card-tags"><span class="hexo-blog-card-tag">前端开发</span><span class="hexo-blog-card-tag">开源项目</span><span class="hexo-blog-card-tag">实用工具</span></div>
<span class="hexo-blog-card-button">🔗 访问博客</span>
</div>
</div>
<div class="hexo-blog-card" style="--card-color-1:#17162f;--card-color-2:#274b92;">
<a class="hexo-blog-card-link" href="https://xbxyftx.top/" target="_blank" rel="noopener noreferrer" aria-label="访问XBXyftx博客"></a>
<div class="hexo-blog-card-content">
<div class="hexo-blog-card-title"><span class="hexo-blog-card-icon">🌌</span><span>XBXyftx</span><span class="hexo-blog-card-domain">- xbxyftx.top</span></div>
<p class="hexo-blog-card-desc">也是我在搭建和折腾博客过程中参考比较多的一个站点。除了AI编程、Agent、鸿蒙和开源项目之外，里面还有不少Hexo美化、交互效果以及博客性能优化的实践记录，很适合喜欢自己折腾博客的同学慢慢翻。</p>
<div class="hexo-blog-card-tags"><span class="hexo-blog-card-tag">Hexo折腾</span><span class="hexo-blog-card-tag">AI / Agent</span><span class="hexo-blog-card-tag">鸿蒙开源</span></div>
<span class="hexo-blog-card-button">🔗 访问博客</span>
</div>
</div>
</div>

# 正式开始之前：我们到底要做什么

如果你是第一次接触 Hexo，我非常建议先花两分钟理解一下整个流程。

因为只要理解这个流程，后面很多报错都会变得没那么吓人。

简单来说，我们最终要完成的是这样一条链路：

```text
Markdown文章
    ↓
Hexo框架读取文章和配置
    ↓
主题负责把内容“画”成网页
    ↓
生成 public 静态网页文件
    ↓
本地预览 / 上传到 GitHub Pages
    ↓
别人通过网址访问你的博客
```

这里面几个工具分别负责：

- **Node.js**：Hexo 的运行环境，可以理解成 Hexo 能够在你电脑上工作的基础。
- **npm**：跟随 Node.js 一起安装，用来下载 Hexo、主题依赖和各种插件。
- **Git**：负责版本管理，同时也是我们和 GitHub 打交道的重要工具。
- **GitHub**：用来存放仓库，并通过 GitHub Pages 把生成出来的网站放到互联网上。
- **Hexo**：把我们写的 Markdown 文章转换成静态网页。
- **Butterfly**：决定博客最终长什么样子。

所以以后如果遇到报错，可以先问自己一句：

> 我现在到底是在 Node/npm、Git/GitHub、Hexo，还是 Butterfly 这一层出问题？

只要能先缩小范围，排查就已经成功一半了。

# 工具安装与准备工作

正式开始前，我们需要准备：

- 可以稳定访问 GitHub 的网络环境
- Node.js
- Git
- GitHub 账号

## 网络环境

> 如果大家可以正常访问 GitHub 以及相关国外资源，请直接略过这一部分。<br>

Hexo 本身并不要求你使用什么特殊网络，但我们在初始化 Hexo、克隆主题、连接 GitHub 时都可能访问 `github.com`。

如果 GitHub 页面本身都打不开，后面出现 `timeout`、`connection reset`、`failed to connect` 等报错其实就很正常了。

因此在正式开始之前，至少先确认下面这个网址能够正常打开：

[https://github.com](https://github.com)

我之前使用过的网络服务：<br>
三毛机场：https://b.smjcgw.com/#/register?code=DhvTqqgN

这里就不过多展开了，大家按照自己的实际网络情况处理即可。

## Node.js 安装

Node.js 是 Hexo 的运行基础，没有它，后面的 `npm` 和 `hexo` 命令都无法正常工作。

官方下载链接：[https://nodejs.org/en](https://nodejs.org/en)<br>
我之前留存的安装包（可能不是官网最新版）：【[点击下载](/download/node-v22.16.0-win-x64.zip)】<br>
教程视频：【[Nodejs安装零基础教程2025](https://www.bilibili.com/video/BV1sbjgzwEBX/?share_source=copy_web&vd_source=76ef81a3c7f598cf017a43cc75c2cf93)】<br>

如果你现在重新搭建，建议优先使用当前官方推荐的稳定版本，不必一定和我截图里的版本完全一致。

安装完成后，打开 `CMD`、PowerShell 或 Git Bash，分别输入：

```bash
node -v
```

```bash
npm -v
```

如果两条命令都能正常显示版本号，说明 Node.js 和 npm 已经成功加入环境变量。

> 如果出现“`node` 不是内部或外部命令”之类的提示，通常不是 Hexo 的问题，而是 Node.js 没装好或者环境变量没有生效。可以先尝试重开终端，仍然不行再重新安装 Node.js。

## Git 安装

Git 后面会负责两件非常重要的事情：

1. 从 GitHub 下载主题等项目；
2. 将博客部署到 GitHub。

官方下载链接：[https://git-scm.com/download/win](https://git-scm.com/download/win)<br>
安装包（可能不是官网最新版）：【[点击下载](/download/Git-2.50.0-64-bit.exe)】<br>
视频教程：【[在Windows上安装git](https://www.bilibili.com/video/BV1vM4m1Q7hC/?spm_id_from=333.337.search-card.all.click&vd_source=754fdfd19d49323af99603a90c4dbb56)】<br>

安装完成后输入：

```bash
git --version
```

能够显示 Git 版本号，就说明安装正常。

## GitHub 账号注册

GitHub 官方注册链接：[https://github.com/signup](https://github.com/signup)<br>
视频教程：【[GitHub注册账号](https://www.bilibili.com/video/BV1eE421M7Wr/?share_source=copy_web&vd_source=76ef81a3c7f598cf017a43cc75c2cf93)】<br>

注册完成后建议先记住自己的：

- GitHub 用户名
- 注册邮箱

后面配置 Git 和 SSH Key 时都会用到。

# Hexo 框架部署

现在基础工具都准备好了，终于可以正式开始搭博客了。

这里其实是整个流程里最有成就感的一段，因为只要顺利走完这几步，你很快就能在自己电脑上看到第一个完整的博客页面。

## Hexo 安装

### Step1：选择一个博客文件夹

先选择一个你喜欢的文件夹，作为以后存放博客源码、主题、配置文件以及博文的地方。<br>

例如：

```text
D:\blog
E:\blog
F:\blog
```

我个人比较推荐单独给博客建一个目录，不要和各种下载文件、课程作业混在一起。因为以后你的文章、主题配置、图片甚至自定义 CSS、JS 都可能逐渐堆进来，这个目录会陪你很久。

> 注意！<br>
> **初始化时目标文件夹最好是空文件夹。**<br>
> **路径建议尽量不要出现中文、特殊符号以及过于复杂的目录层级。**<br>
> 虽然很多软件现在对中文路径兼容已经很好了，但一旦某个插件没处理好编码问题，排查起来真的很痛苦。

![](https://free.picui.cn/free/2025/06/27/685ebb6fa1f75.png)<br>

### Step2：安装 Hexo CLI

在博客文件夹内右键，打开 `Git Bash`。<br>

![](https://free.picui.cn/free/2025/06/27/685ebc36e2319.png)<br>

输入：

```bash
npm install -g hexo-cli
```

这一步的意思是在电脑上全局安装 Hexo 的命令行工具。

![](https://free.picui.cn/free/2025/06/27/685ebd1c022db.png)<br>

安装结束后输入：

```bash
hexo -v
```

![](https://free.picui.cn/free/2025/06/27/685ebd705f1c7.png)<br>

只要能看到 Hexo、Node.js 等版本信息，就说明 Hexo CLI 已经可以正常使用了。

如果这里就报错，不建议继续往下硬走，因为后面的命令都会依赖 Hexo。先把当前问题解决干净再继续。

### Step3：初始化 Hexo

确认自己当前就在准备好的空文件夹中，然后输入：

```bash
hexo init
```

![](https://free.picui.cn/free/2025/06/27/685ebe36de35b.png)<br>

Hexo 会自动把博客需要的基础文件拉下来，并初始化项目结构。

正常情况下，完成后你会看到类似下面这些文件：

```text
blog/
├─ _config.yml
├─ package.json
├─ scaffolds/
├─ source/
│  └─ _posts/
└─ themes/
```

这几个目录非常重要：

- `_config.yml`：Hexo 整个站点最核心的配置文件；
- `source/_posts/`：以后写的文章基本都放在这里；
- `themes/`：主题文件夹；
- `package.json`：记录博客依赖的 npm 包；
- `public/`：执行生成命令以后出现，里面是最终生成出来的网站文件。

> 有些电脑在这一步可能会出现 GitHub 连接失败，例如 `disconnect with github`、`connection reset` 或克隆失败。<br>
> 首先还是建议检查网络和 Git 是否正常。<br>
> 如果实在无法通过在线初始化，也可以使用我之前准备的文件： [Hexo-files.zip](/download/Hexo-files.zip)<br>
> 解压后，将文件复制到博客文件夹中，再执行一次 `npm install` 安装依赖。<br>
> ![](https://free.picui.cn/free/2025/06/28/685ec0922708a.png)<br>

### Step4：第一次本地运行

输入：

```bash
hexo g && hexo s
```

这里其实是连续执行了两条命令：

- `hexo g`：`hexo generate` 的缩写，生成静态网页；
- `hexo s`：`hexo server` 的缩写，开启本地预览服务器。

![](https://free.picui.cn/free/2025/06/28/685ec1be5412c.png)<br>

正常情况下，终端会出现：

```text
http://localhost:4000/
```

按住 `Ctrl` 点击网址，或者直接复制到浏览器地址栏。

![](https://free.picui.cn/free/2025/06/28/685ec204680d3.png)<br>

如果你已经看到 Hexo 默认的 Landscape 页面，那么恭喜你——到这里，其实你已经真正拥有了一个可以运行的网站。

只不过现在这个网站还只能在你自己的电脑上访问。

这个时候可以先别急着往下走，稍微感受一下这个过程：几分钟前还是一个空文件夹，现在浏览器里已经出现了一个完整网页。虽然它还长得很“默认”，但后面所有的主题、美化、文章和功能，都是从这里慢慢长出来的。

预览结束后回到终端，按：

```text
Ctrl + C
```

停止本地服务器。

# 部署到 GitHub Pages

现在博客只能通过 `localhost:4000` 在自己电脑上访问。

下一步我们要做的，就是把它真正放到互联网上。

这里使用 GitHub Pages。对于个人博客来说，它的优点很明显：免费、和 GitHub 仓库结合紧密，而且对于 Hexo 这种静态站点非常合适。

> 说明：Hexo 官方现在也提供 GitHub Actions 的部署方式。本文为了让第一次接触 Git/GitHub 的同学更容易理解，继续使用 `hexo-deployer-git` 的一键部署方式。等你把整个流程跑通以后，再换 GitHub Actions 也完全来得及。

## Step1：创建 GitHub Pages 仓库

打开 GitHub，点击 `New repository`。<br>

![](https://free.picui.cn/free/2025/06/28/685ec8dd4d9b9.png)<br>

仓库名称建议严格写成：

```text
你的GitHub用户名.github.io
```

例如你的用户名是：

```text
BaiYB
```

那么仓库应该叫：

```text
BaiYB.github.io
```

![](https://free.picui.cn/free/2025/06/28/685ecb6200cf6.png)<br>

这个命名不是为了好看，而是 GitHub Pages 的用户站点规则。

## Step2：配置 Git 身份信息

回到 `Git Bash`，分别输入：

```bash
git config --global user.name 你的GitHub用户名
```

```bash
git config --global user.email 你的GitHub邮箱
```

这两项可以理解为告诉 Git：以后是谁在使用这台电脑提交代码。

可以通过下面的命令检查：

```bash
git config --global --list
```

## Step3：生成 SSH Key

输入：

```bash
ssh-keygen -t rsa -C 你的GitHub邮箱
```

第一次搭建时，如果你不知道每个选项是什么意思，可以一路按回车使用默认配置。

默认情况下，公钥一般会生成在：

```text
C:\Users\你的用户名\.ssh\id_rsa.pub
```

![](https://free.picui.cn/free/2025/06/28/685ece4a3aa3b.png)<br>

右键 `id_rsa.pub`，使用记事本打开，然后复制里面的**全部内容**。

![](https://free.picui.cn/free/2025/06/28/685ecedd5f095.png)<br>

> 注意：<br>
> `id_rsa` 是私钥，不要随便发给别人。<br>
> 我们需要复制到 GitHub 的是带 `.pub` 后缀的公钥。

## Step4：把 SSH Key 添加到 GitHub

打开：

[https://github.com/settings/ssh/new](https://github.com/settings/ssh/new)

把刚才复制的公钥粘贴进去。

`Title` 可以随便写一个方便自己识别的名字，例如：

```text
My Windows PC
```

![](https://free.picui.cn/free/2025/06/28/685ed0afee442.png)<br>

## Step5：测试电脑与 GitHub 的通信

在 Git Bash 中输入：

```bash
eval "$(ssh-agent -s)"
```

然后：

```bash
ssh-add ~/.ssh/id_rsa
```

最后测试：

```bash
ssh -T git@github.com
```

第一次连接时可能会询问是否确认主机指纹，输入：

```text
yes
```

如果最终出现类似“successfully authenticated”的提示，说明 SSH 这一层已经打通。

![](https://free.picui.cn/free/2025/06/28/685ed1a3e3582.png)<br>

这里我很建议大家养成一个习惯：**每配置完一层，就先测试这一层。**

如果 SSH 测试都没有成功，就不要直接去执行 Hexo 部署。否则最后只会看到更长的一串报错，却不知道问题其实早就出在前面了。

## Step6：配置 Hexo 的部署目标

打开博客根目录中的 `_config.yml`，找到 `deploy` 部分。

修改为：

```yml
# Deployment
deploy:
  type: git
  repo: git@github.com:你的GitHub用户名/你的GitHub用户名.github.io.git
  branch: main
```

例如：

```yml
deploy:
  type: git
  repo: git@github.com:BaiYB/BaiYB.github.io.git
  branch: main
```

> 注意！YAML 对缩进非常敏感。<br>
> `type`、`repo`、`branch` 前面的空格不要乱改，也不要使用 Tab 随便对齐。<br>
> 如果 `_config.yml` 里本来已经存在 `deploy` 配置，建议直接修改原来的，不要在文件里重复写两个 `deploy:`。

![](https://free.picui.cn/free/2025/06/28/685ed2f67ec06.png)<br>

## Step7：安装部署插件

输入：

```bash
npm install hexo-deployer-git --save
```

这个插件的作用就是让 Hexo 知道如何把生成出来的网站提交到 Git 仓库。

如果不安装，执行 `hexo d` 时很可能会提示没有找到 deployer。

## Step8：第一次真正上传博客

输入：

```bash
hexo clean && hexo generate && hexo deploy
```

也可以使用缩写：

```bash
hexo cl && hexo g && hexo d
```

三条命令分别表示：

- `hexo clean`：清理之前生成的缓存和 `public`；
- `hexo generate`：重新生成网页；
- `hexo deploy`：部署到 GitHub。

![](https://free.picui.cn/free/2025/06/28/685ed48168388.png)<br>

如果看到类似：

```text
INFO  Deploy done: git
```

说明 Hexo 已经把站点部署到仓库。

接下来在 GitHub 仓库的 `Settings -> Pages` 中确认 GitHub Pages 已经启用，并选择你实际部署的分支。

随后访问：

```text
https://你的GitHub用户名.github.io
```

![](https://free.picui.cn/free/2025/06/28/685ed5a4144a0.png)<br>

> 第一次部署可能不会立刻生效，可以稍等几分钟再刷新。

当这个网址真的能被手机、其他电脑打开的时候，整个体验和本地 `localhost` 是完全不一样的。

因为从这一刻开始，它不再只是你电脑上的一个项目，而是互联网上真正存在的一个网站了。

# Hexo 主题配置

默认的 `Landscape` 主题能用，但说实话，第一次搭博客的人大概率看不了多久就会产生一个想法：

> “有没有好看一点的？”

有，而且非常多。

Hexo 官方主题列表：[https://hexo.io/themes/](https://hexo.io/themes/)

本文还是以 `Butterfly` 为例。

一方面 Butterfly 本身功能比较完整，另一方面网上能找到的教程、魔改方案和现成案例都非常多。你以后想加首页大图、友链、音乐、评论、侧边栏、动态效果甚至自己写 CSS/JS，都有很大的发挥空间。

## 安装 Butterfly

在博客根目录打开 Git Bash，输入：

```bash
git clone -b master https://github.com/jerryc127/hexo-theme-butterfly.git themes/butterfly
```

正常情况下，`themes` 文件夹里会多出一个：

```text
themes/butterfly
```

![](https://free.picui.cn/free/2025/06/28/685ed7f6154bd.png)<br>

> 如果这里出现 GitHub 连接超时，可以先检查网络。<br>
> 也可以使用我之前保留的 Butterfly 压缩包：<br>
> [Butterfly主题压缩包](/download/butterfly.zip)<br>
> 解压到 `themes` 文件夹，并确保最终结构是 `themes/butterfly/`，不要多套一层目录。<br>
> ![](https://free.picui.cn/free/2025/06/28/685ed9994f2a0.png)

## 切换主题

打开博客根目录中的 `_config.yml`。

找到：

```yml
theme: landscape
```

修改为：

```yml
theme: butterfly
```

![](https://free.picui.cn/free/2025/06/28/685eda437e477.png)<br>

> 注意：YAML 中冒号后面的空格不要省略。

## 安装 Butterfly 所需渲染器

输入：

```bash
npm install hexo-renderer-pug hexo-renderer-stylus --save
```

![](https://free.picui.cn/free/2025/06/28/685edad0314ac.png)<br>

如果缺少相关渲染器，主题很可能无法正常渲染页面。

## 重新本地预览

输入：

```bash
hexo clean && hexo generate && hexo server
```

然后再次访问：

```text
http://localhost:4000/
```

![](https://free.picui.cn/free/2025/06/28/685edc34911dd.png)<br>

如果此时已经看到 Butterfly 的页面，那么主题切换就成功了。

注意，这条命令只是**本地预览**，并不会上传 GitHub。

确认一切正常后，如果需要更新线上网站，再执行：

```bash
hexo clean && hexo generate && hexo deploy
```

# 别急着结束：先认识一下你的博客目录

到这里，很多教程可能就会说“恭喜你，博客搭建完成”。

从技术上来说确实完成了，但如果你真的打算长期写博客，我建议先认识几个以后一定会反复碰到的文件。

## `_config.yml`

这是 Hexo 的站点配置文件。

网站标题、作者、网址、语言、部署方式等很多全局配置都在这里。

以后只要看到教程说“修改站点配置”，大概率指的就是它。

## `themes/butterfly/`

这里是 Butterfly 主题本体。

里面包含页面结构、主题样式、默认配置等内容。

如果以后准备深度魔改，建议先备份，最好顺手使用 Git 管理自己的修改。因为改着改着真的很容易出现：

> “我刚才到底改了哪一行？”

## `source/_posts/`

这是以后最常见的目录。

你的 Markdown 博文基本都会放在这里。

所以从某种意义上来说，这才是博客真正最重要的地方——主题可以换，服务器可以换，域名也可以换，但文章才是长期留下来的东西。

# 写下第一篇属于自己的文章

如果一直只是装主题，那博客永远还是“别人的主题演示站”。

真正开始属于你自己的时刻，是你写下第一篇文章以后。

输入：

```bash
hexo new "我的第一篇博客"
```

Hexo 会在：

```text
source/_posts/
```

下自动创建一个 Markdown 文件。

文章开头通常会有类似：

```yml
---
title: 我的第一篇博客
date: 2026-09-08 08:44:00
tags:
---
```

这部分叫做 `Front-matter`，相当于这篇文章的基本信息。

例如可以写成：

```yml
---
title: 我的第一篇博客
date: 2026-09-08 08:44:00
tags:
- 随笔
- Hexo
categories:
- 博客
---
```

然后在下面正常使用 Markdown 写内容即可。

写完后：

```bash
hexo clean && hexo generate && hexo server
```

先本地确认没有问题，再：

```bash
hexo deploy
```

我非常推荐养成**先本地看一遍，再上传**的习惯。

尤其以后文章里图片、HTML、CSS 和各种标签插件越来越多时，直接上传以后才发现页面炸了，会比本地提前发现麻烦得多。

# 一组以后会反复使用的命令

等真正开始写博客以后，其实日常用得最多的命令并不多。

## 新建文章

```bash
hexo new "文章标题"
```

缩写：

```bash
hexo n "文章标题"
```

## 清理缓存

```bash
hexo clean
```

或：

```bash
hexo cl
```

## 生成静态网页

```bash
hexo generate
```

或：

```bash
hexo g
```

## 本地预览

```bash
hexo server
```

或：

```bash
hexo s
```

## 上传线上

```bash
hexo deploy
```

或：

```bash
hexo d
```

## 我最常用的组合

本地检查：

```bash
hexo cl && hexo g && hexo s
```

更新线上：

```bash
hexo cl && hexo g && hexo d
```

其实用久以后，你会发现 Hexo 日常维护真的没有想象中那么复杂。

# 常见问题与排查思路

这一部分是我认为比“正常流程”更重要的内容。

因为正常情况下所有人跟着教程都能走，但真正卡住人的往往是那些教程截图里从来没有出现过的报错。

## 1. `hexo` 不是内部或外部命令

先检查：

```bash
node -v
npm -v
```

如果 Node 和 npm 正常，再尝试：

```bash
npm install -g hexo-cli
```

安装后关闭终端重新打开，再执行：

```bash
hexo -v
```

如果仍然不行，大概率需要检查 npm 全局安装路径是否加入环境变量。

## 2. `hexo init` 卡住或 GitHub 克隆失败

如果看到：

```text
Failed to connect
Connection timed out
Connection reset
Could not resolve host
```

先不要怀疑 Hexo。

打开浏览器检查：

```text
https://github.com
```

再执行：

```bash
git --version
```

很多初始化失败，本质上只是 Git 无法正常访问 GitHub。

## 3. `npm install` 报错

这里最重要的是不要只截图最后一行。

npm 报错往往会在上面给出真正原因。

建议完整复制从：

```text
npm ERR!
```

开始的相关内容，再交给搜索引擎或 AI 分析。

如果项目中的依赖已经乱掉，可以尝试先备份，然后重新安装：

```bash
npm install
```

不要一遇到 npm 报错就上来执行一堆网上不知道年份的“万能修复命令”，有时候反而会把环境改得更乱。

## 4. `ssh -T git@github.com` 失败

依次检查：

1. `.ssh` 目录下是否真的存在私钥和 `.pub` 公钥；
2. GitHub 中添加的是否是 `.pub` 文件内容；
3. `ssh-agent` 是否启动；
4. 私钥是否执行过 `ssh-add`；
5. 当前网络是否允许连接 GitHub SSH。

SSH 这一层不通，Hexo 部署当然也不会通。

## 5. 部署成功，但网页还是旧内容

先：

```bash
hexo clean
```

再重新：

```bash
hexo g && hexo d
```

然后等待 GitHub Pages 完成更新。

浏览器端也可以尝试：

```text
Ctrl + F5
```

进行强制刷新。

如果还是不对，再去 GitHub 仓库里看提交时间是否更新。

这样可以判断到底是：

- Hexo 根本没有部署成功；
- GitHub Pages 还没更新；
- 还是单纯浏览器缓存。

## 6. 修改 Butterfly 配置后没有变化

先确认自己改的是哪个 `_config.yml`。

Hexo 博客里经常会同时出现多个配置文件，最容易发生的事情就是：

> 改了半天，结果改错文件了。

另外，每次改完主题配置后建议：

```bash
hexo clean && hexo g && hexo s
```

避免旧缓存继续影响页面。

## 7. 图片本地正常，部署后裂了

这是非常常见的问题。

Windows 本地文件路径：

```text
C:\Users\xxx\Pictures\1.png
```

对互联网上的网页没有任何意义。

网站上的图片最终必须能够通过 URL 或站点资源路径被浏览器访问。

比较常见的方案有：

- 放到 Hexo 的 `source` 目录中；
- 使用图床；
- 使用文章资源文件夹；
- 使用对象存储等外部资源服务。

这也是我自己早期折腾博客时踩过比较久的一个坑。刚开始会觉得“图片明明就在我电脑里，为什么网页找不到”，等真正理解 Hexo 构建后的目录和浏览器访问路径之后，就会突然发现这件事其实很合理。

# 从“搭出来”到“真正属于自己”

到这里，教程最基础的目标已经完成了。

但如果你去看那些真正做了很多年的个人博客，会发现搭建 Hexo 其实只是第一步。

后面才是最容易让人上头的部分。

你可以开始一点点修改：

- 网站头像、图标、背景图；
- 首页顶部大图；
- 导航栏；
- 文章封面；
- 侧边栏；
- 页脚；
- 友链页面；
- 评论系统；
- 音乐播放器；
- 自定义字体；
- CSS 动画；
- JavaScript 交互；
- AI 搜索；
- 访问统计；
- 自定义域名；
- 国内访问优化；
- 性能优化；
- 自己开发真正属于这个站点的小功能。

一开始我也只是觉得“把默认主题换掉就差不多了”。

但真正看到别人博客里那些非常自然的交互、动态效果和属于站长自己的细节以后，就很容易产生一种非常危险的想法：

> “这个好像也不是不能自己做。”

然后打开开发者工具，开始看 HTML；看完 HTML 又开始改 CSS；改着改着发现还得写 JS；再往后就开始研究部署、缓存、CDN、域名……

博客就是这样一点点把人拖进坑里的。

但我觉得这是一个很值得掉进去的坑。

XBXyftx 的博客就是一个很典型的例子。他并不是停留在“装完 Butterfly”这一层，而是不断记录自己对博客的修改：从页面交互、Butterfly 效果，到国内访问、部署方案，再到后面持续做性能优化。看他的博客时，我最大的感受其实不是“这个功能真炫”，而是**一个个人网站真的可以随着站长自己的学习不断生长。**

这也是我现在更愿意把博客理解成“长期项目”，而不是一次课程作业的原因。

# 关于 AI：别让它替你复制命令，让它帮你理解问题

现在搭博客和以前最大的区别之一，可能就是我们有 AI 了。

以前遇到一个报错，常见流程是：

```text
复制报错 -> 百度/CSDN -> 打开十几个页面 -> 一个个试
```

现在可以先把问题交给 AI 分析。

但我非常不推荐这种问法：

```text
Hexo报错了怎么办？
```

这基本等于没提供信息。

更好的方式是：

```text
我正在 Windows 11 上搭建 Hexo。
Node 版本是 xxx，Git 版本是 xxx。
我在 D:\blog 下执行 hexo init 时出现以下报错：
（完整粘贴报错）
前一步我已经确认 github.com 可以访问，git --version 正常。
请帮我判断问题发生在哪一层，并一步一步给我排查。
```

你会发现回答质量完全不是一个级别。

AI 最有用的地方，不是代替你无脑复制命令，而是帮你快速梳理：

> **现在已经知道什么、缺什么信息、下一步最应该验证什么。**

这其实也是以后做项目、排查服务器问题甚至写代码时非常重要的一种能力。

# 后续可以继续折腾什么

如果基础博客已经跑通，我建议不要一次把所有东西都装上。

先写几篇文章，慢慢熟悉结构，再逐步增加功能。

可以按照这个顺序继续：

## 第一阶段：先让博客真正“像你”

- 修改站点标题、头像、简介；
- 修改主题色；
- 修改首页大图；
- 配置菜单；
- 做一个关于页；
- 加入自己的社交链接。

## 第二阶段：让博客更好用

- 搜索；
- 文章目录；
- 代码复制按钮；
- 评论；
- 友链；
- RSS；
- 文章更新时间；
- 图片懒加载。

## 第三阶段：开始真正折腾

- 自定义 CSS；
- 自定义 JavaScript；
- 首页卡片样式；
- 动态背景；
- 打字机效果；
- 自定义弹窗；
- 自己写小组件；
- 接入 API；
- AI 搜索 / Agent；
- 性能优化；
- 自定义域名和访问加速。

到这一步以后，其实已经很难说你是在“搭博客”还是在“做一个网站项目”了。

而这往往才是最好玩的地方。

# 结语

最开始写这篇教程的时候，它对我来说更多是一份小学期开源实践的记录。

但后来重新整理这篇文章时，我越来越觉得，搭建一个博客本身其实没有多难。

真正有意思的，是搭好以后发生的事情。

你会因为想改一个按钮第一次认真去看 CSS；会因为图片加载不出来第一次理解网页路径；会因为 GitHub 连接失败去研究 SSH；会因为访问速度不理想开始接触域名、DNS、CDN；也可能只是因为某天突然想记录一点什么，于是认真坐下来，把自己这一段时间的经历写成一篇文章。

这些事情单独拿出来看可能都很小。

但时间拉长以后，它们会一点点堆在一起。

几年之后再打开自己的博客，你看到的可能早就不只是几十篇文章，而是一条非常清楚的成长轨迹：自己曾经对什么感兴趣、遇到过什么问题、做过哪些项目、认识了哪些人、又在什么时候突然改变了想法。

我很喜欢个人博客的一点就是，它允许我们保留这些东西。

不是为了流量，也不一定为了给谁看。

有些文章可能根本没几个人点开，有些折腾最后甚至没有真正派上用场，但只要这个过程让自己学到了东西、留下了记忆，我觉得就已经足够了。

实践虽小，内涵极大。

博客当然只是一个起点。

但未来每一次写下的文字、每一次解决掉的报错、每一个折腾出来的小功能，都会被它老老实实地记录下来。

等某一天再回头看时，也许你会发现：

原来自己真的已经走了很远。

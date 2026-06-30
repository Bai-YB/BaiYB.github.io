---
title: 基于Hexo框架搭建个人博客
date: 2025-06-27 22:39:04
tags:
- 博客搭建
categories: Hexo  # 文章分类
description: 开源的实践活动 # 可选，文章的摘要信息
cover: https://i1.mcobj.com/uploads/20220112_71ce4921653f8.jpg  # 文章封面图片（适用于部分主题）
top_img: https://img.baiyb.top/file/blog/1771128027478_qqansv7wmrkglaycwaao7t0zf0zhdfg.png # 页面顶部图片（适用于不同主题）
banner: https://img.baiyb.top/file/blog/1771128027478_qqansv7wmrkglaycwaao7t0zf0zhdfg.png  # 备用顶部图片字段
thumbnail: https://i1.mcobj.com/uploads/20220112_71ce4921653f8.jpg # 备用封面图片字段
---
# 序言
## 前言
2025年夏季小学期的开源软件开发课程，第一个实践即是Hexo个人博客的搭建，虽然我的博客在此之前已经搭建好了，但在帮别的同学搭建博客之时，仍碰到许多报错或问题。故写一篇教程，记录搭建过程中遇到的问题及解决办法，希望能对后来者有些许帮助吧。
> 注意！<br>
> **请保证自己的电脑可以连接到`github.com`**<br>
> **请保证自己会正确的使用AI，如 `ChatGPT` 或 `DeepSeek`**<br>
> **由于我手头只有Windows设备，且绝大部分同学都是Windows系统，故该教程以`Windows系统`为基础**<br>

## 声明
本教程不保证包教包会，仅提供搭建过程中的参考。<br>
在面对报错或无法解决的问题时，可先查询后文中的`常见问题`板块。<br>
若问题仍无法解决，可参考：[Hexo的官方文档](https://hexo.io/zh-cn/docs/)。并询问AI获取帮助。

## 致谢
感谢以下同学与工具的帮助：<br>
- XBX：提供了基础教程【[点击访问网页](https://xbxyftx.github.io/2025/01/26/butterfly%E4%B8%BB%E9%A2%98%E7%BE%8E%E5%8C%96/)】，本文在其基础上进行排障。<br>
- ZXJC：提供了基础教程【[点击查看PDF文件]( /download/Hexo-Bulider.pdf )】，在搭建过程中发现并一同解决了一些问题。<br>
- ChatGPT：在看到让人头大的报错时救我一命。<br>



# 工具安装与准备工作
nodejs、git、注册github账号
## nodejs安装
官方下载链接：[https://nodejs.org/en](https://nodejs.org/en)<br>
压缩包（可能不是官网最新版）：【[点击下载](/download/node-v22.16.0-win-x64.zip)】<br>
教程视频：【[Nodejs安装零基础教程2025](https://www.bilibili.com/video/BV1sbjgzwEBX/?share_source=copy_web&vd_source=76ef81a3c7f598cf017a43cc75c2cf93)】<br>
## git安装
官方下载链接：[https://git-scm.com/download/win](https://git-scm.com/download/win)<br>
安装包（可能不是官网最新版）：【[点击下载](/download/Git-2.50.0-64-bit.exe)】<br>
视频教程：【[在Windows上安装git](https://www.bilibili.com/video/BV1vM4m1Q7hC/?spm_id_from=333.337.search-card.all.click&vd_source=754fdfd19d49323af99603a90c4dbb56)】<br>
## github账号注册
官方注册链接：[https://github.com/join](https://github.com/join)<br>
视频教程：【[GitHub注册账号](https://www.bilibili.com/video/BV1eE421M7Wr/?share_source=copy_web&vd_source=76ef81a3c7f598cf017a43cc75c2cf93)】<br>


# Hexo框架部署
现在我们已经配置好了基础工具，接下来我们需要安装Hexo框架。<br>
## Hexo安装
### Step1：选择一个你喜欢的文件夹
选择一个你喜欢的文件夹作为日后存放博客核心和博文的仓库<br>
可以是`D:\blog`，也可以是`E:\blog`，也可以是`F:\blog`。<br>
> 注意！无论你想将文件夹创立在什么地方，请务必保证文件夹内是空的，且路径最好不要存在中文，否则会产生异常报错。
![](https://free.picui.cn/free/2025/06/27/685ebb6fa1f75.png)<br>

### Step2：安装Hexo
在文件夹内右键，打开`git bash`<br>
![](https://free.picui.cn/free/2025/06/27/685ebc36e2319.png)<br>
全局安装Hexo，输入以下命令：
```
npm install -g hexo-cli
```
![](https://free.picui.cn/free/2025/06/27/685ebd1c022db.png)<br><br><br>
验证Hexo是否正常安装，输入以下命令：
```bash
hexo -v
```
![](https://free.picui.cn/free/2025/06/27/685ebd705f1c7.png)<br>
如果出现该页面，说明Hexo安装成功，可以进行下一步啦！<br><br><br>

### Step3：初始化Hexo
在`git bash`内输入以下命令：
```bash
hexo init
```
![](https://free.picui.cn/free/2025/06/27/685ebe36de35b.png)<br>
显示如上图所示页面，说明初始化成功<br>
> 有的电脑会报错，`disconnect with github`<br>
> 此时，下载此压缩包，并将里面的内容解压到你的博客文件夹内，即可解决问题。<br>
> 压缩包链接：[Hexo-files.zip](/download/Hexo-files.zip)
> 解压后，将压缩包内的所有文件复制到你的博客文件夹内，即可解决问题。<br>
> ![](https://free.picui.cn/free/2025/06/28/685ec0922708a.png)<br>

<br><br>

### Step4：本地部署Hexo
在`git bash`内输入以下命令：
```bash
hexo g && hexo s
```
![](https://free.picui.cn/free/2025/06/28/685ec1be5412c.png)<br>
按住`ctrl`，点击`http://localhost:4000/`，即可在浏览器中查看博客<br>
![](https://free.picui.cn/free/2025/06/28/685ec204680d3.png)<br>
在浏览器中出现这个界面，就说明我们已经在本地完整的部署了Hexo<br>
此时，回到`git bash`中，按下`ctrl + c`关闭本地部署页面，从而进行下一步<be><be><be>

## 部署到GitHub
此时，我们只能在本地访问Hexo博客，但是想让别人访问我们的博客，需要将博客部署到线上，这里选择github来托管我们的博客<br>
### Step1：创建仓库
打开`GitHub`，找到如下部分，点击`New`<br>
![](https://free.picui.cn/free/2025/06/28/685ec8dd4d9b9.png)<br>
按如下步骤操作：<br>
![](https://free.picui.cn/free/2025/06/28/685ecb6200cf6.png)<br><br><br>

### Step2：本地配置SSH Key
返回`git bash`，分别输入下列命令：<br>
```bash
git config --global user.name 你的用户名           # 配置个人信息-username
```
```bash
git config --global user.email 你的GitHub邮箱      # 配置个人信息-useremail
```
```bash
ssh-keygen -t rsa -C 你的GitHub邮箱	               # 生成密钥
```
在生成密钥的过程中直接全部回车直到生成成功即可。<br>
按照默认路径生成的密钥都会储存在`C:\Users\用户名\.ssh\id_rsa.pub`<br>
![](https://free.picui.cn/free/2025/06/28/685ece4a3aa3b.png)<br>
右键`id_rsa.pub`文件，用记事本打开，复制里面的全部内容<br>
![](https://free.picui.cn/free/2025/06/28/685ecedd5f095.png)<br>

### Step3：添加SSH Key到GitHub
[https://github.com/settings/ssh/new](https://github.com/settings/ssh/new)<br>
复制该链接到浏览器地址框，并跟随图示配置：<br>
![](https://free.picui.cn/free/2025/06/28/685ed0afee442.png)

### Step4：同步SSH Key到本地git
在`git bash`内输入以下命令：
```bash
eval "$(ssh-agent -s)"
```
```bash
ssh-add ~/.ssh/id_rsa
```
现在，我们测试一下电脑和github的通信，输入以下命令：<br>
```bash
ssh -T git@github.com
```
<br><br>
显示如下提示时，就是电脑可以成功和github通信<br>
![](https://free.picui.cn/free/2025/06/28/685ed1a3e3582.png)

### Step5：修改Hexo配置文件
在博客文件夹内，打开`_config.yml`文件，修改如下内容：<br>
```yml
# Deployment
## Docs: https://hexo.io/docs/deployment.html
deploy:
  type: git
  repo: git@github.com:XXXXX/XXXXX.github.io.git
  branch: main
```
> 注意！修改的时候记得将原来的自带的 `Deployment` 部分完全删掉

修改后如下：<br>
![](https://free.picui.cn/free/2025/06/28/685ed2f67ec06.png)

### Step6：上传博客到GitHub
在`git bash`内输入以下命令：<br>
先安装`hexo-deployer-git`插件，使博客可以上传到GitHub<br>
```bash
npm install hexo-deployer-git --save
```
> 注意！如果没有安装`hexo-deployer-git`插件，上传博客时会报错<br>

一键上传博客到GitHub：<br>
```bash
hexo cl && hexo g && hexo d
```
![](https://free.picui.cn/free/2025/06/28/685ed48168388.png)<br>
显示`INFO Deploy done：git`，说明博客上传成功<br>

在浏览器中输入`https://你的GitHub用户名.github.io`，即可访问博客<br>

![](https://free.picui.cn/free/2025/06/28/685ed5a4144a0.png)
> 第一次部署时间偏长，可以等三五分钟后打开

此时，我们`Hexo`的部署就算是完成了



# Hexo主题配置
hexo的默认主题是`landscape`，相对来说可能没那么好看，这时，我们就可以考虑换hexo主题了<br>
Hexo的主题有很多，可以在这里看：[https://hexo.io/themes/](https://hexo.io/themes/)<br>
这里我们以`Butterfly主题`为例进行教学<br>
## 安装Butterfly主题
在`git bash`中输入以下命令：<br>
```bash
git clone https://github.com/jerryc127/hexo-theme-butterfly.git themes/butterfly
```
显示以下内容，说明安装成功<br>
![](https://free.picui.cn/free/2025/06/28/685ed7f6154bd.png)<br>
> 此处可能会有电脑报错连接超时，下面提供Butterfly主题的压缩包，请按顺序操作：<br>
> [Butterfly主题压缩包](/download/butterfly.zip)<br>
> 将压缩包解压至`themes`文件夹内<br>
> ![](https://free.picui.cn/free/2025/06/28/685ed9994f2a0.png)

## 切换主题
打开博客文件夹内的`_config.yml`文件，修改`theme`为`butterfly`，如下：<br>
```yml
theme: butterfly
```
![](https://free.picui.cn/free/2025/06/28/685eda437e477.png)<br>
> 注意：`theme`后的空格不能省略

## 安装渲染器
**这一步很重要！否则无法正常显示文章内容**<br>
安装 `pug` 和 `stylus` 渲染器，否则启动之后访问页面会报错。<br>
在`git bash`中输入以下命令：<br>
```bash
npm install hexo-renderer-pug hexo-renderer-stylus --save
```
![](https://free.picui.cn/free/2025/06/28/685edad0314ac.png)<br>
显示该反馈时，说明安装成功<br>

## 重新启动Hexo
在`git bash`中输入以下命令：<br>
```bash
hexo cl && hexo g && hexo s
```

![](https://free.picui.cn/free/2025/06/28/685ed48168388.png)<br>
显示`INFO Deploy done：git`，说明博客重新上传至`GitHub`成功<br>
![](https://free.picui.cn/free/2025/06/28/685edc34911dd.png)
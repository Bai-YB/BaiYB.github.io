---
# 文章的前置参数（用于 Hexo 识别和生成博客）
title: 子非鱼-PhishGuard——基于AI的钓鱼网站检测插件  # 文章标题
date: 2025-03-12 14:28:21  # 文章发布时间，格式为 YYYY-MM-DD HH:MM:SS
tags: # 文章标签，可用于分类检索 
  - 技术
  - 油猴
  - 插件
  - AI
categories: 技术类  # 文章分类
description: 一个失败的大创（评分高达59.9），但是在讨论之后还是决定做下去，捎带手学习一下相关知识  # 可选，文章的摘要信息
cover: https://s1.aigei.com/prevfiles/1dccdce85b754afc9cf6ca747f046c87.jpg?e=2051020800&token=P7S2Xpzfz11vAkASLTkfHN7Fw-oOZBecqeJaxypL:2NSvgimDdHcvtmF4RYWt4LNpewE=  # 文章封面图片（适用于部分主题）
top_img: https://img.baiyb.top/file/blog/1771128027478_qqansv7wmrkglaycwaao7t0zf0zhdfg.png # 页面顶部图片（适用于不同主题）
banner: https://img.baiyb.top/file/blog/1771128027478_qqansv7wmrkglaycwaao7t0zf0zhdfg.png  # 备用顶部图片字段
thumbnail: https://s1.aigei.com/prevfiles/1dccdce85b754afc9cf6ca747f046c87.jpg?e=2051020800&token=P7S2Xpzfz11vAkASLTkfHN7Fw-oOZBecqeJaxypL:2NSvgimDdHcvtmF4RYWt4LNpewE=  # 备用封面图片字段
---
# 怎么个事捏
一个失败的大创（评分高达59.9，与上榜失之交臂），但是在讨论之后还是决定做下去，捎带手学习一下相关知识
# 我们的项目地址
https://github.com/Bistu-OSSDT-2025/PhishGuard
# 开发思路
<img src="https://free.picui.cn/free/2025/07/03/6866683476b69.png" alt="开发思路" width="1000">  

<br>  

## 以下是刚做出规时考虑到的东西

- <p style="font-size: 20px;">想法：</p>
1. **AI判断+黑白名单排除**
    >对新网站进行自动化AI检测，检测过的网址则会被加入到黑白名单中，这样可以避免重复检测和误报，同时降低了AI的不必要算力需求

- <p style="font-size: 20px;">问题：</p>
1. **大模型不易本地部署**
    >AI模型的大体量和对算力的要求都非常大，在本地部署会对电脑造成很大的负担，所以需要考虑如何轻量化模型，使其保证精确度的前提下降低对电脑的要求

<br>

# 开发进度
- 准备工作
  - [x] 前期项目规划
  - [ ] 钓鱼网站数据收集
- 前端开发
  - [x] 插件初步开发
  - [x] 插件初步测试 
- 后端开发
  - [x] AI模型训练
  - [x] 模型精度优化
  - [ ] 模型本地化部署
- 前后端整合
  - [ ] 插件集成AI模型
  - [ ] 插件二次测试
- 测试与优化
  - [ ] 插件三次测试
  - [ ] 性能优化
- 文档撰写
  - [x] 项目报告
  - [x] 技术文档
- 发布与维护
  - [x] 发布插件
  - [ ] 维护与更新

# 前端开发

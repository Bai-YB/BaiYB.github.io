---
title: Markdown语法
date: 2025-05-10 11:50:09
tags:
- Markdown
categories: Markdown  # 文章分类
description: 记不住Markdown奇奇怪怪的语法但又不想一遍遍去网上查的产物 # 可选，文章的摘要信息
cover: https://i1.mcobj.com/uploads/20220514_627f595f17da1.png  # 文章封面图片（适用于部分主题）
top_img: https://img.baiyb.top/file/blog/1771128027478_qqansv7wmrkglaycwaao7t0zf0zhdfg.png # 页面顶部图片（适用于不同主题）
banner: https://img.baiyb.top/file/blog/1771128027478_qqansv7wmrkglaycwaao7t0zf0zhdfg.png  # 备用顶部图片字段
thumbnail: https://i1.mcobj.com/uploads/20220514_627f595f17da1.png # 备用封面图片字段
---
# Markdown语言简介与用法
Markdown是一种轻量级标记语言，以简洁的语法和纯文本格式著称，广泛应用于博客、文档编写和笔记记录。它的核心目标是让用户专注于内容，而非复杂的排版操作。Markdown文档可以轻松转换为HTML、PDF等格式，且学习成本极低。

# 基本语法
Markdown的语法简单直观，以下是常见的用法：

## 标题
使用#表示标题，#的数量决定标题级别（1-6级）。
``` markdown
# 一级标题
## 二级标题
### 三级标题
#### 四级标题
##### 五级标题
###### 六级标题
```
## 字体

### 斜体
斜体：用*或_包裹文字。

### 粗体
粗体：用**或__包裹文字。

### 粗斜体
粗斜体：用***或___包裹文字。

## 换行

在行尾添加两个空格或插入一个空行即可换行。

## 引用

使用>表示引用，可以嵌套多层。

> 一级引用
>> 二级引用
## 链接与图片
```markdown
链接：[链接文本](链接地址)

图片：![图片描述](图片地址)
```
## 列表

无序列表：使用*、-或+
```markdown
- 无序项1
- 无序项2
```
有序列表：使用数字加.
```markdown
1. 有序项1
2. 有序项2
```

## 代码块

单行代码用反引号`包裹，多行代码用三个反引号```。
```markdown
`单行代码`
```
`单行代码`
```marddown
print("Hello, Markdown!")
```
## 表格

使用|分隔单元格，-分隔表头和内容。
```markdown
| 项目 | 数量 | 价格 |
| ------ | ---- | ---- |
| 苹果 | 10 | $5 |
| 香蕉 | 20 | $10 |
```
| 项目 | 数量 | 价格 |
| ------ | ---- | ---- |
| 苹果 | 10 | $5 |
| 香蕉 | 20 | $10 |
## 分割线
使用三个或以上的-或*。
```markdown
---
```

## 删除线与下划线

删除线：用~~包裹文字。

下划线：使用HTML标签<u>。
```markdown
~~删除线~~
<u>下划线</u>
```
~~删除线~~<br>
<u>下划线</u><br>

## 引用转跳
```markdown
#### <a id="index-query"></a> 列表的查询功能（.index）
[跳转链接](#index-query)
```
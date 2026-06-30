---
title: Coze
date: 2025-06-26 00:04:52
tags:
- Coze
- Agent
categories: Coze  # 文章分类
description: 2025创客新生赛道之一 # 可选，文章的摘要信息
cover: https://free.picui.cn/free/2025/06/29/68615843b4abd.png  # 文章封面图片（适用于部分主题）
top_img: https://img.baiyb.top/file/blog/1771128027478_qqansv7wmrkglaycwaao7t0zf0zhdfg.png # 页面顶部图片（适用于不同主题）
banner: https://img.baiyb.top/file/blog/1771128027478_qqansv7wmrkglaycwaao7t0zf0zhdfg.png  # 备用顶部图片字段
thumbnail: https://free.picui.cn/free/2025/06/29/68615843b4abd.png  # 备用封面图片字段
---
# 引言
你是否使用过大模型？<br>
是否使用过ChatGPT、Deepseek或豆包辅助日常生活或学习？<br>
但这些大模型都有自己的局限性，都需要用户去输入很多信息，才能得到想要的答案。<br>

- 假如我想知道今天的天气，那么我需要去查；<br>
- 假如我想知道有什么新番，那么我需要去查；<br>
- 假如我想知道最近有什么新闻，我需要去查……<br>

只查一次还好，但为了得到最新消息，我需要不断询问。好麻烦，我不想一个一个查。<br>
有没有什么办法能让我不这么麻烦就能收到这些消息？<br>
<img src="https://free.picui.cn/free/2025/06/26/685c263fbc5ed.jpg" width="150"><br>
你是否有制作小程序或网页的想法，但苦于技术力不足迟迟无法推进？<br>
前端、后端、数据库，全学一遍好麻烦。<br>
有没有什么办法能让我轻松制作小程序或网页？<br>
<img src="https://tse3.mm.bing.net/th/id/OIP.4i-Pyq-xfWiY5k5mYNuxSwAAAA?r=0&rs=1&pid=ImgDetMain&o=7&rm=3" width="150"><br>
在过去，想实现这些功能，需要用户自己搭建服务器，还需要用户自己写代码，显然对用户不友好。<br>
但现在，`Coze`的出现，让我们有了新的选择。<br>



# 什么是`Coze`？
`Coze` 是字节跳动（ByteDance）推出的一款 **AI 机器人创建平台**，类似于 ChatGPT，但更偏向于低代码构建智能助手。<br>
你可以理解为一个面向开发者和普通用户的 “搭积木式” AI 机器人搭建平台。<br>
> 简单地说，`Coze`就是集合了好多大模型的平台，并且可以让大模型彼此交互，产生的数据可以存储也可以输出。(包括前后端哦)


这可太好了，比起什么`"爬虫"、"代码"`，搭积木的形式更适合现在低技术力的我们！<br>
<img src="https://tse2-mm.cn.bing.net/th/id/OIP-C.Jd8NiGm3eiL52IbcdMLSqQAAAA?r=0&rs=1&pid=ImgDetMain" width="150">



# Coze功能初认识
## 注册账号
想使用Coze，首先要注册一个账号。<br>
这是Coze的官网：https://www.coze.cn/<br>
注册流程如下：<br>
![7f95a124d32529229aa7f1381ecc054.png](https://free.picui.cn/free/2025/06/26/685c2de187df9.png)<br><br><br>
此时，我们身处于`coze`的主页<br>
## 新建工作流
我们点击`开发平台`-`快速开始`-`新建应用`-`空白模板`来进入项目界面<br>
![微信图片_2025-08-05_095941_189.png](https://free.picui.cn/free/2025/08/05/68916586a1c4f.png)<br><br><br>
在项目页面内创建`工作流`<br>
![微信图片_2025-08-05_100802_827.png](https://free.picui.cn/free/2025/08/05/689167a108444.png)<br><br><br>
此时我们就在工作流页面了
![8cd5a0a3ec50e2930eee20c1b9d3835f.png](https://free.picui.cn/free/2025/08/05/689168824aa45.png)<br><br><br>

## 节点
Coze工作流的运行一两，依赖于各个节点的相互配合，所以学会各个节点的使用（其实大部分就行）至关重要<br>
<img src="https://tse1-mm.cn.bing.net/th/id/OIP-C.dsTlNgjmRblzmtaYntlB_wAAAA?w=132&h=150&c=7&r=0&o=5&dpr=1.3&pid=1.7" width="150"><br>
这里我会以各个板块为单位，介绍一下常用节点的使用方法。<br>
<img src="https://free.picui.cn/free/2025/08/05/68916a9d3d645.png" width="200"><br><br><br>

### 大模型
![1754556565934.png](https://free.picui.cn/free/2025/08/07/6894688638d1b.png)<br>
如果将工作流视为一个人，那么大模型就是这个人的脑子，负责对输入的信息进行整理回答<br>
关于大模型的设置，我们可以看到侧边栏有如下几个板块
- 模型：不同的模型对信息的处理能力和速度都不同，选择最适合该工作流的大模型有助于工作流的运行
- 技能：为大模型添加本身没有的功能，例如url访问（访问链接）等等
- 输入：Coze采用了MCP协议（模型上下文协议，将连接的节点内的数据由前到后进行共享）
  - 变量名：为引入的变量重新命名
  - 变量值：引入上游节点中的变量
- 视觉理解输入：这个模块和输入模块基本相同，只是变量值只能引入`image`（图片）
- 系统提示词：由工作流的创建者填写，主要目的为控制模型行为/角色/语气等元信息
- 用户提示词：由用户主动填写的内容，在这里，我们可以直接引用`输入`的内容，格式如`{{变量名}}`
- 输出：将大模型生成的内容进行输出
 - 变量名：为即将输出的内容命名
 - 变量类型：一般使用`string`（字符串），其他内容可以摸索摸索，但是基本用不到
- 异常处理：负责安排模型调用失败后的处理方式（这个日常不用额外调节）

### 插件
<img src="https://free.picui.cn/free/2025/08/07/689471c05f839.png" width="500"><br>
打开插件页面，内置的插件商场提供了各种软件或功能的调用接口，按需自行调用就可以了

### 工作流
<img src="https://free.picui.cn/free/2025/08/07/6894728b49c9b.png" width="500"><br>
若你有两个及以上的工作流需要相互配合，例如想在A工作流中调用B工作流进行工作，那么就可以使用该节点进行工作流的嵌套使用

### 业务逻辑

#### 代码
![1754560193190.png](https://free.picui.cn/free/2025/08/07/689476b17f0ca.png)<br>
<span style="color:red">注意！！！该模块的使用需要你有一定的`Python`或`JavaScript`基础</span><br>

```python
# 在这里，您可以通过 'args'  获取节点中的输入变量，并通过 'ret' 输出结果
# 'args' 已经被正确地注入到环境中
# 下面是一个示例，首先获取节点的全部输入参数params，其次获取其中参数名为'input'的值：
# params = args.params; 
# input = params['input'];
# 下面是一个示例，输出一个包含多种数据类型的 'ret' 对象：
# ret: Output =  { "name": '小明', "hobbies": ["看书", "旅游"] };

async def main(args: Args) -> Output:
    params = args.params
    # 构建输出对象
    ret: Output = {
        "key0": params['input'] + params['input'], # 拼接两次入参 input 的值
        "key1": ["hello", "world"],  # 输出一个数组
        "key2": { # 输出一个Object 
            "key21": "hi"
        },
    }
    return ret
```
![1754560672069.png](https://free.picui.cn/free/2025/08/07/689478908ec80.png)<br>
这里需要代码和输出变量相互配合，自行了解即可<br>
>by the way，好好利用ai自动生成代码可以帮你省去很多事

#### 选择器
![1754561160231.png](https://free.picui.cn/free/2025/08/07/68947a78c0f89.png)<br>
这个节点负责判断条件是否符合要求，符合则进入分支1，不符合则进入分支2<br>

#### 意图识别
![1754559760043.png](https://free.picui.cn/free/2025/08/07/689475006709f.png)<br>
这个节点负责帮助我们判断用户的目的，通过`意图匹配`模块主动配置几个目的，自动调用大模型分析用户的需求<br>
>如图所示，若用户的需求是`退货`，则结束时输出`1`；若用户需求是`换货`，则结束时输出`2`，以此类推……<br>
>用户输入和预设不匹配时，输出`0`

#### 循环
![1754561710017.png](https://free.picui.cn/free/2025/08/07/68947c9f4d54b.png)<br>
按照用户自己的设置进行循环，输出循环体内的结果<br>

#### 批处理
![1754563786797.png](https://free.picui.cn/free/2025/08/07/689484c139554.png)<br>
设定批量处理，从而快捷的完成多项任务<br>
举个例子，我有十件衣服要洗，一件一件洗的速度肯定没有丢到洗衣机里一起洗快，而批处理就是这台洗衣机<br>
- 批处理要处理的是一批数据，所以输入的一定是一个数组，也就是`Array`下的变量类型才能被正确引用
- 批处理体内调用的数据最好是批处理的输入内容

#### 变量聚合
![1754564575515.png](https://free.picui.cn/free/2025/08/07/689487d014963.png)<br>
变量聚合，就是对多个分支的输出进行聚合处理<br>
你可以创建多个`Group`，每个组里可以有很多`数据类型相同`的数据，变量聚合会输出每个`Group`中第一个有内容的数据
>一般使用场景：一个节点后平行接入多个功能相似，但只调用一个的节点，再接入变量聚合后，可以将多个节点中唯一输出的值输出，不需要接多个输出端

### 输入&输出
这个没啥好说的了，就是在工作流中输入或输出数据<br>

### 数据库
由于数据库里包含太多SQL的调用规则和语法，不太适合新手操作，这里不做详解，有想使用的请自行查询使用方法
<img src="https://ts2.tc.mm.bing.net/th/id/OIP-C.MCuKvVjG4LFxz0YWJQEKZwAAAA?r=0&rs=1&pid=ImgDetMain&o=7&rm=3" width="150"><br>

### 知识库&数据
我们可以创建一个知识库来存储我们预定好的知识体系<br>
假设我们想制作一个校园助手，就可以将校园内的各种信息打包成知识库，在用户提问时调用知识库更精确的回答<br>
<img src="https://free.picui.cn/free/2025/08/08/6895b0e89f00b.png" width="500"><br>

#### 知识库检索
<img src="https://free.picui.cn/free/2025/08/08/6895b6ad08ff4.png" width="500"><br>

顾名思义，就是查询知识库里的内容，并返回一个查询到的信息<br>
> 如图所示，将小明的个人信息放进知识库中，此时我们输入“小明喜欢打什么球”，查询知识库后返回已有的信息：“小明喜欢打篮球”

#### 知识库写入
![1754642322742.png](https://free.picui.cn/free/2025/08/08/6895b78285858.png)<br>
本小节的一开始，我们提到了自己创建知识库，而`知识库写入`这个节点，则可以由用户上传文件并生成知识库，辅助用户更精准的了解一些离线信息<br>
![1754642619998.png](https://free.picui.cn/free/2025/08/08/6895b8ac0f25e.png)<br>
将用户提供的信息（必须要求以文件形式）上传至知识库中

#### 知识库删除
![1754642763470.png](https://free.picui.cn/free/2025/08/08/6895b93b2bf1b.png)<br>
若你在一个知识库中上传了多个文件，但此时你想移除某个文件中的内容，可以输入文件对应的编号从而从知识库中移除

#### 变量赋值
![1754707354124.png](https://free.picui.cn/free/2025/08/09/6896b587aa3ae.png)<br>
该节点的作用：为一个`全局变量`赋值（全局变量，可以理解为一张公交卡，所有的刷卡机（应用节点）都认识这张卡，但是持卡人（全局变量的赋值）可以更改）

### 图像处理

#### 图像生成
![1754707290860.png](https://free.picui.cn/free/2025/08/09/6896b5492999a.png)<br>
打开侧边栏的设置页面，可以配置关于图像生成的一些关键点<br>
- 模型：不同的特调模型，对各个领域更精准
- 比例：最后成品的大小，单位为像素
- 质量：数值越大图片越精细，范围[1-40]
- 参考图：模型会根据已有的参考图
- 提示词
  - 正向提示词：用户对画面的要求，依旧可以使用`{{输入}}`的方式加载用户输入的内容
  - 反向提示词：使画面减少或不出现一些创作者不想在画面中出现的内容，例如：比例错误，肢体错误……

#### 画板
![1754708310996.png](https://free.picui.cn/free/2025/08/09/6896b9450612f.png)<br>
开发者可以自定义画板的模板，通过引入不同的数据来更改画板内预设的内容（用得不多）<br>
详情可以查询这个视频【[Coze平台实战教程51-工作流画板节点](https://www.bilibili.com/video/BV1FAcUeFEda/?share_source=copy_web&vd_source=76ef81a3c7f598cf017a43cc75c2cf93)】

#### 抠图
![1754708736640.png](https://free.picui.cn/free/2025/08/09/6896baefd7a2b.png)<br>
可以对传入的图片进行抠图处理，最后的输出结果为`透明背景图`或`矢量蒙版图`

#### 提示词优化
![1754708852442.png](https://free.picui.cn/free/2025/08/09/6896bb62b34c4.png)<br>
将用户的提示词进行优化，示例如下：<br>

```Json
{
  "prompt": "1girl"     //原始输入
}
```
```Json
{
  "data": "1girl, best quality, ultra-detailed, masterpiece, realistic photo, happy expression, sunny day, green field, soft lighting, vivid colors",       //优化后输出
  "msg": "success"
}
```

#### 画质提升
![1754709014256.png](https://free.picui.cn/free/2025/08/09/6896bc04b5ca3.png)<br>
画质提升，也就是日常说的`超分`（超分辨率），旨在提升画面精细度，同时也会使图片的存储体积变大

### 音视频处理
#### 视频生成
我没VIP啊，这个真教不了:(

#### 视频提取音频
![1754709204554.png](https://free.picui.cn/free/2025/08/09/6896bcc2a71f2.png)<br>
就是单纯的把视频里的音频提取出来，单独生成一个文件

#### 视频抽帧
![1754709537016.png](https://free.picui.cn/free/2025/08/09/6896be0eeceff.png)<br>
全自动视频抽帧插件
# 结语
希望大家可以在这次训练营中有所收获，并运用到未来的学习生活中！对教程有问题或有别的想问的，可以私信我或在评论区留言，看到会及时回复！
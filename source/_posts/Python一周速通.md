---
title: Python一周速通
date: 2025-06-15 18:00:24
top: 1
tags:
- Python
categories: Python  # 文章分类
description: 放假啦，无聊，一周学一门语言 # 可选，文章的摘要信息
cover: https://img.baiyb.top/file/blog/python/1771127778225_1_IJ9imR4lqiGXj4053-r3YA.webp  # 文章封面图片（适用于部分主题）
top_img: https://img.baiyb.top/file/blog/1771128027478_qqansv7wmrkglaycwaao7t0zf0zhdfg.png # 页面顶部图片（适用于不同主题）
banner: https://img.baiyb.top/file/blog/1771128027478_qqansv7wmrkglaycwaao7t0zf0zhdfg.png  # 备用顶部图片字段
thumbnail: https://img.baiyb.top/file/blog/python/1771127778225_1_IJ9imR4lqiGXj4053-r3YA.webp # 备用封面图片字段
---
# 声明
这篇博客完整记录了7天速通Python的过程，下面是在自学期间使用到的资料链接<br>
- [【菜鸟教程-Python】](https://www.cainiaojc.com/python/python-tutorial.html)
- [【黑马程序员python教程，8天python从入门到精通，学python看这套就够了】](https://www.bilibili.com/video/BV1qW4y1a7fU?spm_id_from=333.788.videopod.episodes&vd_source=754fdfd19d49323af99603a90c4dbb56)



# 安装Python以及PyCharm
很重要！但是就不详细说明了，下面是安装视频链接，安装版本最新的即可<br>
[【Python安装视频】](https://www.bilibili.com/video/BV1qW4y1a7fU/?p=4&share_source=copy_web&vd_source=76ef81a3c7f598cf017a43cc75c2cf93)<br>
[【PyCharm安装视频】](https://www.bilibili.com/video/BV1qW4y1a7fU/?p=11&share_source=copy_web&vd_source=76ef81a3c7f598cf017a43cc75c2cf93)（最新版和视频里的版本有安装的时候有一点小区别，不要在意）






# 字面量
定义：被写下来的***固定的值***<br>
![python字面量](https://free.picui.cn/free/2025/06/15/684ee3333657d.png)<br>
看着有好多，但是主要学的就是标红的三个部分，其他可以了解一下
>如果有学习过其他语言的基础，可以发现很熟悉的 int float和string

我们分门别类的说一下
## <span style="font-size: 24px; font-weight: bold;">整数（int）</span><br>
所有整数<br>
在代码中，整数直接写，例如：100，-10，0等
> 这边要注意，若想将10赋值到**变量a**，直接写a=10即可，不存在int a=10这种写法<br>
> 但存在int()函数，可以将其他数据类型转换为整数，例如
> ```python
> a = int(10.5)
> print(a)  # 输出10,而非10.5
> ```
## <span style="font-size: 24px; font-weight: bold;">浮点数（float）</span><br>
所有小数<br>
在代码中，浮点数直接写，例如：1.0，-1.0，0.0等
## <span style="font-size: 24px; font-weight: bold;">字符串（string）</span><br>
被单引号`'内容'`、双引号`"内容"`或三引号`"""内容"""`包裹的文本数据<br>
其中，单引号和双引号没有任何本质上的区别，将一行内容转化为字符串。但三引号可以将多行内容转换为字符串
## <span style="font-size: 24px; font-weight: bold;">代码展示</span><br>
```python
print(10)
print(10.1)
print('这是10')
print("这也是10")
print("""这是三引号包裹的字符串
可以写很多行""")
```
输出
```
10
10.1
这是10
这也是10
这是三引号包裹的字符串
可以写很多行
```



# 注释
定义：对代码进行解释说明，帮助自己或别人看得懂自己的代码<br>
（对你没听错，包括自己，当你翻到自己之前写的神秘代码却忘了写的是啥的时候，没有注释真的会死的）<br>
- 单行注释：以#开头，#后面的内容不会被解释器执行
- 多行注释：以'''开头和结尾，'''中间的内容不会被解释器执行，可以写很多行
> 注意：多行注释不能嵌套使用

例如：
```python
'''
这是多行注释
这是多行注释
'''

#单行注释可以以任何位置为起点，但只会注释掉#后面的内容
print("hello world")    # 这是单行注释
```



# 变量
定义：就是在程序运行的时候记录数据的<br>
格式：变量名称 = 变量值<br>
![变量格式](https://free.picui.cn/free/2025/06/15/684eedc9a5efa.png)
```python
money = 10
print("钱包还有：",money,"元")    #print函数可以输出多个内容，用逗号隔开
```
```output
钱包还有： 10 元
```
变量，既然叫做变量，那么说明变量是可以变化的，也就是说变量的值是可以改变的！<br>
>python支持加减乘除等运算，直接用运算符+ - * /即可<br>

例如我花了五块钱买了一个冰激凌
```python
money = 10
print("钱包还有：",money,"元")    #输出钱包还有： 10 元
money = money - 5                #程序将先运算money-5，再将该值赋给money
print("钱包还有：",money,"元")    #输出钱包还有： 5 元
```



# 数据类型
之前我们提到了，python支持多种不同的数据类型，例如整数int、浮点数float、字符串string等等<br>
同时，我们也学到了使用变量来记录数据<br>
如果我想知道变量所储存的数据类型，该怎么办呢？<br>
python给了我们type()函数，可以用来查看数据类型<br>
例如：
```python
a = 10
print(type(a)) 
```
输出：
```
<class 'int'>
```
表明变量a存储的值的数据类型是int，即整数
><span style="color:red">一定要注意！！！变量本身没有类型！有类型的是变量存储的数据！！！</span>



# 标识符
定义：用户在编程过程中起的名字，用于给变量、类等命名<br>
在Python中，起名字有三大规定：
- 内容限定
- 大小写敏感
- 不能是关键字

下面我们分别解释一下
## <span style="font-size: 24px; font-weight: bold;">内容限定</span><br>
在Python中，标识符的内容限定为：
- 由字母、数字、下划线组成
- 不能以数字开头
- 标识符不能包含空格

例如`a`/`a1`/`a_1`/`_a1`都是合法的标识符<br>
但如`1a`/`a 1`这种，是明显违反内容限定的，并非标识符
## <span style="font-size: 24px; font-weight: bold;">大小写敏感</span><br>
python对大小写的要求很严格，具体如下
```python
andy = "安迪1"
Andy = "安迪2"
print(andy)
print(Andy)
```
输出
```
安迪1
安迪2
```
可以看到，只是一个大小写的区别，导致的输出结果就不同
## <span style="font-size: 24px; font-weight: bold;">不能是关键字</span><br>
比如`print`这种，是python自带的命令，我们不能将其设置为关键字<br>
但如果设置为`Print`，python解释器会认为这是两个不同的标识符，不会报错，这也体现了python对标识符大小写敏感的特性



# 运算符
这个板块过于简单，附一张图自己看就好了<br>
![运算符](https://free.picui.cn/free/2025/06/16/684fc67ec8063.png)



# 字符串[详细]
## <span style="font-size: 24px; font-weight: bold;">字符串的三种定义方式</span><br>
被单引号`'内容'`、双引号`"内容"`或三引号`"""内容"""`包裹的文本数据<br>
其中，单引号和双引号没有任何本质上的区别，将一行内容转化为字符串。但三引号可以将多行内容转换为字符串
```python
print('这是10')
print("这也是10")
print("""这是三引号包裹的字符串
可以写很多行""")
```
输出
```
这是10
这也是10
这是三引号包裹的字符串
可以写很多行
```
## <span style="font-size: 24px; font-weight: bold;">字符串的引号嵌套</span><br>
假如我想将一句话转化为字符串，但是里面出现了引号，这该怎么办呢？<br>
`I'm good in python`，`She says "I am good in python"`，`He says "I'm good in python"`<br>
下面有几个解决方案<br>
 - 针对`I'm good in python`，不难发现句子里没有双引号，所以我们可以直接用双引号定义字符串
 - 针对`She says "I am good in python"`，不难发现句子里有双引号，但是没有单引号，所以我们可以用单引号定义字符串
 - 针对`He says "I'm good in python"`，不难发现句子里既有双引号，又有单引号，所以我们可以用转转移字符`\`来辅助定义字符串
```python
print("I'm good in python")
print('She says "I am good in python')
print("He says \"I\'m good in python\"")
```
其中，方案三泛用性最强
## <span style="font-size: 24px; font-weight: bold;">字符串的拼接</span><br>
现在，我有两个字符串，分别是`"我是"`和`"Python高手"`，那该怎么将他们拼接起来呢？<br>
很简单，用`+`即可
```python
a = "我是"
b = "Python高手"
print(a+b)
print("我说：",a+b)
```
输出
```
我是Python高手
我说： 我是Python高手
```
>但要注意！Python中，字符串只能和字符串拼接，不可以和其他类型拼接！

## <span style="font-size: 24px; font-weight: bold;">字符串格式化</span><br>
上面讲到了字符串的拼接，但是这个时候我们会发现：
- 如果要拼接比较长的一句话，要写很多加号，不优雅
- 不能和其他类型拼接，不好使

那有没有什么好的办法呢？<br>
答案是有的，这就是字符串格式化<br>
字符串格式化，先在一个字符串内，用`%s`来表示一个字符串占位符，然后用`%`后面的参数来代替占位符<br>
例如：
```python
a = "我是"
b = "Python高手"
print("%s是Python高手" % a)
print("我说：%s%s" % (a,b))
```
输出
```
我是Python高手
我说：我是Python高手
```
字符串格式化，究其本质，就是将`%`后面的内容格式化为字符串，并插入预留好的`%s`处<br>
这时，我们惊喜的发现，整数、浮点数等不是字符串格式的，也可以用字符串格式化的方法来格式化<br>
例如：
```python
a = 10
print("我说：我有%d元" % a)
```
输出
```
我说：我有10元
```
但是整数、浮点数这种别的类型，都被转换成了字符串，好用是好用，但是没了原来的味道<br>
其实，还是有别的方法的：
![格式表](https://free.picui.cn/free/2025/06/16/684fd0efef061.png)
解释一下：
- `%s`：表示字符串占位符 s = string
- `%d`：表示整数占位符   d = int
- `%f`：表示浮点数占位符 f = float

🌟 **关键区别总结**
| 占位符 | 接受类型       | 小数处理                 | 精度控制 | 非数字兼容性   |
|--------|---------------|--------------------------|----------|----------------|
| `%s`   | **任意类型**  | 原样输出                 | ❌不支持   | ✅ 自动转换     |
| `%d`   | **仅整数**    | 丢弃小数（非四舍五入）   | ❌不支持   | ❌ 报错         |
| `%f`   | **数字类型**  | 保留小数                 | ✅ 支持（默认保留 6 位小数）  | ❌ 报错|

### <span style="font-size: 24px; font-weight: bold;">字符串格式化的精度控制</span><br>
我们可以使用辅助符号`"m.n"`来控制数据的宽度和精度<br>
- `m`，控制宽度，要求是数字(很少使用),设置的宽度小于数字自身，不生效<br>
  示例：
  ```python
  a = 10
  print("%5d" % a)
  ```
  输出
  ```
  [空格][空格][空格]10        #将不足5位的数字，用空格补齐到5位
  ```
- `.n`，控制小数点精度，要求是数字，会进行小数的四舍五入<br>
  示例：
  ```python
  a = 10.45678
  print("%.2f" % a)
  ```
  输出
  ```
  10.46               #将小数点后保留2位，进行四舍五入，不足5位，前面补空格
  ```

结合`m.n`，即控制长度，又控制精度
  ```python
  a = 10.45678
  print("%5.2f" % a)
  ```
  输出
  ```
  [空格]10.46               #将小数点后保留2位，进行四舍五入，不足5位，前面补空格
  ```

### <span style="font-size: 24px; font-weight: bold;">字符串的快速格式化</span><br>
目前通过%符号占位已经很方便了，还能进行精度控制。<br>
可是追求效率和优雅的Python，是否有更加优雅的方式解决问题呢?<br>
那当然！<br>
通过语法:`f"内容{变量}"`的格式来快速格式化<br>
>用人话来说：<br>
>`f`告诉编译器：后面这个字符串里有需要被格式化的变量<br>
>`{}`是占位符，<br>
>`{}`里的内容就是需要被格式化的变量，<br>
>编译器收到`f`的通知后，会自动将`{}`里的内容提取出来，替换掉`{}`<br>

看如下代码:
```python
a = 10.5
b = "Python"
print(f"我有{a}元，我是{b}高手")
```
输出
```
我有10.5元，我是Python高手
```
wow，果然比`%`符号占位要快！优雅、优雅、优雅！<br>
同时，对浮点数不做精度限制，直接按原样输出了`10.5`，而非`%f`后应该输出的`10.500000`

## 对表达式进行格式化
表达式：一条具有明确执行结果的代码语句<br>
例如：`"Jack"`，`1 + 1`，`0`这种固定值，或是`a = 1 + 1`的等号右边的部分<br>
对于字符串的格式化，同样的可以格式化表达式<br>
例如：
```python
print(f"{1 + 1}")
print(f"{type("Jack")}")
```
输出
```
2
<class 'str'>
```
在无需使用变量进行数据存储的时候，可以直接格式化表达式，简化代码



# 数据输入 input（）
我们之前学习了`print()`函数，将所需的东西打印到屏幕上。那么，怎么和用户建立联系，让用户来向我输入东西呢？<br>
答案是，使用`input()`函数！<br>
`input()`函数在使用时，往往长得像下面这样：<br>
```python
a = input("请输入：")
```
><span style="color:red">一定要注意！！！`input()`函数的默认输出类型是`string`！！！</span><br>
>>此时，若想将输入进来的字符，转换为整数或浮点数，就需要用到`int()`或`float()`函数了<span id="custom-spot"></span>
[[转跳前文]](#字面量)
>>例如：`a = int(input("请输入："))`
>>这样，输入的字符就会被转换为整数类型，储存在变量`a`中






# 布尔类型和比较运算符
## <span style="font-size: 24px; font-weight: bold;">布尔类型</span><br>
布尔`bool`表示现实生活中的逻辑真假<br>
- 真（True）：1
- 假（False）：0
>如果你学过离散数学，这一块应该比较清楚，但是零基础也不难理解

我们可以用一个变量来接收布尔值，示例如下：
```Python
a = 10 > 5    #将 10 > 5 进行判断，并将结果赋值到a
print(f"10 > 5 是{a}，变量a包含的内容的类型是{type(a)}")  #输出a的赋值，检查a的类型
```
输出：
```
10 > 5 是True，变量a包含的内容的类型是<class 'bool'>
```
## <span style="font-size: 24px; font-weight: bold;">比较运算符</span><br>
下面是基本的比较运算符一图通：
![比较运算符一图通](https://free.picui.cn/free/2025/06/16/6850340ee82bf.png)
比较简单，看看就会了



# <span style="font-size: 30px; font-weight: bold;">if语句</span><br>
## <span style="font-size: 24px; font-weight: bold;">if语句的基本格式</span><br>
基本格式如下：<br>
```Python
if 条件:
    代码块
```
if语句的意思是：如果if后的条件成立，就执行代码块
><span style="color:red">注意:python中判断代码块归属权看缩进，而不像C/C++看花括号`{}`</span><br>
>示例如下:
>```Python
a = input("你多大了？")
if a >= 18:
    print("你成年了")
print("时间过得真快啊")
>```
>如果`a>=18`，将输出如下代码：
>```
你成年了
时间过得真快啊
>```
>如果`a<18`，将输出如下代码：
>```
时间过得真快啊
>```
>这里可以明显看到，`print("你成年了")`是受`if`判断输出。而`print("时间过得真快啊")`不受`if`判断的影响，无论`a`是否大于`18`，都输出。<br>
>这里可以看出：<span style="color:red">缩进相同的代码，运行等级也相同</span>

## <span style="font-size: 24px; font-weight: bold;">if else语句</span><br>
基本格式如下：
```Python
if 条件:
    代码块1
else:
    代码块2
```
意思是：
- 如果`if`条件成立，执行`代码块1`
- 如果`if`条件不成立，执行`代码块2`
><span style="color:red">注意：`if`和`else`的等级相同，缩进必须相同</span>
### 代码实践
写一个“我要买票吗？”的程序，要求如下：
- 18岁以下免票
- 18岁及18岁以上需要买票

<details>
<summary>代码示例</summary>
```Python
age = int(input("请输入你的年龄："))
if age >= 18:
    print("你可需要买票了")
else:
    print("你未成年，不需要买票")
```
</details>

## <span style="font-size: 24px; font-weight: bold;">if elif else语句</span><br>
基本格式如下：
```Python
if 条件1:
    代码块1
elif 条件2:
    代码块2
else:
    代码块3
```
意思是：
- 如果`if`条件1成立，执行`代码块1`
- 如果`if`条件1不成立，执行`elif`后的条件2
- 如果`elif`后的条件2成立，执行`代码块2`
- 如果`elif`后的条件2不成立，执行`else`后的代码块3
  
执行第`n`个代码块的要求是：
- 前`n-1`个代码块的条件都不成立
- 第`n`个代码块的条件成立

>`elif`可以有多个，但是`else`只能有一个<br>
## <span style="font-size: 24px; font-weight: bold;">代码实践</span><br>
写一个“猜数字”的程序，要求如下：
- 由系统设置猜数的值为`10`
- 玩家有3次机会猜数字
- 猜对了，提示`“你猜对了”`
- 猜错了，则进行下一次猜测
- 玩家3次都猜错了，提示`“很遗憾，没有猜对”`，并告知玩家系统设置的数值

<details>
<summary>代码示例</summary>
```Python
#设置一个猜想数字
a = 10
#让用户进行猜想并判断
if int(input("猜一个数："))==a:
    print("第一次就猜对了！")
elif int(input("猜一个数："))==a:
    print("你猜对了！")
elif int(input("最后一次机会，猜一个数："))==a:
    print("你猜对了！")
else:
    print(f"很遗憾，没有猜对，我想的数是：{a}")
```
</details>



## <span style="font-size: 24px; font-weight: bold;">判断语句的嵌套</span><br>
在生活中，我们不仅能碰到这种：`如果……就，否则如果……就，否则`的情况，更多的可能是分支结构，如下图<br>
![判断语句的嵌套](https://free.picui.cn/free/2025/06/17/6850cb872ef3d.png)
想写成上面的样子，格式如下：
```Python
if 条件1:
    代码块1
    if 条件1.1:
      执行1.1.1
    else:
      执行1.1.2
else:
    代码块2
    if 条件2.1:
      执行2.1.1
    else:
      执行2.1.2
```
这里我们可以清楚地看出，程序先对`条件1`进行判断，再执行第二层嵌套的`if-else`
## <span style="font-size: 24px; font-weight: bold;">代码实践</span><br>
写一个“游乐园购票”的程序，要求如下：
- 18岁以下免票，18岁以上票价10元
- VIP等级>3的，免票入园
- 优先判断年龄，再判断VIP等级
<details>
<summary>代码示例</summary>
```Python
#让用户输入自己的年龄
if int(input("今年多大了："))>=18:
    #让用户输入自己的VIP等级
    if int(input("你的VIP等级是："))>=3:
        print("你可以免票入园")
    else:
        print("你需要买票，请支付10元")
else:
    print("你可以免票入园")
```
</details>



# <span style="font-size: 30px; font-weight: bold;">while循环</span><br>
循环，顾名思义，就是程序一直绕圈，走重复的路，如下图：
![循环示意图](https://free.picui.cn/free/2025/06/17/6850d23a1f4ed.png)
意思是：如果`条件`成立，就执行`代码块`，执行完`代码块`后，再次判断`条件`，如果`条件`成立，就再次执行`代码块`，直到`条件`不成立，循环结束
## <span style="font-size: 24px; font-weight: bold;">基础应用</span><br>
基本格式如下：
```Python
while 条件:
    代码块
```
这么写可能不是很清晰，下面是一个代码示例：
```python
#设置一个变量
a = 1
#循环
while a <= 5:
    print(a)
    a = a + 1
```
>意思是：<span style="color:red">如果`a<=5`，就执行`print(a)`和`a = a + 1`，执行完后，再次判断`a<=5`，如果成立，就再次执行`print(a)`和`a = a + 1`，直到`a>5`，循环结束</span>

所以输出的结果如下：
```
1
2
3
4
5
```
## <span style="font-size: 24px; font-weight: bold;">代码实践</span><br>
写一个“1-100的累加”的程序，要求如下：
- 计算1-100的累加和
- 用`while`循环实现
<details>
<summary>代码示例</summary>
```python
#设置一个变量
a = 1
#设置一个累加和
sum = 0
#循环
while a <= 100:
    sum = sum + a
    a = a + 1
#输出累加和
print(sum)
```
</details>

## <span style="font-size: 24px; font-weight: bold;">嵌套应用</span><br>
循环语句的嵌套，本质上和判断语句的嵌套是一样的，如下图：<br>
![循环语句的嵌套](https://free.picui.cn/free/2025/06/17/6850d6f556d04.png)<br>
程序会在执行第一个循环后，进入第二个循环，直到从第二个循环中离开，才会继续执行第一个循环<br>
示例程序如下:
```python
#设置一个变量
a = 1
#循环
while a <= 3:
    print("a=",a)
    b = 1
    while b <= 3:
        print("b=",b)
        b = b + 1
    a = a + 1
```
输出结果：
```
a= 1
b= 1
b= 2
b= 3
a= 2
b= 1
b= 2
b= 3
a= 3
b= 1
b= 2
b= 3
```
可以看到`a`的赋值没有直接从`1`变到`3`，而是在中间加入了`b`的循环，当`b`的循环结束后，才会执行a的循环



# for循环
除了while循环语句外，Python同样提供了for循环语句。两者能完成的功能基本差不多，但仍有一些区别:
- while循环的循环条件是自定义的，<span style="color:red">自行控制循环条件</span>
- for循环是一种<span style="color:red">“轮询”</span>机制，是对一批内容进行<span style="color:red">逐个处理</span>

>简单地说:
>- `while`循环不知道要循环多少次(自定义循环)
>- `for`循环知道要循环多少次(数据集的大小)
## for循环基础语法
基本格式如下：
```Python
for 临时变量 in 待处理数据集:
    代码块
```
这里我们还是以一个简单的代码示例来展示：
```python
name = "python"
for x in name:
    print(x)
```
输出结果：
```
p
y
t
h
o
n
```
可以看出，for循环是将字符串的内容<span style="color:red">依次取出</span>。<br>
所以，for循环也被称之为<span style="color:red">遍历循环</span>。<br>
下附示意图:
![for循环示意图](https://free.picui.cn/free/2025/06/17/685101b9cf0ab.png)
### 代码示例
写一个“查询语句字母”的程序，要求如下：
- 输入一个字符串
- 输出该字符串中`a`的数量
<details>
<summary>代码示例</summary>
```Python
#让用户输入一个字符串
str = input("请输入一个字符串：")
#设置一个计数器
count = 0
#循环
for x in str:
    #判断
    if x == "a":
        #计数器加1
        count = count + 1
#输出计数器
print("该字符串中a的数量为：",count)
```
</details>

## <span style="font-size: 24px; font-weight: bold;">range语句</span><br>
刚才我们学习了`for`循环，但后面的`待处理数据集`只能是`顺序类型`
>顺序类型：[字符串](#字符串string)、列表、元组、集合、字典等

`range`语句，可以帮助我们快速的获取一个数字序列
- 语法1 `range(n)`，生成一个从0到n-1的数字序列
- 语法2 `range(m,n)`，生成一个从m到n-1的数字序列
- 语法3 `range(m,n,k)`，生成一个从m到n-1的数字序列，公差为k

如下程序可验证：
```python
for i in range(3):
    print(i,end='')   #end='\n'的意思是不换行
print()               #隔开两个输出结果
for i in range(1,3):
    print(i,end='')
print()
for i in range(1,10,2):
    print(i,end='')
```
输出结果：
```
012
12
13579
```
## <span style="font-size: 24px; font-weight: bold;">for循环临时变量作用域</span><br>
上面提到了[`for`循环的构型](#for循环基础语法)，其中有`临时变量`这一部分。<br>
那么我们能否在循环外访问到这个`临时变量`呢？<br>
```python
for i in range(4):
    print(i)
print(i)
```
此时，编译器会出现警告<br>
![警告文件](https://free.picui.cn/free/2025/06/17/685108d6a304a.png)
但此时如果无视风险强制运行的话，也能运行的出来<br>
```
0
1
2
3
3
```
可以看到，虽然临时变量`i`的作用域应该在`for`循环内，但是在循环外依然可以调用<br>
<span style="color:red">但是这种行为是很不推荐的！！！</span>正确写法如下：<br>
```python
i = 0       #先初始化 i 再循环
for i in range(4):
    print(i)
print("i=",i)
```
### <span style="font-size: 24px; font-weight: bold;">for循环的嵌套</span><br>
这个板块和[`while`循环的嵌套](#嵌套应用)的内容相似，不再赘述，示例代码如下：<br>
> 以向小美表白的案例为例
>- 坚持表白100天
>- 每天送花10束
```python
i = 1
for i in range(1, 101):
    print(f"今天是向小美表白的第{i}天，坚持.")
    for j in range(1,11):
        print(f"送给小美的第{j}朵玫瑰花")
    print(f"小美，我喜欢你(第{i}天的表白结束)")
print(f"第{i}天，表白成功")
```



# 循环中断：continue 和 break
## <span style="font-size: 30px; font-weight: bold;">continue</span><br>
`continue`关键字用于：中断本次循环，直接进入下一次循环<br>
`continue`可以用于：`for`循环和`while`循环，效果一致<br>
现在以`for`循环为例：<br>
![continue示意图](https://free.picui.cn/free/2025/06/17/68510edadd91b.png)<br>
- 在循环内，遇到`continue`就结束当次循环，进行下一次，所以`语句2`是不会执行的<br>
- 应用场景：在循环中，因某些原因，<span style="color:red">临时结束本次循环</span>。
## <span style="font-size: 30px; font-weight: bold;">break</span><br>
`break`关键字用于：中断本次循环，直接进入下一次循环<br>
`break`可以用于：`for`循环和`while`循环，效果一致<br>
现在以`for`循环为例：<br>
![break示意图](https://free.picui.cn/free/2025/06/17/68511074e5126.png)<br>
- 在循环内，遇到`break`就结束循环，所以`语句2`是不会执行的<br>
- 应用场景：在循环中，因某些原因，<span style="color:red">永久结束循环</span>。



# Python函数
## <span style="font-size: 30px; font-weight: bold;">函数介绍</span><br>
函数：`组织好的`，`可重复使用的`，`实现特定功能`的`代码块`<br>
这么说可能有点抽象，那我们还是结合代码来解释一下：<br>
- 假如我想写一个程序，分析用户输入字符串的长度
```python
i = 0
str = "python"
for x in str:
    i = i + 1
print("字符串的长度为：",i)
```
- 此时我们发现，若只有一个字符串，这个代码还是可以完全胜任的，但若是有多个字符串，并需要分别输出对应的长度，就要重复这个代码多次，使得程序变得庞大，不利于运行和维护

所以我们可以来定义一个函数，代表这个重复部分的代码（**封装重复代码**），从而简化代码的编写：<br>
```python
def str_len(str):   #定义一个函数 ~ def 函数名(参数): ~ str为传进来的参数
    i = 0
    for x in str:
        i = i + 1
    print("字符串的长度为：",i)
```
此时，我们来比较传统写法和这种写法：
```python 传统写法
i = 0
str1 = "python"
str2 = "python is a programming language"
for x in str1:
    i = i + 1
print("字符串的长度为：",i)
i = 0

for x in str2:
    i = i + 1
print("字符串的长度为：",i)
```
```python 函数写法
str1 = "python"
str2 = "python is a programming language"
def str_len(str):
    for x in str:
        i = i + 1
    print("字符串的长度为：",i)
str_len(str1)
str_len(str2)
```
不难发现，函数写法在行数上都比传统写法省了好多，那运行速度和可读性肯定更高啦~

## <span style="font-size: 30px; font-weight: bold;">函数的定义</span><br>
定义语法：
```python
def 函数名(参数):
    函数体
    return 返回值
```
调用参数的时候，需要按照以下格式：
```python
函数名(参数)
```
### <span style="font-size: 24px; font-weight: bold;">函数的传入参数</span><br>
传入参数的功能是：在函数进行计算的时候，接受外部(调用时)提供的数据<br>
下面是一个简单函数：<br>
```python 简单函数
def add():
    i = 1 + 2
    print(i)
```
我们无论在什么时候调用这个函数，输出的结果永远是`1 + 2`的，但如果我想用该函数计算别的数值，那么就需要传入参数来辅助<br>
```python 传参函数
def add(a,b):
    i = a + b
    print(i)
```
此时，我们这个函数计算的是`a + b`的值，而`a`和`b`两个值是从调用函数时传入的参数得到的<br>
```python 调用传参函数
def add(a,b):
    i = a + b
    print(i)

add(1,2)
add(3,4)
```
输出：
```
3
7
```
可以看到，我们传入的参数分别是`1`和`2`，`3`和`4`，所以输出的结果是`3`和`7`，而非固定值，加大了函数的可操作性<br>
- 形式参数(形参)函数定义中，提供的`a`和`b`，称之为:**形式参数（形参）**，表示函数声明将要使用2个参数
  - **参数之间使用逗号进行分隔**
- 函数调用中，提供的`1`和`2`，称之为:**实际参数(实参)**，表示函数执行时真正使用的参数值
  - **传入的时候，按照顺序传入数据，使用逗号分隔**

#### <span style="font-size: 24px; font-weight: bold;">代码实践</span><br>
写一个“判断体温是否正常”的程序，要求如下：
- 定义一个函数，名称任意
- 接受一个参数传入（数字类型，表示体温）
- 在函数内进行体温判断(正常范围小于等于37.5度)
- 若体温正常，则输出“体温正常”
- 若体温异常，则输出“体温异常”

<details>
<summary>代码示例</summary>
```Python
#写一个判断体温的函数
def temp(x):
    if x > 37.5:
        print("温度异常")
    else:
        print("温度正常")
#让用户输入自己的温度
x = float(input("你的温度是："))
#调用temp函数判断
temp(x)
```
</details>

### <span style="font-size: 30px; font-weight: bold;">函数的返回值</span><br>
#### <span style="font-size: 24px; font-weight: bold;">函数返回值的定义语法</span><br>
程序中的返回值，在生活中可以有很多例子来表示，例如：<br>
- 我让小明给我买3瓶可乐
- 小明买可乐
- 小明给我三瓶可乐

其中，`小明给我三瓶可乐`，就是返回值<br>
在函数中，返回值是这样的：<br>
```python
def add(a,b):
    result = a + b
    return result
i = add(1,2)
print(i)
```
输出：
```
3
```
- `return`的作用：<br>
  - 结束函数的执行
  - 把返回值返回给调用者【在这个程序中，相当于使`i = add(1,2) = result`】
- 函数体中，`return`后的语句不会执行

#### <span style="font-size: 24px; font-weight: bold;">函数返回值的`None`类型</span><br>
- `None`类型表示什么都没有
- `None`和`0`是不同的
- `return`如果不返回任何数据，就会返回`None`
- 函数体中没有`return`，默认返回`None`

None作为一个特殊的字面量，用于表示:空、无意义，其有非常多的应用场景。
- 用在函数无返回值上（函数只干活，不需要返回值）
```python
def add(a,b):
    result = a + b
    print(result)   #直接打印 result 不需要返回
```
- 用在if判断上
  - **在if判断中，None等同于False**
  - **一般用于在函数中主动返回None，配合if判断做相关处理**
```python
#检测是否成年
def age_check(age):
    if age >= 18:
        return "SUCCESS"    #成年返回 SUCCESS
    else:
        return None         #未成年返回 None

result = age_check(16)

if not result:              #如果未成年 not None == True
    print("未成年")
```
- 用于声明无内容的变量上
  - **定义变量，但暂时不需要变量有具体值，可以用None来代替**
```python
#暂不赋予具体变量
x = None
```
## <span style="font-size: 24px; font-weight: bold;">函数说明文档</span><br>
函数是纯代码语言，想要理解其含义，就需要一行行的去阅读理解代码，效率比较低<br>
我们可以给函数添加说明文档，辅助理解函数的作用<br>
语法如下：
```python
def 函数名(参数1,参数2,参数3...):
    """
    函数说明文档
    :param 参数1: 说明参数1的作用
    :param 参数2: 说明参数2的作用
    :param 参数3: 说明参数3的作用
    :return: 说明返回值的作用
    """
    函数体
    return 返回值
```
通过`多行注释`的形式，对函数进行说明解释
- 内容应写在函数体之前

## <span style="font-size: 30px; font-weight: bold;">函数的嵌套调用</span><br>
到目前为止，我们已经学过两个嵌套调用了，想必也是对嵌套调用比较熟悉<br>
函数的嵌套调用，顾名思义，一个函数套一个函数呗<br>
示例代码如下：<br>
```python
def func_b():
    print("我是函数B")

def func_a():
    print("我是函数A")
    func_b()
    print("我是函数A")

func_a()
```
- 函数嵌套调用的执行流程
  - 调用函数A
  - 函数A执行到`func_b()`，发现有函数B，于是暂停A的执行，转而去执行函数B
  - 函数B执行完，返回函数A，从暂停的位置继续执行
  - 函数A执行完

运行结果如下：
```python
我是函数A
我是函数B
我是函数A
```

## 函数中变量的作用域
<span style="color:red">变量作用域</span>：指的是变量的作用范围(变量在哪里可用，在哪里不可用)<br>
主要分为两类：<span style="color:red">局部变量</span>和<span style="color:red">全局变量</span>

### <span style="font-size: 24px; font-weight: bold;">全局变量</span><br>
定义在函数体内部的变量，<span style="color:red">仅在函数内部生效</span>（作用域在函数内）<br>
```python
def func1():
    a = 10
    print(a)

def func2():
    print(a)
    
func1()     # 10
func2()     # 报错:name 'a' is not defined
print(a)    # 报错:name 'a' is not defined
```
- 变量`a`是定义在`func1`函数内部的变量，在函数外部访问/另外函数内访问则立即报错<br>
- 局部变量的作用：在函数体内部，临时保存数据，即当函数调用完成后，则销毁局部变量
### <span style="font-size: 24px; font-weight: bold;">全局变量</span><br>
定义在函数体外部的变量，<span style="color:red">在整个程序范围内都可以使用</span>（作用域在整个程序内）<br>
```python
a = 10
def func1():
    print(a)

def func2():
    print(a)

func1()      # 10
func2()      # 10
print(a)     # 10
```
只要将`a`定义在函数体外部，那么`a`就是全局变量，就能在程序的任意位置使用<br>

### <span style="font-size: 24px; font-weight: bold;">global关键字</span><br>
我们在`func2`中更改`a`的值，最终输出结果并没有影响到全局变量`a`在其他位置的赋值<br>
```python
a = 10
def func1():
    print(a)

def func2():
    a = 20   # 更改a的赋值
    print(a)

func1()      # 10
func2()      # 20
print(a)     # 10
```
这是因为`a`在`func2`中，变成了局部变量，而修改这个局部变量不会影响到全局变量<br>
但，我们就是想要在`func2`中改变全局变量`a`的值，该怎么办呢？<br>
我们可以使用`global`关键字，来声明变量`a`是全局变量，这样就可以在函数中修改全局变量了<br>
```python
a = 10
def func1():
    print(a)

def func2():
    global a   # 声明a是全局变量
    a = 20     # 更改a的赋值
    print(a)   # 20

func1()      # 10
func2()      # 20
print(a)     # 20
```
此时我们可以看到，全局变量`a`的值也被修改了<br>

## 程序实战
完成一个“银行ATM”程序
- 程序启动后，`显示银行名称`：“耄耋银行”，并`提醒用户输入用户名密码`
  - `默认用户名`：“admin”
  - `默认密码`：“123456”
- 如果`用户名和密码错误`，则`输出“用户名或密码错误”`，并`允许重复输入三次`
- 如果`三次均输入错误`，则`输出“您已被锁定”`，并`退出程序`
- 如果`用户名和密码正确`，则输出`“登录成功”`
- 登录成功后，显示`功能菜单`
  - `查询余额`
    - 显示余额(默认余额`10000`) 
  - `取款`
    - `提示用户输入取款金额`
    - `判断用户输入金额是否大于余额`
      - 如果`大于余额`，则`输出“余额不足”`
      - 如果`小于等于余额`，则`更新余额`，并`输出“取款成功”`
  - `存款`
    - `提示用户输入存款金额`
    - `更新余额`，并`输出“存款成功”`
  - `退出`
- 用户选择`退出`功能，则`显示“谢谢使用，欢迎下次光临”`，并`退出程序`

流程图：<br>
![流程图](https://free.picui.cn/free/2025/06/17/68513a81b679e.png)
程序范例：<br>
```python
# 定义余额
money = 10000
# 定义主程序
def main_func():
    global money    # 声明全局变量
    i = -1
    while i < 0:    # 一个死循环，只能用break退出，保证返回上级
        print("主菜单")
        print("查看余额 输入1")
        print("取款 输入2")
        print("存款 输入3")
        print("退出 输入4")
        num = int(input("输入要办理的业务编号："))
        # 查询余额
        if num == 1:
            print(f"账户还有余额：{money}元")
        # 取款
        if num == 2:
            print(f"账户还有余额：{money}元")
            while i < 0:
                x = int(input("要取多少钱："))
                if x > money:       # 判断余额是否充足
                    print("余额不足")
                    break
                else:
                    money = money - x
                    break
        # 存款
        if num == 3:
            print(f"账户还有余额：{money}元")
            x = int(input("要存多少钱："))
            money = money + x
        # 退出
        if num == 4:
            break

# 显示银行名称
print("欢迎来到耄耋银行！")

# 判断用户名密码是否正确
for i in range(3):
    name = input("用户名：")
    password = int(input("密码："))
    if name == "admin":             # 判断用户名是否正确
        if password == 123456:      # 判断密码是否正确
            print("登录成功")
            main_func()             # 进入主菜单
            break                   # 结束循环，退出程序
    else:
        print("用户名或密码错误")
    if i == 2:
        print("您已被锁定")
        break                       #结束循环，退出程序
    print(f"你还有{2 - i}次机会")

print("程序已退出")
```





# 数据容器入门
Python中的数据容器:<br>
一种可以容纳多份数据的数据类型，容纳的每一份数据称之为1个元素<br>
每一个元素，可以是任意类型的数据，如`字符串`、`数字`、`布尔`等。<br>
<br><br>
如果我们想记录一组名字，按照老办法，我们可以定义多个变量，每个变量都用来记录一个名字<br>
```python
name1 = "张三"
name2 = "李四"
name3 = "王五"
name4 = "赵六"
```
主播主播，这么记录确实很快捷，但是如果有10000个名字，我们是不是要定义10000个变量呢？有没有更简单高效的表示方法？<br>
有的兄弟，有的，我们可以使用`数据容器`来记录一组数据<br>
>数据容器有`列表`、`元组`、`集合`、`字典`，我们会在后面的章节中逐个学习<br>
```python
names = ["张三","李四","王五","赵六"]
```
这样一行就解决了原来需要写四行的代码，真是简单而高效，EE又ZZ<br>

数据容器根据特点的不同，如：
- 是否支持重复元素
- 是否可以修改
- 是否有序，等

分为5类，分别是:<br>
`列表(list)`、`元组(tuple)`、`字符串(str)`、`集合(set)`、`字典(dict)`我们将一一学习它们<br>
# <span style="font-size: 30px; font-weight: bold;">数据容器：list(列表)</span><br>
## <span style="font-size: 24px; font-weight: bold;">列表的定义</span><br>
定义语法：
```python
# 字面量
[元素1，元素2，元素3，元素4，...]

# 定义变量
变量名称 =[元素1，元素2，元素3，元素4，...]

# 定义空列表
变量名称 =[]
变量名称 = list()
```
列表内的每一个数据，我们可以叫它`元素`<br>
- 以`[]`为标识
- 每个`元素`之间用逗号隔开

## <span style="font-size: 24px; font-weight: bold;">列表的下标索引</span><br>
如何从列表中取出特定位置的数据呢?<br>
我们可以使用：`下标索引`<br>
格式如下：
```python
列表名称[下标索引]
```
`下标索引`也分为`正向索引`和`反向索引`两种<br>

### <span style="font-size: 24px; font-weight: bold;">正向索引</span><br>
**从前往后取**<br>
`正向索引`列表的构造如下图所示：<br>
![正向索引列表的构造](https://free.picui.cn/free/2025/06/18/6852242536081.png)
可以看到：
- 列表的下标索引从`0`开始
- 每个`元素`都有一个下标索引，用来标识它在列表中的位置
- 我们可以使用下标索引来取出列表中的元素
- 下标索引的取值范围是：`0 ~ n-1`

示例如下：
```python
names = ["张三","李四","王五","赵六"]
print(names[0]) # 张三
```
### <span style="font-size: 24px; font-weight: bold;">反向索引</span><br>
**从后往前取**<br>
`反向索引`列表的构造如下图所示：<br>
![反向索引列表的构造](https://free.picui.cn/free/2025/06/18/6852255f9345b.png)
可以看到：
- 反向索引的下标索引从`-1`开始
- 每个`元素`都有一个反向索引，用来标识它在反向列表中的位置
- 我们可以使用反向索引来取出列表中的元素
- 反向索引的取值范围是：`-n ~ -1`

示例如下：
```python
names = ["张三","李四","王五","赵六"]
print(names[-4]) # 张三
```

### <span style="font-size: 24px; font-weight: bold;">嵌套列表的下标索引</span><br>
`嵌套列表`也支持下标索引，结构如下：
```python
列表名称[下标索引1][下标索引2]
```
意思是：先取出`下标索引1`的元素，再取出这个元素的`下标索引2`的元素<br>
示例如下：
![嵌套列表的下标索引](https://free.picui.cn/free/2025/06/18/68522ab6d7aca.png)
```python
names = [["张三","李四"],["王五","赵六"]]
print(names[0][0]) # 张三
```

## <span style="font-size: 24px; font-weight: bold;">列表的常用操作</span><br>
![列表的常用操作](https://free.picui.cn/free/2025/06/18/68524f681948a.png)<br>
上面是列表的常用操作，下面我们将分门别类的讲解如何使用：<br>

### <span style="font-size: 24px; font-weight: bold;"><a id="index-list"></a> 列表的查询功能（.index）</span><br>
查找某元素的下标<br>
功能:查找指定元素在列表的下标，如果找不到，报错`ValueError`<br>
语法:`列表.index(元素)`<br>
`index`就是列表对象(变量)内置的方法(函数)<br>
使用示例如下：<br>
```python
names = ["张三","李四","王五","赵六"]

print(names.index("张三")) # 0
print(names.index("赵六")) # 3
print(names.index("钱七")) # ValueError: '钱七' is not in list
```
> 注意！
> 1. 如果列表中存在多个相同的元素，`index`方法只会返回第一个元素的下标
> 2. 如果要查找的元素不在列表中，会报错`ValueError`
> 3. 嵌套列表中，`index`方法只能查找第一层的元素

### <span style="font-size: 24px; font-weight: bold;">列表的修改功能（修改特殊位置的值）</span><br>
语法：`列表[下标索引] = 新值`<br>
可以使用如上语法，直接对指定下标(正向、反向下标均可)的值进行：<b>重新赋值(修改)</b>
```python
names = ["张三","李四","王五","赵六"]
print(names) # ["张三","李四","王五","赵六"]
names[0] = "钱七"
print(names) # ["钱七","李四","王五","赵六"] 成功的将 第0个元素 张三 修改成了 钱七
```
> 注意！
> 1. 列表的下标索引不能越界，否则会报错`IndexError`
> 2. 修改功能支持`正向索引`和`反向索引`

### <span style="font-size: 24px; font-weight: bold;">列表的插入功能（.insert）</span><br>
语法：`列表.insert(下标索引,元素)`<br>
使用示例如下：
```python
names = ["张三","李四","王五","赵六"]
print(names) # ["张三","李四","王五","赵六"]
names.insert(3,"钱七")  # 在下标索引 3 的位置插入元素 "钱七"
print(names) # ["张三","李四","王五","钱七","赵六"]
```

### <span style="font-size: 24px; font-weight: bold;">列表的元素追加（.append / .extend）</span><br>

<span style="font-size: 24px; font-weight: bold;">.append</span><br>
功能：在列表的末尾追加`元素`<br>
语法：`列表.append(元素)`<br>
使用示例如下：
```python
names = ["张三","李四","王五","赵六"]
print(names) # ["张三","李四","王五","赵六"]
names.append("钱七")  # 在列表的末尾追加元素 "钱七"
print(names) # ["张三","李四","王五","赵六","钱七"]
```

<span style="font-size: 24px; font-weight: bold;">.extend</span><br>
功能：在列表的末尾追加`多个元素`<br>
语法：`列表.extend(多个元素)`<br>
使用示例如下：
```python
names = ["张三","李四","王五","赵六"]
names.extend(["钱七","孙八"])  # 在列表的末尾追加多个元素 ["钱七","孙八"]
print(names) # ["张三","李四","王五","赵六","钱七","孙八"]
```

### <span style="font-size: 24px; font-weight: bold;">列表的删除功能（.remove / .pop / del / clear）</span><br>
<span style="font-size: 20px; font-weight: bold;">.remove</span><br>
功能：根据`元素的值`删除元素<br>
语法：`列表.remove(元素)`<br>
使用示例如下：
```python
names = ["张三","李四","王五","赵六"]
names.remove("张三")  # 删除元素 "张三"
print(names) # ["李四","王五","赵六"]
```
> 注意！<br>
> 如果要删除的元素有多个，只会删除第一个
> ```python
names = ["张三","李四","王五","赵六","张三"]
names.remove("张三")  # 删除元素 "张三"
print(names) # ["李四","王五","赵六","张三"] 只删除了第一个 "张三"
> ```

<span style="font-size: 20px; font-weight: bold;"><a id="pop_list"></a>.pop</span><br>
功能：根据`下标索引`删除元素<br>
语法：`列表.pop(下标索引)`<br>
使用示例如下：
```python
names = ["张三","李四","王五","赵六"]
names.pop(0)  # 删除下标索引 0 的元素 "张三"
print(names) # ["李四","王五","赵六"]
```
<span style="font-size: 20px; font-weight: bold;">.dle</span><br>
功能：根据`下标索引`删除元素<br>
语法：`del 列表[下标索引]`<br>
使用示例如下：
```python
names = ["张三","李四","王五","赵六"]
del names[0]  # 删除下标索引 0 的元素 "张三"
print(names) # ["李四","王五","赵六"]
```

<span style="font-size: 20px; font-weight: bold;"><a id="clear_list"></a>.clear</span><br>
功能：清空列表内的所有元素
语法：`列表.clear()`
使用示例如下：
```python
names = ["张三","李四","王五","赵六"]
names.clear()
print(names) # []   （清空列表内的所有元素）
```

### <span style="font-size: 24px; font-weight: bold;"> <a id="len-list"></a>列表内元素数量统计（len）</span><br>
功能：统计列表内元素的数量<br>
语法：`len(列表)`<br>
使用示例如下：
```python
names = ["张三","李四","王五","赵六"]
print(len(names)) # 4  （说明 names 列表内有 4 个元素）
```

### <span style="font-size: 24px; font-weight: bold;"><a id="count-list"></a>列表内重复元素数量统计（.count）</span><br>
功能：统计列表内指定元素的数量<br>
语法：`列表.count(元素)`<br>
使用示例如下：
```python
names = ["张三","李四","王五","赵六","张三"]
print(names.count("张三")) # 2  （说明 names 里面有两个 "张三"）
```

### 列表的遍历
#### <span style="font-size: 24px; font-weight: bold;">`while循环`遍历</span><br>
既然数据容器可以存储多个元素，那么，就会有需求从容器内依次取出元素进行操作<br>
将容器内的元素依次取出进行处理的行为，称之为：遍历、迭代<br>
如何遍历列表的元素呢？<br>
- 可以使用`while循环`

如何在循环中取出列表的元素呢？<br>
- 使用列表`[下标]`的方式取出

循环条件如何控制？<br>
- 定义一个变量表示下标，从` 0 `开始
- 循环条件为 下标值` < `列表的元素数量

下面是示例代码：
```python
i = 0
names = ["张三","李四","王五","赵六"]
while(i < 4):
    print(names[i])     # 遍历names列表的0~3数据
    i = i+1
```

#### <span style="font-size: 24px; font-weight: bold;">`for循环`遍历</span><br>
相比较于`while循环`来说，`for循环`完成该工作的效果更好，因为从`for循环`的基础结构中可以看出，是[对每一项中的数据进行调出](#for循环)的，更加适合`遍历`操作<br>
下面是示例代码：
```python
names = ["张三","李四","王五","赵六"]
for name in names:
    print(name)
```
> 明显的，完成同样遍历任务，`for循环`代码量小于`while循环`

# <span style="font-size: 24px; font-weight: bold;">数据容器：tuple（元组）</span><br>
`元组`和`列表`一样，都可以封装多个不同类型的元素，但也有区别：<br>
- `元组`内的元素是`不可修改`的
> 所以，当我们需要在程序内封装数据，又不希望封装的数据被篡改，那么元组就非常合适了<br>
> 例如：某人的身份证号码、银行卡号、手机号之类的数据

### <span style="font-size: 24px; font-weight: bold;">定义元组</span><br>
```python
# 定义元组
(元素1,元素2,元素3,元素4)

# 定义元组变量
变量名 = (元素1,元素2,元素3,元素4)

# 定义空元组
变量名 = ()
变量名 = tuple()    # 面向对象的写法
```
注意！<br>
定义单个元素的元组时，要在元素后面加上`,` 否则无法识别出元组<br>
```python
t1 = ("python")
t1.1 = (1)

t2 = ("python",)
t2.2 = (1,)

print(type(t1))
print(type(t2))

print(type(t1.1))
print(type(t2.2))
```
输出如下：
```
<class 'str'>
<class 'tuple'>

<class 'int'>
<class 'tuple'>
```
可以看到，如果不加`,`系统不会将其视为元组，而是视为原本的数据类型<br>

### <span style="font-size: 24px; font-weight: bold;">元组的运用与相关操作</span><br>
<span style="font-size: 20px; font-weight: bold;">`元组`和`列表`的语法基本相同，可以参考上文关于列表的部分，在此做出引用：</span><br>

> 元组运用：[元组索引](#列表的下标索引)、[元组的遍历](#列表的遍历)、[元组的嵌套](#嵌套列表的下标索引)<br>
> 相关操作：[元组的长度统计（len）](#len-list)、[元组内重复元素数量统计（.count）](#count-list)、[元组的查询功能（.index）](#index-list)

上面我们提到，元组无法进行修改操作，但是在`元组内嵌套列表`的情况下是可以的<br>
```python
t1 = (1,2,3,["a","b","c"])      # 创建一个带列表的元组
t1[3][0] = "A"                  # 修改元组内嵌套列表的元素
print(t1)
```
输出如下：
```
(1, 2, 3, ['A', 'b', 'c'])
```
可以看到，元组内嵌套的列表的元素是可以被修改的，<span style="color:red">这也是元组内唯一的可更改的操作</span>



# <span style="font-size: 24px; font-weight: bold;">数据容器：str（字符串）</span><br>
尽管字符串看起来并不像：列表、元组那样，一看就是存放了许多数据的容器<br>
但不可否认的是，字符串同样也是数据容器的一员。<br>
字符串是字符的容器，一个字符串可以存放任意数量的字符<br>
如字符串：`"python"`<br>
![字符串列表示意图](https://free.picui.cn/free/2025/06/19/685375d1e6fe7.png)

## <span style="font-size: 24px; font-weight: bold;">字符串的运用与相关操作</span><br>
### <span style="font-size: 24px; font-weight: bold;">字符串的一般运用操作</span><br>
`字符串`和`列表`的语法基本相同，可以参考上文关于列表的部分，在此做出引用：</span><br>
> 字符串的运用：[字符串索引](#列表的下标索引)、[字符串的遍历](#列表的遍历)<br>
> 相关操作：[字符串的长度统计（len）](#len-list)、[字符串内重复元素数量统计（.count）](#count-list)、[字符串的查询功能（.index）](#index-list)
> ```python
> word = "i love python"
> print(len(word))        # 13 （说明 word 字符串有13个字符）
> print(word.index("o"))  # 2  （说明 "o" 在 word 字符串的下标为2）
> print(word.count("o"))  # 2  （说明 word 字符串内有2个 "o"）
> ```

### <span style="font-size: 24px; font-weight: bold;">字符串的特殊操作</span><br>
![字符串操作](https://free.picui.cn/free/2025/06/19/6853ae30b5f81.png)
#### <span style="font-size: 20px; font-weight: bold;">字符串的替换</span><br>
语法：`字符串.replace(字符串1,字符串2)`<br>
功能：将`字符串1`的内容替换为`字符串2`的内容<br>
注意：<span style="color:red">`字符串.replace`的操作不会改变原字符串，而是返回一个新的字符串</span><br>
```python
word = "i love python"
new_word = word.replace("love","hate")
print(word)
print(new_word)
```
输出如下：
```
i love python
i hate python
```
可以看到，`word`字符串内的内容并没有改变，只是返回了一个新的字符串<br>

#### <span style="font-size: 20px; font-weight: bold;">字符串的分割（.split）</span><br>
语法：`字符串.split(分割字符串)`<br>
功能：将`分割字符串`的内容作为分隔符，对`字符串`进行分割，并存入`列表对象`中<br>
注意：<span style="color:red">`字符串.split`的操作不会改变原字符串，而是返回一个新的`列表对象`</span><br>
```python
word = "i love python"
my_list = word.split(" ")      # 按照空格分割
print(f"原字符串：{word}，分割后的列表：{my_list}，格式为{type(my_list)}")
```
输出如下：
```
原字符串：i love python，分割后的列表：['i', 'love', 'python']，格式为<class 'list'>
```

#### <span style="font-size: 20px; font-weight: bold;">字符串的规整（.strip）</span><br>
这一部分比较抽象，建议看一下B站的视频，这里是转跳链接：[视频链接](https://www.bilibili.com/video/BV1qW4y1a7fU/?p=69&share_source=copy_web&vd_source=76ef81a3c7f598cf017a43cc75c2cf93&t=682)<br>
语法：`字符串.strip()`、`字符串.strip(去除前后指定字符串)`<br>
功能：将`字符串`首尾的空格、换行符等去掉<br>
注意：<span style="color:red">`字符串.strip`的操作不会改变原字符串，而是返回一个新的字符串</span><br>
```python
word = "    i love python    "
new_word = word.strip()
print(f"原字符串：{word}，去除首尾空格后的字符串：{new_word}")
```
输出如下：
```
原字符串：    i love python    ，去除首尾空格后的字符串：i love python
```
可以看到，`word`字符串内的内容并没有改变，只是返回了一个新的字符串<br>

# 数据容器（序列）的切片
## <span style="font-size: 20px; font-weight: bold;">序列的定义</span><br>
序列是指：内容连续、有序，可使用下标索引的一类数据容器<br>
列表、元组、字符串，均可以可以视为序列。

## <span style="font-size: 20px; font-weight: bold;">序列的切片</span><br>
作用：从一个序列中，取出一个新的序列<br>
语法：`序列[开始索引:结束索引:步长]`<br>
<span style="color:red">表示从序列中，从指定位置开始，依次取出元素，到指定位置结束，得到一个新序列:</span><br>

- 起始下标表示从何处开始，可以留空，留空视作从头开始
- 结束下标(不含)表示何处结束，可以留空，留空视作截取到结尾
- 步长表示，依次取元素的间隔
  -  步长1表示，一个个取元素
  -  步长2表示，每次跳过1个元素取
  -  步长N表示，每次跳过N-1个元素取
  - 步长为负数表示，反向取(注意，起始下标和结束下标也要反向标记)

示例：
```python
a = [0,1,2,3,4,5]
b = a[0:5:2]    # 从 0号元素 开始取到 5号元素 ，步长为 2
print(b)
```
输出：
```
[0, 2, 4]
```



# 数据容器：set（集合）
之前我们学习的`列表`、`元组`、`字符串`都是有序的，支持重复元素<br>
但是`集合`中的元素是无序的，且不支持重复元素（自动去重）<br>
## <span style="font-size: 20px; font-weight: bold;">集合定义</span><br>
语法：`{元素1，元素2，……}`<br>
```python
# 定义集合字面量
{元素,元素,元素,……}

# 定义集合变量
变量名称 = {元素,元素,元素,……}

# 定义空集合
变量名称 = set()
```
下面我们来验证`集合`的`自动去重`和`无需性`：<br>
```python
my_set = {"I","love","Python","I","love","Python","I","love","Python"}
print(f"my_set中的内容是：{my_set},它的类型是：{type(my_set)}")
```
输出：
```
my_set中的内容是：{'love', 'Python', 'I'},它的类型是：<class 'set'>
```
可以明显的看到，输出集合内容的时候，把重复的`I`、`love`、`Python`去掉了，并且最后输出是无序的<br>
> 注意注意！<span style="color:red">集合是无序的，所以无法使用下标来访问集合中的元素</span>

## <span style="font-size: 24px; font-weight: bold;">集合的基础操作</span><br>
集合的操作包括：`添加`、`删除`、`随机取出`
### <span style="font-size: 24px; font-weight: bold;">添加（.add）</span><br>
语法：`变量名.add(元素)`<br>
下面是是示例：
```python
my_set = {1,2,3}
print(my_set)

my_set.add(4)
print(my_set)
```
输出结果如下：<br>
```
{1, 2, 3}
{1, 2, 3, 4}
```
成功的将元素`4`添加到集合中<br>

### <span style="font-size: 24px; font-weight: bold;">删除（.remove）</span><br>
语法：`变量名.remove(元素)`<br>
下面是是示例：
```python
my_set = {1,2,3}
print(my_set)

my_set.aremove(3)
print(my_set)
```
输出结果如下：<br>
```
{1, 2, 3}
{1, 2}
```
成功的将元素`3`从集合中删除<br>

### <span style="font-size: 24px; font-weight: bold;">随机取出（.pop）</span><br>
好熟悉的`.pop`，在之前学`列表`的时候提到过【[点击转跳](#pop_list)】，但是在`集合`中，由于无法指定下标来取出元素，<span style="color:red">`.pop`就会随机取出一个元素，**同时在原本的集合中，取出的元素也会被删除**</span><br>
语法：`变量名.pop()`
下面是示例：
```python
my_set = {1,2,3}

print(my_set.pop())
print(my_set)
```
输出结果如下：<br>
```
2
{1, 3}
```
可以看到，随机取出了集合中的元素`2`（当然也可能是`1`或`3`）

### <span style="font-size: 24px; font-weight: bold;">清除（.clear）</span><br>
哇，这个`.clear`更熟悉了，依旧在之前学`列表`的时候提到过【[点击转跳](#clear_list)】，甚至连语法和功能都完全相同<br>
语法：`集合.clear()`<br>
下面是示例：
```python
my_set = {1,2,3}
print(my_set)

my_set.clear()
print(my_set)
```
输出结果如下：<br>
```
{1, 2, 3}
set()
```
可以看到，成功的将集合中的所有元素删除了，只剩下一个`空集合`<br>

### <span style="font-size: 24px; font-weight: bold;">统计元素（len()）</span><br>
好好好，又是老朋友，不多说了，看列表的吧！【[点击跳转](#列表内元素数量统计len)】

### <span style="font-size: 24px; font-weight: bold;">遍历</span><br>
因为`集合`无法使用下标的特殊性，所以不可以用`while循环`遍历，只能用`for循环`<br>
下面是代码示例：
```python
my_set = {1,2,3}

for i in my_set:
    print(i)
```
输出结果如下：<br>
```
1
2
3
```
会随机但是完整的`print`出`my_set`中的所有元素

### <span style="font-size: 24px; font-weight: bold;">集合的运算</span><br>
首先，我们先要认识到，`集合set`就是数学中的集合，所以数学中集合的运算方式也适用于这里的集合运算<br>
![集合图](https://free.picui.cn/free/2025/06/19/6853c16f130a8.png)
- 交集 ∩
  - A∩B，表现在图中黄色区域
- 并集 ∪
  - A∪B，表现在图中绿色区域
- 差集 -
  - A-B，表现在图中红色区域

#### <span style="font-size: 24px; font-weight: bold;">交集</span><br>
语法：`集合1.intersection(集合2)`<br>
功能：返回一个`新集合`，该集合包含`集合1`和`集合2`中的公共元素<br>
下面是示例：
```python
set1 = {1,2,3}
set2 = {2,3,4}

set3 = set1.intersection(set2)
print(set3)
```
输出结果如下：<br>
```
{2, 3}
```

#### <span style="font-size: 24px; font-weight: bold;">并集</span><br>
语法：`集合1.union(集合2)`<br>
功能：返回一个`新集合`，该集合包含`集合1`和`集合2`中的所有元素<br>
下面是示例：
```python
set1 = {1,2,3}
set2 = {2,3,4}

set3 = set1.union(set2)
print(set3)
```
输出结果如下：<br>
```
{1, 2, 3, 4}
```

#### <span style="font-size: 24px; font-weight: bold;">差集</span><br>
语法：`集合1.difference(集合2)`<br>
功能：返回一个`新集合`，该集合包含`集合1`中所有不在`集合2`中的元素<br>
下面是示例：
```python
set1 = {1,2,3}
set2 = {2,3,4}

set3 = set1.difference(set2)
print(set3)
```
输出结果如下：<br>
```
{1}
```
可以看到，`set3`中只包含了`set1`中不在`set2`中的元素`1`

#### <span style="font-size: 24px; font-weight: bold;">去除差集</span><br>
语法：`集合1.difference_update(集合2)`<br>
功能：修改`集合1`，删除其中和`集合2`内相同的元素<br>
下面是示例：<br>
```python
set1 = {1,2,3}
set2 = {2,3,4}

set1.difference_update(set2)
print(set1)
```
输出结果如下：<br>
```
{1}
```
去除了`集合1`中和`集合2`重复的元素，并将`集合1`中独有的元素保留下来





# 数据容器：dict（字典）
生活中，我们会用到字典，其主要使用方法是通过`字`来查询`字的含义`，在python中，字典也是这样的，只不过是通过`关键字`key查询`值`value<br>
## 字典的定义
语法如下：`{关键字:值,关键字:值,关键字:值}`<br>
下面是示例：
```python
my_dict = {'apple': '苹果', 'banana': '香蕉', 'orange': '橙子'}
print(my_dict['apple'])
```
输出结果如下：<br>
```
苹果
```
可以看到，通过`apple`查询到了`苹果`<br>
尽管，<span style="color:red">字典中不允许重复的关键字存在</span>，但是，如果我们将`关键字` `apple`重复一次，并赋上不同的`值`，会发生什么呢？<br>
```python
my_dict = {'apple': '小苹果', 'apple': '大苹果'}
print(my_dict['apple'])
```
输出结果如下：<br>
```
大苹果
```
可以看到，如果在字典里有**两个相同的关键字**，查询时会显示**最后一个**关键字的值<br>
## 嵌套字典
现在出现了一个问题，假如我需要做一个成绩统计的程序，该怎么办呢？<br>
![成绩](https://free.picui.cn/free/2025/06/21/68564fbf5a5ca.png)<br>
一个字典可以表示张三、李四、王五，或者表示语文、数学、英语的成绩，但是想把姓名和成绩联系起来就会有点困难了，此时，我们可以使用嵌套字典，下面是示例：<br>
```python
# 在 姓名 的字典中，嵌套一个 分数 的字典
stu_score{
    "张三":{
        "语文":96
        "数学":86
        "英语":76
    },
        "李四":{
        "语文":86
        "数学":76
        "英语":66
    },
        "王五":{
        "语文":76
        "数学":66
        "英语":56
    }
}
```
此时，我们已经创立好了一个嵌套字典，但是该怎么调出某个学生对应的分数呢？<br>
这里我们以`张三 の 语文`为例<br>
```python
print(stu_score["张三"]["语文"])        # 语法：字典名[外层关键字][内层关键字]
```
输出结果如下：<br>
```
96
```
可以看到，通过嵌套调用的方式，成功的调出了张三的语文成绩<br>
> 注意！<span style="color:red">嵌套字典只能出现在`value`中，不能出现在`key`中</span>

## 字典的常用操作
### 新增元素、更新元素
语法：`字典[key] = value`<br>
若`[key]`在原字典中不存在，则新建一个`key : value`<br>
若`[key]`在原字典中存在，则使`key : value`覆盖`[key]`对应的原始数据<br>
示例代码如下：
```python
my_dict = {'apple': '苹果', 'banana': '香蕉', 'orange': '橙子'}
print("更新前：",my_dict)
my_dict['apple'] = '小苹果'     # 用 apple:小苹果 覆盖 apple:苹果
my_dict['peach'] = '桃子'      # 创建 peach:桃子
print("更新后：",my_dict)
```
输出结果如下：<br>
```
更新前： {'apple': '苹果', 'banana': '香蕉', 'orange': '橙子'}
更新后： {'apple': '小苹果', 'banana': '香蕉', 'orange': '橙子', 'peach': '桃子'}
```
### 删除元素
语法：`字典.pop(key)`<br>
功能：删除`key`对应的`键值对`<br>
下面是示例：
```python
my_dict = {'apple': '小苹果', 'banana': '香蕉', 'orange': '橙子', 'peach': '桃子'}
print("删除前：",my_dict)
my_dict.pop('apple')
print("删除后：",my_dict)
```
输出结果如下：<br>
```
删除前： {'apple': '小苹果', 'banana': '香蕉', 'orange': '橙子', 'peach': '桃子'}
删除后： {'banana': '香蕉', 'orange': '橙子', 'peach': '桃子'}
```
### 删除所有元素
语法：`字典.clear()`<br>
功能：删除字典中的所有元素<br>
下面是示例：
```python
my_dict = {'apple': '小苹果', 'banana': '香蕉', 'orange': '橙子', 'peach': '桃子'}
print("删除前：",my_dict)
my_dict.clear()
print("删除后：",my_dict)
```
输出结果如下：<br>
```
删除前： {'apple': '小苹果', 'banana': '香蕉', 'orange': '橙子', 'peach': '桃子'}
删除后： {}
```
### 获取所有键
语法：`字典.keys()`<br>
功能：返回一个包含字典所有`key`的列表<br>
下面是示例：
```python
my_dict = {'apple': '小苹果', 'banana': '香蕉', 'orange': '橙子', 'peach': '桃子'}
print("所有键：",my_dict.keys())
```
输出结果如下：<br>
```
所有键： dict_keys(['apple', 'banana', 'orange', 'peach'])
```
### 遍历字典
由于字典不支持下标索引，无法使用`while循环`遍历，具有和`集合`相同的性质【[点击转跳](#遍历)】<br>
### 获取所有值
老朋友`len()`，看上面的列表吧【[点击转跳](#len-list)】<br>

## 程序实战
有如下员工信息，请使用字典完成数据的记录<br>
并通过for循环，对所有级别为1级的员工，级别上升1级，薪水增加1000元<br>
| 姓名| 部门| 工资|级别|
|----|-----| ---- |--|
|张三|科技部|3000|1|
|李四|市场部|5000|2|
|王五|市场部|7000|3|
|赵六|科技部|4000|1|

流程图：
![升职加薪流程图](https://free.picui.cn/free/2025/06/21/68568b5bbbbe5.png)
```python
# 创建雇员字典
emp_dict={
    "张三":["科技部",3000,1],
    "李四":["市场部",5000,2],
    "王五":["市场部",7000,3],
    "赵六":["科技部",3000,1]
          }
# 打印雇员字典
print(emp_dict)

# 查询、判断等级
for name in emp_dict.keys():
    if emp_dict[name][2] == 1:
        emp_dict[name][2] = 2       # 升职
        emp_dict[name][1] += 1000   # 加薪

# 打印雇员字典
print(emp_dict)
```





# 数据容器的通用操作
## 遍历
- 五类数据容器`列表`、`元组`、`集合`、`字典`、`字符串`都支持`for循环`遍历
- `列表``元组``字符串`支持`while循环`，`字典`、`集合`由于没有下标索引，无法使用`while循环`

## 通用统计操作
`len`、`max`、`min`<br>
### `len(容器)`：输出容器的大小<br>
示例：
```python
my_list = [1,2,3,4,5]
my_tuple = (1,2,3,4,5)
my_set = {1,2,3,4,5}
my_dict = {'apple': '苹果', 'banana': '香蕉', 'orange': '橙子'}
my_str = "12345"

print("列表的长度为：",len(my_list))
print("元组的长度为：",len(my_tuple))
print("集合的长度为：",len(my_set))
print("字典的长度为：",len(my_dict))
print("字符串的长度为：",len(my_str))
```
输出结果如下：<br>
```
列表的长度为： 5
元组的长度为： 5
集合的长度为： 5
字典的长度为： 3
字符串的长度为： 5
```
### `max(容器)`：输出容器中的最大值<br>
示例：
```python
my_list = [1,2,3,4,5]
my_tuple = (1,2,3,4,5)
my_set = {1,2,3,4,5}
my_dict = {'apple': '苹果', 'banana': '香蕉', 'orange': '橙子'}
my_str = "12345"

print("列表的最大值为：",max(my_list))
print("元组的最大值为：",max(my_tuple))
print("集合的最大值为：",max(my_set))
print("字典的最大值为：",max(my_dict))
print("字符串的最大值为：",max(my_str))
```
输出结果如下：<br>
```
列表的最大值为： 5
元组的最大值为： 5
集合的最大值为： 5
字典的最大值为： orange
字符串的最大值为： 5
```
### `min(容器)`：输出容器中的最小值<br>
示例：
```python
my_list = [1,2,3,4,5]
my_tuple = (1,2,3,4,5)
my_set = {1,2,3,4,5}
my_dict = {'apple': '苹果', 'banana': '香蕉', 'orange': '橙子'}
my_str = "12345"

print("列表的最小值为：",min(my_list))
print("元组的最小值为：",min(my_tuple))
print("集合的最小值为：",min(my_set))
print("字典的最小值为：",min(my_dict))
print("字符串的最小值为：",min(my_str))
```
输出结果如下：<br>
```
列表的最小值为： 1
元组的最小值为： 1
集合的最小值为： 1
字典的最小值为： apple
字符串的最小值为： 1
```
## 容器的通用转换功能
`list(容器)`将给定容器转换为列表<br>
`tuple(容器)`将给定容器转换为元组<br>
`str(容器)`将给定容器转换为字符串<br>
`set(容器)`将给定容器转换为集合<br>
### list
`list(容器)`将给定容器转换为列表<br>
功能：将给定容器转换为列表<br>
> 注意！在将`字符串`和`字典`转化为列表的时候，每一个字符都是单独的一个元素，字典只保留key，不保留value

示例：
```python
my_str = "12345"
my_dict = {'apple': '苹果', 'banana': '香蕉', 'orange': '橙子'}

print("字符串转换为列表：",list(my_str))
print("字典转换为列表：",list(my_dict))
```
输出结果如下：<br>
```
字符串转换为列表： ['1', '2', '3', '4', '5']
字典转换为列表： ['apple', 'banana', 'orange']
```
### tuple
`tuple(容器)`将给定容器转换为元组<br>
功能：将给定容器转换为元组<br>
> 注意！在将`字符串`和`字典`转化为元组的时候，每一个字符都是单独的一个元素，字典只保留key，不保留value
示例：
```python
my_str = "12345"
my_dict = {'apple': '苹果', 'banana': '香蕉', 'orange': '橙子'}

print("字符串转换为元组：",tuple(my_str))
print("字典转换为元组：",tuple(my_dict))
```
输出结果如下：<br>
```
字符串转换为元组： ('1', '2', '3', '4', '5')
字典转换为元组： ('apple', 'banana', 'orange')
```
### str
`str(容器)`将给定容器转换为字符串<br>
功能：将给定容器转换为字符串<br>
示例：
```python
my_list = [1,2,3,4,5]
my_tuple = (1,2,3,4,5)
my_set = {1,2,3,4,5}
my_dict = {'apple': '苹果', 'banana': '香蕉', 'orange': '橙子'}
my_str = "12345"

print("列表转换为字符串：",str(my_list))
print("元组转换为字符串：",str(my_tuple))
print("集合转换为字符串：",str(my_set))
print("字典转换为字符串：",str(my_dict))
```
输出结果如下：<br>
```
列表转换为字符串： [1, 2, 3, 4, 5]
元组转换为字符串： (1, 2, 3, 4, 5)
集合转换为字符串： {'1', '2', '3', '4', '5'}
字典转换为字符串： {'apple': '苹果', 'banana': '香蕉', 'orange': '橙子'}
```
### set
`set(容器)`将给定容器转换为集合<br>
功能：将给定容器转换为集合<br>
> 注意！在将`字符串`和`列表`转化为集合的时候，每一个字符都是单独的一个元素，字典只保留key，不保留value<br>

示例：
```python
my_list = [1,2,3,4,5]
my_tuple = (1,2,3,4,5)
my_set = {1,2,3,4,5}
my_dict = {'apple': '苹果', 'banana': '香蕉', 'orange': '橙子'}
my_str = "12345"

print("列表转换为集合：",set(my_list))
print("元组转换为集合：",set(my_tuple))
print("字符串转换为集合：",set(my_str))
print("列表转换为集合：",set(my_list))
```
输出结果如下：<br>
```
列表转换为集合： {1, 2, 3, 4, 5}
元组转换为集合： {1, 2, 3, 4, 5}
字符串转换为集合： {'5', '1', '4', '2', '3'}
列表转换为集合：{1,2,3,4,5}
```
## 容器的通用排序功能
语法：`sorted(容器,[reverse=True])`<br>
作用：将给定容器进行排序
示例：
```python
my_list = [1,2,3,4,5]
my_tuple = (1,2,3,4,5)
my_str = "1,2,3,4,5"
my_set = {1,2,3,4,5}
my_dict = {1:"one",2:"two",3:"three",4:"four",5:"five"}

print("列表排序为：",sorted(my_list))
print("元组排序为：",sorted(my_tuple))
print("字符串排序为：",sorted(my_str))
print("集合排序为：",sorted(my_set))
print("字典排序为：",sorted(my_dict))
```
输出：
```
列表排序为： [1, 2, 3, 4, 5]
元组排序为： [1, 2, 3, 4, 5]
字符串排序为： [',', ',', ',', ',', '1', '2', '3', '4', '5']
集合排序为： [1, 2, 3, 4, 5]
字典排序为： [1, 2, 3, 4, 5]
```
---
title: C++ 变量
date: 2025-03-13 14:46:24
tags:
- C++
- 变量
categories: C++  # 文章分类
description: 对于变量的学习分享 # 可选，文章的摘要信息
cover: https://img.loliapi.com/i/pc/img584.webp  # 文章封面图片（适用于部分主题）
top_img: https://img.baiyb.top/file/blog/1771128027478_qqansv7wmrkglaycwaao7t0zf0zhdfg.png # 页面顶部图片（适用于不同主题）
banner: https://img.baiyb.top/file/blog/1771128027478_qqansv7wmrkglaycwaao7t0zf0zhdfg.png  # 备用顶部图片字段
thumbnail: https://img.loliapi.com/i/pc/img584.webp  # 备用封面图片字段
---
# 变量
变量：在程序运行时，能**存储**计算结果或能表示值的抽象概念
> 简单地说，变量就是存放数据的

- 如何得到变量并存入数据？

1. 声明变量（创建变量）
2. 赋值变量

## 变量的声明和赋值
1. 变量的***声明***  
    语法：变量类型 变量名;  
    示例：
    ~~~c++
    int num;
    //int 整形
    //float 实型
    //char 字符型
    //string 字符串型
    ~~~

2. 变量的***赋值***  
    语法：变量名 = 变量值；  
    示例：  
    ~~~c++
    num = 10;
    ~~~
---
偷懒小技巧：  
1. 把 ***声明*** 和 ***赋值*** 写在一起  
    ~~~c++
    int num = 10;   //直接在声明 num 的同时对其进行赋值！
    ~~~
2. 把 ***多个声明*** 写在一起
    ~~~c++
    int x,y,num;   //同时声明了 x,y,num 三个变量！
    ~~~
3. 把 ***多个声明*** 和 ***赋值*** 写在一起
    ~~~c++
    int x = 10,y = 5,num = 0;   //同时声明了 x,y,num 三个变量和他们的赋值！
    ~~~

## 变量的特征
变量的特征就是：<mark>**变量存储的数据，是可以发生改变的**<mark>

1. 更改变量赋值，直接写 **变量名 = 变量值**

- 以上一题为例，已将 **num** 赋值为 **10**  

    此时，对其进行输出指令
    ~~~c++
    cout << "num =" << num << endl;
    ~~~
    返回的值是
    ~~~c++
    num = 10
    ~~~
    但如果按以下操作
    ~~~c++
    #include <iostream>
    using namespace std;
    int main(){
        int num;    //创建 num
        num = 10;   //对 num 第一次赋值
        cout << "num =" << num << endl; //输出1
        num = 20;   //对 num 第二次赋值
        cout << "num =" << num << endl; //输出2
        return 0;
    }
    ~~~
    此时返回的值是
    ~~~c++
    num = 10    //输出1
    num = 20    //输出2
    ~~~
    也就可以很清晰的看到 **num** 成功的被重新赋值为 **20**
    
    ---

2. 同时，变量也存在数学运算
    ~~~c++
    #include <iostream>
    using namespace std;
    int main(){
        int x,y,num;    //创建 x,y,num 三个变量
        x = 10;     //对 x 赋值
        y = 5;      //对 y 赋值
        num = x + y;    //将 num 赋值为 x+y
        cout << "num =" << num << endl; //输出1
        num = num + 5;   //对 num 本身做减法
        cout << "num =" << num << endl; //输出2
        return 0;
    }
    ~~~
    此时返回的值是
    ~~~c++
    num = 5     //输出1
    num = 10    //输出2
    ~~~
    这样我们可以看到：
    - 变量的赋值是可以通过变量和变量的运算得出的
    - 变量的赋值是可以通过这个变量本身和常熟四则运算得出的
---
title: C++ 常量
date: 2025-03-13 13:24:52
tags:
- C++
- 常量
categories: C++  # 文章分类
description: 对于常量的学习分享 # 可选，文章的摘要信息
cover: https://i1.mcobj.com/uploads/20220201_10b8d061a5292.jpg  # 文章封面图片（适用于部分主题）
top_img: https://img.baiyb.top/file/blog/1771128027478_qqansv7wmrkglaycwaao7t0zf0zhdfg.png # 页面顶部图片（适用于不同主题）
banner: https://img.baiyb.top/file/blog/1771128027478_qqansv7wmrkglaycwaao7t0zf0zhdfg.png  # 备用顶部图片字段
thumbnail: https://i1.mcobj.com/uploads/20220201_10b8d061a5292.jpg  # 备用封面图片字段
---
# 常量
常量-在程序执行过程中不会改变的量 
## 字面常量
~~~c++
//以下都是字面常量
#include <iostream>
using namespace std;
int main(){
    21;             //整型：整数，不带小数点的数字
    3.14;           //实型：小数，带小数点的数字
    'a';            //字符型：单引号''引起来的单个字符
    "hello world";  //字符串：双引号""引起来的任意个字符
    return 0;
}
~~~

## 符号常量
符号常量：使用标识符去定义的常量
  > 简单来说就是：**给常量起个名字**  

定义语法  
~~~ c++
#define 标识符(名称) 常量
~~~
  > #define —— 宏命令  
  > 标识符(名称) —— 是宏命令的参数，字母建议全大写  
  > 常量 —— 常量值  

例如：
~~~ c++
#define FAT_MBI 28      //肥胖MBI
#define J2C_RATE 4.19   //焦耳到卡路里比率
~~~

> 在重复使用的时候，难免会出现赋值错误的情况，但是在使用符号常量时，编译器会将符号常量自动替换为常量值，所以不会出现赋值错误的情况。

下面是一个完整的示例：
~~~ c++
#include <iostream>
using namespace std;
#define x 10      //长方形的长
#define y 5       //长方形的宽
//符号常量写在程序的头部
//符号常量的定义末尾不需要分号;
int main(){
    int S;
    S=x*y;
    cout<<"长方形的面积为："<<S<<endl;
    return 0;
}
~~~

正确运行后应该返回
~~~
长方形的面积为：50
~~~
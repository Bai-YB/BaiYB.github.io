---
title: C++ 数据类型
date: 2025-03-16 12:31:47
tags:
- C++
- 数据类型
categories: C++  # 文章分类
description: 对于数据类型的学习分享 # 可选，文章的摘要信息
cover: https://i1.mcobj.com/uploads/20220514_627f57a8cf8e8.png  # 文章封面图片（适用于部分主题）
top_img: https://img.baiyb.top/file/blog/1771128027478_qqansv7wmrkglaycwaao7t0zf0zhdfg.png # 页面顶部图片（适用于不同主题）
banner: https://img.baiyb.top/file/blog/1771128027478_qqansv7wmrkglaycwaao7t0zf0zhdfg.png  # 备用顶部图片字段
thumbnail: https://i1.mcobj.com/uploads/20220514_627f57a8cf8e8.png  # 备用封面图片字段
---
# 数据类型
## 整形
在C++中，整形以 int 为主，但还有别的表现形式，如下表
| 数据类型 | 占用空间 | 取值范围 |
| :------- | :-------: | :------- |
| int(整型) | 4字节 | (-2^31 ~ 2^31-1) |
| short(短整型) | 2字节 | (-2^15 ~ 2^15-1) |
| long(长整形) | 4字节 | (-2^31 ~ 2^31-1) |
| long long(长长整形) | 8字节 | (-2^63 ~ 2^63-1) |  

我们可以用 ***sizeof( )*** 函数来查询不同的整形所占用的空间
~~~c++
#include <iostream>
using namespace std;
int main(){
    //创建不同的整形
    int num1;
    short num2;
    long num3;
    long long num4;

    //sizeof()函数，用法：sizeof(数据)，会告知得到数据所占用的字节
    cout <<"int变量，占用字节："<<sizeof(num1)<< endl;
    cout <<"short变量，占用字节："<<sizeof(num2)<< endl;
    cout <<"long变量，占用字节："<<sizeof(num3)<< endl;
    cout <<"long long变量，占用字节："<<sizeof(num4)<< endl;
    retuen 0;
}
~~~
输出：
~~~c++
int变量，占用字节：4
short变量，占用字节：2
long变量，占用字节：4
long long变量，占用字节：8
~~~

> 其实本质上没啥区别，就是占用空间和取值范围不一样，一般 int 就够用了  

## 实型
在C++中，实型以 float 为主，但还有别的表现形式，如下表
| 数据类型         | 占用空间 | 有效数字范围     |
| :--------------- | :------: | :--------------- |
| float（单精度）  | 4字节    | 7位有效数字      |
| double（双精度） | 8字节    | 15～16位有效数字 |
| long double（多精度） | 16字节 | 18-19位有效数字  |

- 对于 **有效数字范围** 的解释
    ~~~c++
    #include <iostream>
    using namespace std;
    int main(){
        float num1 = 123456789;
        float num2 = 1.23456789;
        cout << "num1 = " << num1 << endl;
        cout << "num2 = " << num2 << endl;
        return 0;
    }
    ~~~
    此时输出的结果是
    ~~~c++
    num1 = 1234567**
    num2 = 1.23456***
    //*在此处表示随机数的意思
    ~~~
    为什么会导致这种情况出现呢？  
    - float 最多只支持7位有效数字
        > 在输出数据的时候，系统输出到第8位的时候发现在 float 的规矩下字符不够用了，于是就会胡编乱造出第8、9位数字来填补，从而出现乱码
    - 小数点也算一位数！
        > 所以会导致使用 float 时，小数点前和小数点后一共输出6位数字，算上小数点正好七位

## 字符型
char 类型用来表示字符，同时支持有符号和无符号
| 数据类型 | 字节数 | 范围 | 映射表 |
| :- | :-: | :- | :-: |
| char  | 1字节    | -128 ~127 | ASCII |

<mark>char 类型的本质是 **数字**</mark>
- 通过 ASCII 码表作为参照，字符->数字，数字->字符
![ASCII 码表](https://ts1.tc.mm.bing.net/th/id/R-C.bfe8baf555cfe83e697cfae4343a717d?rik=LcOqCM3MDOnxYg&riu=http%3a%2f%2fwww.xuandaima.com%2fueditor%2fphp%2fupload%2fimage%2f20211018%2f1634552221832234.png&ehk=2zhD6JAJIt6UY2L2KGO0tggcrjMD0zZ4ESXhJmUMHxY%3d&risl=&pid=ImgRaw&r=0)
下面展示一个例子：
    ~~~c++
    #include <iostream>
    using namespace std;
    int main(){
        char ch;
        ch = 97;
        cout << ch << endl;
        ch = 65;
        cout << ch << endl;
        return 0;
    }
    ~~~
    输出：
    ~~~c++
    a
    A
    ~~~
    因为在 ASCII 码表中，97和65分别表示的是英文字母 "a" 和 "A"，所以输出的是字母而非数字

    ---
- 同时，根据这个特性我们也可以有别的操作
    ~~~c++
    #include <iostream>
    using namespace std;
    int main(){
        char ch1 = 65;
        cout << ch1 << endl;
        char ch2 = 'a';     //将 a 的ASCII码赋到 ch2 上
        cout << ch2 + 1 << endl;
        char ch3 = 'a' + 2; //将 a 的ASCII码加2后赋到 ch3上
        cout << ch3 << endl;
        return 0;
    }
    ~~~
    此时则会输出
    ~~~c++
    A       //65在ASCII码表中对应 A
    98      //ch2代表的是 a 在ASCII码表中的数字96，96+2=98
    c       //ch3代表的是 a 在ASCII码表中的数字96，先加上2后输出，即为 c 
    ~~~

## 字符串
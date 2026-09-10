---
title: 多态
date: 2025-05-09 00:23:49
tags:
- C++
categories: C++  # 文章分类
description: 对于多态的学习分享 # 可选，文章的摘要信息
cover: https://free.picui.cn/free/2025/05/09/681cdfe383516.png  # 文章封面图片（适用于部分主题）
top_img: https://img.baiyb.top/file/blog/1771128027478_qqansv7wmrkglaycwaao7t0zf0zhdfg.png # 页面顶部图片（适用于不同主题）
banner: https://img.baiyb.top/file/blog/1771128027478_qqansv7wmrkglaycwaao7t0zf0zhdfg.png  # 备用顶部图片字段
thumbnail: https://free.picui.cn/free/2025/05/09/681cdfe383516.png  # 备用封面图片字段
---
# 多态
## 多态的基本概念
多态是C++面向对象三大特性之一
多态分为两类
- 静态多态: 函数重载 和 运算符重载属于静态多态，复用函数名
- 动态多态: 派生类和虚函数实现运行时多态
静态多态和动态多态区别：
- 静态多态的函数地址早绑定 - 编译阶段确定函数地址
- 动态多态的函数地址晚绑定 - 运行阶段确定函数地址
## 多态的满足条件
在C++中要实现多态，需要满足以下条件：
- 有继承关系
- 子类重写父类中的虚函数 [virtual]
- 父类的指针或引用指向子类对象
## 多态的使用
现在我们看这个例子

~~~cpp
#include <iostream>
using namespace std;

class Animal
{
    public:
        void Speak(){
            cout<<"MAN!"<<endl;
        }
};

class Cat:public Animal
{
    public:
        void Speak(){ 
            cout<<"24!"<<endl;
        }
};

void dospeak (Animal & animal){
    animal.Speak();
}

int main(){
    Cat cat;
    dospeak (cat);
}
~~~
输出结果为
~~~cpp
MAN!
~~~
我们可以看到，我们在父类中定义了一个函数，在子类中也定义了一个函数，但是我们在主函数中调用的是父类的函数，这是因为在编译阶段，编译器会根据函数的类型来确定函数的地址，而不是根据对象的类型来确定函数的地址。
如果我们想要在主函数中调用子类的函数，我们可以使用多态的方式来实现。
~~~cpp
#include <iostream>
using namespace std;

class Animal
{
    public:
    //virtual虚拟化Speak地址（形成虚函数），优先执行子类的同名代码
        virtual void Speak(){
            cout<<"MAN!"<<endl;
        }
};

class Cat:public Animal
{
    public:
    //多态需要子类重写基类的虚函数，要求【函数类型 函数名 参数列表】完全相同
        void Speak(){ 
            cout<<"24!"<<endl;
        }
};

void dospeak (Animal & animal){
    animal.Speak();
}

int main(){
    Cat cat;
    dospeak (cat);
}
~~~
输出结果为
~~~cpp
24!
~~~
我们可以看到，我们在父类中定义了一个虚函数，在子类中也定义了一个函数，但是我们在主函数中调用的是子类的函数，这是因为在编译阶段，编译器会根据函数的类型来确定函数的地址，而不是根据对象的类型来确定函数的地址。

这就是虚函数在Cpp中的作用，能让你的基类更加的通用，只需修改不同子类，让你的代码更加的灵活。

## 多态的原理
<font size=5>若不使用多态，运行顺序如下图</font>

![微信图片_20250510113654.png](https://free.picui.cn/free/2025/05/10/681ec9ff6a28d.png)
> Cat继承了Animal里的public Speak函数，但由于Speak函数并不是虚函数，即使子类重写基类，但仍然是按照基类的Speak函数来执行。

<br/>
<font size=5>若使用多态，运行顺序如下图</font>

![微信图片_20250510114348.png](https://free.picui.cn/free/2025/05/10/681ecb8691b8d.png)
> 由于当前Speak函数是虚函数，即使子类重写基类，但仍然是按照子类的Speak函数来执行。
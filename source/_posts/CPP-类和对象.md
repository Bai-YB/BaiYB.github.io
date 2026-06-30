---
title: 类和对象
date: 2025-03-22 15:28:54
tags:
- C++
- 访问权限
categories: C++  # 文章分类
description: 对于类和对象的学习分享 # 可选，文章的摘要信息
cover: https://i1.mcobj.com/uploads/20220511_5f326aac96865.png  # 文章封面图片（适用于部分主题）
top_img: https://img.baiyb.top/file/blog/1771128027478_qqansv7wmrkglaycwaao7t0zf0zhdfg.png # 页面顶部图片（适用于不同主题）
banner: https://img.baiyb.top/file/blog/1771128027478_qqansv7wmrkglaycwaao7t0zf0zhdfg.png  # 备用顶部图片字段
thumbnail: https://i1.mcobj.com/uploads/20220511_5f326aac96865.png  # 备用封面图片字段
---
# 类和对象
定义：<mark>具有相同性质</mark>的对象，可以抽象的理解为一类
> 例如：  
> 人类：张三、李四、王五都是人，他们都有相同的性质，比如：姓名、年龄、性别、身高、体重等。  
> 车类：宝马、奔驰、奥迪都是车，他们都有相同的性质，比如：品牌、颜色、速度、价格等。

## 封装
### 封装的意义
- 将属性和行为作为一个整体，表现生活中的事物
- 将属性和行为加以权限控制
> 就是在写代码的时候，将属性和行为放在一起，放在一个类中，然后通过权限控制来控制属性和行为的访问权限

语法：
```c++
class 类名{
    访问权限：
        属性/成员属性
        行为/成员函数
}
```
封装的意义①：
- 在设计类的时候，属性和行为写在一起，表现事物

示例1：求圆的周长
```c++
#include <iostream>
using namespace std;

// 规定常量PI的值为3.14
const double PI = 3.14;

// 定义圆类
class Circle{

    // 访问权限：
    public:

        // 属性：半径
        int m_r;

        // 行为：获取圆的周长
        double calculateZC(){
            return 2 * PI * m_r;
        }
};

int main(){

    // 通过圆类创建具体的圆（对象）
    //实例化（通过一个类创建一个对象的过程）
    Circle c1;

    // 给圆对象的属性进行赋值
    c1.m_r = 10;

    // 输出圆的周长
    cout << "圆的周长为：" << c1.calculateZC() << endl;
    return 0;
}
```
输出：
```c++
圆的周长为：62.8
```
封装的意义②：
- 将属性和行为加以权限控制

访问权限有三种：
- public：公共权限      类内可访问 类外可访问
- protected：保护权限   类内可访问 类外不可访问 子类可访问
- private：私有权限     类内可访问 类外不可访问 子类不可访问

示例2：
```c++
#include <iostream>
using namespace std;
// 定义人类
class Person{
    //类内

    // 访问权限：
    public:     //公共权限

        // 属性：姓名
        string m_name = "李四";

        // 行为：显示姓名
        void showName(){
            cout << "姓名为：" << m_name << endl;
        }   

    protected:  //保护权限

        // 属性：年龄
        string m_age = 16;

        // 行为：显示年龄
        void showAge(){
            cout << "年龄为：" << m_age << endl;
        }

    private:    //私有权限

        // 属性：身高
        string m_height = 190;

        // 行为：显示身高
        void showHeight(){
            cout << "身高为：" << m_height << endl;
        }
};
int main(){

    // 创建具体的人对象
    Person p1;

    // 给对象的属性进行赋值
    p1.m_name = "张三";
    p1.m_age = "18";
    p1.m_height = "180cm";

    // 显示姓名
    p1.showName();

    // 显示年龄
    p1.showAge();

    // 显示身高
    p1.showHeight();
    return 0;
}
```
输出：
```c++
姓名为：张三
年龄为：16
身高为：190cm
```
> 在类外设置的值  
> 姓名：张三  
> 年龄：18  
> 身高：180cm  
> 但因为访问权限不同，所以输出的和类外规定的有差异

### struct和class区别
在C++中，struct和class的区别只有 **默认权限** 的不同：    
- struct：默认权限为public
- class：默认权限为private

示例：
```c++
#include <iostream>
using namespace std;
// 定义人类1
struct Person1{
    int m_A;
};
// 定义人类2
class Person2{
    int m_A;
};
int main(){
    Person1 p1;
    p1.m_A = 10;    //可以访问，因为m_A是公共权限，类外可访问
    cout << "p1.m_A = " << p1.m_A << endl;
    Person2 p2;
    p2.m_A = 10;    //报错，因为m_A是私有权限，类外不可访问
    cout << "p2.m_A = " << p2.m_A << endl;
    return 0;
}
```
输出：
```c++
p1.m_A = 10
```

### 成员属性设置为私有
**优点1**：将所有成员属性设置为私有，可以自己控制读写权限  
**优点2**：对于写权限，我们可以检测数据的有效性
> 核心：在类外调用公共部分，公共部分在类内对私有部分进行更改

示例：
```c++
#include <iostream>
using namespace std;
// 定义人类
class Person{
    public:
        // 设置姓名
        void setName(string name){
            m_name = name;
        }
        // 获取姓名
        string getName(){
            return m_name;
        }
        // 设置年龄
        void setAge(int age){
            if(age < 0 || age > 150){
                cout << "年龄不合法！" << endl;
                return;
            }
        }
        // 获取身高
        int getHeight(){
            return m_height;
        }
    private:
        // 姓名 可读可写
        string m_name;
        // 年龄 只写
        int m_age;
        // 身高 只读
        int m_height = 180;
};
int main(){
    Person p1;
    p1.setName("张三");
    cout << "姓名为：" << p1.getName() << endl;
    p1.setAge(18);
    return 0;
}
```
输出：
```c++
姓名为：张三
```
<br>

## 对象的初始化和清理
c++中，每个对象都会有初始设置以及对象销毁前的清理数据的设置
### 构造函数和析构函数
c++中对象的初始化和清理，有两种方式：
- 构造函数：主要作用在于创建对象时为对象的成员属性赋值，构造函数由编译器自动调用，无须手动调用。
- 析构函数：主要作用在于对象销毁前系统自动调用，执行一些清理工作。  

#### 构造函数语法：
```c++
类名(){
    //构造函数的代码
}
```
> 1.构造函数没有返回值也不写void  
> 2.函数名称与类名相同  
> 3.构造函数可以有参数，因此可以发生重载  
> 4.系统会自动调用构造函数，无需手动调用，而且只会调用一次  

示例：
```c++
#include <iostream>
using namespace std;
// 定义人类
class Person{
    public:
        // 构造函数
        Person(){
            cout << "构造函数调用" << endl;
        }
};
int main(){
    Person p1;
    return 0;
}
```
输出：
```c++
构造函数调用
``` 
<br>

#### 析构函数语法：
```c++
~类名(){
    //析构函数的代码
}
```
> 1.析构函数没有返回值也不写void  
> 2.函数名称与类名相同，在名称前加上~  
> 3.析构函数不可以有参数，因此不可以发生重载  
> 4.对象在销毁前，系统会自动调用析构函数，无需手动调用，而且只会调用一次

示例：
```c++
#include <iostream>
using namespace std;
// 定义人类
class Person{
    public:
        // 析构函数
        ~Person(){
            cout << "析构函数调用" << endl;
        }
};
int main(){
    Person p1;
    return 0;
}
```
输出：
```c++
析构函数调用
```

二合一示例：
```c++
#include <iostream>
using namespace std;
// 定义人类
class Person{
    public:
        // 构造函数
        Person(){
            cout << "构造函数调用" << endl;
        }
        // 析构函数
        ~Person(){
            cout << "析构函数调用" << endl;
        }
};
int main(){
    Person p1;
    return 0;
}
```
输出：
```c++
构造函数调用
析构函数调用
请按任意键继续. . .
```
> 在Person类的创建中，调用了构造函数，而在程序结束，类销毁时，调用了析构函数。

假如我们把 main 函数部分稍作更改，可能会看的更清晰
```c++
int main(){
    Person p1;
    system("pause");    //暂停
    return 0;
}
```
输出：
```c++
构造函数调用
请按任意键继续. . .
```
这个时候我们点击任意键，程序会释放内存，调用析构函数
```c++
构造函数调用
请按任意键继续...
析构函数调用
```
> 可以看到，在程序暂停时，析构函数并没有被调用  
> 这是因为，程序在暂停时，对象还没被销毁，所以析构函数没有被调用。

<br>

### 构造函数的分类及调用
两种分类方式：  
- 按参数分为：有参构造和无参构造  
- 按类型分为：普通构造和拷贝构造  

三种调用方式：
- 括号法
- 显示法
- 隐式转换法

示例：
```c++
#include <iostream>
using namespace std;
// 定义人类
class Person{
    public:
        // 构造函数
        Person(){                   //括号里无参数，是无参构造函数（默认调用）
            cout << "无参构造函数调用" << endl;
        }
        Person(int a){              //括号里有参数，有参构造函数
            cout << "有参构造函数调用" << endl;
        }
        Person(const Person &p){    //传进来一个person，将他的所有特征复制到另一个person身上
            cout << "拷贝构造函数调用" << endl;
        }

        // 析构函数
        ~Person(){
            cout << "析构函数调用" << endl;
        }
}

viod test01(){

}

int main(){
    test01();
    return 0;
}
```

现在我们分别从三种调用方式来分析
1. 括号法
```c++
viod test01(){
    Person p1;          //默认构造函数调用
    Person p2(10);      //有参构造函数调用
    Person p3(p2);      //拷贝构造函数调用

    cout << p2.age << endl;    //输出p2的年龄
    cout << p3.age << endl;    //输出p3的年龄
}
```
输出：
```c++
无参构造函数调用    //Person p1;
有参构造函数调用    //Person p2(10);
拷贝构造函数调用    //Person p3(p2); 

//分别输出p2和p3的年龄
10
10
//此时我们可以看到，拷贝构造函数成功的将p2的值复制到了p3身上

//分别释放
析构函数调用
析构函数调用
析构函数调用
```

> **注意**：
> - 调用无参构造函数时，不要加括号，会被系统认为是函数声明而不调用构造函数

2. 显示法
```c++
viod test01(){
    Person p1;                      //默认构造函数调用
    Person p2 = Person(10);         //有参构造函数调用
    Person p3 = Person(p2);         //拷贝构造函数调用
}
```
输出：
```c++
无参构造函数调用    //Person p1;    
有参构造函数调用    //Person p2 = Person(10);   
拷贝构造函数调用    //Person p3 = Person(p2);  
//分别释放 
析构函数调用
析构函数调用
析构函数调用
```
> **注意**：
> - Person(10) 是一个匿名对象，当前行结束后，系统会立即释放这个对象再进行下一步！！！
> 
> 例如：
> ```c++
> viod test01(){
>     Person(10);
>     cout << "hello" << endl;
> }
> ```
> 输出：
> ```c++
> 有参构造函数调用
> 析构函数调用
> hello
> ```

3. 隐式转换法
```c++
viod test01(){
    Person p1;                      //默认构造函数调用
    Person p2 = 10;                 //有参构造函数调用 相当于 Person p2 = Person(10);
    Person p3 = p2;                 //拷贝构造函数调用 相当于 Person p3 = Person(p2);
}
```
输出：
```c++
无参构造函数调用    //Person p1;    
有参构造函数调用    //Person p2 = 10;
拷贝构造函数调用    //Person p3 = p2;   
//分别释放  
析构函数调用
析构函数调用
析构函数调用
```
<br>

### 拷贝构造函数调用时机
C++中拷贝构造函数调用时机通常有三种情况：
- 使用一个已经创建完毕的对象来初始化一个新对象
- 值传递的方式给函数参数传值
- 以值方式返回局部对象
示例：
```c++
#include <iostream>
using namespace std;    
// 定义人类
class Person{
    public:
        // 构造函数
        Person(){                   //括号里无参数，是无参构造函数（默认调用）
            cout << "无参构造函数调用" << endl;
        }
        Person(int a){              //括号里有参数，有参构造函数
            cout << "有参构造函数调用" << endl;
        }
        Person(const Person &p){    //传进来一个person，将他的所有特征复制到另一个person身上
            cout << "拷贝构造函数调用" << endl;
        }
        // 析构函数
        ~Person(){
            cout << "析构函数调用" << endl;
        }
}

// 1. 使用一个已经创建完毕的对象来初始化一个新对象
void test01(){
    Person p1(20);
    Person p2(p1);
}

// 2. 值传递的方式给函数参数传值
void doWork(Person p){
    
}
void test02(){
    Person p;
    doWork(p);
}

// 3. 以值方式返回局部对象
Person doWork2(){
    Person p1;
    return p1;
}
void test03(){
    Person p = doWork2();
}
int main(){
    test01();
    test02();
    test03();
}
```
输出：
```c++
有参构造函数调用    //Person p1(20);    
拷贝构造函数调用    //Person p2(p1);    
析构函数调用
析构函数调用

无参构造函数调用    //Person p;
拷贝构造函数调用    //doWork(p);    把p的值复制给doWork函数中的p，调用一次拷贝构造函数
析构函数调用
析构函数调用

无参构造函数调用    //Person p;
拷贝构造函数调用    //doWork2();    
析构函数调用
析构函数调用
析构函数调用
```
> 可以看到，在三种情况下，都调用了拷贝构造函数。  
> 这是因为，在创建新对象时，会调用拷贝构造函数来初始化新对象。
> 
<br>

### 友元
#### 全局函数做友元
- 全局函数做友元的目的是为了让全局函数能够访问类中的私有成员
- 友元的声明可以放在类的任何地方，不受访问权限的限制
- 语法：
```c++
class 类名{
    friend void 全局函数名(参数列表);
}
```
示例：
```c++
#include <iostream>
using namespace std;
// 定义人类
class Person{
    public:
        // 构造函数
        Person(){                   //括号里无参数，是无参构造函数（默认调用）
            cout << "无参构造函数调用" << endl;
        }
}
// 全局函数
void goodFriend(Person &p){
    cout << "全局函数goodFriend" << endl;
}
int main(){
    Person p1;
    goodFriend(p1);
    return 0;
}
```
输出：
```c++
无参构造函数调用    //Person p1;
全局函数goodFriend
```
> 可以看到，全局函数goodFriend成功的访问了类中的私有成员。
#### 类做友元
- 类做友元的目的是为了让类中的所有成员函数都能够访问另一个类中的私有成员
- 友元的声明可以放在类的任何地方，不受访问权限的限制
- 语法：
```c++
class 类名{
    friend class 类名;
}
```
示例：
```c++
#include <iostream>
using namespace std;
// 定义人类
class Person{
    public:
        // 构造函数
        Person(){                   //括号里无参数，是无参构造函数（默认调用）
            cout << "无参构造函数调用" << endl;
        }
        // 成员函数
        void goodFriend(){
            cout << "成员函数goodFriend" << endl;
        }
}
// 类
class Building{
    friend class Person;
}
int main(){
    Building b1;
    Person p1;
    p1.goodFriend();
    return 0;
}
```
输出：
```c++
无参构造函数调用    //Building b1;    类Building的无参构造函数调用
无参构造函数调用    //Person p1;      类Person的无参构造函数调用
成员函数goodFriend
```
> 可以看到，类中的成员函数goodFriend成功的访问了类中的私有成员。

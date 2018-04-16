# [react-native-whc-calendar](https://github.com/netyouli/react-native-whc-calendar/)
一款简单易用的react-native calendar 组件，支持 Android&iOS。

[ ![release](https://img.shields.io/github/release/netyouli/react-native-whc-calendar.svg?maxAge=2592000?style=flat-square)](https://github.com/netyouli/react-native-whc-calendar/releases)
[ ![PRs Welcome](https://img.shields.io/badge/PRs-Welcome-brightgreen.svg)](https://github.com/netyouli/react-native-whc-calendar/pulls)
[ ![NPM version](http://img.shields.io/npm/v/react-native-whc-calendar.svg?style=flat)](https://www.npmjs.com/package/react-native-whc-calendar)
[![License MIT](http://img.shields.io/badge/license-MIT-orange.svg?style=flat)](https://raw.githubusercontent.com/netyouli/react-native-whc-calendar/master/LICENSE)
[ ![language English](https://img.shields.io/badge/language-English-yellow.svg)](https://github.com/netyouli/react-native-whc-calendar/)




## 目录

- [安装](#安装)
- [Demo](#demo)
- [如何使用？](#如何使用？)
- [API](#api)
- [贡献](#contribution)

## 安装

* 1.在终端运行 `npm install react-native-whc-calendar --save`
* 2.在要使用`Calendar`的js文件中添加`import Calendar from 'react-native-whc-calendar'`

## Demo  
* [Example](https://github.com/netyouli/react-native-whc-calendar/tree/master/example)

<img src = "https://github.com/netyouli/react-native-whc-calendar/blob/master/example/screenshots/react-native-whc-gird.jpg" width = "375">

## 如何使用？  

>第一步：

在你的js文件中导入 `react-native-whc-calendar`：

`import Calendar from 'react-native-whc-calendar'`

>第二步：   

将下面代码插入到`render()`方法中：   

```jsx
 render() {
          return (
              <Calendar
                  days={30}
              />
          );
  }

```

### 用例  

```jsx
render() {
        return (
           <Calendar
               days={30}
               onSelectedDateBlock={(s,e) => {
                  /// 返回选择的日期
               }
           }/>
        );
    }
```

## API

属性              | 类型     | 可选 | 默认值     | 描述
----------------- | -------- | -------- | ----------- | -----------
days |  PropTypes.number |true | 0  | 指定显示多少天日期数（按天数生成日期）
months  | PropTypes.number  | true | 0  |   指定显示多少个月日期数（按月数生成日期）
startYear  | PropTypes.number  | true | 0  |   指定显示开始年（按年生成日期）
endYear  | PropTypes.number  | true | 0  |   指定显示结束年（按年生成日期）
startDateStr  | PropTypes.string  | true | null  |   默认选中开始日期
endDateStr  | PropTypes.string  | true | null  |   默认选中结束日期
startSelectedHint  | PropTypes.string  | true | null  |   默认开始选中提示
endSelectedHint  | PropTypes.string  | true | null  |   默认结束选中提示
onSelectedDateBlock  | PropTypes.func  | true | null  |   选择日期回调方法
selectedColor  | PropTypes.string  | true | null  |   指定选中日期背景颜色
selectedMidColor  | PropTypes.string  | true | null  |   指定选中中的日期背景颜色
selectedTextColor  | PropTypes.string  | true | null  |   指定选中的日期文字颜色
highlightColor  | PropTypes.string  | true | null  |   指定默认节假日文字高亮颜色
enableSingleChoice  | PropTypes.bool  | true | false  |   是否启用单选
invalidDateNotSelected  | PropTypes.bool  | true | true  |   是否启用无效日期可选择




## 贡献

欢迎大家提Issues。如果能为Issues配一个异常或报错的截图，能帮助我快速的定位问题和解决问题。  
另外欢迎大家Pull requests，为项目贡献的智慧。

---

**MIT Licensed**    
大家可以自由复制和转载。  

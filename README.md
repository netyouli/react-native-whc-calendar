# react-native-whc-calendar
A react native module to show calendar, it works on iOS and Android.

[ ![release](https://img.shields.io/github/release/netyouli/react-native-whc-calendar.svg?maxAge=2592000?style=flat-square)](https://github.com/netyouli/react-native-whc-calendar/releases)
[ ![PRs Welcome](https://img.shields.io/badge/PRs-Welcome-brightgreen.svg)](https://github.com/netyouli/react-native-whc-calendar/pulls)
[ ![NPM version](http://img.shields.io/npm/v/react-native-whc-calendar.svg?style=flat)](https://www.npmjs.com/package/react-native-whc-calendar)
[![License MIT](http://img.shields.io/badge/license-MIT-orange.svg?style=flat)](https://raw.githubusercontent.com/crazycodeboy/react-native-whc-calendar/master/LICENSE)
[ ![语言 中文](https://img.shields.io/badge/语言-中文-yellow.svg)](https://github.com/netyouli/react-native-whc-calendar/blob/master/README.zh.md)



## Content

- [Installation](#installation)
- [Demo](#demo)
- [Getting started](#getting-started)
- [API](#api)
- [Contribution](#contribution)

## Installation

* 1.Run `npm install react-native-whc-calendar --save`
* 2.`import Calendar from 'react-native-whc-calendar'`

## Demo  
* [Example](https://github.com/netyouli/react-native-whc-calendar/tree/master/example)

<img src = "https://github.com/netyouli/react-native-whc-calendar/blob/master/example/screenshots/react-native-whc-calendar.png" width = "375">

## Getting started  

Add `react-native-whc-calendar` to your js file.

`import Calendar from 'react-native-whc-calendar'`

Inside your component's render method, use Calendar:

```jsx
 render() {
         return (
             <Calendar
                 days={30}
             />
         );
 }

```

### Basic usage

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

Props              | Type     | Optional | Default     | Description
----------------- | -------- | -------- | ----------- | -----------
days |  PropTypes.number |true | 0  | Specified date days
months  | PropTypes.number  | true | 0  |   Specified date months
startYear  | PropTypes.number  | true | 0  |   Specified date start year
endYear  | PropTypes.number  | true | 0  |   Specified date end year
startDateStr  | PropTypes.string  | true | null  |   default choice start date
endDateStr  | PropTypes.string  | true | null  |   default choice end date
startSelectedHint  | PropTypes.string  | true | null  |   default choice start date hint
endSelectedHint  | PropTypes.string  | true | null  |   default choice end date hint
onSelectedDateBlock  | PropTypes.func  | true | null  |   choice date callback func
selectedColor  | PropTypes.string  | true | null  |   default choice date back color
selectedMidColor  | PropTypes.string  | true | null  |   default choice min date back color
selectedTextColor  | PropTypes.string  | true | null  |   default choice date text color
highlightColor  | PropTypes.string  | true | null  |   default date holiday color
enableSingleChoice  | PropTypes.bool  | true | false  |   enable single one date
invalidDateNotSelected  | PropTypes.bool  | true | true  |   default not choice invalid date

## Contribution

Issues are welcome. Please add a screenshot of bug and code snippet. Quickest way to solve issue is to reproduce it on one of the examples.

Pull requests are welcome. If you want to change API or making something big better to create issue and discuss it first.

---

**MIT Licensed**

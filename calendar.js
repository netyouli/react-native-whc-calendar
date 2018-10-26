//  Created by WHC on 18/4/10.
//  Copyright © 2017年 WHC. All rights reserved.
//
//  Github <https://github.com/netyouli/react-native-whc-calendar>
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.
import React, {Component} from 'react';
import {
    View,
    StyleSheet,
    SectionList,
    TouchableHighlight,
    Text,
} from 'react-native';

import PropTypes from 'prop-types';
import CalendarGridItem from './calendar-grid-item';
import {calendar} from './calendar-tool';

/**
 * 阳历节日
 */
const yholidayMap = {
    '01-01': '元旦',
    '01-05': '小寒',
    '01-06': '小寒',
    '01-20': '大寒',
    '01-21': '大寒',
    '02-04': '立春',
    '02-05': '立春',
    '02-14': '情人节',
    '02-18': '雨水',
    '02-19': '雨水',
    '02-24': '青年日',
    '03-01': '海豹节',
    '03-05': '雷锋纪念日',
    '03-06': '惊蜇',
    '03-08': '妇女节',
    '03-12': '植树节',
    '03-14': '警察日',
    '03-17': '航海日',
    '03-18': '活动日',
    '03-20': '春分',
    '03-21': '春分',
    '03-22': '水日',
    '03-23': '气象日',
    '03-24': '结核病日',
    '03-31': '教育日',
    '04-01': '愚人节',
    '04-03': '寒食节',
    '04-04': '寒食节',
    '04-05': '清明节',
    '04-20': '谷雨',
    '04-21': '谷雨',
    '05-01': '劳动节',
    '05-04': '青年节',
    '05-05': '立夏',
    '05-06': '立夏',
    '05-20': '小满',
    '05-21': '小满',
    '06-01': '儿童节',
    '06-05': '芒种',
    '06-06': '芒种',
    '06-21': '夏至',
    '06-22': '夏至',
    '07-07': '小暑',
    '07-08': '小暑',
    '07-22': '大暑',
    '07-23': '大暑',
    '08-01': '建军节',
    '08-07': '立秋',
    '08-08': '立秋',
    '08-23': '处暑',
    '08-24': '处暑',
    '09-07': '白露',
    '09-08': '白露',
    '09-10': '教师节',
    '09-17': '和平日',
    '09-23': '秋分',
    '09-24': '秋分',
    '10-01': '国庆节',
    '10-08': '寒露',
    '10-09': '寒露',
    '10-23': '霜降',
    '10-24': '联合国日',
    '10-31': '万圣节',
    '11-02': '万灵节',
    '11-07': '立冬',
    '11-08': '立冬',
    '11-11': '光棍节',
    '11-17': '大学生节',
    '11-22': '小雪',
    '11-23': '小雪',
    '12-07': '大雪',
    '12-08': '大雪',
    '12-21': '冬至',
    '12-22': '冬至',
    '12-24': '平安夜',
    '12-25': '圣诞节',
    
};


/**
 * 农历节日
 */
const nholidayMap = {
    '01-01': '春节',
    '01-15': '元宵节',
    '05-05': '端午节',
    '07-07': '情人节',
    '08-15': '中秋节',
    '09-09': '重阳节',
    '06-24': '火把节',
    '10-01': '祭祖节',
    '12-08': '腊八节',
    '12-23': '小年',
    '12-30': '除夕',
};

export default class Calendar extends Component {

    static propTypes = {
        days:                   PropTypes.number,
        months:                 PropTypes.number,
        startYear:              PropTypes.number,
        endYear:                PropTypes.number,
        startDateStr:           PropTypes.string,
        endDateStr:             PropTypes.string,
        startSelectedHint:      PropTypes.string,
        endSelectedHint:        PropTypes.string,
        onSelectedDateBlock:    PropTypes.func,
        selectedColor:          PropTypes.string,
        selectedMidColor:       PropTypes.string,
        selectedTextColor:      PropTypes.string,
        highlightColor:         PropTypes.string,
        enableSingleChoice:     PropTypes.bool,
        invalidDateNotSelected: PropTypes.bool,
    };

    static defaultProps = {
        days:                   0,
        months:                 0,
        startYear:              0,
        endYear:                0,
        startDateStr:           null,
        endDateStr:             null,
        startSelectedHint:      null,
        endSelectedHint:        null,
        onSelectedDateBlock:    null,
        selectedColor:          '#1895D4',
        selectedMidColor:       'rgba(24,149,212,0.2)',
        selectedTextColor:      '#fff',
        highlightColor:         'red',
        enableSingleChoice:     false,
        invalidDateNotSelected: true,
    };

    constructor(props) {
        super(props);
        const cdate = new Date();
        this.dateInfo = {
            year: cdate.getFullYear(),
            month: cdate.getMonth() + 1,
            day: cdate.getDate(),
            nowDateStr: cdate.getFullYear() + '-' + ((cdate.getMonth() + 1) < 10 ? '0' + (cdate.getMonth() + 1) : (cdate.getMonth() + 1) + '') + '-' + (cdate.getDate() < 10 ? '0' + cdate.getDate() : cdate.getDate() + ''),
        };
        this.state = {
            sections: [],
        };
        this.sections = [];
        this.startDate = null;
        this.endDate = null;
    }

    componentDidMount() {
        const calculateDate = new Promise((resolve,reject) => {
            const {
                days,
                months,
                startYear,
                endYear,
            } = this.props;
            let sections = [];
            if (days > 0) {
                sections = this._generatorDateWithDays(days);
            }else if (months > 0) {
                sections = this._generatorDateWithMonth(months);
            }else if (startYear > 0 && endYear > 0) {
                sections = this._generatorDateWithYear(startYear, endYear);
            }
            resolve(sections);
        });
        calculateDate.then((sections) => {
            this.setState(state => {
                state.sections = sections;
                return state;
            });
        });
    }

    /**
     * 创建周头部
     * @returns {*}
     * @private
     */
    _createWeekHeader() {
        return (
            <View style={styles.headerWeek}>
                <Text style={[styles.headerWeekTitle, {color: 'red'}]}>{'日'}</Text>
                <Text style={styles.headerWeekTitle}>{'一'}</Text>
                <Text style={styles.headerWeekTitle}>{'二'}</Text>
                <Text style={styles.headerWeekTitle}>{'三'}</Text>
                <Text style={styles.headerWeekTitle}>{'四'}</Text>
                <Text style={styles.headerWeekTitle}>{'五'}</Text>
                <Text style={[styles.headerWeekTitle, {color: 'red'}]}>{'六'}</Text>
            </View>
        );
    }

    /**
     * 创建列表年月日section
     * @private
     */
    _createWeekSection(item) {
        const {
            section,
        } = item;
        return (
            [<View key={section.title}
                   style={styles.headerWeekSection}>
                <Text style={styles.headerWeekSectionTitle}>{section.title}</Text>
            </View>,
                this._createRowLine(section.title + '1')]
        );
    }

    /**
     * 创建
     * @param item
     * @returns {*}
     * @private
     */
    _createItem(items) {
        let itemViews = [];
        const {
            item,
        } = items;
        const oneDay = item.days[0];
        if (oneDay.week > 0) {
            for (let i = 0; i < oneDay.week; i++) {
                itemViews.push(<CalendarGridItem key={i} item={null}/>);
            }
        }
        const {
            startSelectedHint = null,
            endSelectedHint = null,
            selectedColor = '#1895D4',
            selectedMidColor = 'rgba(24,149,212,0.2)',
            selectedTextColor = '#fff',
            highlightColor = 'red',
        } = this.props;

        item.days.forEach((v,i) => {
            itemViews.push(
                <CalendarGridItem
                    startSelectedHint={startSelectedHint}
                    endSelectedHint={endSelectedHint}
                    selectedColor={selectedColor}
                    selectedMidColor={selectedMidColor}
                    selectedTextColor={selectedTextColor}
                    highlightColor={highlightColor}
                    key={v.key}
                    item={v}
                    onPress={(it) => {
                        const {
                            invalidDateNotSelected,
                            onSelectedDateBlock = null,
                            enableSingleChoice = false,
                        } = this.props;
                        const {
                            sections = [],
                        } = this.state;
                        if (!this.startDate || (this.startDate && this.endDate) || enableSingleChoice) {
                            this.startDate = it;
                            this.endDate = null;
                            const {
                                startDate = null,
                            } = this;
                            const tmpStartDate = startDate.year + startDate.month + startDate.day;
                            sections.forEach(v => {
                                v.data[0].days.forEach(dv => {
                                    const tmpdate = dv.year + dv.month + dv.day;
                                    dv.startSelected = tmpStartDate === tmpdate;
                                    dv.endSelected = false;
                                    dv.isSelected = false;
                                    dv.isLessToday = invalidDateNotSelected ? tmpStartDate > tmpdate : false;
                                });
                            });
                            if (enableSingleChoice) {
                                onSelectedDateBlock && onSelectedDateBlock(startDate.year + '-' + startDate.month + '-' + startDate.day, null);
                            }
                        }else if (!this.endDate) {
                            this.endDate = it;
                            const {
                                startDate = null,
                                endDate = null,
                            } = this;
                            const nowDateStr = this.dateInfo.nowDateStr.replace(new RegExp('-','g'),'');
                            const tmpStartDate = startDate.year + startDate.month + startDate.day;
                            const tmpEndDate = endDate.year + endDate.month + endDate.day;
                            sections.forEach(v => {
                                v.data[0].days.forEach(dv => {
                                    const tmpdate = dv.year + dv.month + dv.day;
                                    dv.startSelected = tmpStartDate === tmpdate;
                                    dv.endSelected = tmpEndDate === tmpdate;
                                    dv.isSelected = tmpdate > tmpStartDate && tmpdate < tmpEndDate;
                                    dv.isLessToday = invalidDateNotSelected ? nowDateStr > tmpdate : false;
                                });
                            });
                            onSelectedDateBlock && onSelectedDateBlock(startDate.year + '-' + startDate.month + '-' + startDate.day,
                                endDate.year + '-' + endDate.month + '-' + endDate.day);
                        }
                        this.setState(state => {
                            state.sections = sections;
                            return state;
                        });
                    }

            }/>);
        });
        itemLen = itemViews.length;
        const lastDay = item.days[item.days.length - 1];
        if (lastDay.week < 6) {
            for (let i = lastDay.week; i < 6; i++) {
                itemViews.push(<CalendarGridItem
                    key={itemLen + i}
                    item={null}/>);
            }
        }
        return (
            <View
                key={item.key}
                style={styles.sectionItem}>
                {itemViews}
            </View>
        );
    }

    /**
     * 创建线
     * @returns {*}
     * @private
     */
    _createRowLine(key = '0') {
        return (
            <View key={key} style={{height:1,backgroundColor:'#f1f1f1'}}/>
        );
    }

    /**
     * 生成日期天数
     * @param days
     * @private
     */
    _generatorDateWithDays(days = -1) {
        let sections = [];
        if(days > 0) {
            const nowDate = new Date();
            const sumDays = nowDate.getDate() + days;
            const months = Math.floor(sumDays / 30) + (sumDays % 30 !== 0 ? 1 : 0);
            sections = this._generatorDateWithMonth(months, sumDays);
        }
        return sections;
    }

    /**
     * 自动生成日期数据
     * @param monthCount
     * @private
     */
    _generatorDateWithMonth(monthCount, expectDays = -1) {
        let sections = [];
        const nowDate = new Date();
        const nowYear = nowDate.getFullYear();
        const nowMonth = nowDate.getMonth();
        const years = Math.floor((nowMonth + monthCount) / 12) + ((monthCount + nowMonth) % 12 !== 0 ? 1 : 0);
        let curSumDays = 0;
        for (let y = 0; y < years; y++) {
            let tempMonthCount = 12;
            let startMonth = 0;
            if (y === 0) {
                startMonth = nowMonth;
            }
            if (y === years - 1) {
                tempMonthCount = monthCount - sections.length;
                if (tempMonthCount < startMonth || y === 0) {
                    tempMonthCount = startMonth + tempMonthCount;
                }
            }
            for (let m = startMonth; m < tempMonthCount; m++) {
                const tempYear = nowYear + y;
                const tempMonth = m + 1;
                const days = this._generatorDays(tempYear, tempMonth, expectDays - curSumDays);
                curSumDays += days.length;
                const tempMonthStr = (tempMonth < 10 ? ('0' + tempMonth) : (tempMonth + ''));
                const key = tempYear + '年' + tempMonth + '月';
                sections.push({
                    key: key,
                    title: key,
                    year: tempYear + '',
                    month: tempMonthStr,
                    data: [{
                        key: key,
                        days: days
                    }],
                });
            }
        }
        return sections;
    }

    /**
     * 生成日期数据
     * @private
     */
    _generatorDateWithYear(startYear, endYear) {
        let sections = [];
        if (endYear >= startYear) {
            const years = endYear - startYear;
            for (let y = 0; y <= years; y++) {
                for (let m = 0; m < 12; m++) {
                    const tempYear = startYear + y;
                    const tempMonth = m + 1;
                    const days = this._generatorDays(tempYear, tempMonth);
                    const key = tempYear + '年' + tempMonth + '月';
                    const tempMonthStr = (tempMonth < 10 ? ('0' + tempMonth) : (tempMonth + ''));
                    sections.push({
                        key: key,
                        title: key,
                        year: tempYear + '',
                        month: tempMonthStr,
                        data: [{
                            key: key,
                            days: days
                        }],
                    });
                }
            }
        }
        return sections;
    }


    /**
     * 获取每个月多少天
     * @param year
     * @param month
     * @param expectDays
     * @returns {Array}
     * @private
     */
    _generatorDays(year, month, expectDays = -1) {
        let days = [];
        let monthDay = 30;
        switch (month) {
            case 1:
            case 3:
            case 5:
            case 7:
            case 8:
            case 10:
            case 12:
                monthDay = 31;
                break;
            case 2:
                if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0 ) {
                    monthDay = 29;
                }else {
                    monthDay = 28;
                }
                break;
            default:
                break;
        }
        const {
            startDateStr = null,
            endDateStr = null,
            invalidDateNotSelected,
        } = this.props;
        const tempMonth = month < 10 ? '0' + month : month + '';
        for (let d = 1; d <= monthDay; d++) {
            const tempDay = d < 10 ? '0' + d : d + '';
            const tempDate = year + '-' + tempMonth + '-' + tempDay;
            const dayWeek = new Date(Date.parse(tempDate)).getDay();
            let dayWeekText = '';
            switch (dayWeek) {
                case 0:
                    dayWeekText = '星期日';
                    break;
                case 1:
                    dayWeekText = '星期一';
                    break;
                case 2:
                    dayWeekText = '星期二';
                    break;
                case 3:
                    dayWeekText = '星期三';
                    break;
                case 4:
                    dayWeekText = '星期四';
                    break;
                case 5:
                    dayWeekText = '星期五';
                    break;
                case 6:
                    dayWeekText = '星期六';
                    break;
                default:
                    break;
            }
            days.push({
                key: year + '' + tempMonth + tempDay,
                year: year + '',
                month: tempMonth,
                week: dayWeek,
                weekText: dayWeekText,
                holiday: this._getHoliday(year, tempMonth, tempDay),
                isToday: this.dateInfo.nowDateStr === tempDate,
                isLessToday: invalidDateNotSelected ? this.dateInfo.nowDateStr > tempDate : false,
                isOver: invalidDateNotSelected ? expectDays > -1 && expectDays < d : false,
                startSelected: tempDate === startDateStr,
                endSelected: tempDate === endDateStr,
                isSelected: tempDate > startDateStr && tempDate < endDateStr,
                day: tempDay,
            });
        }
        return days;
    }

    /**
     * 获取节日
     * @param month
     * @param day
     * @private
     */
    _getHoliday(year, month, day) {
        const info = calendar.solar2lunar(year,parseInt(month),parseInt(day));
        const ndate = (info.month < 10 ? '0' + info.month : info.month + '') + '-' + (info.day < 10 ? '0' + info.day : info.day + '');
        let holiday = nholidayMap[ndate];
        if (holiday == void 0) {
            holiday = yholidayMap[month + '-' + day];
        }
        return holiday || '';
    }

    render() {
        const {
            sections
        } = this.state;
        const {
            days = 0,
            months = 0,
            startYear = 0,
            endYear = 0,
            startDateStr = null,
            endDateStr = null,
            startSelectedHint = null,
            endSelectedHint = null,
            onSelectedDateBlock = null,
            enableSingleChoice = false,
            selectedColor = '#1895D4',
            selectedMidColor = 'rgba(24,149,212,0.2)',
            selectedTextColor = '#fff',
            highlightColor = 'red',
            invalidDateNotSelected = true,
        } = this.props;
        return(
            <View style={styles.view}>
                {this._createWeekHeader()}
                <SectionList
                    style={styles.sectionList}
                    renderSectionHeader={(section) => this._createWeekSection(section)}
                    renderItem={(item) => this._createItem(item)}
                    ItemSeparatorComponent = {() => this._createRowLine()}
                    sections={sections}
                    extraData={this.state}
                    enableVirtualization={true}
                    initialNumToRender={4}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    view: {
        flex: 1,
    },
    header: {
        backgroundColor: '#fff',
        height: 40,
        flexDirection: 'row',
    },
    headerTitle: {
        color: '#333',
        alignSelf: 'center',
        flexGrow: 1,
        marginRight: 40,
        textAlign: 'center',
    },
    headerWeek: {
        flexDirection:'row',
        height: 30,
        alignItems: 'center',
        backgroundColor: '#f1f1f1',
    },
    headerWeekTitle: {
        color: '#333',
        flexGrow: 1,
        textAlign: 'center',
    },
    headerWeekSection: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        height: 35,
    },
    headerWeekSectionTitle: {
        color: '#333',
        backgroundColor: '#fff',
        textAlign: 'center',
    },
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    sectionList: {
        flex: 1,
        backgroundColor: '#fff',
    },
    sectionItem: {
        backgroundColor: '#f1f1f1',
        height: 300,
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
});

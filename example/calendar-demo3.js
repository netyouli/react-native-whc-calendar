/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    StyleSheet,
    Alert,
} from 'react-native';

import Calendar from 'react-native-whc-calendar';

export default class CalendarDemo3 extends Component {

    static navigationOptions = {
        title: '请选择日期',
    };

    render() {
        const  {
            choiceDate,
            choiceDate1,
            block,
        } = this.props.navigation.state.params;

        return (
            <Calendar
                      startYear={2018}
                      endYear={2019}
                      startDateStr={choiceDate}
                      endDateStr={choiceDate1}
                      invalidDateNotSelected={false}
                      enableSingleChoice={false}
                      onSelectedDateBlock={(s,e) => {
                          block(s,e);
                          setTimeout(() => {
                              const {goBack} = this.props.navigation;
                              goBack();
                          }, 1500);
                      }}/>
        );
    }
}


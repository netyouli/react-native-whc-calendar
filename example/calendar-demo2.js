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

export default class CalendarDemo2 extends Component {

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
                      months={6}
                      startDateStr={choiceDate}
                      endDateStr={choiceDate1}
                      enableSingleChoice={false}
                      startSelectedHint={'入住'}
                      endSelectedHint={'离店'}
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

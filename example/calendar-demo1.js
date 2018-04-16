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

export default class CalendarDemo1 extends Component {

    static navigationOptions = {
        title: '请选择日期',
    };

    render() {
        const  {
            choiceDate,
            block,
        } = this.props.navigation.state.params;
        return (
            <Calendar
                      startDateStr={choiceDate}
            days={30}
            enableSingleChoice={true}
            onSelectedDateBlock={(s,e) => {
                block(s);
                Alert.alert('选择的日期: ' + s)
                setTimeout(() => {
                    const {goBack} = this.props.navigation;
                    goBack();
                }, 1000);
            }}/>
        );
    }
}


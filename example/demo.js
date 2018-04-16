/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableHighlight,
} from 'react-native';
import CalendarDemo1 from "./calendar-demo1";

export default class Demo extends Component {

    static navigationOptions = {
        title: '日历组件演示',
    };

    render() {
        return (
            <View style={styles.container}>
                <TouchableHighlight
                    style={[styles.button, {backgroundColor: 'red'}]}
                    onPress={() => {
                        const {navigate} = this.props.navigation;
                        navigate('CalendarDemo1', {choiceDate: this.choiceDate1 || null ,block: (date) => {
                                this.choiceDate1 = date;
                            }});
                    }}
                >
                    <Text style={styles.text}>按天数生成日期</Text>
                </TouchableHighlight>

                <TouchableHighlight
                    style={[styles.button, {backgroundColor: 'gray'}]}
                    onPress={() => {
                        const {navigate} = this.props.navigation;
                        navigate('CalendarDemo2', {choiceDate: this.choiceDate2 || null, choiceDate1: this.choiceDate3 || null,
                            block: (s,e) => {
                                this.choiceDate2 = s;
                                this.choiceDate3 = e;
                            }});
                    }}
                >
                    <Text style={styles.text}>按月数生成日期</Text>
                </TouchableHighlight>

                <TouchableHighlight
                    style={[styles.button, {backgroundColor: '#13227a'}]}
                    onPress={() => {
                        const {navigate} = this.props.navigation;
                        navigate('CalendarDemo3', {choiceDate: this.choiceDate4 || null, choiceDate1: this.choiceDate5 || null,
                            block: (s,e) => {
                                this.choiceDate4 = s;
                                this.choiceDate5 = e;
                            }});
                    }}
                >
                    <Text style={styles.text}>按年数生成日期</Text>
                </TouchableHighlight>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-around',
        padding:30,
    },
    button: {
        height: 50,
        justifyContent:'center',
        alignItems:'center',
    },
    text: {
        color: '#fff',
        fontSize: 18,
    }
});

/**
 *
 * Copyright 2017-present whcapp
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 * https://github.com/netyouli/whcapp
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 */

import React from 'react';
import {StackNavigator} from 'react-navigation';
import Demo from './demo';
import CalendarDemo1 from './calendar-demo1';
import CalendarDemo2 from './calendar-demo2';
import CalendarDemo3 from './calendar-demo3';



const AppNavigation  = StackNavigator({
    Demo: {
        screen: Demo,
    },
    CalendarDemo1: {
        screen: CalendarDemo1,
    },
    CalendarDemo2: {
        screen: CalendarDemo2,
    },
    CalendarDemo3: {
        screen: CalendarDemo3,
    },
},{
    initialRouteName: 'Demo',
    navigationOptions: {
        headerBackTitle: null,
        headerStyle: {
            backgroundColor: '#1895D4',
        },
        headerTitleStyle: {
            color: '#fff',
            alignSelf: 'center',
            textAlign: 'center',
            justifyContent: 'center',
            flexGrow: 1,
        },
        cardStack: {
            gesturesEnabled: true,
        },
    },
    mode: 'card',
    headerMode: 'screen',

});

export default AppNavigation;

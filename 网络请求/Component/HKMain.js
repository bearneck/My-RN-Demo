/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';
import { Navigator } from 'react-native-deprecated-custom-components';
//引入三方框架
import ScrollableTabView, { DefaultTabBar, ScrollableTabBar } from 'react-native-scrollable-tab-view';
//硬如其他框架
import HKHome from './HKHome';
import HKMine from './HKMine';
import HKFinder from './HKFinder';
import HKMessage from './HKMessage';

//自定义Tabbar
import HKTabBar from './HKTabBar'

export default class MyApp extends Component {

    constructor(props) {
        super(props);

        this.state = {

            tabNames: ['首页', '发现', '我的', '消息'],
            tabIconNames: ['home', 'finder', 'user', 'message'],
            tbi: ['chen', 'chen', 'chen', 'chen'],
        };
    }

    render() {
        let tabNames = this.state.tabNames;
        let tabIconNames = this.state.tabIconNames;
        let tbi = this.state.tbi;
        return (
            //禁止滚动动画
            <ScrollableTabView scrollWithoutAnimation={ true } renderTabBar={ () => <HKTabBar tabNames={ tabNames } tbi={ tbi } tabIconNames={ tabIconNames } /> } locked={ true } tabBarPosition="bottom">
              <Navigator tabLabel="首页" initialRoute={ { component: HKHome, params: { title: '首页' } } } renderScene={ (route, navigator) => <route.component navigator={ navigator } {...route.params}/> } />
              <Navigator tabLabel="发现" initialRoute={ { component: HKFinder, params: { title: '发现' } } } renderScene={ (route, navigator) => <route.component navigator={ navigator } {...route.params}/> } />
              <Navigator tabLabel="我的" initialRoute={ { component: HKMine, params: { title: '我的' } } } renderScene={ (route, navigator) => <route.component navigator={ navigator } {...route.params}/> } />
              <Navigator tabLabel="消息" initialRoute={ { component: HKMessage, params: { title: '消息' } } } renderScene={ (route, navigator) => <route.component navigator={ navigator } {...route.params}/> } />
            </ScrollableTabView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },

});
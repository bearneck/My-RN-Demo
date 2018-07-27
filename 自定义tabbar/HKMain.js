/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';
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
              <HKHome tabLabel="首页" />
              <HKFinder tabLabel="发现" />
              <HKMine tabLabel="我的" />
              <HKMessage tabLabel="消息" />
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
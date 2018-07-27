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

export default class MyApp extends Component {
    render() {
        return (
            <ScrollableTabView renderTabBar={ () => <ScrollableTabBar /> } locked={ true } tabBarPosition="bottom">
              <HKHome tabLabel="首页" />
              <HKMine tabLabel="我的" />
              <HKFinder tabLabel="发现" />
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
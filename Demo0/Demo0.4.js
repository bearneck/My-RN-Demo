/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';

export default class MyApp extends Component {
    render() {
        return (
            <View style={ styles.container }>
              { /*alignSelf:这个属性可以覆盖alignItems
                                                    默认为auto标示继承父标签的属性
                                                    alignSelf: 'auto' 'flex-start' 'flex-end' 'center' 'stretch' 'baseline'
                                                    */ }
              <Text style={ { backgroundColor: 'blue', flex: 6, height: 70, alignSelf: 'flex-start', } }>练习一下</Text>
              <Text style={ { backgroundColor: 'orange', flex: 2, height: 80 } }>练习一下</Text>
              <Text style={ { backgroundColor: 'red', flex: 2, height: 90 } }>练习一下</Text>
              <Text style={ { backgroundColor: 'green', flex: 1, height: 100 } }>练习一下</Text>
              <Text style={ { backgroundColor: 'yellow', flex: 1, height: 110 } }>练习一下</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'purple',
        marginTop: 25,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        //主轴显示不下就换一行
        flexWrap: 'wrap',
    },

});

AppRegistry.registerComponent('MyApp', () => MyApp);

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native';
import { Navigator } from 'react-native-deprecated-custom-components';
import SecondView from './SecondView'
export default class FistView extends Component {
    render() {
        return (
            <View style={ styles.container }>
              { /*导航条*/ }
              <View style={ styles.navStyle }>
                { /*导航条中间的文字*/ }
                <Text>
                  { this.props.title }
                </Text>
              </View>
              <TouchableOpacity onPress={ this.viewClick.bind(this) }>
                <Text>
                  { this.props.title }
                </Text>
              </TouchableOpacity>
            </View>

        );
    }

    viewClick(tit, nav) {
        //props属性！！这个属性是你这个对象创建的时候定义的！！！
        Alert.alert(this.props.haha, this.props.heihei + this.props.hehe)
        this.props.navigator.push({
            component: SecondView,
            params: {
                name: '第2个试图',
                haha: '哈哈',
                hehe: '呵呵',
                heihei: '嘿嘿'
            }
        })
    }

}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    navStyle: {
        position: 'absolute',
        top: 0,
        width: 410,
        height: 64,
        backgroundColor: '#dddddd',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomWidth: 0.5,
        borderBottomColor: 'rgba(1,1,1,1)'
    },
});

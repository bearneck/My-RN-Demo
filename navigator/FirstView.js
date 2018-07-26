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
              <TouchableOpacity onPress={ this.viewClick.bind(this) }>
                <Text>
                  { this.props.name }
                </Text>
              </TouchableOpacity>
            </View>

        );
    }

    viewClick(tit, nav) {
        //props属性！！这个属性是你这个对象创建的时候定义的！！！
        this.props.navigator.push({
            component: SecondView,
            name: '哥们儿你是第二个！！'
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

});

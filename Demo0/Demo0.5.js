/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';

//引入类库
var Dimensions = require('Dimensions');

export default class MyApp extends Component {
    render() {
        return (
            <View style={ styles.container }>
              <Text>当前屏幕宽度 :
                { Dimensions.get('window').width }
              </Text>
              <Text>当前屏幕高度:
                { Dimensions.get('window').height }
              </Text>
              <Text>当前屏幕的分辨率:
                { Dimensions.get('window').scale }
              </Text>
            </View>
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

});

AppRegistry.registerComponent('MyApp', () => MyApp);

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
              <Text style={ { backgroundColor: 'red', width: 250 } }>NO.1</Text>
              <Text style={ { backgroundColor: 'green', width: 60 } }>NO.2</Text>
              <Text style={ { backgroundColor: 'yellow', width: 70 } }>NO.3</Text>
              <Text style={ { backgroundColor: 'blue', width: 80 } }>NO.4</Text>
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
        alignItems: 'flex-start',
        //主轴显示不下就换一行
        flexWrap: 'wrap',
    },
});

AppRegistry.registerComponent('MyApp', () => MyApp);

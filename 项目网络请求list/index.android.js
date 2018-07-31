/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';
import APP from './app'

export default class MyApp extends Component {
    render() {
        return (
            <APP/>
        );
    }
}

const styles = StyleSheet.create({

});

AppRegistry.registerComponent('MyApp', () => MyApp);

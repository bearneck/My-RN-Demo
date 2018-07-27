/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';
import HKMain from './Component/HKMain'

export default class MyApp extends Component {
    render() {
        return (
            <HKMain/>
        );
    }
}

const styles = StyleSheet.create({

});

AppRegistry.registerComponent('MyApp', () => MyApp);
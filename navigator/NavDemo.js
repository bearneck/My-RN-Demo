/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';
import { Navigator } from 'react-native-deprecated-custom-components'
import FirstView from './FirstView'

export default class MyApp extends Component {
    render() {
        return (
            <Navigator initialRoute={ { component: FirstView, name: '第一个界面' } } renderScene={ (route, navigator) => <route.component name={ route.name } navigator={ navigator } /> } configureScene={ () => Navigator.SceneConfigs.FloatFromBottom } />
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

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} from 'react-native';

//引入外部的JS文件
var LoginView = require('./loginView');

export default class MyApp extends Component {
  render() {
    return (
    	      <LoginView/>
           );
    }
}



AppRegistry.registerComponent('MyApp', () => MyApp);
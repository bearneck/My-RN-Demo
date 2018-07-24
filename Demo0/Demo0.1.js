/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ToastAndroid
} from 'react-native';

//Props 属性 相当于OC中的ReadOnly，只读属性！！
//state 状态 组件有一个系统的setState方法，用来改变状态，而且会刷新界面！！
//componentWillMount 相当于OC中的ViewWillAppear


export default class MyApp extends Component {
	state={
		title:'默认值'
	}
	//相当于OC中的ViewWillAppear
	componentWillMount(){
		ToastAndroid.showWithGravity('来了', ToastAndroid.SHORT, ToastAndroid.CENTER);
	}
  render() {
  	//最外层必须只有一个View
    return (
      <View style={styles.container}>
          <Text>{this.state.title}</Text>
      <View style={mystyles.myView}>
          <Text style={mystyles.myText}>{this.state.title}</Text>
      </View>
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

const mystyles = StyleSheet.create({
	myView:{
		flex:1,
		backgroundColor:'blue',
	},
	myText:{
		color:'red',
		fontSize:2,
	},

});

AppRegistry.registerComponent('MyApp', () => MyApp);

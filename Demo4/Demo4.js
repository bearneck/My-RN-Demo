import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
} from 'react-native';

export default class MyApp extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TextInput style={styles.inputStyle}
        //value={'我是默认文字！'}
        //multiline={true}//多行
       placeholder={'我是占位的'}
       password={true}
//无法显示密码效果，原因未知
       />
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
  inputStyle:{
  	width:300,
  	height:60,
  	//backgroundColor:'red',
  	//边框
  	borderWidth:1,
  	borderColor:'#dddddd',
  }
});

AppRegistry.registerComponent('MyApp', () => MyApp);
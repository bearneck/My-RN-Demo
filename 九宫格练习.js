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
  Image
} from 'react-native';
//引入数据
var Data = require('./Data.json');
//定义一些全局变量
var Dimensions = require('Dimensions');
var {width} = Dimensions.get('window');
var cols = 3;
var boxW = 100;
var vMargin = (width - cols * boxW) / (cols +1);//列距
var hMargin = 25;

export default class MyApp extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.viewStyle}>
          {this.renderAllBaobao()}
        </View>
      </View>
    );
  }
//返回view
  renderAllBaobao(){
  	//1.装的数组
  	var images = [];
  	//2.遍历数据
  	for (var i =0; i <Data.length; i++) {
          //3.创建组建，取出Data中的json
          var dataItem = Data[i];
          images.push(
          	<View key={i} style={styles.outViewStyle}>
          	  <Image source={{uri:dataItem['icon']}}style={styles.imageStyles}></Image>
          	  <Text>{dataItem['name']}</Text>
          	</View>
          	);
  	}
  	//最后返回这个数组
  	return images;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  viewStyle:{
  	//backgroundColor:'red',
  	//height:900,
  	flexDirection:'row',
  	flexWrap:'wrap',
  },
  imageStyles:{
  	height:80,
  	width:80,
  },
  outViewStyle:{
  	backgroundColor:'#9ff099',
  	alignItems:'center',
  	width:boxW,
  	height:boxW,
  	marginLeft:vMargin,
  	marginTop:hMargin,
  },
});

AppRegistry.registerComponent('MyApp', () => MyApp);
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {
	Component
} from 'react';
import {
	AppRegistry,
	StyleSheet,
	Text,
	View,
	Image
} from 'react-native';

var MyApp = React.createClass({
	render() {
		return (
			<View style={styles.container}>
        <Text> 加载项目中的图片</Text>
        <Image source={require('./img/1.jpg')}style={styles.imgStyle}></Image>
        <Text>加载app中的图片</Text>
        <Image source={{uri:'ic_launcher.png'}}style={styles.imgStyle}></Image>
        <Text>加载网络中的图片</Text>
        <Image source={{uri:'https://ss1.baidu.com/-4o3dSag_xI4khGko9WTAnF6hhy/image/h%3D300/sign=8b046e1e0646f21fd6345853c6266b31/8c1001e93901213fe4c06e3958e736d12e2e9567.jpg'}}style={styles.imgStyle}></Image>
        
        <Image source={{uri:'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1094594043,2062521991&fm=27&gp=0.jpg'}}style={styles.imgStyle1}>
        <Text style={styles.textStyle}>将图片设置为背景</Text>
        </Image>
      </View>
		);
	}
})

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#F5FCFF',
	},
	welcome: {
		fontSize: 20,
		textAlign: 'center',
		margin: 10,
	},
	instructions: {
		textAlign: 'center',
		color: '#333333',
		marginBottom: 5,
	},
	imgStyle: {
		height: 80,
		width: 80,
		//resizeMode: 'cover',默认值
		//resizeMode: 'contain',//等比例缩放
		resizeMode: 'stretch',//拉伸
	},
	imgStyle1:{
        width:300,
        height:200,
	},
	textStyle:{
		paddingTop:20,
		//backgroundColor:'rgba(0,0,0,0)',
		backgroundColor:'transparent',
	}
});

AppRegistry.registerComponent('MyApp', () => MyApp);
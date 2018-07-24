import React, {
	Component
} from 'react';
import {
	AppRegistry,
	Text,
	View,
	Image,
	StyleSheet
} from 'react-native';

class Imana extends Component {
	render() {
		return (
			<Text>大家好，我是{this.props.name}！！！！</Text>
		);
	}
}


export default class MyApp extends Component {
	render() {

		return ( //numberOfLines最大行高
			<View style={styles.container}>
		
        <Text style={styles.hot}numberOfLines={3}>thothotho</Text>
      
      </View>
		);
	}
}

var styles = StyleSheet.create({
	container: {
		flex: 1, //填充满整个屏幕
		backgroundColor: '#F5FCFF',
		justifyContent: 'center', //居中
	},
	hot: {
		backgroundColor: 'red',
		color: 'black',
		fontSize: 20,
		height: 150,
		//textAlign: 'center',
		//lineHeight: 150, //行高
	},
});

AppRegistry.registerComponent('MyApp', () => MyApp);
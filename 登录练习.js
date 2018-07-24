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
  TouchableOpacity,
  ToastAndroid
} from 'react-native';

export default class MyApp extends Component {

   state={
   	title:'默认值'
   }


  render() {
    return (
      <View style={styles.container}>
       <TouchableOpacity activity={0.5}
                         onPress={()=>this.click('点击')}
                         onPressIn={()=>this.click('按下')}
                         onPressOut={()=>this.click('抬起')}
                         onLongPress={()=>this.click('长按')}

       >
       <View>
      <Text>{this.state.title}</Text>
      </View>
      </TouchableOpacity>
      </View>
    );
  }
 click(event){ 
 	this.setState({
 		title:event
 	})
  ToastAndroid.showWithGravity(event, ToastAndroid.SHORT, ToastAndroid.CENTER);
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});

AppRegistry.registerComponent('MyApp', () => MyApp);

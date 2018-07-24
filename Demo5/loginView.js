import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput
} from 'react-native';

var Dimensions = require('Dimensions');
var width = Dimensions.get('window').width;

export default class loginView extends Component {
  render() {
    return (
      <View style={styles.container}>
    {/*头像*/}
       <Image source={require('./img/0.png')}
       style={styles.iconStyle}
       />
    {/*账号密码*/}
       <TextInput style={styles.textInputStyle} placeholder={'请输入账号'} />
       <TextInput style={styles.textInputStyle} placeholder={'请输入密码'} password={true} />
       <View style={styles.loginBtbStyle}>
       <Text style={{color:'white'}}>登录</Text>
       </View>
    {/*设置*/}
       <View style={styles.settingStyle}>
       <Text>无法登陆</Text>
       <Text>新用户</Text>
       </View>
    {/*三方登录方式*/}
        <View style={styles.otherLoginStyle}>
        <Text>其他登录方式</Text>
        <Image source={require('./img/qq.png')}
        style={styles.otherImageStyle}
        />
        <Image source={require('./img/weibo.png')}
        style={styles.otherImageStyle}
        />
        <Image source={require('./img/google.png')}
        style={styles.otherImageStyle}
        />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  iconStyle:{
   width:80,
   height:80,
   marginTop:50,  
   borderRadius:40,
   borderWidth:2,
   borderColor:'green',
  },
  textInputStyle:{
    backgroundColor:'white',
    height:40,
    width:width,
    marginBottom:1,
    textAlign:'center',
    margin:15,
  },
  loginBtbStyle:{
    height:40,
    width:width*0.8,
    backgroundColor:'blue',
    marginTop:30,
    marginBottom:30,
    justifyContent:'center',
    alignItems: 'center',
    borderRadius:8,
  },
  settingStyle:{
    flexDirection:'row',
    //backgroundColor:'red',
    width:width*0.8,
    justifyContent:'space-between'
  },
  otherLoginStyle:{
    flexDirection:'row',
    alignItems:'center',
    position:'absolute',
    bottom:10,
    left:20,
  },
  otherImageStyle:{
    width:50,
    height:50,
    borderRadius:25,
    margin:10,
  }
});

//输出一个类
module.exports = loginView;
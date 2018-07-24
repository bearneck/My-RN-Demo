/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, } from 'react-native';




//Flex布局联系
export default class Test1 extends Component {
    render() {
        return (
            <View style={ styles.container }>
              <Text style={ { backgroundColor: 'blue' } }>练习一下</Text>
              <Text style={ { backgroundColor: 'orange', height: 40 } }>练习一下</Text>
              <Text style={ { backgroundColor: 'red', height: 50 } }>练习一下</Text>
              <Text style={ { backgroundColor: 'green', height: 60 } }>练习一下</Text>
              <Text style={ { backgroundColor: 'yellow', height: 70 } }>练习一下</Text>
            </View>)
    }

}



const styles = StyleSheet.create({
    container: {
        backgroundColor: 'gray',
        //flex: 1,
        marginTop: 40,
        //改变主轴的一个方向-->默认垂直方向
        //flexDiretion: 'column', //从上到下
        //flexDirection: 'row', //从左往右
        flexDirection: 'row', //从下到上 
        //设置主轴的对齐方式
        // justifyContent: 'flex-end',//对齐主轴的终点
        // justifyContent: 'space-between', //两端对齐
        //justifyContent: 'space-around', //平均分配
        justifyContent: 'space-around',
        alignItems: 'stretch',
    //默认值stretch，如果没有设置高度，或者高度为auto，子控件就沾满父空间。
    },
});


AppRegistry.registerComponent('MyApp', () => Test1);



// export default class MyApp extends Component {
//     render() {
//         return (
//             //主View
//             <View style={ styles.container }>
//               <Text>我在这里</Text>
//               <View style={ styles.innerViewStle }>
//                 <Text>我是里面的一个</Text>
//               </View>
//               <View style={ styles.nextViewStle }>
//                 <Text>我是下面的一个</Text>
//               </View>
//               <View style={ styles.nextViewStle }>
//                 <Text>我是右边的一个</Text>
//               </View>
//             </View>
//         );
//     }
// }

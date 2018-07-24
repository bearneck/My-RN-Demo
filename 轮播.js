/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, ScrollView, Image } from 'react-native';

//require只能静态获取图片，要获取动态图片，建议放在App里
//引入定时器
var TimerMixin = require('react-timer-mixin');
var ImageData = require('./Data.json');
var Dimensions = require('Dimensions');
var {width} = Dimensions.get('window');

export default class MyApp extends Component {
    //注册定时器
    mixins:[TimerMixin];

    state = {
        //当前页面
        currentPage: 0,
    };

    render() {
        return (
            <View style={ styles.container }>
              <ScrollView horizontal={ true } showsHorizontalScrollIndicator={ false } pagingEnabled={ true }>
                { this.renderAllImage() }
              </ScrollView>
              { /*指示器*/ }
              <View style={ styles.pageViewStyle }>
                { this.renderPage() }
              </View>
              { /*5个小点点*/ }
            </View>
        );
    }
    //返回小点点
    renderPage() {
        var stytle;
        //定义一个装点点的数组
        var pageArr = [];
        //拿到图片数组
        var imgsArr = ImageData.data;
        //遍历
        for (var i = 0; i < imgsArr.length; i++) {
            //判断
            style = (i == this.state.currentPage) ? {
                color: 'orange'
            } : {
                color: '#ffffff'
            };
            //给Page加小点
            pageArr.push(
                <Text key={ i } style={ [{ fontSize: 25, }, style] }> • </Text>

            )
        }
        return pageArr;
    }
    renderAllImage() {
        //数组
        var allImage = [];
        //拿到图片数据
        var imgsArr = ImageData.data;
        //遍历
        for (var i = 0; i < imgsArr.length; i++) {
            //取出单个图片的名称
            var imgItem = imgsArr[i];
            //创建图片组件到数组里面
            allImage.push(
                <Image key={ i } source={ { uri: imgItem.icon } } style={ { width: width, height: 150 } } />

            )
        }
        return allImage;
    }
}

const styles = StyleSheet.create({
    container: {
        //flex: 1,

    },
    pageViewStyle: {
        width: width,
        height: 25,
        backgroundColor: 'rgba(0,0,0,0.4)',
        //定位
        position: 'absolute',
        //主轴方向
        flexDirection: 'row',
        bottom: 0,
        justifyContent: 'flex-end',
        alignItems: 'center',

    }
});

AppRegistry.registerComponent('MyApp', () => MyApp);


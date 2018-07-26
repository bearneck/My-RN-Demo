/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, ScrollView, Image, Alert } from 'react-native';

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
    //初始化固定值
    static defaultProps = {
        duration: 1000
    }
    render() {
        return (
            <View style={ styles.container }>
              <ScrollView onScrollBeginDrag={ () => this.onScrollBeginDrag() } onScrollEndDrag={ () => this.startTimer() } ref="scrollView" horizontal={ true } onMomentumScrollEnd={ (e) => this.onScrollAnimationEnd(e) }
                showsHorizontalScrollIndicator={ false } pagingEnabled={ true }>
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
    onScrollBeginDrag() {
        clearInterval(this.timer);
    }
    //UI加载完毕
    componentDidMount() {
        //开启定时器
        this.startTimer();

    }


    startTimer() {
        //写逻辑代码
        //1.拿到scrollview
        var scrollView = this.refs.scrollView;
        var imgCount = ImageData.data.length;
        var obj = this;
        //2.设置定时器
        this.timer = setInterval(function() {
            //设置当前页
            var currentPage = 0;
            //判断
            if ((obj.state.currentPage + 1) >= imgCount) {
                currentPage = 0;
            } else {
                currentPage = obj.state.currentPage + 1;
            }
            //更新状态机
            obj.setState({
                currentPage: currentPage
            })
            //滚起来
            var offsetX = currentPage * width;
            scrollView.scrollTo({
                x: offsetX,
                y: 0,
                animated: true
            });
        }, this.props.duration)
    }
    onScrollAnimationEnd(e) {
        //1.拿到偏移量
        var offsetX = e.nativeEvent.contentOffset.x;
        //求出当前第几页
        var currentPage = Math.floor(offsetX / width);
        //3.更新状态基
        this.setState({
            currentPage: currentPage
        });

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


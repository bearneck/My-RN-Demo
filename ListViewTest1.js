import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, ListView, Image, TouchableOpacity, Alert } from 'react-native';

//导入json
var Heros = require('./Data.json'); //数据
var Dimensions = require('Dimensions');
var {width} = Dimensions.get('window');


export default class ListViewTest1 extends Component {
    //构造函数中初始化数据
    constructor(props) {
        super(props);
        var ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });
        this.state = {
            dataSource: ds.cloneWithRows(Heros.data)
        };
    }
    render() {
        return (

            <ListView style={ { marginTop: 15 } } dataSource={ this.state.dataSource } renderRow={ this.renderRow } />

        );
    }
    //返回具体的参数
    renderRow(rowData, sectionID, rowID, highlightRow) {
        return (
            <TouchableOpacity activeOpacity={ 0.5 } onPress={ () => {
                                                      Alert.alert('购买成功', '成功解锁' + rowData.name + '英雄')
                                                  } }>
              <View style={ styles.cellViewStyle }>
                { /*左边的图片*/ }
                <Image source={ { uri: rowData.icon } } style={ styles.leftImageStyle } />
                { /*右边的View*/ }
                <View style={ styles.rightViewStyle }>
                  { /*个人ID*/ }
                  <Text style={ styles.topTitleStyle }>
                    { rowData.name }
                  </Text>
                  { /*个人简介*/ }
                  <Text style={ styles.bottomTitleStyle } numberOfLines={ 3 }>
                    { rowData.title }
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    cellViewStyle: {
        //分割线
        borderBottomColor: '#e8e8e8',
        borderBottomWidth: 0.5,
        padding: 10,
        flexDirection: 'row',

    },
    leftImageStyle: {
        width: 60,
        height: 60
    },
    rightViewStyle: {
        marginLeft: 20,

    },
    topTitleStyle: {
        fontSize: 20,

    },
    bottomTitleStyle: {
        width: width * 0.7,
        marginTop: 5,

    },

});


/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */


// cloneWithRowsAndSections(dataBlob, sectionIdentities, rowIdentities) 
// dataBlob 就是数据！具体类型是一个对象！
// sectionID 哪一组！
// rowID 哪一行！

import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, ListView, Image, TouchableOpacity } from 'react-native';

var User = require('./Data1.json');
export default class ListViewTest2 extends Component {
    //构造函数
    constructor(props) {
        super(props);
        var getSectionData = (dataBlob, sectionID) => {
            return dataBlob[sectionID];
        }
        var getRowData = (dataBlob, sectionID, rowID) => {
            return dataBlob[sectionID + ':' + rowID];
        }

        this.state = {
            dataSource: new ListView.DataSource({
                getSectionData: getSectionData, //获取组数据
                getRowData: getRowData,
                rowHasChanged: (r1, r2) => r1 !== r2,
                sectionHeaderHasChanged: (s1, s2) => s1 !== s2
            })
        };
    }
    render() {
        return (
            <View style={ styles.container }>
              <View style={ styles.NavViewStyle }>
                <Text style={ { color: 'white', fontSize: 25 } }>我的英雄</Text>
              </View>
              <ListView renderSectionHeader={ this.renderSectionHeader } dataSource={ this.state.dataSource } renderRow={ this.renderRow } />
            </View>
        );
    }
    //返回每一组头部的内容
    renderSectionHeader(sectionData, sectionID) {
        return (
            <View style={ styles.sectionHearderStyle }>
              <Text style={ { marginLeft: 5, color: 'red' } }>
                { sectionData }
              </Text>
            </View>)
    }
    //返回每一行的CEll
    renderRow(rowData) {
        return (
            <TouchableOpacity activeOpacity={ 0.5 }>
              <View style={ styles.rowStyle }>
                <Image source={ { uri: rowData.icon } } style={ styles.rowImageStyle } />
                <Text style={ { marginLeft: 50 } }>
                  { rowData.name }
                </Text>
              </View>
            </TouchableOpacity>
        )
    }



    //发送网络请求的生命周期方法
    componentDidMount() {
        //我们需要先处理
        this.loadJson();
    }


    loadJson() {
        //拿到Json
        var jsonData = User.data;
        //定义数据源需要的变量
        var dataBlob = {},
            sectionIDs = [],
            rowIDs = []; //二维数组
        var user = [];
        //遍历
        for (var i = 0; i < jsonData.length; i++) {
            //组ID拿到
            sectionIDs.push(i);
            //dataBlob
            dataBlob[i] = jsonData[i].title;
            //先取出这一组的所有的用户的数组
            user = jsonData[i].user;
            rowIDs[i] = [];
            for (var j = 0; j < user.length; j++) {
                //i组j行，这行的ID就是j
                rowIDs[i].push(j);
                //每一行的内容
                dataBlob[i + ':' + j] = user[j];
            }
        }
        //更新状态机！！
        this.setState({
            dataSource: this.state.dataSource.cloneWithRowsAndSections(dataBlob, sectionIDs, rowIDs)
        })
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    rowImageStyle: {
        width: 70,
        height: 70

    },

    rowStyle: {
        padding: 10,
        flexDirection: 'row',
        alignItems: 'center',
        //cell分割线
        borderBottomColor: '#e8e8e8',
        borderBottomWidth: 0.5,


    },
    NavViewStyle: {
        height: 64,
        backgroundColor: 'orange',
        justifyContent: 'center',
        alignItems: 'center',

    },
    sectionHearderStyle: {
        backgroundColor: '#e8e8e8',
        height: 25,
        justifyContent: 'center',
    },
});



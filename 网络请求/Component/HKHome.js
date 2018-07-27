/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, ListView, TouchableOpacity, Image } from 'react-native';
import { Navigator } from 'react-native-deprecated-custom-components';
import HKCellView from './HKCell'
export default class HKHome extends Component {

    constructor(props) {
        super(props);
        this.state = {
            //cell的数据
            dataSource: new ListView.DataSource({
                rowHasChanged: (r1, r2) => r1 !== r2
            }),
            base_url: 'http://route.showapi.com/955-1?showapi_appid=70615&showapi_sign=5ccb25e0f190474aa4d5650e97076125&type=dp&page=1'
        }
    }
    render() {
        return (
            <ListView dataSource={ this.state.dataSource } renderRow={ this.renderRow.bind(this) } style={ { backgroundColor: '#dddddd', padding: 10 } } />
        );
    }
    renderRow(rowData) {
        var obj = this;
        return (

            <TouchableOpacity activeOpactiy={ 0.5 } onPress={ () => obj.props.navigator.push(
                                                      {
                                                  
                                                          component: HKCellView,
                                                          params: {
                                                              title: 'cell'
                                                          }
                                                      }
                                                  ) }>
              <View style={ styles.cellStyle }>
                { /*上部分*/ }
                <View style={ styles.topViewStyle }>
                  { /*图片*/ }
                  <Image source={ { uri: rowData.img } } style={ styles.imageStyle } />
                  { /*标题*/ }
                  <Text style={ styles.titleStyle }>
                    { rowData.title }
                  </Text>
                  { /*正文*/ }
                </View>
                <Text style={ styles.textStytle }>
                  { rowData.desc }
                </Text>
              </View>
            </TouchableOpacity>
        )
    }

    //发送网络请求
    componentDidMount() {
        //发送网络请求
        this.loadData();
    }
    //网络请求发送
    loadData() {
        fetch(this.state.base_url)
            .then((response) => response.json())
            .then((responseJson) => {
                console.log(responseJson);
                //拿到数据
                var jsonData = responseJson.showapi_res_body.pagebean.contentlist;
                //更新数据
                this.setState({
                    dataSource: this.state.dataSource.cloneWithRows(jsonData)
                })

            }
        )
    }
}

const styles = StyleSheet.create({
    cellStyle: {
        marginTop: 10,
        marginLeft: 5,
        marginRight: 5,
        borderBottomWidth: 0.5,
        borderBottomColor: '#dddddd',
        backgroundColor: 'white',
        padding: 5,
    },
    titleStyle: {
        lineHeight: 40,
        textAlign: 'right',
        paddingLeft: 15,

    },
    textStyle: {

        padding: 5,
    },
    topViewStyle: {
        flexDirection: 'row',
    },
    imageStyle: {
        width: 60,
        height: 60,
        borderRadius: 20,

    },


});
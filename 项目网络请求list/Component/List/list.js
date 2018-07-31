/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, ListView, Platform, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
//Mockis 解析
import Mock from 'mockjs';

import Dimensions from 'Dimensions';
const {width, height} = Dimensions.get('window')
export default class list extends Component {
    constructor(props) {
        super(props);

        this.state = {

            dataSource: new ListView.DataSource({
                rowHasChanged: (r1, r2) => r1 !== r2,
            })
        };
    }
    //即将显示
    componentWillMount() {
        //加载本地数据
        this.dsfetchData();
    }
    componentDidMount() {
        //加载网络上数据
        this.fetchData();
    }
    fetchData() {
        return fetch('http://rapapi.org/mockjsdata/35889/api/list')
            .then((response) => response.json())
            .then((responseJson) => {
                let result = Mock.mock(responseJson);
                if (result.success) {
                    this.setState({
                        dataSource: this.state.dataSource.cloneWithRows(
                            result.data
                        )
                    }
                    )
                }
            })
            .catch((error) => {
                console.error(error);
            });

            // let url = 'http://rapapi.org/mockjs/35889/api/list';
            // fetch(url).then(
            //     (response) => {
            //         return response.json()
            //     }
            // ).then(
            //     (response) => {
            //         let result = JSON.stringify(response);
            //         console.log('服务器返回的数据' + result)
            //         //先判断有没有数据
            //         if (result.success) {
            //             this.setState({

    //                 dataSource: this.state.dataSource.cloneWithRows(
    //                     result.data
    //                 )
    //             })
    //         }
    //     })
    }
    //加载本地缓存数据
    dsfetchData() {
        this.setState({
            dataSource: this.state.dataSource.cloneWithRows(
                [
                    {
                        "_id": "120000199809228834",
                        "thumb": "http://dummyimage.com/1280x720/a86554)",
                        "title": "@cparagraph(1,3)",
                        "video": "http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"
                    }
                    ,
                    {
                        "_id": "140000201407184852",
                        "thumb": "http://dummyimage.com/1280x720/acd485)",
                        "title": "@cparagraph(1,3)",
                        "video": "http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"
                    }
                    ,
                    {
                        "_id": "360000198703223592",
                        "thumb": "http://dummyimage.com/1280x720/9c0372)",
                        "title": "@cparagraph(1,3)",
                        "video": "http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"
                    }
                    ,
                    {
                        "_id": "62000019700916638X",
                        "thumb": "http://dummyimage.com/1280x720/c6f760)",
                        "title": "@cparagraph(1,3)",
                        "video": "http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"
                    }
                    ,
                    {
                        "_id": "540000201005029889",
                        "thumb": "http://dummyimage.com/1280x720/7fee56)",
                        "title": "@cparagraph(1,3)",
                        "video": "http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"
                    }
                    ,
                    {
                        "_id": "370000201610298700",
                        "thumb": "http://dummyimage.com/1280x720/287f5e)",
                        "title": "@cparagraph(1,3)",
                        "video": "http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"
                    }
                    ,
                    {
                        "_id": "520000198003227779",
                        "thumb": "http://dummyimage.com/1280x720/5c7f9c)",
                        "title": "@cparagraph(1,3)",
                        "video": "http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"
                    }
                    ,
                    {
                        "_id": "610000200610052378",
                        "thumb": "http://dummyimage.com/1280x720/ddb908)",
                        "title": "@cparagraph(1,3)",
                        "video": "http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"
                    }])
        });
    }
    render() {
        return (
            <View style={ styles.container }>
              { /*导航条*/ }
              <View style={ styles.header }>
                <Text style={ styles.headerText }>
                  视频列表
                </Text>
              </View>
              { /*列表页面*/ }
              <ListView dataSource={ this.state.dataSource } renderRow={ this.renderRow } style={ styles.listView } />
            </View>
        );
    }

    renderRow = (rowData) => {
        return (
            <TouchableOpacity>
              { /*整个cell*/ }
              <View style={ styles.cellStyle }>
                { /*标题文字*/ }
                <Text style={ styles.title }>
                  { rowData.title }
                </Text>
                { /*封面图片*/ }
                <Image style={ styles.thumb } source={ { uri: rowData.thumb } }>
                  <Icon name="ios-play" size={ 30 } style={ styles.play } />
                </Image>
                { /*cell Footer*/ }
                <View style={ styles.cellFooter }>
                  { /*点赞*/ }
                  <View style={ styles.footerBox }>
                    <Icon name="ios-heart" size={ 30 } style={ styles.BoxIcon } />
                    { /*点赞的文字*/ }
                    <Text style={ styles.BoxText }>点赞</Text>
                  </View>
                  { /*评论*/ }
                  <View style={ styles.footerBox }>
                    <Icon name="ios-chatboxes" size={ 30 } style={ styles.BoxIcon } />
                    { /*点赞的文字*/ }
                    <Text style={ styles.BoxText }>点赞</Text>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
    },
    header: {
        padding: 25,
        paddingBottom: 15,
        backgroundColor: '#dddddd',
        borderBottomColor: 'black',
        borderBottomWidth: 0.5,
        marginTop: 'number, string',
        marginTop: Platform.OS === 'ios' ? 20 : 0,

    },
    headerText: {
        fontSize: 16,
        fontWeight: '600',
        textAlign: 'center',


    },
    listView: {},
    cellStyle: {
        marginTop: 10,
        width: width,
        backgroundColor: 'white'
    },
    title: {
        fontSize: 18,
        padding: 10,
        color: 'black',
    },
    thumb: {
        width: width,
        height: width * 0.56,
        resizeMode: 'cover',
    },
    play: {
        position: 'absolute',
        bottom: 14,
        right: 14,
        width: 45,
        height: 45,
        paddingTop: 8.5,
        paddingLeft: 18,
        backgroundColor: 'transparent',
        borderColor: 'black',
        borderWidth: 0.5,
        borderRadius: 23,
    },
    cellFooter: {

        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#dddddd'

    },
    footerBox: {
        padding: 10,
        flexDirection: 'row',
        backgroundColor: 'white',
        flex: 1,
        marginLeft: 1,
    },
    BoxIcon: {
        fontSize: 22,
        color: '#333'
    },
    BoxText: {
        fontSize: 18,
        color: '#333',
        paddingLeft: 12,
    },


});
// [
//                 {
//                     "_id": "120000199809228834",
//                     "thumb": "http://dummyimage.com/1280x720/a86554)",
//                     "title": "@cparagraph(1,3)",
//                     "video": "http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"
//                 }
//                 ,
//                 {
//                     "_id": "140000201407184852",
//                     "thumb": "http://dummyimage.com/1280x720/acd485)",
//                     "title": "@cparagraph(1,3)",
//                     "video": "http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"
//                 }
//                 ,
//                 {
//                     "_id": "360000198703223592",
//                     "thumb": "http://dummyimage.com/1280x720/9c0372)",
//                     "title": "@cparagraph(1,3)",
//                     "video": "http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"
//                 }
//                 ,
//                 {
//                     "_id": "62000019700916638X",
//                     "thumb": "http://dummyimage.com/1280x720/c6f760)",
//                     "title": "@cparagraph(1,3)",
//                     "video": "http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"
//                 }
//                 ,
//                 {
//                     "_id": "540000201005029889",
//                     "thumb": "http://dummyimage.com/1280x720/7fee56)",
//                     "title": "@cparagraph(1,3)",
//                     "video": "http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"
//                 }
//                 ,
//                 {
//                     "_id": "370000201610298700",
//                     "thumb": "http://dummyimage.com/1280x720/287f5e)",
//                     "title": "@cparagraph(1,3)",
//                     "video": "http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"
//                 }
//                 ,
//                 {
//                     "_id": "520000198003227779",
//                     "thumb": "http://dummyimage.com/1280x720/5c7f9c)",
//                     "title": "@cparagraph(1,3)",
//                     "video": "http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"
//                 }
//                 ,
//                 {
//                     "_id": "610000200610052378",
//                     "thumb": "http://dummyimage.com/1280x720/ddb908)",
//                     "title": "@cparagraph(1,3)",
//                     "video": "http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"
//                 }]
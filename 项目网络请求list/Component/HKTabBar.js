/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
export default class HKTabBar extends Component {

    static propTypes = {
        goToPage: React.PropTypes.func, //跳转到Tab的方法
        activeTab: React.PropTypes.number, //选中下标
        tabs: React.PropTypes.array, //tabs的集合！像OC item的数组

        //接下来！我们扩展自定义的属性
        tabIconNames: React.PropTypes.array, //Item图片的名称
        tabNames: React.PropTypes.array, //保存图片的名称
    }

    render() {
        return (
            <View style={ styles.tbs }>
              { /*返回一个一个的Item*/ }
              { this.props.tabs.map((tab, i) => this.renderItem(tab, i)) }
            </View>
        );
    }
    renderItem(tab, i) {
        const color = this.props.activeTab == i ? "green" : "black";
        return (
            //判断i是否是当前选中的tab！！
            <TouchableOpacity activeOpacity={ 1 } style={ styles.tab } key={ i } onPress={ () => this.props.goToPage(i) }>
              <View style={ styles.tabItem }>
                <Icon name={ this.props.tabIconNames[i] } size={ 30 } color={ color } />
                <Text style={ { color: color } }>
                  { this.props.tabNames[i] }
                </Text>
              </View>
            </TouchableOpacity>

        )
    }
}

const styles = StyleSheet.create({
    tbs: {
        flexDirection: 'row',
        height: 50,

    },
    tabItem: {
        alignItems: 'center',

    },
    tab: {

        flex: 1,
    },

})
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, ScrollView } from 'react-native';

export default class MyApp extends Component {
    render() {
        return (
            <ScrollView horizontal={ true } showsHorizontalScrollIndicator={ false } pagingEnabled={ true }>
              { this.renderChildView() }
            </ScrollView>
        );
    }

    //返回子组件
    renderChildView() {
        var allChild = [];
        var colors = ['red', 'green', 'yellow', 'orange', 'purple'];
        //遍历
        for (var i = 0; i < 6; i++) {
            allChild.push(
                <View key={ i } style={ { backgroundColor: colors[i], width: 600, height: 120 } }>
                  <Text>
                    { i }
                  </Text>
                </View>
            )
        }
        //返回所有的孩子
        return allChild;
    }
}

const styles = StyleSheet.create({



});

AppRegistry.registerComponent('MyApp', () => MyApp);

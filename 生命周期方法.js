/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, Alert, Button, } from 'react-native';

/*
Props 属性 相当于OC中的ReadOnly，只读属性!!
state 状态 每个组件有一个系统的setState方法，用来改变状态，而且会刷新界面！！
          调用render（）函数
componentWillMount 相当于OC中的ViewwillAppear
*/


export default class MyApp extends Component {
    state = {
        title: '默认值',
        person: 'Hank'
    }
    static defaultProps = {
        age: 18
    }
    componentWillMount() {
        // Alert.alert('WillMount来了');
    }

    render() {
        return (
            <View ref="topView" style={ styles.container }>
              { Alert.alert('render来了') }
              <Text>
                { this.state.person }
              </Text>
              <Text>
                { this.props.age }
              </Text>
              <Button title="我就是一个Button" color="red" onPress={ () => this.click('点击') } />
            </View>
        );
    }
    click(event) {
        this.setState({
            title: event
        });
        //拿到View
        this.refs.topView
    }
    //Render之后用来发送网络请求(第一次加载的数据)
    componentDidMount() {
        // Alert.alert('DidMount');
    }
    //这个方法!!刷新UI之后调用!!第一次加载UI不会来!!
    componentDidUpdate() {
        Alert.alert('Didupdate');


    }

}
const btnClick = () => {
    Alert.alert('哥们儿我来了！！')
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
});

AppRegistry.registerComponent('MyApp', () => MyApp);

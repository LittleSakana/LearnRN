/**
 * Created by fengdongsheng on 2018/3/20.
 */

import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
}
from 'react-native';
import PropTypes from 'prop-types';

export default class DSWaitingPage extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <View style={Styles.container}>
                <Text style={Styles.textPromtStyle1}>
                    登录使用的手机号：{this.props.phoneNumber}
                </Text>
                <Text style={Styles.textPromtStyle1}>
                    登录使用的密码：{this.props.password}
                </Text>
                <Text style={Styles.bigTextPrompt} onPress={()=>this.onGobackPressed()}>
                    返回
                </Text>
            </View>
        );
    }
    onGobackPressed() {
        this.props.onGobackPressed();
    }
}

let Styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
    },
    textPromtStyle1: {
        fontSize: 20,
    },
    bigTextPrompt: {
        width: 300,
        backgroundColor: 'gray',
        color: 'white',
        textAlign: 'center',
        fontSize: 50,
    }
});

DSWaitingPage.propTypes = {
    phoneNumber: PropTypes.string,
    password: PropTypes.string,
}

DSWaitingPage.defaultProps = {
    phoneNumber: '135',
    password: '123456',
}

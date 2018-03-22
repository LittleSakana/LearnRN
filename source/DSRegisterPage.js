/**
 * Created by fengdongsheng on 2018/3/20.
 */

import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    AppRegistry,
    Dimensions,
    TextInput
} from 'react-native';

let widthOfMagin = Dimensions.get('window').width * 0.05;

export default class DSRegisterPage extends Component {
    static myStaticObject = 'This is a static object';
    static myStaticMethod () {
        console.log('This is a static method.');
    }
    constructor(props) {
        super(props);
        this.isShowLogin = false;
        this.messageInfo = 'Hello world.';
        this.state = {
            phoneNumber: '',
            password: ''
        };
        this.updatePasswrod = this.updatePasswrod.bind(this);
    }
    shouldComponentUpate() {
        if (this.state.phoneNumber.length < 3) return false;
        return true;
    }
    updatePhoneNumber(nextText) {
        DSRegisterPage.myStaticMethod();
        console.log('This is in updatePhoneNumber');
        this.setState(() => {
            return {
                phoneNumber: nextText,
            };
        }, this.changeNumDone);
    }
    updatePasswrod(nextText) {
        this.setState((state) => {
            return {
                password: nextText,
            };
        });
    }
    render() {
        console.log('This is in render method');
        return (
            <View style={styles.container}>
                <TextInput style={styles.textinputStyle}
                           placeholder={'请输入手机号'}
                           onChangeText={(newText) => this.updatePhoneNumber(newText)}
                />
                <Text style={styles.textPromtStyle}>输入您的手机号码:{this.state.phoneNumber}
                </Text>
                <TextInput style={styles.textinputStyle}
                           placeholder={'请输入您的密码'}
                           secureTextEntry={true}
                           onChangeText={this.updatePasswrod}
                />
                <Text style={styles.bigTextPromtStyle}
                    onPress={()=> this.userPressConfirm()}>
                    登录
                </Text>
                <Text style={styles.bigTextPromtStyle}
                    onPress={()=> this.userPressAddressBook()}>
                    读取通讯录
                </Text>
            </View>
        );
    }
    userPressConfirm() {
        this.props.onLoginPressed(this.state.phoneNumber, this.state.password);
    }
    userPressAddressBook() {

    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        // alignItems: 'center',
        // justifyContent: 'center',
    },
    textinputStyle: {
        margin: widthOfMagin,
        backgroundColor: 'gray',
        height: 30,
        fontSize: 20
    },
    textPromtStyle: {
        margin: widthOfMagin,
        fontSize: 20
    },
    bigTextPromtStyle: {
        margin: widthOfMagin,
        backgroundColor: 'gray',
        color: 'white',
        textAlign: 'center',
        fontSize: 30
    }
});
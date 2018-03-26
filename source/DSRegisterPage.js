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
    TextInput,
    Alert,
} from 'react-native';

import DSFlexBoxPage from './DSFlexBoxPage';
import DSViewTransformPage from './DSViewTransformPage';

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
            password: '',
            showPageName: '',
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
        if (this.state.showPageName === 'DSFlexBoxPage') {
            return (
                <DSFlexBoxPage></DSFlexBoxPage>
            );
        } else if (this.state.showPageName === 'DSViewTransformPage') {
            return (
                <DSViewTransformPage></DSViewTransformPage>
            );
        } else {
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
                    <Text style={styles.bigTextPromtStyle}
                          onPress={()=> this.testFlexBox()}>
                        测试FlexBox
                    </Text>
                    <Text style={styles.bigTextPromtStyle}
                          onPress={()=> this.testViewTransform()}>
                        测试View变形
                    </Text>
                </View>
            );
        }
    }
    userPressConfirm() {
        this.props.onLoginPressed(this.state.phoneNumber, this.state.password);
    }
    userPressAddressBook() {
        Alert.alert(
            '提示',
            '我们的app将要获取您的通讯录',
            [
                {text: '我拒绝', onPress: (()=>{})},
                {text: '哈哈哈', style: 'cancel', onPress: (()=>{})},
                {text: '我知道了', onPress: this.doGetAddressBook},
            ]
        );
    }
    doGetAddressBook() {
        console.log('去获取通讯录');
    }
    testFlexBox() {
        this.setState({
            showPageName: 'DSFlexBoxPage',
        });
    }
    testViewTransform() {
        this.setState({
            showPageName: 'DSViewTransformPage',
        });
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
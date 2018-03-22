/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    BackHandler,
    Platform,
    View,
} from 'react-native';
import DSRegisterPage from './source/DSRegisterPage';
import DSWaitingPage from './source/DSWaitingPage';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentScene: 'login',
            phoneNumber: '',
            password: '',
        };
        this.handleBackSingal = this.handleBackSingal.bind(this);
        this.onLoginPressed = this.onLoginPressed.bind(this);
    }
    onLoginPressed(aNumber, aPwd) {
        this.setState({
            currentScene: 'waiting',
            phoneNumber: aNumber,
            password: aPwd,
        });
    }
    render() {
        if (this.state.currentScene === 'login') {
            return (
                <DSRegisterPage onLoginPressed={this.onLoginPressed}></DSRegisterPage>
            );
        } else {
            return (
                <DSWaitingPage phoneNumber={this.state.phoneNumber}
                               password={this.state.password}
                               onGobackPressed={this.handleBackSingal}>
                </DSWaitingPage>
            );
        }
    }
    handleBackSingal() {
        if (this.state.currentScene === 'waiting') {
            this.setState({
                currentScene: 'login',
            });
            return true;
        }
        return false;
    }
    componentDidMount() {
        if (Platform.OS === 'android') {
            BackHandler.addEventListener('hardwareBackPress', this.handleBackSingal);
        }
    }
    componentWillUnmount() {
        if (Platform.OS === 'android') {
            BackHandler.removeEventListener('hardwareBackPress', this.handleBackSingal);
        }
    }
}

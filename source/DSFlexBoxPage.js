/**
 * Created by fengdongsheng on 2018/3/26.
 */

import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    PixelRatio,
} from 'react-native';

let pixelRatio = PixelRatio.get();

export default class DSFlexBoxPage extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.welcome} opacity={0}></View>
                <View style={styles.welcome} opacity={0.1}></View>
                <View style={styles.welcome} opacity={0.25}></View>
                <View style={styles.welcome} opacity={0.5}></View>
                <View style={styles.welcome} opacity={0.75}></View>
                <View style={styles.welcome} opacity={5}></View>
                <View style={styles.welcome}></View>
                {/*<View style={styles.firstRow}>*/}
                    {/*<View style={styles.test4}></View>*/}
                    {/*<View style={styles.test4}></View>*/}
                    {/*<View style={styles.test4}></View>*/}
                    {/*<View style={styles.test4}></View>*/}
                    {/*<View style={styles.test4}></View>*/}
                {/*</View>*/}
                {/*<View style={styles.testPosition}></View>*/}
            </View>
        );
    }
}

var styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'grey',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    welcome: {
        width: 50,
        height: 50,
        borderWidth: 1/pixelRatio,
        backgroundColor: 'white',
        borderRadius: 25,
    },
    firstRow: {
        height: 80,
        top: 40,
        backgroundColor: 'black',
        flexDirection: 'row',
        flexWrap: 'wrap',
        // justifyContent: 'space-between',
        alignItems: 'center',
    },
    test1: {
        width: 68,
        height: 24,
        backgroundColor: 'white',
    },
    test2: {
        width: 40,
        height: 24,
        backgroundColor: 'white',
    },
    test3: {
        width: 100,
        height: 24,
        backgroundColor: 'white',
    },
    test4: {
        height: 50,
        backgroundColor: 'grey',
    },
    testPosition: {
        backgroundColor: 'grey',
        height: 60,
        width: 60,
        position: 'absolute',
        top: 150,
        right: 50,
    }
});
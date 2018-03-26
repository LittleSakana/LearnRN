/**
 * Created by fengdongsheng on 2018/3/26.
 */

import React, {Component} from 'react';
import {
    View,
    StyleSheet,
    Text,
} from 'react-native';

export default class DSViewTransformPage extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome0}>
                    Welcome to DSDevelopment!
                </Text>
                <Text style={styles.welcome1}>
                    Welcome to DSDevelopment!
                </Text>
                <Text style={styles.welcome2}>
                    Welcome to DSDevelopment!
                </Text>
                <Text style={styles.welcome3}>
                    Welcome to DSDevelopment!
                </Text>
                <Text style={styles.welcome4}>
                    Welcome to DSDevelopment!
                </Text>
                <Text style={styles.welcome5}>
                    Welcome to DSDevelopment!
                </Text>
                <Text style={styles.welcome6}>
                    Welcome to DSDevelopment!
                </Text>
                <Text style={styles.welcome7}>
                    Welcome to DSDevelopment!
                </Text>
                <Text style={styles.welcome8}>
                    Welcome to DSDevelopment!
                </Text>
                <Text style={styles.welcome9}>
                    Welcome to DSDevelopment!
                </Text>
                <Text style={styles.welcome10}>
                    Welcome to DSDevelopment!
                </Text>
            </View>
        );
    }
}

var styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5fcff',
    },
    welcome0: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        transform: [{rotate:'45deg'}],
    },
    welcome1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        transform: [{rotateX:'45deg'}],
    },
    welcome2: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        transform: [{rotateY:'45deg'}],
    },
    welcome3: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        transform: [{rotateZ:'45deg'}],
    },
    welcome4: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        transform: [{scale: 2}],
    },
    welcome5: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        transform: [{scaleX: 2}],
    },
    welcome6: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        transform: [{scaleY: 2}],
    },
    welcome7: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        transform: [{translateX: 200}],
    },
    welcome8: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        transform: [{translateY: 150}],
    },
    welcome9: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        transform: [{skewX:'45deg'}],
    },
    welcome10: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        transform: [{skewY:'45deg'}],
    }
});
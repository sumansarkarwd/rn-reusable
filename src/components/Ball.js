import React, {Component} from "react";
import {View, Text, StyleSheet, Animated} from "react-native";

class Ball extends Component {
    constructor() {
        super();
        
        this.position = new Animated.ValueXY(0, 0);
        Animated.spring(this.position, {
            toValue: {
                x: 200,
                y: 200
            }
        }).start();
    }

    render() {
        return (
            <Animated.View style={this.position.getLayout()}>
                <View style={styles.ball}>
                </View>
            </Animated.View>
        )
    }
}

const styles = StyleSheet.create({
    ball: {
        height: 100,
        width: 100,
        backgroundColor: 'purple',
        borderRadius: 50,
    }
});

export default Ball;
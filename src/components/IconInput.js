import React, {Component} from "react";
import {View, Text, TextInput, StyleSheet} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

class IconInput extends Component {
    render() {
        return (
            <View style={styles.rootContainer}>
                <View style={styles.iconCon}>
                    <Icon name={this.props.icon} size={this.props.icon_size} color={this.props.icon_color}/>
                </View>
                <View style={styles.inputCon}>
                    <TextInput  style={styles.textInput} placeholder={this.props.placeholder}/>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        height: 60,
        flexDirection: 'row',
        paddingEnd: 35,
        alignItems: 'center',
        // borderWidth: 1,
        // borderColor: '#000',
    },
    iconCon: {
        width: 60,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputCon: {
        flex: 1,
    },
    textInput: {
        fontSize: 16,
        // borderWidth: 1,
        // borderColor: '#000',
    }
});

export default IconInput;
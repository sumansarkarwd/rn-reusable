import React, {Component} from "react";
import {View, Text, StyleSheet, Dimensions} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

class AuthForm extends Component {
    render() {
        return (
            <View style={styles.rootContainer}>
                <View style={styles.titleCon}>
                    <Text style={styles.titleStyle}>{this.props.title}</Text>
                </View>
                <View style={styles.formsCon}>
                    {this.props.children}
                    <View style={styles.submitButton}>
                        <Icon name='check' size={20} color='#fff'/>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    titleCon: {
        width: '100%',
        height: 80,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    titleStyle: {
        fontSize: 36,
        fontStyle: 'italic',
        fontWeight: 'bold',
        color: '#666',
    },
    formsCon: {
        width: Dimensions.get('window').width - 50,
        borderTopRightRadius: 300,
        borderBottomEndRadius: 300,
        backgroundColor: '#fff',
        alignSelf: 'flex-start',
        padding: 20,
        minHeight: 100,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,
        elevation: 8,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },

    submitButton: {
        position: 'absolute',
        backgroundColor: 'green',
        right: -15,
        height: 50,
        width: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30,
    }
});

export default AuthForm;
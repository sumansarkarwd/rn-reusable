import React, {Component} from "react";
import {View, Text, StyleSheet, Dimensions, TouchableWithoutFeedback, FlatList, Animated} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

class Card extends Component {
    render() {
        return (
            <View style={styles.cardStyle}>
                {this.props.children}
            </View>
        )
    }
}

class Slider extends Component {
  constructor(props) {
      super(props);

      this.state = {
          showSlideData: true,
      }
      this.position = new Animated.ValueXY(0, Dimensions.get('window').height - 85);
  }

  componentDidMount() {
    this.toggleView();
  }

  toggleView = () => {
    this.setState((prevState) => {
        return ({
          showSlideData: !prevState.showSlideData
        });
    }, () => {
        if(this.state.showSlideData) {
            Animated.spring(this.position, {
                toValue: {
                    x: 0,
                    y: Dimensions.get('window').height - (Dimensions.get('window').height - 100)
                }
            }).start();
        } else {
            Animated.spring(this.position, {
                toValue: {
                    x: 0,
                    y: Dimensions.get('window').height - 85
                }
            }).start();
        }
    });
      
  }

  renderIcon = () => {
      if(this.state.showSlideData) {
          return (
            <Icon name='chevron-down' size={20} color='#5b1b44'/>
          );
      } else {
        return (
            <Icon name='chevron-up' size={20} color='#5b1b44'/>
        );
      }
  }

  render() {      
    return (
      <Animated.View style={[styles.rootContainer, this.position.getLayout()]}>
        <TouchableWithoutFeedback onPress={() => this.toggleView()}>
          <View style={styles.headerStyle}>
            <View style={styles.headerLeft}>
                <Text style={styles.headerLeftText}>{this.props.title ? this.props.title : 'Please provide a Title from parent'}</Text>
            </View>
            <View style={styles.headerRight}>
                    {this.renderIcon()}
            </View>
          </View>
        </TouchableWithoutFeedback>
          <View style={styles.contentStyle}>
              {this.props.children}
          </View>
      </Animated.View>
    )
  }
}

const styles = StyleSheet.create({
    rootContainer: {
        height: Dimensions.get('window').height,
        width: Dimensions.get('window').width,
        position: 'absolute',
        flexDirection: 'column',
    },
    rootContainerPositionShow: {
        top: Dimensions.get('window').height - (Dimensions.get('window').height - 100),
    },
    rootContainerPositionHide: {
        top: Dimensions.get('window').height - 85,
    },
    headerStyle: {
        height: 60,
        width: "100%",
        backgroundColor: '#fff',
        borderTopLeftRadius: 15, 
        borderTopEndRadius: 15, 
        paddingHorizontal: 20,
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: 'space-between',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.36,
        shadowRadius: 6.68,

        elevation: 11,
    },
    headerLeft: {
    },
    headerLeftText: {
        color: '#767476',
        fontSize: 18,
    },
    headerRight: {
    },
    buttonStyle: {
        // backgroundColor: 'red',
        padding: 15,
    },
    contentStyle: {
        height: Dimensions.get('window').height - (Dimensions.get('window').height - (Dimensions.get('window').height - 100) + 85),
        backgroundColor: '#fff',
    },
    cardStyle: {
        backgroundColor: "#fff",
        padding: 10,
        height: 70,
        marginHorizontal: 5,
        marginVertical: 5,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,
        elevation: 2,
        borderRadius: 5,
        justifyContent: 'center',
    },
    emptyView: {
        backgroundColor: '#fff',
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center',
    },
    emptyText: {
        color: '#999',
        fontSize: 18,
    }
})

export default Slider;
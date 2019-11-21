import React, {Component} from "react";
import {View, Text, StyleSheet, Dimensions, TouchableOpacity, FlatList} from "react-native";
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
  state = {
      showSlideData: false,
  }

  toggleView = () => {
      this.setState((prevState) => {
          return ({
            showSlideData: !prevState.showSlideData
          });
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
    
  renderItem = item => {
      return (
          <Card>
            <Text>{item.name}</Text>
          </Card>
      )
  }

  renderData = () => {
      if(this.props.data) {
          return (
            <FlatList 
                data={this.props.data}
                renderItem={({ item }) => this.renderItem(item)}
                keyExtractor={item => item.id}
            />
          );
      } else {
          return (
            <View style={styles.emptyView}>
                <Text style={styles.emptyText}>Nothing seems to be here!</Text>
            </View>
          )
      }
  }

  render() {      
    return (
      <View style={[styles.rootContainer, this.state.showSlideData ? styles.rootContainerPositionShow : styles.rootContainerPositionHide]}>
          <View style={styles.headerStyle}>
            <View style={styles.headerLeft}>
                <Text style={styles.headerLeftText}>{this.props.title ? this.props.title : 'Please provide a Title from parent'}</Text>
            </View>
            <View style={styles.headerRight}>
                <TouchableOpacity onPress={() => this.toggleView()}>
                    {this.renderIcon()}
                </TouchableOpacity>
            </View>
          </View>
          <View style={styles.contentStyle}>
            {this.renderData()}
          </View>
      </View>
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
        borderTopLeftRadius: 10, 
        borderTopEndRadius: 10, 
        paddingHorizontal: 20,
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: 'space-between',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 4,
    },
    headerLeft: {
    },
    headerLeftText: {
        color: '#767476',
        fontSize: 18,
    },
    headerRight: {
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
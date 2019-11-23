import React, {Component} from "react";
import {
    View, 
    StyleSheet,
    Animated,
    PanResponder,
    Dimensions,
    UIManager,
    LayoutAnimation,
} from "react-native";

const SCREEN_WIDTH = Dimensions.get('screen').width;
const SWIPE_THRESHOLD = Dimensions.get('screen').width * 0.25;
const SWIPE_DURATION = 250; // in miliseconds
const SWIPE_DIRECTION_LEFT = 'left';
const SWIPE_DIRECTION_RIGHT = 'right';

class TinderDeck extends Component {
    static defaultProps = {
        onSwipeRight: () => {},
        onSwipeLeft: () => {},
    }
    constructor(props) {
        super(props);

        const position = new Animated.ValueXY();
        const panResponder = PanResponder.create({
            onStartShouldSetPanResponder: () => {
                return true; 
            },
            onPanResponderMove: (event, gesture) => {
                position.setValue({
                    x: gesture.dx,
                    y: gesture.dy,
                })             
            },
            onPanResponderRelease: (event, gesture) => {
                if(gesture.dx > SWIPE_THRESHOLD) { // on right swipe
                    this.forceSwipe(SWIPE_DIRECTION_RIGHT);
                } else if(gesture.dx < -SWIPE_THRESHOLD) { // on left swipe
                    this.forceSwipe(SWIPE_DIRECTION_LEFT);
                } else {
                    this.resetCardPosition();
                }
            },
        });

        this.panResponder = panResponder;
        this.position = position;
        this.state = {
            index: 0,
        }
    }

    static getDerivedStateProps(nextProps) {
        if(nextProps.data !== this.props.data) {
            this.setState({ index: 0 });
        }
    }

    componentDidUpdate() {
        UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);
        LayoutAnimation.spring();
    }

    getCardItemStyle() {
        const rotate = this.position.x.interpolate({
            inputRange: [-SCREEN_WIDTH * 2, 0, SCREEN_WIDTH * 2],
            outputRange: ['-120deg', '0deg', '120deg']
        })
        return {
            ...this.position.getLayout(),
            transform: [{ rotate }]
        }
    }

    forceSwipe(direction = SWIPE_DIRECTION_RIGHT) {
        const valueX = direction === SWIPE_DIRECTION_RIGHT ? SCREEN_WIDTH : -SCREEN_WIDTH;

        Animated.timing(this.position, {
            toValue: { x: valueX, y: 0 },
            duration: SWIPE_DURATION
        }).start(() => this.onSwipeComplete(direction));
    }

    onSwipeComplete(direction) {
        const { data, onSwipeRight, onSwipeLeft} = this.props;
        direction === SWIPE_DIRECTION_RIGHT ? onSwipeRight() : onSwipeLeft();

        this.setState(prevState => ({
            index: prevState.index + 1
        }));
        this.position.setValue({ x:0, y:0 });
    }

    resetCardPosition() {
        Animated.spring(this.position, {
            toValue: { x: 0, y: 0}
        }).start();
    }

    renderCards() {
        if(this.state.index >= this.props.data.length) {
            return this.props.renderNoMoreItems();
        }
        return this.props.data.map((cardItem, index) => {
            if(index < this.state.index) {
                return null;
            }
            else if(index === this.state.index) {
                return (
                    <Animated.View
                    key={cardItem.id}
                    {...this.panResponder.panHandlers}
                    style={[this.getCardItemStyle(), styles.cardStyle]}
                    >
                        {this.props.renderItem(cardItem)}
                    </Animated.View>
                )
            }
            
            return (
                <Animated.View key={cardItem.id} style={[styles.cardStyle, {
                    top: 10 * (index - this.state.index),
                    width: SCREEN_WIDTH - (index * 2),
                    left: index,
                }]}>
                    {this.props.renderItem(cardItem)}
                </Animated.View>
            );
        }).reverse();
    }

    render() {
        return (
            <View>
                {this.renderCards()}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    cardStyle: {
        position: 'absolute',
        width: SCREEN_WIDTH,
        zIndex: 1,
    }
});

export default TinderDeck;
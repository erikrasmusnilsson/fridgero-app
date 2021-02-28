import React from 'react';
import { ScrollView, StyleSheet, View, Animated, PanResponder } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { MEDIUM_GRAY, MEDIUM_LIGHT_GRAY } from '../../../constants';

const CLOSED_OFFSET = 400;

const Modal = ({ 
    visible, 
    onClose, 
    children
}) => {
    const slideInAnimation = React.useRef(new Animated.Value(CLOSED_OFFSET)).current;
    const fadeInAnimation = React.useRef(new Animated.Value(0)).current;
    const [openPosition, setOpenPosition] = React.useState(new Animated.ValueXY());
    const [pos, setPos] = React.useState({ x: 0, y: 0 });
    const panResponder = PanResponder.create({
        onStartShouldSetPanResponder: (e, gesture) => true,
        onPanResponderMove: Animated.event([
            null, 
            { 
                dx: 0, 
                dy: openPosition.y 
            }
        ], null)
    })

    const open = () => {
        Animated.timing(
            slideInAnimation,
            {
                toValue: 0,
                duration: 500,
                useNativeDriver: true
            }
        ).start();
        Animated.timing(
            fadeInAnimation,
            {
                toValue: 1,
                duration: 500,
                useNativeDriver: true
            }
        ).start();
    }

    const close = () => {
        Animated.timing(
            slideInAnimation,
            {
                toValue: CLOSED_OFFSET,
                duration: 500,
                useNativeDriver: true
            }
        ).start();
        Animated.timing(
            fadeInAnimation,
            {
                toValue: 0,
                duration: 500,
                useNativeDriver: true
            }
        ).start();
    }

    React.useEffect(() => {
        if (visible) open();
        else close();
    }, [visible, slideInAnimation]);

    React.useEffect(() => {
        openPosition.addListener(value => setPos({x: 0, y: value.y}));
        openPosition.setValue({ x: 0, y: 0 });
    }, []);

    return (
        <>
            <Animated.View 
                {...panResponder.panHandlers}
                style={
                    [
                        styles.wrapper, 
                        {transform: openPosition.getTranslateTransform()}
                    ]
                }>
                <ScrollView style={ styles.modal }>
                    { children }
                </ScrollView>
            </Animated.View>
        </>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        //position: 'absolute',
        /*bottom: 0,
        left: 0,*/
        height: 400,
        width: '100%',
        borderTopLeftRadius: 24,
        borderTopRightRadius: 24,
        backgroundColor: 'red',
    },
    modal: {
        paddingHorizontal: 24,
        paddingVertical: 32,
    }
});

export default Modal;
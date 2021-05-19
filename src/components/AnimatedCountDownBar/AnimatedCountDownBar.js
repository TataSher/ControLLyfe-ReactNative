import React from 'react';
import { Vibration, StyleSheet, TextInput, Dimensions, View, Animated } from 'react-native';

const AnimatedCountDownBar = ( props ) => {
  const { active, duration, onAnimationComplete } = props
  const { width, height } = Dimensions.get('window')
  const timerAnimation = React.useRef(new Animated.Value(0)).current;
  const inputRef = React.useRef();
  const newHeight = height - 150

  React.useEffect(() => {
    const listener = timerAnimation.addListener(({value}) => {
      inputRef?.current?.setNativeProps({
        text: (duration + (value * (1 - duration))).toFixed()
      })
    })

    return () => {
      timerAnimation.removeListener(listener)
      timerAnimation.removeAllListeners();
    }
  })

  const animation = () => {

      Animated.timing(timerAnimation, {
        toValue: 1,
        duration: duration * 1000,
        useNativeDriver: true
      }).start(() => {
        Vibration.cancel()
        Vibration.vibrate()
        onAnimationComplete()
      })
  }

  const translate = timerAnimation.interpolate({
      inputRange: [0, 1],
      outputRange: [0, newHeight]
    })

    const opacity = timerAnimation.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 1]
    })

  React.useEffect(() => {
    if (active) {
      animation()
    }
  }, [active])

  return(
    <View style={{flex: 1}}>
    <Animated.View 
        style={ {
          position: 'absolute',
          height,
          width,
          backgroundColor: 'blue',
          opacity: opacity,
          transform: [{
          translateY: translate}]
        }
        }/>
         <View style={{
            postition: 'absolute',
            justifyContent: 'center',
            width: width,
            alignSelf: 'center',
            alignItems: 'center'
          }}>
            <TextInput 
              ref={inputRef}
              style={{fontSize: 40}}
              defaultValue={duration.toString()}
            />
          </View>
        </View>
  )
}

export { AnimatedCountDownBar }
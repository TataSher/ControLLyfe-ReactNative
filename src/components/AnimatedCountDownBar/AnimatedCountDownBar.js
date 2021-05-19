import React from 'react';
import { Vibration, StyleSheet, TextInput, Dimensions, View, Animated } from 'react-native';

const AnimatedCountDownBar = ( props ) => {
  const { active, duration, onAnimationComplete } = props
  const { width, height } = Dimensions.get('window')
  const timerAnimation = React.useRef(new Animated.Value(0)).current;
  const inputRef = React.useRef();
  const newHeight = height - 170

  // This function changes the text to count down on the screen
  React.useEffect(() => {
    const listener = timerAnimation.addListener(({value}) => {
      const number = (duration + (value * (1 - duration))).toFixed()
      inputRef?.current?.setNativeProps({
        text:  number < 10 ? `0${number}` : number 
      })
    })

    return () => {
      timerAnimation.removeListener(listener)
      timerAnimation.removeAllListeners();
    }
  })

  // This function tells timerAnimation how long it will take to complete anything
  // When done, it vibrates the phone, and tells the screen to scroll to the next item in the flatlist
  const animation = () => {

      Animated.timing(timerAnimation, {
        toValue: 1,
        duration: duration * 1000,
        useNativeDriver: false
      }).start(() => {
        Vibration.cancel()
        Vibration.vibrate()
        onAnimationComplete()
      })
  }

  // This function tells our bar where to move, and where from
  const translate = timerAnimation.interpolate({
      inputRange: [0, 1],
      outputRange: [0, newHeight]
    })

    // And this function tells our bar to change opacity
    const opacity = timerAnimation.interpolate({
      inputRange: [0, 0.2, 1],
      outputRange: [0, 0.6, 1]
    })

    const backgroundColor = timerAnimation.interpolate({
      inputRange: [0, 0.3, 1],
      outputRange: ['yellow', 'pink', 'coral']
    })

    //This useEffect gets the state 'active' from the screen, and calls our timer to start
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
          backgroundColor: backgroundColor,
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
              style={{fontSize: 40, width: 50, justifyContent: 'center', alignItems: 'center'}}
              defaultValue={duration.toString()}
            />
          </View>
        </View>
  )
}

export { AnimatedCountDownBar }
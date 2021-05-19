import React, { useState } from 'react';
import { useEffect } from 'react';
import { Vibration, StyleSheet, TextInput, Dimensions, View, Animated, TouchableOpacity, FlatListRef } from 'react-native';
import { WorkoutTitleComponent, IndividualExerciseComponent } from '../../components';
import { StartWorkoutButton } from '../../SVGs';

const AnimatedCountDownBar = ( props ) => {
  const { active, duration, onAnimationComplete } = props
  const { width, height } = Dimensions.get('window')
  const timerAnimation = React.useRef(new Animated.Value(0)).current;
  const inputRef = React.useRef();
  const newHeight = height /2

  React.useEffect(() => {
    const listener = timerAnimation.addListener(({value}) => {
      inputRef?.current?.setNativeProps({
        text: Math.round(duration + (value * (1 - duration))).toString()
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
        console.log('here')
        onAnimationComplete()
      })
  }

  const translate = timerAnimation.interpolate({
      inputRange: [0, 1],
      outputRange: [0, newHeight]
    })

  console.log(timerAnimation)

  React.useEffect(() => {
    if (active) {
      animation()
    }
  }, [active])

  return(
    <View style={{fles: 1}}>
    <Animated.View 
        style={ {
          position: 'absolute',
          top: 0, left: 0, right: 0, bottom: 20,
          width,
          backgroundColor: 'red',
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
              style={styles.duration}
              defaultValue={duration.toString()}
            />
          </View>
        </View>
  )
}

const AnimatedCountDownComponent = ( props ) => {
  const { duration, active } = props
  const inputRef = React.useRef();
  const { width } = Dimensions.get('window')
  const ITEM_SIZE = width;
  const textInputAnimation = React.useRef(new Animated.Value(duration)).current;

  React.useEffect(() => {
    const listener = textInputAnimation.addListener(({value}) => {
      inputRef?.current?.setNativeProps({
        text: Math.ceil(value).toString()
      })
    })

    return () => {
      textInputAnimation.removeListener(listener)
      textInputAnimation.removeAllListeners();
    }
  })

  const animation = React.useCallback(() => {

    Animated.timing(textInputAnimation, {
      toValue: 0,
      duration: duration * 1000,
      useNativeDriver: true
    })
  }, [duration])

  useEffect(() => {
    if (active) {
      animation()
    }
  }, [active])

  return (
  <Animated.View style={{
    postition: 'absolute',
    justifyContent: 'center',
    width: ITEM_SIZE,
    alignSelf: 'center',
    alignItems: 'center'
  }}>
    <TextInput 
      ref={inputRef}
      style={styles.duration}
      defaultValue={duration.toString()}
    />
  </Animated.View>
  )
}

const StartWorkoutScreen = ( props ) => {
  const workout = props.route.params
  const exercises = props.route.params.exercises
  const id = props.route.params.id

  const { width, height } = Dimensions.get('window')

  const ITEM_SIZE = width;
  const ITEM_SPACING = (width - ITEM_SIZE);
  const [currentIndex, setCurrentIndex] = useState(0)

  const [duration, setDuration] = useState(exercises[currentIndex].duration);
  const [animating, setAnimating] = useState(true)

    const onAnimationComplete = () => {
      flatListRef.scrollToIndex({animated: true, index: currentIndex + 1})
    }

  return(
    <View style={{flex: 1}}>
      <View style={styles.workoutTitle}>
        <WorkoutTitleComponent key={id} {...workout}/>
      </View>
      <View style={styles.flatList}>
        <Animated.FlatList 
        data={exercises}
        keyExtractor={exercises => exercises._id.toString()}
        horizontal
        bounces={false}
        onMomentumScrollEnd={ev => {
          const index = Math.round(ev.nativeEvent.contentOffset.x / ITEM_SIZE);
          setCurrentIndex(index)
          setDuration(exercises[index].duration)
        }}
        ref={(ref) => { flatListRef = ref; }}
        showsHorizontalScrollIndicator={false}
        snapToInterval={ITEM_SIZE}
        style={StyleSheet.absoluteFillObject, {
          height,
          width,
        }}
        contentContainerStyle={{
          paddingHorizontal: ITEM_SPACING,
        }}
        renderItem={({item, index}) => {

          return <View style={{width: ITEM_SIZE, alignItems: 'center', justifyContent: 'center', height: height, position: 'relative'}}>
          <AnimatedCountDownBar active={index === currentIndex && animating} {...item} {...{onAnimationComplete}}/> 
          <IndividualExerciseComponent exercise={item} />
        </View>
        }}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  workoutTitle: {
    justifyContent: 'center',
    alignItems: 'center',
    color: 'black',
    borderBottomColor: 'black',
    borderBottomWidth: 2,
    margin: 10
  },
  flatList: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  duration: {
    fontSize: 40
  }
})

export { StartWorkoutScreen }
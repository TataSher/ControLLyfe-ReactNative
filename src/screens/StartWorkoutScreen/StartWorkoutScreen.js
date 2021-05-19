import React, { useState } from 'react';
import { useEffect } from 'react';
import { Vibration, StyleSheet, TextInput, Dimensions, View, Animated, TouchableOpacity, FlatListRef } from 'react-native';
import { WorkoutTitleComponent, IndividualExerciseComponent } from '../../components';
import { StartWorkoutButton } from '../../SVGs';

const StartWorkoutScreen = ( props ) => {
  const workout = props.route.params
  const exercises = props.route.params.exercises
  const id = props.route.params.id

  const { width, height } = Dimensions.get('window')

  const ITEM_SIZE = width;
  const ITEM_SPACING = (width - ITEM_SIZE);
  const [currentIndex, setCurrentIndex] = useState(0)

  const [duration, setDuration] = useState(exercises[currentIndex].duration);
  const inputRef = React.useRef();
  const timerAnimation = React.useRef(new Animated.Value(height)).current;
  const textInputAnimation = React.useRef(new Animated.Value(exercises[currentIndex].duration)).current;
  const scrollerAnimation = React.useRef(new Animated.Value(exercises[currentIndex].duration)).current;

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

    Animated.sequence([

      Animated.timing(timerAnimation, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true
      }),

      Animated.parallel([
        Animated.timing(textInputAnimation, {
          toValue: 0,
          duration: duration * 1000,
          useNativeDriver: true
        }),
        Animated.timing(timerAnimation, {
          toValue: height,
          duration: duration * 1000,
          useNativeDriver: true
        }),
        Animated.timing(scrollerAnimation, {
          toValue: currentIndex,
          duration: duration * 1000,
          useNativeDriver: true
        })
      ]),
      Animated.delay(300)
      ]).start(() => {
        Vibration.cancel();
        Vibration.vibrate();
          flatListRef.scrollToIndex({animated: true, index: currentIndex + 1})
          textInputAnimation.setValue(duration);
      }) 
    }, [duration])

  return(
    <View style={{flex: 1}}>
       <Animated.View 
        style={[StyleSheet.absoluteFillObject, {
          height,
          width,
          backgroundColor: 'pink',
          transform: [{
          translateY: timerAnimation}]
        }]

        }/>
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
          height: 400,
          width,
          backgroundColor: 'blue',
        }}
        contentContainerStyle={{
          paddingHorizontal: ITEM_SPACING,
        }}
        renderItem={({item}) => {

          return <View style={{width: ITEM_SIZE, alignItems: 'center', justifyContent: 'center', height: '100%'}}>
          <IndividualExerciseComponent exercise={item} />
        </View>
        }}
        />
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
        <TouchableOpacity onPress={animation}>
          <StartWorkoutButton/>
        </TouchableOpacity>
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
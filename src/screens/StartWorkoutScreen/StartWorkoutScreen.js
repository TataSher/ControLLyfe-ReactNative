import React, { useState, useRef } from 'react';
import { Button, Image, StyleSheet, Text, Dimensions, View, Animated, TouchableOpacity, ScrollView, FlatList } from 'react-native';
import { WorkoutTitleComponent, IndividualExerciseComponent } from '../../components';
import { MinutesAndSeconds } from '../../HelperFunctions';
import { StartWorkoutButton } from '../../SVGs';

const StartWorkoutScreen = ( props ) => {
  const workout = props.route.params
  const exercises = props.route.params.exercises
  const id = props.route.params.id

  const { width, height } = Dimensions.get('window')
  const scrollX = React.useRef(new Animated.Value(0)).current;
  const ITEM_SIZE = width;
  const ITEM_SPACING = (width - ITEM_SIZE);

  const [duration, setDuration] = useState(exercises[0].duration);
  const timerAnimation = React.useRef(new Animated.Value(height)).current;
  const animation = React.useCallback(() => {

    Animated.sequence([

      Animated.timing( timerAnimation, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true
      }),

        Animated.timing(timerAnimation, {

          toValue: height,
          duration: duration * 1000,
          useNativeDriver: true
        })
      ]).start(() => {

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
      <WorkoutTitleComponent key={id} {...workout}/>
     
      <View style={styles.workoutTitle}>
        <Animated.FlatList 
        data={exercises}
        keyExtractor={exercises => exercises._id.toString()}
        horizontal
        bounces={false}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {x: scrollX}}}],
          { useNativeDriver: true }
        )
        }
        onMomentumScrollEnd={ev => {
          const index = Math.round(ev.nativeEvent.contentOffset.x / ITEM_SIZE);
          setDuration(exercises[index].duration)
        }}
        showsHorizontalScrollIndicator={false}
        snapToInterval={ITEM_SIZE}
        style={{flexGrow: 0}}
        contentContainerStyle={{
          paddingHorizontal: ITEM_SPACING,
        }}
        snapToInterval={ITEM_SPACING}
        renderItem={({item, index}) => {
          const nextUp = index + 1
          return <View style={{width: ITEM_SIZE, alignItems: 'center', justifyContent: 'center', height: '100%'}}>
          <IndividualExerciseComponent exercise={item} />
        </View>
        }}
        />
        <TouchableOpacity onPress={animation}>
          <StartWorkoutButton/>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  workoutTitle: {
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export { StartWorkoutScreen }
import React, { useState } from 'react';
import { StyleSheet, Dimensions, View, Animated } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { WorkoutTitleComponent, IndividualExerciseComponent } from '../../components';
import { AnimatedCountDownBar } from '../../components'
import { SkipExerciseButton } from '../../SVGs/SkipExerciseButton';

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

  
  // This function does the automated scroll, and is activated after the countdown finishes
    const onAnimationComplete = () => {
      if (currentIndex < exercises.length - 1) {
      flatListRef.scrollToIndex({animated: true, index: currentIndex + 1})
      } else {
        props.navigation.navigate("End Workout", {workoutTitle: workout.workoutTitle, exercises: exercises, id: id} )
      }
    }

  // Inside the Flatlist, in the RenderItem, two components are called, 
  // in the AnimatedCountDownBar I've included the animations, 
  // through the renderItem we pass it the state and props it needs in order to run.
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
            <TouchableOpacity onPress={() => onAnimationComplete()}>
            <SkipExerciseButton width={20}/>
          </TouchableOpacity>
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
  }
})

export { StartWorkoutScreen }
import React from 'react';
import { Button, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { WorkoutTitleComponent } from '../../components/WorkoutTitleComponent';

const StartExerciseComponent = ( props ) => {
  const { exercises = [] } = props 

  return exercises.map((exercise) => {

  return(
    <View>
    </View>
    )
  })
};


const StartWorkoutScreen = ( props ) => {
  const title = props.route.params
  const exercise = props.route.params.exercises
  const id = props.route.params.id

  return(
    <View>
      <WorkoutTitleComponent key={id} {...title}/>
      {/* <StartExerciseComponent {} /> */}
    </View>
  )

}

export { StartWorkoutScreen }
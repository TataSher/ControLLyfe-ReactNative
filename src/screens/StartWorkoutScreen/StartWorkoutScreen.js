import React from 'react';
import { Button, StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import { WorkoutTitleComponent } from '../../components/WorkoutTitleComponent';
import { MinutesAndSeconds } from '../../HelperFunctions';

const IndividualExerciseComponent = ( props ) => {
  const { exercise } = props

  return(
    <View style={{position: 'relative', flex: 1}}>
      <View style={styles.exerciseTitleBox}>
        <Text style={styles.exerciseTitle} >{exercise.title}</Text>
        <Text style={styles.exerciseDescription} >{exercise.description}</Text>
      </View>
      <View style={styles.timer}>
        <MinutesAndSeconds seconds={exercise.duration}/>
      </View>
    </View>
  )
}
const StartExerciseComponent = ( props ) => {
  const { exercises = [] } = props 

  console.log(exercises)

  return exercises.map((exercise, index) => {

  return(
    <View key={index} style={{position: 'retalive', flex: 1}}>
      <ScrollView>
        <IndividualExerciseComponent exercise={exercise} />
      </ScrollView>
    </View>
    )
  })
};


const StartWorkoutScreen = ( props ) => {
  const workout = props.route.params
  const exercises = props.route.params.exercises
  const id = props.route.params.id

  return(
    <View style={{position: 'retalive', flex: 1}}>
      <View style={styles.workoutTitle}>
        <WorkoutTitleComponent key={id} {...workout}/>
      </View>
      <StartExerciseComponent exercises={exercises} />
    </View>
  )
}

const styles = StyleSheet.create({
  timer: {
    position: 'absolute',
    bottom: 10, left: '40%'
  },
  exerciseTitle: {
    color: 'grey',
    fontSize: 32,
    marginTop: 35,
  },
  exerciseTitleBox: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  exerciseDescription: {
    color: 'gray',
    fontSize: 18,
    margin: 40
  },
  workoutTitle: {
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export { StartWorkoutScreen }
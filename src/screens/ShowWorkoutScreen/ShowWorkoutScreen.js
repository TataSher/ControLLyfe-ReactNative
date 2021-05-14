import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ScrollView, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import { EditWorkoutButton, StartWorkoutButton } from '../../SVGs'
import { ExerciseListComponent } from '../../components/index'
import { MinutesAndSeconds } from '../../HelperFunctions';

const ShowWorkoutScreen = ( props ) => {
  const [workoutTitle, setWorkoutTitle] = useState("");
  const [exercises, setExercises] = useState([])
  const id = props.route.params.id

  console.log(props)

  const getWorkout = async() => {
    const workout = await axios.get(`http://localhost:3000/workout/${id}`)
    setWorkoutTitle(workout.data.workoutTitle)
    setExercises(workout.data.exercises)
  }

  const totalDurationFunction = () => {
    const sum = exercises.map((exercise) => {
      return exercise.duration
    })
    const addedUp = sum.reduce(function(a, b){
        return a + b;
      }, 0)
    return addedUp
  }

  useEffect(() => {
    getWorkout()
  }, [])

  return (
    <View style={{flex: 1, position: 'relative'}}>
      <ScrollView>
        <Text style={styles.workoutTitle}>{workoutTitle}</Text>
        <View style={styles.totalDuration}>
          <MinutesAndSeconds seconds={totalDurationFunction()} />
        </View>
        <ScrollView>
          <ExerciseListComponent exercises={exercises} />
        </ScrollView>
      </ScrollView>
      <TouchableOpacity >
        <EditWorkoutButton style={styles.editWorkoutButton} color={'darkgray'} fill={'darkgray'}/>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => props.navigation.navigate('Start Workout', {workoutTitle: workoutTitle, exercises: exercises, id: id})}>
        <StartWorkoutButton style={styles.StartWorkoutButton} color={'darkgray'} fill={'darkgray'} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  workoutTitle: {
    color: 'gray',
    fontSize: 32,
    marginTop: 16,
    marginBottom: 16,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  totalDuration: {
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 16,
    marginBottom: 16
  },
  editWorkoutButton: {
    position: 'absolute', 
    bottom: 50, left:30, 
    shadowColor:'black', 
    shadowRadius: 8, 
    shadowOffset: {width: 5, height: 5}, 
    shadowOpacity: 0.3
  },
  StartWorkoutButton: {
    position: 'absolute', 
    bottom: 50, right:30, 
    shadowColor:'black', 
    shadowRadius: 8, 
    shadowOffset: {width: 5, height: 5}, 
    shadowOpacity: 0.3
  }
})

export { ShowWorkoutScreen }
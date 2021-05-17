import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ScrollView, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import { EditWorkoutButton } from '../../SVGs'
import { ExerciseListComponent } from '../../components/index'

const ShowWorkoutScreen = (props) => {
  const [workoutTitle, setWorkoutTitle] = useState("");
  const [exercises, setExercises] = useState([])

  const getWorkout = async() => {
    const workout = await axios.get(`http://localhost:3000/workout/${props.route.params.id}`)
    setWorkoutTitle(workout.data.workoutTitle)
    setExercises(workout.data.exercises)
  }

  useEffect(() => {
    getWorkout()
    console.log('triggered')
  }, [])

  // Need to create an ExerciseListComponent - same as WorkoutListComponent

  return (
    <View style={{flex: 1, position: 'relative'}}>
      <ScrollView>
        <Text style={styles.workoutTitle}>{workoutTitle}</Text>
        <ScrollView>
          <ExerciseListComponent exercises={exercises} />
        </ScrollView>
      </ScrollView>
      <TouchableOpacity 
        onPress={() => props.navigation.navigate("Add New Workout", {workoutTitle, exercises, id: props.route.params.id})}
      >
        <EditWorkoutButton style={styles.editWorkoutButton} color={'darkgray'} fill={'darkgray'}/>
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
  editWorkoutButton: {
    position: 'absolute', 
    bottom: 50, left:30, 
    shadowColor:'black', 
    shadowRadius: 8, 
    shadowOffset: {width: 5, height: 5}, 
    shadowOpacity: 0.3
  }
})

export { ShowWorkoutScreen }
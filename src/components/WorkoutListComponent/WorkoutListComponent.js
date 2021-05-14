import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { WorkoutTitleComponent } from '../WorkoutTitleComponent';
import { DeleteWorkoutButton } from '../../SVGs';

const WorkoutListComponent = ( props ) => {
  const {workouts = [], getWorkouts} = props
  
  const deleteWorkout = async(id) => {
    const res = await axios.delete(`http://localhost:3000/workout/${id}`)
  }
  
  return workouts.map((workout) =>
    <View key={workout._id} >
      <TouchableOpacity key={workout._id} onPress={ () => props.navigation.navigate("Show Workout", { id: workout._id }) } >
        <WorkoutTitleComponent key={workout._id} {...workout} />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() =>{
          deleteWorkout(workout._id)
          getWorkouts()
        }}>
      <DeleteWorkoutButton style={styles.deleteButton} color={'darkgrey'} width={25}/>
     </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  
  deleteButton: {
    position: 'absolute', 
    bottom: 15, right:30, 
    shadowColor:'black', 
    shadowRadius: 8, 
    shadowOffset: {width: 5, height: 5}, 
    shadowOpacity: 0.3
  }
})

export { WorkoutListComponent }
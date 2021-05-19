import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import { WorkoutTitleComponent } from '../../components';

const EndWorkoutScreen = ( props ) => {
const workout = props.route.params
const id = props.route.params.id

  return(
    <View>
      <View style={styles.workoutTitle}>
        <WorkoutTitleComponent key={id} {...workout}/>
      </View>
      <View style={styles.endWorkoutMessage}>
      <Text style={styles.endWorkoutText}>Workout Completed!</Text>
      <Text style={styles.endWorkoutText}>Well Done!</Text>
    </View>
   </View>
  )
}

const styles = StyleSheet.create({
  workoutTitle: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  endWorkoutMessage:{
  justifyContent: 'center',
  alignItems: 'center',
  },
  endWorkoutText: {
    color: 'pink',
    fontSize: 24,
    margin: 16
  }
})



export { EndWorkoutScreen }
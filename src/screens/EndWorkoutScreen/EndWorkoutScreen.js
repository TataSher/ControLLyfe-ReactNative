import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import { WorkoutTitleComponent } from '../../components';
import { HomeButton } from '../../SVGs'

const EndWorkoutScreen = ( props ) => {
const workout = props.route.params
const id = props.route.params.id

  return(
    <View style={{flex: 1, position: 'relative'}}>
      <View style={styles.workoutTitle}>
        <WorkoutTitleComponent key={id} {...workout}/>
      </View>
      <View style={styles.endWorkoutMessage}>
      <Text style={styles.endWorkoutText}>Workout Completed!</Text>
      <Text style={styles.endWorkoutText}>Well Done!</Text>
    </View>
    <TouchableOpacity style={styles.HomeButton} onPress={() => props.navigation.navigate('Workout List')}>
        <HomeButton color={'darkgray'} />
      </TouchableOpacity>
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
  },
  HomeButton: {
    position: 'absolute', 
    bottom: 50, right:30, 
    shadowColor:'black', 
    shadowRadius: 8, 
    shadowOffset: {width: 5, height: 5}, 
    shadowOpacity: 0.3
  }
})



export { EndWorkoutScreen }
import React, { useState, useEffect } from 'react';
import { ScrollView, StyleSheet, View, TouchableOpacity } from 'react-native';
import axios from 'axios';
import { WorkoutListComponent } from '../../components';
import { AddNewExercizeButton, LogoutButton } from '../../SVGs';
import { useIsFocused } from '@react-navigation/native'

const WorkoutListScreen = ( {navigation} ) => {
  const isFocused = useIsFocused()
  const [workouts, setWorkouts] = useState([])

  const getWorkouts = async() => {
    const workouts = await axios.get('http://localhost:3000/workout')

    var sortedWorkouts = workouts.data.sort((first, second) => {
      if (first.updatedAt > second.updatedAt) {
        return -1;
      } else if (first.updatedAt < second.updatedAt) {
        return 1;
      } else {
        return 0;
      }
    })
    setWorkouts(sortedWorkouts)
  }

  useEffect(() => {
      getWorkouts();
  }, [isFocused])

  return(
    <View style={{flex: 1, position: 'relative'}}>
    <ScrollView>
      <WorkoutListComponent navigation={navigation} workouts={workouts} {...{getWorkouts}} />
    </ScrollView>
    <TouchableOpacity style={styles.LogoutButton} onPress={() => navigation.navigate('Sign Up Screen')}>
        <LogoutButton color={'darkgray'} height={50}/>
      </TouchableOpacity>
    <TouchableOpacity onPress={() => navigation.navigate('Add New Workout')}>
      <AddNewExercizeButton style={styles.button} color={'darkgray'} fill={'darkgray'} width={50} height={50}/>
    </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  button: {
    position: 'absolute', 
    bottom: 50, right:30, 
    shadowColor:'black', 
    shadowRadius: 8, 
    shadowOffset: {width: 5, height: 5}, 
    shadowOpacity: 0.3
  },
  LogoutButton: {
    position: 'absolute',
    bottom: 50, left: 30,
    shadowColor:'black', 
    shadowRadius: 8, 
    shadowOffset: {width: 5, height: 5}, 
    shadowOpacity: 0.15
  }
})

export { WorkoutListScreen }
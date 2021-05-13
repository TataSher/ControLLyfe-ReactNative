import React, { useState, useEffect } from 'react';
import { Button, SafeAreaView, ScrollView, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import axios from 'axios';
import { WorkoutListComponent } from '../../components';
import { AddNewWorkoutButton } from '../../SVGs';
import {useIsFocused} from '@react-navigation/native'

const WorkoutList = ( props ) => {
  const {workouts = [], getWorkouts} = props

  return workouts.map((workout) => <WorkoutListComponent key={workout._id} {...workout} {...{getWorkouts}} />)
}

const WorkoutListScreen = ( {navigation} ) => {
  const isFocused = useIsFocused()
  const [workouts, setWorkouts] = useState([])
  const [pressed, setPressed] = useState(false)

  const getWorkouts = async() => {
    const workouts = await axios.get('http://localhost:3000/workout')
    setWorkouts(workouts.data)
  }

  useEffect(() => {
      getWorkouts();
  }, [isFocused])

  return(
    <View style={{flex: 1, position: 'relative'}}>
    <ScrollView>
      <WorkoutList workouts={workouts} {...{getWorkouts}} /> 
    </ScrollView>
    <TouchableOpacity onPress={() => {setPressed(true); navigation.navigate('Add New Workout')}}>
      <AddNewWorkoutButton style={styles.button} color={pressed == true ? 'red' : 'blue'}/>
    </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  bruh: {
    borderRadius: 5,
    flex: 1,
  },
  button: {
    position: 'absolute', 
    bottom: 50, right:30, 
    shadowColor:'black', 
    shadowRadius: 8, 
    shadowOffset: {width: 5, height: 5}, 
    shadowOpacity: 0.3
  },
})

export { WorkoutListScreen }
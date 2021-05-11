import React, { useState, useEffect } from 'react';
import { Button, SafeAreaView, ScrollView, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import axios from 'axios';
import { WorkoutListComponent } from '../../components';
import { AddNewWorkoutButton } from '../../SVGs';

const WorkoutList = ( props ) => {
  const {workouts = [], getWorkouts, route} = props

  return workouts.map((workout) => <WorkoutListComponent key={workout._id} {...workout} {...{getWorkouts}} />)
}

const WorkoutListScreen = ( {navigation} ) => {

  const [workouts, setWorkouts] = useState([])

  const getWorkouts = async() => {
    const workouts = await axios.get('http://localhost:3000/workout')
    setWorkouts(workouts.data)
    console.log(workouts.data)
  }

  useEffect(() => {
    getWorkouts()
    console.log('triggered')
  }, [])

  return(
    <View style={{flex: 1, position: 'relative'}}>
    <ScrollView>
      <WorkoutList workouts={workouts} {...{getWorkouts}} />
    </ScrollView>
    <TouchableOpacity onPress={ () => navigation.navigate('Add New Workout')}>
      <AddNewWorkoutButton style={styles.button} color={'coral'} height={75} />
    </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  bruh: {
    borderRadius: 5,
    borderColor: 'white',
    backgroundColor: 'white',
    flex: 1,
  },
  button: {
    position: 'absolute', 
    bottom: 30, right:30, 
    shadowColor:'black', 
    shadowRadius: 8, 
    shadowOffset: {width: 5, height: 5}, 
    shadowOpacity: 0.3
  },
})

export { WorkoutListScreen }
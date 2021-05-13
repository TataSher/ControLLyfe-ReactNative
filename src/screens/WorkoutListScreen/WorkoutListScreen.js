import React, { useState, useEffect } from 'react';
import { Button, SafeAreaView, ScrollView, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import axios from 'axios';
import { WorkoutListComponent } from '../../components';
import { AddNewWorkoutButton } from '../../SVGs';
import {useIsFocused} from '@react-navigation/native'

const WorkoutList = ( props ) => {
  const {workouts = [], getWorkouts} = props
  
  const deleteWorkout = async(id) => {
    const res = await axios.delete(`http://localhost:3000/workout/${id}`)
  }
  
  return workouts.map((workout) =>
    <View key={workout._id} >
      <TouchableOpacity key={workout._id} onPress={ () => props.navigation.navigate("Show Workout", { id: workout._id }) } >
        <WorkoutListComponent key={workout._id} {...workout} />
      </TouchableOpacity>
      <Button 
        title="Delete" 
        onPress={() =>{
          deleteWorkout(workout._id)
        }}
      />
    </View>
  )
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
      <WorkoutList navigation={navigation} workouts={workouts} {...{getWorkouts}} />
    </ScrollView>
    <TouchableOpacity onPress={() => {setPressed(true); navigation.navigate('Add New Workout')}}>
      <AddNewWorkoutButton style={styles.button} fill={'lightblue'}/>
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
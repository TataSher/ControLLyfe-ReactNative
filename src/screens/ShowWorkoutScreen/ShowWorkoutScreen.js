import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { StyleSheet, Text, View } from 'react-native';

const ShowWorkoutScreen = (props) => {
  const [workoutTitle, setWorkoutTitle] = useState("")

  const getWorkout = async() => {
    const workout = await axios.get(`http://localhost:3000/workout/${props.route.params.id}`)
    setWorkoutTitle(workout.data.workoutTitle)
  }

  useEffect(() => {
    getWorkout()
    console.log('triggered')
  }, [])

  // const exerciseList = (exercises) => {
  //   console.log(exercises)
  //   exercises.forEach((exercise) => {
  //     <View>
  //       <Text>{exercise.title}</Text>
  //       <Text>{exercise.description}</Text>
  //       <Text>{exercise.duration}</Text>
  //       <Text>{exercise.image}</Text>
  //     </View>
  //   });
  // };

  return (
    <View>
      <Text>{workoutTitle}</Text>
    </View>
  );
}

const styles = StyleSheet.create({});

export { ShowWorkoutScreen }
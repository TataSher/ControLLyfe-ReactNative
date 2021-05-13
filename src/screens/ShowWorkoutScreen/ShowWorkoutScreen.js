import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

const ShowWorkoutScreen = (props) => {
  const [workoutTitle, setWorkoutTitle] = useState("");
  const [exercises, setExercises] = useState([])
  console.log(exercises)

  const getWorkout = async() => {
    const workout = await axios.get(`http://localhost:3000/workout/${props.route.params.id}`)
    setWorkoutTitle(workout.data.workoutTitle)
    setExercises(workout.data.exercises)
  }

  useEffect(() => {
    getWorkout()
    console.log('triggered')
  }, [])

  const exerciseList = (exercises) => {
    console.log(exercises)
    var titles = "";
    exercises.forEach((exercise) => {
      titles += exercise.title
    });

    return titles;
  };

  // Need to create an ExerciseListComponent - same as WorkoutListComponent

  return (
    <View>
      <Text>{workoutTitle}</Text>

      <ScrollView>
        <Text>{exerciseList(exercises)}</Text>
      </ScrollView>
      
    </View>
  );
}

const styles = StyleSheet.create({});

export { ShowWorkoutScreen }
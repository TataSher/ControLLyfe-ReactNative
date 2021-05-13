import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

  const ExerciseList = (props) => {
    const { exercises = [], getWorkout } = props
    console.log(exercises)
    var titles = [];
    exercises.forEach((exercise) => {
      titles.push(exercise.title)
    });
    return titles.map((title, index) => {
      return <Text key={index}>{title}</Text>
    });
  };

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



  // Need to create an ExerciseListComponent - same as WorkoutListComponent

  return (
    <View>
      <Text>{workoutTitle}</Text>

      <ScrollView>
        <ExerciseList exercises={exercises} />
      </ScrollView>
      
    </View>
  );
}



const styles = StyleSheet.create({});

export { ShowWorkoutScreen }
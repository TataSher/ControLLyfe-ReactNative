import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ScrollView, StyleSheet, Text, TouchableHighlightBase, View } from 'react-native';

  const ExerciseList = (props) => {
    const { exercises = [], getWorkout } = props
    console.log(exercises)
    var titles = [];
    exercises.forEach((exercise) => {
      titles.push({'title': exercise.title, 'duration': exercise.duration, 'description': exercise.description })
    });

    return titles.map((title, index) => {
       const minutes = Math.floor(title.duration / 60)
       const seconds = title.duration - (minutes * 60) >= 0 ? title.duration - minutes * 60 : title.duration
       const minutesDisplay = minutes < 10 ? `0${minutes}` : minutes
       const secondsDisplay = seconds < 10 ? `0${seconds}` : seconds

      return <View key={index} style={styles.exerciseBox}>
        <View style={styles.exerciseHeader}>
      <Text style={styles.excerciseText}> {title.title} </Text>
      <Text style={styles.excerciseText}> { minutesDisplay } : { secondsDisplay } </Text>
      </View>
      <Text style={styles.exerciseDescription}> {title.description}  </Text>
      </View>
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
    <ScrollView>
      <Text style={styles.workoutTitle}>{workoutTitle}</Text>

      <ScrollView>
        <ExerciseList exercises={exercises} />
      </ScrollView>
      
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  workoutTitle: {
    color: 'gray',
    fontSize: 32,
    marginTop: 16,
    marginBottom: 16,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  exerciseBox: {
    margin: 20,
    backgroundColor: 'white'
  },
  exerciseHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  excerciseText: {
    color: 'darkgray',
    fontSize: 24,
    margin: 8,
  },
  exerciseDescription: {
    color: 'gray',
    fontSize: 20,
    margin: 8,
  }
})

export { ShowWorkoutScreen }
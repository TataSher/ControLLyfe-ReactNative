import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const EditExercizeComponent = (props) => {
  const { exercises = [] } = props

  return exercises.map((exercise, index) => {
     const minutes = Math.floor(exercise.duration / 60)
     const seconds = exercise.duration - (minutes * 60) >= 0 ? exercise.duration - minutes * 60 : exercise.duration
     const minutesDisplay = minutes < 10 ? `0${minutes}` : minutes
     const secondsDisplay = seconds < 10 ? `0${seconds}` : seconds
    return (
    <View key={index} style={styles.exerciseBox}>
      <View style={styles.exerciseHeader}>
        <Text style={styles.excerciseText}> {exercise.title} </Text>
        <Text style={styles.excerciseText}> { minutesDisplay } : { secondsDisplay } </Text>
      </View>
      <Text style={styles.exerciseDescription}> {exercise.description}  </Text>
    </View>)
  });
};

const styles = StyleSheet.create({
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

export { EditExercizeComponent }
import React from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const EditExercizeComponent = (props) => {
  const { exercises, setTitle, setDescription, setSeconds, setMinutes, setIndex } = props

  return exercises.map((exercise, index) => {
     const title = exercise.title
     const description = exercise.description

     const minutes = Math.floor(exercise.duration / 60)
     const seconds = exercise.duration - (minutes * 60) >= 0 ? exercise.duration - minutes * 60 : exercise.duration
     const minutesDisplay = minutes < 10 ? `0${minutes}` : minutes
     const secondsDisplay = seconds < 10 ? `0${seconds}` : seconds

    return (
    <TouchableOpacity
      key={index}
      onPress={() => {
        setTitle(title)
        setDescription(description)
        setSeconds(seconds)
        setMinutes(minutes)
        setIndex(index)
      }}
    >
      <View key={index} style={styles.exerciseBox}>
        <View style={styles.exerciseHeader}>
          <Text style={styles.excerciseText}> {exercise.title} </Text>
          <Text style={styles.excerciseText}> { minutesDisplay } : { secondsDisplay } </Text>
        </View>
        <Text style={styles.exerciseDescription}> {exercise.description}  </Text>
      </View>
    </TouchableOpacity>)
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

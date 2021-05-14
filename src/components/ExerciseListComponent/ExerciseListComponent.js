import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { MinutesAndSeconds } from '../../HelperFunctions';

const ExerciseListComponent = (props) => {
  const { exercises = [] } = props

  return exercises.map((exercise, index) => {

    return (
    <View key={index} style={styles.exerciseBox}>
      <View style={styles.exerciseHeader}>
        <Text style={styles.excerciseText}> {exercise.title} </Text>
        <View style={{margin: 8}}>
          <MinutesAndSeconds seconds={exercise.duration} />
        </View> 
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

export { ExerciseListComponent }
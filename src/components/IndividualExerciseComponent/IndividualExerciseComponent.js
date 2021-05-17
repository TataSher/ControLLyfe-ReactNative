import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { MinutesAndSeconds } from '../../HelperFunctions';

const IndividualExerciseComponent = ( props ) => {
  const { exercise } = props
  return(
    <View style={{justifyContent: 'center', alignItems: 'center'}}>
      <View style={styles.exerciseTitleBox}>
        <Text style={styles.exerciseTitle} >{exercise.title}</Text>
        <Text style={styles.exerciseDescription} >{exercise.description}</Text>
        <Image source={{uri:exercise.image}} style={{height: 200, width: 200}} />
      </View>
      <View style={styles.timer}>
        <MinutesAndSeconds seconds={exercise.duration}/>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  timer: {
    justifyContent: 'center',
    alignContent: 'center'
  },
  exerciseTitle: {
    color: 'grey',
    fontSize: 32,
    marginTop: 35,
  },
  exerciseTitleBox: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  exerciseDescription: {
    color: 'gray',
    fontSize: 18,
    marginTop: 100,
  },
})
export { IndividualExerciseComponent }
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
    </View>
  )
}

const styles = StyleSheet.create({
  exerciseTitle: {
    fontSize: 48,
  },
  exerciseTitleBox: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  exerciseDescription: {
    fontSize: 32,
    marginTop: 20,
    marginBottom: 40
  },
})
export { IndividualExerciseComponent }
import React, { useEffect } from 'react';
import { Button, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import axios from 'axios';

const WorkoutListScreen = ( {navigation} ) => {

  const getWorkouts = async() => {
    const workout = await axios.get('http://localhost:3000/workout')
    console.log(workout.data)
  }

  useEffect(() => {
    getWorkouts()
    console.log('triggered')
  }, [])

  return(
    <ScrollView style={styles.bruh}>
      <Text> Hello? </Text>
      <Text style={styles.bottom}> At the bottom </Text>
      <Button
      title="Add"
      onPress={ () => navigation.navigate('Add New Workout')}
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  bruh: {
    borderRadius: 5,
    borderColor: 'white',
    backgroundColor: 'white',
    flex: 1,
  },
  bottom: {
    marginTop: 500,
  }
})

export { WorkoutListScreen }
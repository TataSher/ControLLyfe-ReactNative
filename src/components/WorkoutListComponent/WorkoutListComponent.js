import React from 'react';
import { Button, SafeAreaView, ScrollView, StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const WorkoutListComponent = ({ _id , workoutTitle }) => {
  console.log(_id)
  return( 
    <SafeAreaView>
      <Text style={styles.title}>{workoutTitle}</Text>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  title: {
    color: 'darkgray',
    fontSize: 32,
    margin: 16,
  }
})

export { WorkoutListComponent }
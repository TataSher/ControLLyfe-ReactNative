
import React from 'react';
import { Button, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';

const AddNewWorkoutScreen = () => {

  return(
    <ScrollView style={styles.bruh}>
      <Text> Successs </Text>
      <Text style={styles.bottom}> At the bottom </Text>
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

export { AddNewWorkoutScreen }
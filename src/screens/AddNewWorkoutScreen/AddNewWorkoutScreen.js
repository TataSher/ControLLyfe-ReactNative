
import React, { useEffect, useState } from 'react';
import { Button, KeyboardAvoidingView, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';

const AddNewWorkoutScreen = () => {

  const [workoutTitle, setWorkoutTitle] = useState('')
  const [excersizeTitle, setExcersizeTitle] = useState([])
  const [excersizeDescription, setExcersizeDesription] = useState([])
  const [excersizeMin, setExcersizeMin] = useState([])
  const [excersizeSec, setExcersizeSec] = useState([])
  const [excersize, setExcersize] = useState([])

  return(
    <KeyboardAvoidingView>
      <TextInput
        placeholder="Workout title"
        style={styles.textInput}
        onChangeText={(text) => setWorkoutTitle(text)}
        value={workoutTitle}
      />
      <Text style={{fontSize: 24, margin: 8}}> Exercises </Text>
      <View style={styles.excersizeInput}>
      <TextInput
      placeholder="Exercise"
      onChangeText={(text) => setExcersizeTitle(text)}
      value={excersizeTitle}
      />
      <TextInput
      placeholder="Min"
      onChangeText={(number) => setExcersizeMin(number)}
      value={excersizeMin}
      />
      <TextInput
      placeholder="Sec"
      onChangeText={(number) => setExcersizeSec(number)}
      value={excersizeSec}
      />
      </View>
      <TextInput
      placeholder='description'
      style={styles.textInput}
      onChangeText={(text) => setExcersizeDesription(text)}
      value={excersizeDescription}
      />
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  textInput: {
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 14,
    paddingRight: 14,
    fontSize: 16,
    color: 'black',
    backgroundColor: 'white',
    width: '100%',
    alignItems: 'center',
    fontSize: 24,
  },
  excersizeInput: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 14,
    paddingRight: 14,
    fontSize: 16,
    color: 'black',
    backgroundColor: 'white',
    width: '100%',
    alignItems: 'center',
    fontSize: 24,

  }
})

export { AddNewWorkoutScreen }
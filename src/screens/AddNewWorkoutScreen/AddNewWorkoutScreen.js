
import React, { useEffect, useState } from 'react';
import {Picker} from '@react-native-picker/picker';
import { Button, KeyboardAvoidingView, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';

const AddNewWorkoutScreen = () => {

  const [workoutTitle, setWorkoutTitle] = useState('')
  const [exercizeTitle, setExercizeTitle] = useState('')
  const [exercizeDescription, setExercizeDesription] = useState('')
  const [seconds, setSeconds] = React.useState(0);
  const [minutes, setMinutes] = React.useState(0);
  const [exercize, setExercize] = useState([])

  return(
    <KeyboardAvoidingView>
      <TextInput
        placeholder="Workout title"
        style={styles.textInput}
        onChangeText={(text) => setWorkoutTitle(text)}
        value={workoutTitle}
      />
      <Text style={{fontSize: 24, margin: 8}}> Exercises </Text>
      <View style={styles.exercizeInput}>
      <TextInput
      placeholder="Exercise"
      onChangeText={(text) => setExercizeTitle(text)}
      value={exercizeTitle}
      />
      <View style={{flexDirection: 'row', width: '50%'}}>
      <Picker
        style={{backgroundColor: 'white', flex: 1}}
        selectedValue={minutes}
        onValueChange={(itemValue, itemIndex) =>
          setMinutes(itemValue)
        }>
        <Picker.Item label="4" value={4} />
        <Picker.Item label="3" value={3} />
        <Picker.Item label="2" value={2} />
        <Picker.Item label="1" value={1} />
        <Picker.Item label="0" value={0} />
      </Picker>
      <Picker
        style={{backgroundColor: 'white', flex: 1}}
        selectedValue={seconds}
        onValueChange={(itemValue, itemIndex) =>
          setSeconds(itemValue)
        }>
        <Picker.Item label="45" value={30} />
        <Picker.Item label="30" value={45} />
        <Picker.Item label="15" value={15} />
        <Picker.Item label="00" value={0} />
      </Picker>
      </View>
      {/* <TextInput
      placeholder="Min"
      keyboardType='number-pad'
      onChangeText={(number) => setExercizeMin(number)}
      value={exercizeMin}
      />
      <TextInput
      placeholder="Sec"
      keyboardType='number-pad'
      onChangeText={(number) => setExercizeSec(number)}
      value={exercizeSec}
      /> */}
      </View>
      <TextInput
      placeholder='description'
      style={styles.textInput}
      onChangeText={(text) => setExercizeDesription(text)}
      value={exercizeDescription}
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
  exercizeInput: {
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

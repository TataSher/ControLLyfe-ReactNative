
import React, { useEffect, useState } from 'react';
import {Picker} from '@react-native-picker/picker';
import { Button, KeyboardAvoidingView, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';

const AddNewWorkoutScreen = () => {

  const [workoutTitle, setWorkoutTitle] = useState('')
  const [excersizeTitle, setExcersizeTitle] = useState('')
  const [excersizeDescription, setExcersizeDesription] = useState('')
  const [seconds, setSeconds] = React.useState(0);
  const [minutes, setMinutes] = React.useState(0);
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
      onChangeText={(number) => setExcersizeMin(number)}
      value={excersizeMin}
      />
      <TextInput
      placeholder="Sec"
      keyboardType='number-pad'
      onChangeText={(number) => setExcersizeSec(number)}
      value={excersizeSec}
      /> */}
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
import React, { useEffect, useState } from 'react';
import {Picker} from '@react-native-picker/picker';
import { Button, KeyboardAvoidingView, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native';
import { AddNewExercizeButton, SaveButton } from '../../SVGs';
import { ListExercizeComponent } from './index'

const AddExercizeComponent = ( props ) => {
  const { setWorkoutTitle, setExercizeTitle, setExercizeDescription, 
    setSeconds, setMinutes } = props

  const secondsArray = [60, 50, 40, 30, 20, 10, 0]
  const minutesArray = [60, 45, 30, 15, 10, 5, 4, 3, 2, 1, 0]
 
  const [seconds, setOtherSeconds] = useState(0);
  const [minutes, setOtherMinutes] = useState(0);

  return(
    <View>
      <TextInput
        placeholder="Workout title"
        style={styles.textInput}
        onChangeText={(text) => setWorkoutTitle(text)}
      />
      <Text style={{fontSize: 24, margin: 8}}> Exercises </Text>
    <View style={styles.exercizeInput}>
      <TextInput
      placeholder="Exercise name"
      style={{fontSize: 24}}
      onChangeText={(text) => setExercizeTitle(text)}

      />
      <View style={{flexDirection: 'row', width: '50%'}}>
      <Picker
        style={{backgroundColor: 'white', flex: 1}}
        selectedValue={minutes}
        onValueChange={(itemValue) => {
          setMinutes(itemValue)
          setOtherMinutes(itemValue)
          } 
        }>
            {minutesArray.map((minute) => {
             return <Picker.Item key={minute} label={`${minute}`} value={minute} />
            })}
      </Picker>
      <Picker
        style={{backgroundColor: 'white', flex: 1}}
        selectedValue={seconds}
        onValueChange={(itemValue) => {
          setOtherSeconds(itemValue)
          setSeconds(itemValue)
          }
        }>
          {secondsArray.map((second) => {
             return <Picker.Item key={second} label={`${second}`} value={second} />
            })}
      </Picker>
        </View>
      </View>
      <View>
      <TextInput
        placeholder='description'
        style={styles.textInput}
        onChangeText={(text) => setExercizeDescription(text)}
      />
    </View>
    </View>
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
  },
})

export { AddExercizeComponent }
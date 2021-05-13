
import React, { Component, useEffect, useState } from 'react';
import {Picker} from '@react-native-picker/picker';
import { AddExercizeComponent } from '../../components/AddExercizeComponent'
import { Button, KeyboardAvoidingView, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { AddNewExercizeButton } from '../../SVGs/AddNewExercizeButton';
import { SaveButton } from '../../SVGs';
import axios from 'axios';
import { ListExercizeComponent } from '../../components';

const SavedExcercises = ( props ) => {
  const {exercizes = [], SaveAndAdd } = props

  console.log(exercizes)

  return exercizes.map((exercize, index) => <ListExercizeComponent key={index} {...exercize} {...{SaveAndAdd}}/>)
}

const AddNewWorkoutScreen = ( {navigation} ) => {

  const PostNewExercize = async() => {
    console.log(workoutTitle)
    exercizes.push({'title': exercizeTitle, 'description': exercizeDescription, 'duration': seconds + minutes})
    console.log(exercizes)

      await axios.post('http:localhost:3000/workout',
      {
        workoutTitle: workoutTitle,
        exercises: exercizes
      })
    .then(() => {
      navigation.navigate('Workout List')
    })
    .catch((error) => {
      console.log(error)
    })
  }

  const [workoutTitle, setWorkoutTitle] = useState('')
  const [exercizeTitle, setExercizeTitle] = useState('')
  const [exercizeDescription, setExercizeDescription] = useState('')
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [exercizes, setExercizes] = useState([])
  const [image, setImage] = useState('')

  const [curentExercize, setCurrentExcercize] = useState({seconds: 0, minutes: 0, exercizeTitle: ''})

  const [currentIndex, setCurrentIndex] = useState(0)
  const SaveAndAdd = () => {
    exercizes.push({'title': exercizeTitle, 'description': exercizeDescription, 'duration': seconds + minutes})
    console.log(exercizes)
  }

  const secondsArray = [60, 50, 40, 30, 20, 10, 0]
  const minutesArray = [60, 45, 30, 15, 10, 5, 4, 3, 2, 1, 0]

  return(
    <KeyboardAvoidingView>
    <ScrollView>
      <TextInput
        placeholder="Workout title"
        style={styles.textInput}
        onChangeText={(text) => setWorkoutTitle(text)}
        value={workoutTitle}
      />
      <Text style={{fontSize: 24, margin: 8}}> Exercises </Text>
    <View style={styles.exercizeInput}>
      <TextInput
      placeholder="Exercise name"
      style={{fontSize: 24}}
      onChangeText={(text) => setExercizeTitle(text)}
      value={exercizeTitle}
      />
      <View style={{flexDirection: 'row', width: '50%'}}>
      <Picker
        style={{backgroundColor: 'white', flex: 1}}
        selectedValue={minutes}
        onValueChange={(itemValue) =>
          setMinutes(itemValue)
        }>
            {minutesArray.map((minute) => {
             return <Picker.Item label={`${minute}`} value={minute} />
            })}
      </Picker>
      <Picker
        style={{backgroundColor: 'white', flex: 1}}
        selectedValue={seconds}
        onValueChange={(itemValue) =>
          setSeconds(itemValue)
        }>
          {secondsArray.map((second) => {
             return <Picker.Item label={`${second}`} value={second} />
            })}
      </Picker>
      </View>
      </View>
      <View>
      <TextInput
        placeholder='description'
        style={styles.textInput}
        onChangeText={(text) => setExercizeDescription(text)}
        value={exercizeDescription}
      />
      </View>
      <SavedExcercises exercizes={exercizes}/>
     
      </ScrollView>
      <SafeAreaView>
      <TouchableOpacity onPress={() => SaveAndAdd()}>
        <AddNewExercizeButton style={styles.button}/>
      </TouchableOpacity>
      <TouchableOpacity style={styles.saveButton} onPress={() => PostNewExercize()} style={{backgroundColor: 'pink', padding: 8, borderRadius: 16, justifyContent: 'flex-end', alignItems: 'flex-end'}}>
        <SaveButton  color='coral'/>
      </TouchableOpacity>

      </SafeAreaView>
      
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
  },
  button: {
    position: 'absolute', 
    bottom: 50, right:30, 
    shadowColor:'black', 
    shadowRadius: 8, 
    shadowOffset: {width: 5, height: 5}, 
    shadowOpacity: 0.3
  },
  saveButton: {
    position: 'absolute',
    bottom: 40, right: 40
  }
})

export { AddNewWorkoutScreen }

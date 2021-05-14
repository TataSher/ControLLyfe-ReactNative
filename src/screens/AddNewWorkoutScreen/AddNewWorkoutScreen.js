import React, { Component, useEffect, useState } from 'react';
import {Picker} from '@react-native-picker/picker';
import { AddExercizeComponent } from '../../components/AddExercizeComponent'
import { Button, KeyboardAvoidingView, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { AddNewExercizeButton } from '../../SVGs/AddNewExercizeButton';
import { SaveButton } from '../../SVGs';
import axios from 'axios';
import { EditExercizeComponent } from '../../components/index'

const AddNewWorkoutScreen = ( {navigation, route} ) => {

  const PostNewExercize = async() => {
    exercizes.push({'title': exercizeTitle, 'description': exercizeDescription, 'duration': seconds + minutes})
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

  const updateWorkout = async () => {

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

  useEffect(() =>{
    if (route.params) {
      setWorkoutTitle(route.params.workoutTitle);
      setExercizes(route.params.exercises);
    }
  }, [])

  const deleteExercize = (id) => {
    console.log("TESTTTTTTTTTTTTT")
    console.log(id)
    console.log(exercizes)
    var updatedExercizes = exercizes.filter((exercise) => {
      exercise._id !== id
    })
    console.log("UPDATEDDDDDDDDD")
    console.log(exercizes)
    setExercizes(updatedExercizes);
  }

  const SaveAndAdd = () => {
    exercizes.push({'title': exercizeTitle, 'description': exercizeDescription, 'duration': seconds + (60 * minutes)})
    setExercizeTitle('');
    setExercizeDescription('');
    setSeconds(0);
    setMinutes(0);
    console.log(exercizes)
  }

  const secondsArray = [60, 50, 40, 30, 20, 10, 0]
  const minutesArray = [60, 45, 30, 15, 10, 5, 4, 3, 2, 1, 0]

  return(
    <KeyboardAvoidingView style={{flex: 1, position: 'relative'}}>
    <View>
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
             return <Picker.Item key={minute} label={`${minute}`} value={minute} />
            })}
      </Picker>
      <Picker
        style={{backgroundColor: 'white', flex: 1}}
        selectedValue={seconds}
        onValueChange={(itemValue) =>
          setSeconds(itemValue)
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
        value={exercizeDescription}
      />
      </View>     
    </View>
    <ScrollView>
      <EditExercizeComponent 
        exercises={exercizes}
        setTitle={setExercizeTitle}
        setDescription={setExercizeDescription}
        setSeconds={setSeconds}
        setMinutes={setMinutes}
        deleteExercize={deleteExercize}
      />

    </ScrollView>
      <SafeAreaView>
      <TouchableOpacity style={styles.button} onPress={() => SaveAndAdd()}>
        <AddNewExercizeButton  color={'darkgrey'} fill={'darkgrey'} width={50} height={50}/>
      </TouchableOpacity>
      <TouchableOpacity 
        style={styles.saveButton} 
        onPress={() => {
          if (route.params) {

          } else {
            PostNewExercize()
          }
          
        }} 
      >
        <SaveButton  color={'darkgrey'}/>
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
    bottom: 40, left: 40, 
    shadowColor:'black', 
    shadowRadius: 8, 
    shadowOffset: {width: 5, height: 5}, 
    shadowOpacity: 0.3
  },
  saveButton: {
    position: 'absolute',
    bottom: 40, right: 40,
    shadowRadius: 5, 
    shadowOffset: {width: 5, height: 5}, 
    shadowOpacity: 0.3,
    shadowColor:'black', 
  }
})

export { AddNewWorkoutScreen }

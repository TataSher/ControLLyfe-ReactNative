import React, { Component, useEffect, useState } from 'react';
import {Picker} from '@react-native-picker/picker';
import { AddExercizeComponent } from '../../components/AddExercizeComponent'
import { Button, KeyboardAvoidingView, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { AddNewExercizeButton } from '../../SVGs/AddNewExercizeButton';
import { SaveButton } from '../../SVGs';
import axios from 'axios';
import { EditExercizeComponent } from '../../components/index'

const AddNewWorkoutScreen = ( {navigation, route} ) => {
  // Maybe create an api component
  const postWorkout = async() => {
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
  // Could go back to the particular workout's id.
  const updateWorkout = async () => {
    
    await axios.put(`http:localhost:3000/workout/${route.params.id}`,
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
  const [exercizes, setExercizes] = useState([]);
  const [exercizeIndex, setExercizeIndex] = useState(false);
  // When images are working
  const [image, setImage] = useState('');

  useEffect(() =>{
    if (route.params) {
      setWorkoutTitle(route.params.workoutTitle);
      setExercizes(route.params.exercises);
    }
  }, [])

  const deleteExercize = (index) => {
    exercizes.splice(index, 1)
    setExercizes(exercizes)
  }

  const resetForm = () => {
    setExercizeTitle('');
    setExercizeDescription('');
    setSeconds(0);
    setMinutes(0);
  }

  const SaveAndAdd = () => {
    exercizes.push({'title': exercizeTitle, 'description': exercizeDescription, 'duration': seconds + (60 * minutes)})
    resetForm();
    console.log(exercizes);
  }

  const editButton = () => {
    if (exercizeIndex !== false) {
      return (
        <View>
          <Button 
            title="Save Exercise"
            onPress={() => {
              exercizes[exercizeIndex] = {'title': exercizeTitle, 'description': exercizeDescription, 'duration': seconds + (60 * minutes)}
              setExercizeIndex(false)
              resetForm();
            }}
          />
          <Button
            title="Delete Exercise"
            onPress={() => {
              deleteExercize(exercizeIndex)
              resetForm();
            }}
          />
        </View>
      )
    }
  }
  const secondsArray = [50, 40, 30, 20, 10, 0]
  const minutesArray = [60, 45, 30, 15, 10, 5, 4, 3, 2, 1, 0]

  return(
    <KeyboardAvoidingView style={{flex: 1, position: 'relative'}}>
      {/* Start OF COMP */}
      <View>
      <AddExercizeComponent 
        setWorkoutTitle={setWorkoutTitle}
        setExercizeTitle={setExercizeTitle}
        setExercizeDescription={setExercizeDescription}
        setSeconds={setSeconds}
        setMinutes={setMinutes}
      />
      {editButton()}

    </View>
    <ScrollView>
      <EditExercizeComponent 
        exercises={exercizes}
        setTitle={setExercizeTitle}
        setDescription={setExercizeDescription}
        setSeconds={setSeconds}
        setMinutes={setMinutes}
        deleteExercize={deleteExercize}
        setIndex={setExercizeIndex}
      />

    </ScrollView>
      <SafeAreaView>
      <TouchableOpacity style={styles.button} onPress={() => SaveAndAdd()}>
        <AddNewExercizeButton  color={'darkgrey'} fill={'darkgrey'} width={50} height={50}/>
      </TouchableOpacity>
      <TouchableOpacity 
        style={styles.saveButton} 
        onPress={() => {
          if (exercizeIndex !== false) {
            alert("Save Exercise before saving");
            return;
          }
          // Would be better to check navigation rather than params?
          if (route.params) {
            updateWorkout();
          } else {
            postWorkout();
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

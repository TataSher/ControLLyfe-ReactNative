import React, { Component, useEffect, useState } from 'react';
import {Picker} from '@react-native-picker/picker';
import { Button, KeyboardAvoidingView, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View, Image } from 'react-native';
import { AddNewExercizeButton } from '../../SVGs/AddNewExercizeButton';
import { SaveButton } from '../../SVGs';
import axios from 'axios';
import { EditExercizeComponent } from '../../components/index';
import * as ImagePicker from 'expo-image-picker';

const AddNewWorkoutScreen = ( props, {navigation, route} ) => {
  // Maybe create an api component
  const postWorkout = async() => {
    await axios.post('http:localhost:3000/workout',
    {
      workoutTitle: workoutTitle,
      exercises: exercizes
    })
      .then(() => {
        props.navigation.navigate('Workout List')
      })
      .catch((error) => {
        console.log(error)
      })
  }
  // Could go back to the particular workout's id.
  const updateWorkout = async () => {

    await axios.put(`http:localhost:3000/workout/${props.route.params.id}`,
    {
      workoutTitle: workoutTitle,
      exercises: exercizes
    })
      .then(() => {
        props.navigation.navigate('Workout List')
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
  const [image, setImage] = useState(null);

  useEffect(() =>{
    var routeStack = props.navigation.dangerouslyGetState().routes;
    if (routeStack[routeStack.length - 2].name == 'Show Workout') {
      setWorkoutTitle(props.route.params.workoutTitle);
      setExercizes(props.route.params.exercises);
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
    setImage(null);
  }

  const SaveAndAdd = () => {
    exercizes.push({'title': exercizeTitle, 'description': exercizeDescription, 'duration': seconds + (60 * minutes), 'image': image})
    console.log(exercizes)
    resetForm();
  }

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1,
    });

    console.log(result.uri);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  const editButton = () => {
    if (exercizeIndex !== false) {
      return (
        <View>
          <Button
            title="Save Exercise"
            onPress={() => {
              exercizes[exercizeIndex] = {'title': exercizeTitle, 'description': exercizeDescription, 'duration': seconds + (60 * minutes), 'image': image}
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
    {/* END OF COMP */}
      {editButton()}
      </View>
      <View>
        <Button title="Pick an image from camera roll" onPress={pickImage} />
        {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
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
        setIndex={setExercizeIndex}
        setImage={setImage}
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
          var routeStack = props.navigation.dangerouslyGetState().routes;
          if (routeStack[routeStack.length - 2].name == 'Show Workout') {
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

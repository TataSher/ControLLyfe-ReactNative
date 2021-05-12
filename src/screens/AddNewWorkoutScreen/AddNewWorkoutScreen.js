
import React, { useEffect, useState } from 'react';
import {Picker} from '@react-native-picker/picker';
import { AddExercizeComponent } from '../../components/AddExercizeComponent'
import { Button, KeyboardAvoidingView, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { AddNewExercizeButton } from '../../SVGs/AddNewExercizeButton';
import { SaveButton } from '../../SVGs';
import axios from 'axios';

// const SavedExcercises = ( props ) => {
//   const {exercizes = [], SaveAndAdd } = props

//   return exercizes.map((exercize, index) => <ListExercizeComponent key={index} {...exercize} {...{SaveAndAdd}}/>)
// }

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
  const [seconds, setSeconds] = React.useState(0);
  const [minutes, setMinutes] = React.useState(0);
  const [exercizes, setExercizes] = useState([])
  const [image, setImage] = useState('')

  const SaveAndAdd = () => {
    exercizes.push({'title': exercizeTitle, 'description': exercizeDescription, 'duration': seconds + minutes})
    console.log(exercizes)
  }

  return(
    <View style={{flex: 1, position: 'relative'}}>
      <ScrollView>
      <TextInput
        placeholder="Workout title"
        style={styles.textInput}
        onChangeText={(text) => setWorkoutTitle(text)}
        value={workoutTitle}
      />
      <Text style={{fontSize: 24, margin: 8}}> Exercises </Text>
         <KeyboardAvoidingView>
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
        onValueChange={(itemValue) =>
          setMinutes(itemValue)
        }>
          <Picker.Item label='60' value={3600}></Picker.Item>
          <Picker.Item label='45' value={2700}></Picker.Item>
          <Picker.Item label='30' value={1800}></Picker.Item>
          <Picker.Item label='15' value={900}></Picker.Item>
          <Picker.Item label='10' value={600}></Picker.Item>
          <Picker.Item label='05' value={300}></Picker.Item>
          <Picker.Item label='04' value={240}></Picker.Item>
          <Picker.Item label='03' value={180}></Picker.Item>
          <Picker.Item label='02' value={120}></Picker.Item>
          <Picker.Item label='01' value={60}></Picker.Item>
          <Picker.Item label='00' value={0}></Picker.Item>
      </Picker>
      <Picker
        style={{backgroundColor: 'white', flex: 1}}
        selectedValue={seconds}
        onValueChange={(itemValue) =>
          setSeconds(itemValue)
        }>
          <Picker.Item label='50' value={50}/>
          <Picker.Item label='40' value={40}></Picker.Item>
          <Picker.Item label='30' value={30}></Picker.Item>
          <Picker.Item label='20' value={20}></Picker.Item>
          <Picker.Item label='10' value={10}></Picker.Item>
          <Picker.Item label='00' value={0}></Picker.Item>
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
      <TouchableOpacity onPress={() => SaveAndAdd()}>
        <AddNewExercizeButton/>
      </TouchableOpacity>
      </KeyboardAvoidingView>
      <TouchableOpacity onPress={() => PostNewExercize()} >
        <SaveButton/>
      </TouchableOpacity>
      </ScrollView>
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
  button: {
    position: 'absolute', 
    bottom: 50, right:30, 
    shadowColor:'black', 
    shadowRadius: 8, 
    shadowOffset: {width: 5, height: 5}, 
    shadowOpacity: 0.3
  },
})

export { AddNewWorkoutScreen }

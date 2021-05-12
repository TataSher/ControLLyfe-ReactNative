import React, { useEffect, useState } from 'react';
import {Picker} from '@react-native-picker/picker';
import { Button, KeyboardAvoidingView, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native';
import { AddNewExercizeButton, SaveButton } from '../../SVGs';
import { ListExercizeComponent } from './index'

const SavedExcercises = ( props ) => {
  const {exercizes = [], SaveAndAdd } = props

  return exercizes.map((exercize, index) => <ListExercizeComponent key={index} {...exercize} {...{SaveAndAdd}}/>)
}

const AddExercizeComponent = ( props ) => {

  const [exercizeTitle, setExercizeTitle] = useState('')
  const [exercizeDescription, setExercizeDescription] = useState('')
  const [seconds, setSeconds] = React.useState(0);
  const [minutes, setMinutes] = React.useState(0);
  const [exercizes, setExercizes] = useState([])

  const SaveAndAdd = () => {
    exercizes.push({'title': exercizeTitle, 'description': exercizeDescription, 'duration': seconds + minutes})
    console.log(exercizes)
  }

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
      getWorkouts()
      props.navigation.navigate('Workout List')
    })
    .catch((error) => {
      console.log(error)
    })
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
      <SavedExcercises exercizes={exercizes} {...{SaveAndAdd}} />
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
      <TouchableOpacity onPress={() => PostNewExercize()} >
        <SaveButton/>
      </TouchableOpacity>
      </KeyboardAvoidingView>
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

  }
})

export { AddExercizeComponent }
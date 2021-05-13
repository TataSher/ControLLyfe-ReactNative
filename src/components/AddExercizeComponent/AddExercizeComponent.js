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
      props.navigation.navigate('Workout List')
    })
    .catch((error) => {
      console.log(error)
    })
  }

  const secondsArray = [60, 50, 40, 30, 20, 10, 0]
  const minutesArray = [60, 45, 30, 15, 10, 5, 4, 3, 2, 1, 0]

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
        {/* <TextInput
        placeholder="Exercise name"
        onChangeText={(text) => setExercizeTitle(text)}
        value={exercizeTitle}
        /> */}
        <SavedExcercises exercizes={exercizes} {...{SaveAndAdd}} />
        <View style={{flexDirection: 'row', width: '50%'}}>
        <Picker
          style={{backgroundColor: 'white', flex: 1}}
          selectedValue={minutes}
          onValueChange={(itemValue) =>
            setMinutes(itemValue)
          }>
            {minutesArray.map((minute) => {
              <Picker.Item label={`${minute}`} value={minute} />
            })}
        </Picker>
        <Picker
          style={{backgroundColor: 'white', flex: 1}}
          selectedValue={seconds}
          onValueChange={(itemValue) =>
            setSeconds(itemValue)
          }>
            {secondsArray.map((second) => {
              <Picker.Item label={`${second}`} value={second}/>
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
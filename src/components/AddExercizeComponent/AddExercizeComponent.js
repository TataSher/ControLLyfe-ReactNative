import React, { useEffect, useState } from 'react';
import {Picker} from '@react-native-picker/picker';
import { Button, KeyboardAvoidingView, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';

const AddExercizeComponent = () => {

  const [exercizeTitle, setExercizeTitle] = useState('')
  const [exercizeDescription, setExercizeDescription] = useState('')
  const [seconds, setSeconds] = React.useState(0);
  const [minutes, setMinutes] = React.useState(0);

  return(
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
          <Picker.Item label='60' value={0}></Picker.Item>
          <Picker.Item label='45' value={0}></Picker.Item>
          <Picker.Item label='30' value={0}></Picker.Item>
          <Picker.Item label='15' value={0}></Picker.Item>
          <Picker.Item label='10' value={0}></Picker.Item>
          <Picker.Item label='05' value={0}></Picker.Item>
          <Picker.Item label='04' value={0}></Picker.Item>
          <Picker.Item label='03' value={0}></Picker.Item>
          <Picker.Item label='02' value={0}></Picker.Item>
          <Picker.Item label='01' value={0}></Picker.Item>
          <Picker.Item label='00' value={0}></Picker.Item>
      </Picker>
      <Picker
        style={{backgroundColor: 'white', flex: 1}}
        selectedValue={seconds}
        onValueChange={(itemValue) =>
          setSeconds(itemValue)
        }>
          <Picker.Item label='50' value={50}></Picker.Item>
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

export { AddExercizeComponent }
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import { WorkoutTitleComponent } from '../../components';
import { HomeButton } from '../../SVGs'

const EndWorkoutScreen = ( props ) => {
const workout = props.route.params
const id = props.route.params.id
const imageUri = 'https://media3.giphy.com/media/5T06ftQWtCMy0XFaaI/giphy.gif?cid=ecf05e47hjb7aqb8dnz1xpiey6gyhtskhrp49r835qo6m6pp&rid=giphy.gif&ct=g'
const imageUri2 = 'https://media3.giphy.com/media/kyLYXonQYYfwYDIeZl/giphy.gif?cid=790b761149606ddfd4d7a0fa5f8fdfc6e75a6485d5f7d21d&rid=giphy.gif&ct=g'

  return(
    <View style={{flex: 1, position: 'relative'}}>
      <Image source={{uri: imageUri2}} style={[StyleSheet.absoluteFillObject, {flex: 1}]} />
      <View style={styles.workoutTitle}>
        <WorkoutTitleComponent key={id} {...workout}/>
      </View>
      <View style={styles.endWorkoutMessage}>
      <Text style={styles.endWorkoutText}>Workout Completed!</Text>
      <Text style={styles.endWorkoutText}>Well Done!</Text>
    </View>
    <TouchableOpacity style={styles.HomeButton} onPress={() => props.navigation.navigate('Workout List')}>
        <HomeButton color={'darkgray'} width={50} height={50}/>
      </TouchableOpacity>
   </View>
  )
}

const styles = StyleSheet.create({
  workoutTitle: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  endWorkoutMessage:{
  justifyContent: 'center',
  alignItems: 'center',
  },
  endWorkoutText: {
    color: 'black',
    fontSize: 24,
    margin: 16
  },
  HomeButton: {
    position: 'absolute', 
    bottom: 50, right:30, 
    shadowColor:'black', 
    shadowRadius: 8, 
    shadowOffset: {width: 5, height: 5}, 
    shadowOpacity: 0.7
  }
})



export { EndWorkoutScreen }
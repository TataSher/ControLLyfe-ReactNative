import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { WorkoutListScreen, AddNewWorkoutScreen } from './src/screens';

const Stack = createStackNavigator();

export default function App() {

  return (
    <NavigationContainer >
      <Stack.Navigator  screenOptions={{headerTintColor: 'white', headerStyle: {backgroundColor: 'pink'}}}>
        <Stack.Screen name="Workout List">
        {props => <WorkoutListScreen {...props}/>}
          </Stack.Screen>
        <Stack.Screen name="Add New Workout">
        {props => <AddNewWorkoutScreen {...props}/>}
          </Stack.Screen> 
      </Stack.Navigator>
    </NavigationContainer>
    // <View style={styles.container}>
    //   <WorkoutListScreen/>
    //   <Text>Happy!</Text>
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
});

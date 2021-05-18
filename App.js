import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from './src/context/userContext';
import { WorkoutListScreen, AddNewWorkoutScreen, ShowWorkoutScreen, StartWorkoutScreen, SignUpScreen, SignInScreen } from './src/screens';

const Stack = createStackNavigator();

export default function App() {

  return (
    <Provider>
      <NavigationContainer >
        <Stack.Navigator  screenOptions={{headerTintColor: 'white', headerStyle: {backgroundColor: 'pink'}, headerBackTitle: "", headerTitle: 'ControLLyfe'}}>
          <Stack.Screen name='Sign Up Screen'>
            {props => <SignUpScreen {...props}/>}
          </Stack.Screen>
          <Stack.Screen name='Sign In Screen'>
            {props => <SignInScreen {...props}/>}
          </Stack.Screen>
          <Stack.Screen name="Workout List">
          {props => <WorkoutListScreen {...props}/>}
            </Stack.Screen>
          <Stack.Screen name="Add New Workout">
          {props => <AddNewWorkoutScreen {...props}/>}
            </Stack.Screen>
          <Stack.Screen name="Show Workout">
            {props => <ShowWorkoutScreen {...props}/>}
          </Stack.Screen>    
          <Stack.Screen name="Start Workout">
            {props => <StartWorkoutScreen {...props}/>}
          </Stack.Screen> 
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
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

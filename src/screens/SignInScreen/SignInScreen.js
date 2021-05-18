import React, { useState } from 'react';
import { Button, ScrollView, StyleSheet, TextInput, View, Dimensions, KeyboardAvoidingView } from 'react-native';
import axios from 'axios';

const SignInScreen = (props, { route }) => {

  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')

  const LogInUser = async() => {
      const {data} = await axios.post("http:localhost:3000/signin",
      {
        username: userName,
        password: password
      })
    props.navigation.navigate('Workout List', data)
  };

  return(
    <KeyboardAvoidingView>
      <ScrollView>
        <View style={styles.logInSheet}>
        <TextInput 
        style={styles.textInput}
        placeholder='Username'
        autoCapitalize='none'
        onChangeText={(text) => setUserName(text)}
        value={userName}
        />
        <TextInput 
        style={styles.textInput}
        placeholder='Password'
        autoCapitalize='none'
        onChangeText={(text) => setPassword(text)}
        value={password}
        />
        <Button title='Log In' onPress={() => LogInUser()} />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  )
};

const styles = StyleSheet.create({
  textInput: {
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderColor: '#E1E5EA',
    borderRadius: 4,
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 14,
    paddingRight: 14,
    fontSize: 16,
    color: 'black',
    backgroundColor: 'white',
    width: 200,
    alignItems: 'center',
  },
  logInSheet: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: Dimensions.get('window').height*0.2,
  },
});

export { SignInScreen }
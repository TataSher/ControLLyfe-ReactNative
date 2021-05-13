import React from 'react';
import { Button, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';

const ListExercizeComponent = ({
    title,
    description,
    duration
  }) => {

    console.log(title)

  return(
    <View>
      <Text>{title}</Text>
      <Text>{description}</Text>
      <Text>{duration}</Text>
    </View>
  )
}

export { ListExercizeComponent }
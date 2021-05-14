import React from 'react';
import { Text, StyleSheet } from 'react-native';

const MinutesAndSeconds = ( {seconds} ) => {
  const min = Math.floor(seconds / 60)
  const sec = seconds - (min * 60) >= 0 ? seconds - min * 60 : seconds
  const minutesDisplay = min < 10 ? `0${min}` : min
  const secondsDisplay = sec < 10 ? `0${sec}` : sec
  return(
      <Text style={styles.textStyle} > {minutesDisplay} : {secondsDisplay} </Text>
  )
}

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 24,
    color: 'darkgrey'
  }
})

export { MinutesAndSeconds }
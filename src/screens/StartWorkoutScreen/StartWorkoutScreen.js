import React from 'react';
import { Button, StyleSheet, Text, Dimensions, View, Animated, TouchableOpacity, ScrollView, FlatList } from 'react-native';
import { WorkoutTitleComponent } from '../../components/WorkoutTitleComponent';
import { MinutesAndSeconds } from '../../HelperFunctions';

const IndividualExerciseComponent = ( props ) => {
  const { exercise } = props

  console.log(exercise.description)

  return(
    <View style={{width: '50%', alignItems: 'center', justifyContent: 'center', height: '100%'}}>
      <View style={styles.exerciseTitleBox}>
        <Animated.Text style={styles.exerciseTitle} >{exercise.title}</Animated.Text>
        <Text style={styles.exerciseDescription} >{exercise.description}</Text>
      </View>
      <View style={styles.timer}>
        <MinutesAndSeconds seconds={exercise.duration} style={{opacity}}/>
      </View>
    </View>
  )
}

// const StartExerciseComponent = ( props ) => {
//   const { exercises = [] } = props 

//   console.log(exercises)

//   return exercises.map((exercise, index) => {

//   return(
//     <View key={index} style={{position: 'retalive', flex: 1}}>
//       <ScrollView>
//         <IndividualExerciseComponent exercise={exercise} />
//       </ScrollView>
//     </View>
//     )
//   })
// };


const StartWorkoutScreen = ( props ) => {
  const workout = props.route.params
  const exercises = props.route.params.exercises
  const id = props.route.params.id

  console.log(exercises)

  const { width, height } = Dimensions.get('window')
  const scrollX = React.useRef(new Animated.Value(0)).current;
  const ITEM_SIZE = width;
  const ITEM_SPACING = (width - ITEM_SIZE);


  return(
    <View style={{position: 'retalive', flex: 1}}>
      <WorkoutTitleComponent key={id} {...workout}/>

      <View style={styles.workoutTitle}>
        <Animated.FlatList 
        data={exercises}
        keyExtractor={exercises => exercises._id.toString()}
        horizontal
        bounces={false}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {x: scrollX}}}],
          { useNativeDriver: true }
        )
        }
        showsHorizontalScrollIndicator={false}
        snapToInterval={ITEM_SIZE}
        style={{flexGrow: 0}}
        contentContainerStyle={{
          paddingHorizontal: ITEM_SPACING,
        }}
        snapToInterval={width / 2}
        renderItem={({item, index}) => {
          const inputRange = [
            (index - 1) * ITEM_SIZE,
            index * ITEM_SIZE,
            (index + 1) * ITEM_SIZE
          ]

          const opacity = scrollX.interpolate({
            inputRange,
            outputRange: [0, 1, 0]
          })

          const scale = scrollX.interpolate({
            inputRange,
            outputRange: [.7, 1, .7]
          })
          return <View style={{width: ITEM_SIZE, alignItems: 'center', justifyContent: 'center', height: '100%'}}>
          <View style={styles.exerciseTitleBox}>
            <Animated.Text style={styles.exerciseTitle} >{item.title}</Animated.Text>
            <Animated.Text style={styles.exerciseDescription} >{item.description}</Animated.Text>
          </View>
          <View style={styles.timer}>
            <MinutesAndSeconds seconds={item.duration}/>
          </View>
        </View>
        }}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  timer: {
    // position: 'absolute',
    // bottom: 10, left: '40%'
    width: 100,
  },
  exerciseTitle: {
    color: 'grey',
    fontSize: 32,
    marginTop: 35,
  },
  exerciseTitleBox: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  exerciseDescription: {
    color: 'gray',
    fontSize: 18,
    marginTop: 100,
    width: '110%'
  },
  workoutTitle: {
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export { StartWorkoutScreen }
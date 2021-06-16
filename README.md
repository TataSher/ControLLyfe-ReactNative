# FitLyfe

## Description
A fitness phone app which lets you create and track customisable workouts!
You can add your own descriptions and images, set up timing for each exercise and enjoy your workout just the way you like it.
The phone app has lots of enjoyable features like animations linked to the timer, fun end-of-workout screen and beautiful SVG buttons.

## Presentation
https://youtu.be/avCYlOvstGc?t=653

## Demo
https://www.youtube.com/watch?v=bZhHE9JzdiE

## Features

- As a user, I can make a new account, to wign up with
- As a signed up user, to keep up my exercise schedule, I can see a list of workouts
- As a signed up user, to be in charge of my own workouts, I can add a new workout
- As a signed in user, to be in charge of my own workouts, I can edit existing workouts
- As a signed in user, to be in charge of my own workouts, I can delete existing workouts
- As a keen user, to do a workout, I can start a workout
- As a lazy user, when I donnot feel to keen about an exercise, I can skip a workout
- As a sporty user, when done with my workout, I get a complement and an elmo dance when I am done
- As a user, to keep my profile to myself, I can log out
- As a user, to get back to my list of workouts, I can log in 

## How to run this app

- Clone [this](https://github.com/TataSher/FitLyfe-React) repo
- Clone [this](https://github.com/TataSher/FitLyfe-Server) repo
- npm i
- expo start

## Setting up a react-natvie app 

Make sure you have xCode installed on your device, this serves as a simulator for react native apps
run npm install -g expo-cli 
install expo client on your phone as well

run expo init <filename>
choose a template (we pick blank)

now, running expo start will open up metro bundler, which controlls our simulators
```w``` will open a web simulator
```i``` will open an IOS simulator
Or scan the QR code with your phone

run npm install axios
expo install react-native-svg

### for our navigation
npm install @react-navigation/navigate
npm install @react-navigation/stack
expo install react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context @react-native-community/masked-view

### for our get/post/... requests
npm install axios

### Time Picker
npm install react-time-picker
Explanation to be found [here](https://github.com/react-native-picker/picker#mode)

## Team

Emma Priester | Tarandeep Nandhra | Ralph Bartley | Natalia Sherchenkova

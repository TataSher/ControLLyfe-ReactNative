## How to run this app

npm i
make sure the server is running
expo start

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

## for our get/post/... requests

npm install axios

## Time Picker

npm install react-time-picker
Explanation to be found [here](https://github.com/react-native-picker/picker#mode)

## Test environment

yarn add --dev @testing-library/react-native

yarn add --dev @testing-library/jest-native








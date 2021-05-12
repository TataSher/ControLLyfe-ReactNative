## Setting up a react-natvie app 

Make sure you have xCode installed on your device, this serves as a simulator for react native apps
run npm install -g expo-cli 
install expo client on your phone as well

When creating a new project:
``` 
run expo init <filename>
choose a template (we picked blank)
```

now, running expo start will open up metro bundler, which controlls our simulators
```w``` will open a web simulator
```i``` will open an IOS simulator
Or scan the QR code with your phone

### for our navigation

npm install @react-navigation/navigate
npm install @react-navigation/stack
expo install react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context @react-native-community/masked-view

## for our get/post/... requests

npm install [axios](https://github.com/axios/axios)

## Time Picker

npm install react-time-picker
Explanation to be found [here](https://github.com/react-native-picker/picker#mode)

## SVG

expo install react-native-svg
Add SVG to it's own js file

## Testing framework

npm install --dev jest babel-jest @babel/preset-env @babel/preset-react react-test-renderer

npm install react-test-renderer

npm install babel-preset-expo

npm install --save-dev @testing-library/react-native

npm install --save-dev @testing-library/jest-native

add {
  "preset": "react-native",
  "setupFilesAfterEnv": ["@testing-library/jest-native/extend-expect"]
} to your ```package.json``` under key ```"jest"```

All examples and further instructions can be found [here](https://github.com/callstack/react-native-testing-library)



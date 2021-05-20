import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SkipExerciseButton(props) {

  const {color="#1d1d1b", width=37.6, height=37.25} = props
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 106.59 105.59"
      {...props}
    >
      <Path
        d="M105.89 52.36l-47.76 48.29-.11-47.86-.11-47.87zM52.09 52.21L.5 104.37V1.2z"
        fill={color}
        stroke={color}
        strokeMiterlimit={10}
      />
    </Svg>
  )
}

export { SkipExerciseButton }
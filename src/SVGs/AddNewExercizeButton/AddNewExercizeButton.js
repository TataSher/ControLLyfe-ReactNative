import * as React from "react"
import Svg, { Path } from "react-native-svg"

function AddNewExercizeButton(props) {

  const {width=40, height=34, color="#1d1d1b"} = props
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 113.39 97.17"
      {...props}
    >
      <Path
        fill="none"
        stroke={color}
        strokeMiterlimit={20}
        d="M56.69 0v97.17M0 48.58h113.39"
      />
    </Svg>
  )
}

export { AddNewExercizeButton }

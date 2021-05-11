import * as React from "react"
import Svg, { Rect, Path } from "react-native-svg"

function AddNewWorkoutButton(props) {

  const { width=85.077, height=60.926, color="#1d1d1b", fill="#fff" } = props 

  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 63.8 45.71"
      {...props}
    >
      <Rect
        x={0.5}
        y={0.5}
        width={62.8}
        height={44.71}
        rx={15.72}
        fill={fill}
        stroke={color}
        strokeMiterlimit={10}
      />
      <Path
        fill={fill}
        stroke={color}
        strokeMiterlimit={10}
        d="M31.01 7.1v30.2M10.46 22.2h41.1"
      />
    </Svg>
  )
}

export { AddNewWorkoutButton }

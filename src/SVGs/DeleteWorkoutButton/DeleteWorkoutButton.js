import * as React from "react"
import Svg, { Path } from "react-native-svg"

function DeleteWorkoutButton(props) {

  const { width=32.57, height=41.59, strokeWidth=8, color="#E30613" } = props

  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 92.33 117.9"
      {...props}
    >
      <Path
        d="M4.26 12.48h83.79L81.17 113.9c-70.53-.09 6.77.12-70.53-.09zM44.72 22.65v84.7M65.15 22.65v84.7M24.32 22.65v84.7M28.64 12.48c.17-.8.09-2.64 1.49-3.69 10.28-7.66 30.35-4.53 33.43-1.55 1.55 1.5 1.59 3.73 1.7 5.24h0"
        fill="none"
        stroke={color}
        strokeMiterlimit={10}
        strokeWidth={strokeWidth}
      />
    </Svg>
  )
}
export { DeleteWorkoutButton }
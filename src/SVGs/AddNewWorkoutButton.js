import * as React from "react"
import Svg, { Rect, Path } from "react-native-svg"

// SVG made in adobe illustrator

function AddNewWorkoutButton(props) {

  // These props can now be called/changed in the files, paths can be in here as well
  const { width=80, height=24, fill="#009fe3", color="#fff" } = props

  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 114.39 33.74"
      {...props}
    >
      <Rect
        x={0.5}
        y={0.5}
        width={113.39}
        height={32.74}
        rx={15.46}
        fill={fill}
        stroke={color}
        strokeMiterlimit={10}
      />
      <Path
        d="M33.53 19.67l-2.08 6.28h-2.68l6.82-20h3.12l6.84 20h-2.76l-2.14-6.31zm6.58-2l-2-5.77c-.45-1.31-.75-2.5-1-3.66h-.05c-.3 1.19-.63 2.41-1 3.63l-2 5.8zM48.5 6.19a36.88 36.88 0 015.5-.41c3.72 0 6.37.86 8.13 2.5a9.23 9.23 0 012.82 7.2 10.6 10.6 0 01-2.88 7.79c-1.88 1.88-5 2.89-8.87 2.89a41.49 41.49 0 01-4.7-.24zm2.59 17.76a16.29 16.29 0 002.62.14c5.53 0 8.54-3.09 8.54-8.5 0-4.74-2.65-7.74-8.13-7.74a14.5 14.5 0 00-3 .27zM68.34 6.19a37 37 0 015.51-.41c3.72 0 6.37.86 8.12 2.5a9.2 9.2 0 012.83 7.2 10.57 10.57 0 01-2.89 7.79c-1.87 1.88-5 2.89-8.87 2.89a41.49 41.49 0 01-4.7-.21zm2.56 17.76a16.43 16.43 0 002.62.14c5.54 0 8.54-3.09 8.54-8.5 0-4.74-2.65-7.74-8.12-7.74a14.68 14.68 0 00-3 .27z"
        fill={color}
      />
    </Svg>
  )
}

export { AddNewWorkoutButton }


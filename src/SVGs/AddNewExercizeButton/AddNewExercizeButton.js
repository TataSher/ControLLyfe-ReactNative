import * as React from "react"
import Svg, { Path } from "react-native-svg"
function AddNewExercizeButton(props) {

  const { width=36.81, height=38.95, fill="#1d1d1b", color="#1d1d1b" } = props

  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 104.34 110.41"
      {...props}
    >
      <Path
        d="M58.7 65.19L40.42 48.11a69.4 69.4 0 01-4.14 13.62c-8.3 19.75-23.79 30.78-32.09 35.75l9.81 8.8c4.07-8.83 13.34-25.43 32.07-35.72a69.13 69.13 0 0112.63-5.37z"
        fill={fill}
        stroke={color}
        strokeMiterlimit={10}
        strokeWidth={5}
      />
      <Path
        d="M38.67 34.05a31.59 31.59 0 0163.17 0c0 17-14.66 28.83-26.26 31.14-.72.14-1.33.45-1.57.25L38.72 35.76c-.65-.49-.05-1.36-.05-1.71zM77.17 34.02l-.13 23.02M65.48 45.53h23.25"
        fill="none"
        stroke={color}
        strokeMiterlimit={10}
        strokeWidth={5}
      />
    </Svg>
  )
}
export { AddNewExercizeButton }

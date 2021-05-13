import * as React from "react"
import Svg, { Path } from "react-native-svg"

function EditWorkoutButton(props) {

  const { width=38.5, height=37.72, fill="#1d1d1b", color="#1d1d1b" } = props

  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 109.13 106.91"
      {...props}
    >
      <Path
        fill={fill}
        stroke={color}
        strokeMiterlimit={10}
        d="M98.73 21.28L69.42 53.93H58.53v-9.77L87.84 11.5l10.89 9.78zM97.563.71l10.888 9.773-6.112 6.81L91.452 7.52z"
      />
      <Path
        d="M99.11 104.41H2.5V17.12h71.18L53.12 38.58h0l-.69 22.19h0l21.75.72 24.56-28.78c0 29.06.37 42.61.37 71.7z"
        fill="none"
        stroke={color}
        strokeMiterlimit={10}
        strokeWidth={5}
      />
    </Svg>
  )
}
export { EditWorkoutButton }
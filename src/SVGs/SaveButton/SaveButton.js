import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SaveButton(props) {

  const { width=40, height=40, color="#1d1d1b" } = props
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 114.39 114.39"
      {...props}
    >
      <Path
        fill={color}
        stroke={color}
        strokeMiterlimit={10}
        d="M79.45.5h-26.3v12.05H14.46V.5H.5v113.39h14.39V47.68h76.52v66.21h22.48V40.43L79.45.5z"
      />
    </Svg>
  )
}


export { SaveButton }

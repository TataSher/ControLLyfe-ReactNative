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
        fill="none"
        stroke={color}
        strokeMiterlimit={10}
        d="M86.84.5H.5M.5 113.89V.5"
      />
      <Path
        fill="#1d1d1b"
        stroke={color}
        strokeMiterlimit={10}
        d="M113.89 113.89H.5M113.89 19.07v94.82"
      />
      <Path
        fill="none"
        stroke={color}
        strokeMiterlimit={10}
        d="M86.84.5l27.05 18.57M11.54.5l.51 21.58M55.21.5l1.98 21.01M57.19 21.51l-45.14.57M17.57 57.19v56.7M84.83 57.19H17.57"
      />
      <Path
        fill="#1d1d1b"
        stroke={color}
        strokeMiterlimit={10}
        d="M86.84 113.89l-2.01-56.7"
      />
    </Svg>
  )
}

export { SaveButton }

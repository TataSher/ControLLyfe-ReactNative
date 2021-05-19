import * as React from "react"
import Svg, { Path } from "react-native-svg"

function LogoutButton (props) {

  const {width=36, height=41.42, color="#1d1d1b"} = props
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 102.06 117.42"
      {...props}
    >
      <Path
        d="M101.56 2.5l-55.81 8.67q-.29 47.52-.55 95h-19V58.69h9.91v-7.38H26.2V2.5z"
        fill="none"
        stroke={color}
        strokeMiterlimit={10}
        strokeWidth={5}
      />
      <Path
        d="M101.56 2.5v103.72H45.2q.27-47.52.55-95zM101.56 106.22v2.11l-56.42 8.51.06-10.62z"
        fill={color}
        stroke={color}
        strokeMiterlimit={10}
      />
      <Path
        fill="#fff"
        stroke="#fff"
        strokeMiterlimit={10}
        d="M23.63 58.69h5.05v8.82h-5.05zM23.63 42.49h5.05v8.82h-5.05z"
      />
      <Path
        fill={color}
        stroke={color}
        strokeMiterlimit={10}
        d="M36.07 51.31v7.38H12.51v8.1L.71 55l11.8-11.79v8.1h23.56z"
      />
    </Svg>
  )
}

export { LogoutButton }

import * as React from "react"
import Svg, { Path } from "react-native-svg"

function HomeButton(props) {

  const { width=39.76, height=37.57, color="#1d1d1b" } = props

    return (
      <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox="0 0 112.71 106.49"
        {...props}
      >
        <Path
          d="M112.71 56.39l-.48.48-.25.25h-12v.44l.42 11.11-.91.92v36.9h-13V76.3H26.24v30.19h-13V69.56l-1-1V56.39l-11.73.46-.46-.46L56.41.04z"
          fill={color}
        />
      </Svg>
    )
  }

export { HomeButton }
import { color } from 'framer-motion'
import React from 'react'
import AnimatedCursor from "react-animated-cursor"

function Animatedcursor() {
  return (
    <div>
    <AnimatedCursor
      innerSize={35}
      outerSize={4}
      color='255, 215, 0' 
      outerAlpha={0.5}
      innerScale={8}
      outerScale={0}
      clickables={[
        'input[type="text"]',
        'input[type="email"]',
        'input[type="number"]',
        'input[type="submit"]',
        'input[type="image"]',
        'label[for]',
        'select',
        'textarea',
      ]}

     />
  </div>
  )
}

export default Animatedcursor
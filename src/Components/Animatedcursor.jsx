import { color } from 'framer-motion'
import React from 'react'
import AnimatedCursor from "react-animated-cursor"

function Animatedcursor() {
  return (
    <div>
    <AnimatedCursor
      innerSize={35}
      outerSize={4}
      color='1, 1, 1'
      outerAlpha={0.5}
      innerScale={8}
      outerScale={0}
      clickables={[
        'a',
        'input[type="text"]',
        'input[type="email"]',
        'input[type="number"]',
        'input[type="submit"]',
        'input[type="image"]',
        'label[for]',
        'select',
        'textarea',
        'button',
        '.link'
      ]}

     />
  </div>
  )
}

export default Animatedcursor
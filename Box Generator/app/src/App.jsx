import React, { useState } from 'react'
import ColorForm from './ColorForm'
import Box from './Box'

function App() {
  const [curColor, setCurColor] = useState([])
  function reColor(newColor){
    setCurColor([...curColor, newColor]) // Append new color to existing array
  }
  return (
    <>

      <ColorForm onRecolor={reColor}/>
      <Box cols={curColor}/>
    </>
  )
}

export default App

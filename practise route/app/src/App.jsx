import {
  Routes,
  Route,
  Link,
  useNavigate
} from 'react-router-dom'
import { useState } from 'react'

import Home from './Home.jsx'
import Colored from './Colored.jsx'
import Word from './Word.jsx'

function App() {


  return (
    <>
      <Routes >
        <Route path="/Home" element={<Home />} />
        <Route path="/:name/:textColor/:bgColor" element={<Colored />} />
        <Route path="/:word" element={<Word />} />
      </Routes>
    </>
  )
}

export default App

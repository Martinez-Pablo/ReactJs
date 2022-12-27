import { useState } from 'react'

import reactLogo from './assets/react.svg'
import NavBar from './components/NavBar/NavBar'
import { ItemListContainer } from './components/container/itemListContainer/itemListContainer'


import './App.css'

function App() {
  

  return (
   <>
    <NavBar/>
    <ItemListContainer saludo={"Hola clase ReactJs"} />
   </>
  )
}

export default App

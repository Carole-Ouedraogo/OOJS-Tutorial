import React from 'react'
import ButtonComponent from './components/ButtonComponent/ButtonComponent.js'
import './App.css'

function App() {
  const createButtons = () => {
    let buttons = []
    for (let i = 0; i < 100; i++) {
      buttons.push( <ButtonComponent/> )
    }
    return buttons
  }

  return ( <div className = "App" > {
      createButtons()
    } </div>
  )
}

export default App
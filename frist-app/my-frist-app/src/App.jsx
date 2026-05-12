// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
import './App.css'
import Persons from './object'
function App() {
  const persons = [
    { id: 1, name: "toha", age: 32 },
    { id: 2, name: "mini", age: 12 },
    { id: 3, name: "toma", age: 42 },
    { id: 4, name: "tanha", age: 22 }
  ]

  return (
    <>
      <h1>my React components class</h1>
      {
        persons.map(person => <Persons key={person.id} person={person} ></Persons>)
      }
    </>
  )
}

export default App

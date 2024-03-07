import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todo from './Todo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Vite + React</h1>
      <Todo task='to rise early' isDone={true}></Todo>
      <Todo task='workout' isDone={true}></Todo>
      <Todo task='to cook' isDone={false}></Todo>
      <Todo task='to stay happy' isDone={true}></Todo>
      <Device name='laptop' price='54k'></Device>
      <Device name='mobile' price='14k'></Device>
      <Device name='watch' price='4k'></Device>
      <Person></Person>
    </>
  )
}
function Person() {
  const personStyle = {
    backgroundColor: 'red',
    padding: '24px',
    color: 'white',
    borderRadius: '8px',
    textAlign: 'left'
  }
  const name = "richard";
  const student = { class: 12, Subject: "Science" }
  return (
    <div style={personStyle}>

      <h1>i am {name}</h1>
      <h1>i read in class {student.class}</h1>
      <h1>i am rading {student.Subject}</h1>
    </div>
  );
}
function Device({ name, price }) {
  return (
    <div style={{
      backgroundColor: 'tomato',
      padding: '24px',
      color: 'white',
      borderRadius: '8px',
      textAlign: 'left',
      fontSize: '16px',
      margin: '5px'
    }}>
      <h1>i bought a {name} and it cost {price}</h1>
    </div>
  )
}

export default App

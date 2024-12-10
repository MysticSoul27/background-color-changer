import { useState } from 'react'
import './App.css'


function App() {

  const [color, setColor] = useState('Black')
  const [text, setText] = useState('Background Color Changer')

  return (
    <>
      <div className='d-flex justify-content-center align-items-center flex-column p-3' style={{ width: "100%", height: "100vh" }}>
        <div className='container p-3 d-flex justify-content-center align-items-center' style={{
          width: "80%",
          height: "80%",
          borderRadius: "20px",
          backgroundColor: color
        }}>
          <h1 className='text-center text-white'>{text}</h1>
        </div>
        <div className='mt-2 p-2 d-flex gap-3 flex-wrap justify-content-center'>
          <button onClick={() => { setColor('red'); setText('Red') }} type="button" className='btn px-3 fw-medium fs-5 text-danger border btn-lg' style={{ backgroundColor: "black" }}>Red</button>
          <button onClick={() => { setColor('blue'); setText('Blue') }} type="button" className='btn px-2 fw-medium fs-5' style={{ color: "royalblue", backgroundColor: "black" }}>Blue</button>
          <button onClick={() => { setColor('pink'); setText('Pink') }} type="button" className='btn px-2 fw-medium fs-5' style={{ color: "pink", backgroundColor: "black" }}>Pink</button>
          <button onClick={() => { setColor('violet'); setText('Violet') }} type="button" className='btn px-2 fw-medium fs-5' style={{ color: "violet", backgroundColor: "black" }}>Violet</button>
          <button onClick={() => { setColor('Green'); setText('Green') }} type="button" className='btn px-2 fw-medium fs-5' style={{ color: "greenyellow", backgroundColor: "black" }}>Green</button>
        </div>
      </div>
    </>
  )
}

export default App

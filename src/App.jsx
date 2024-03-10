import React from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Main from './components/Main/Main'
import Main2 from './components/Main2/Main2'
import Footer1 from './components/Footer1/Footer1'

function App() {

  return (
    <div style={{display: 'flex', flexDirection: 'column'}}>
      <Navbar/>
      <Main/>
      <Main2/>
      <Footer1/>
    </div>
  )
}

export default App

import { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'

import HomePage from './components/Home/Home';

function App() {


  return (
    <>
      <div className='w-screen h-screen tma-container'>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </div>
    </>
  )
}

export default App;

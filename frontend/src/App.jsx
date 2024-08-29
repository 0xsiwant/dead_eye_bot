import { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'

import Main from './components/Main/Main';
import Error from './components/Error/Error';

function App() {


  return (
    <>
      <div className='w-screen h-screen'>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </div>
    </>
  )
}

export default App;

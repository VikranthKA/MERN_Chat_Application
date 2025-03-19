import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Chat from './pages/Chat'

const App = () => {
  return (
    <div>
       <Routes>
       <Route path='/' element={<Home/>}/>
       <Route path='/chats' element={<Chat/>}/>

       </Routes>
    </div>
  )
}

export default App

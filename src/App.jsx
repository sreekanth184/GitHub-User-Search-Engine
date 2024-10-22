// import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home_page from './pages/Home_page'
import UserDetails_page from './pages/UserDetails_page'
import Users_page from './pages/Users_page'
import { useState } from 'react'

function App() {
  
  let [isLoading, setIsLoading] = useState(false)
  let [isError, setIsError] = useState(false)

  return (
    <Routes>
      <Route path='/' element={<Home_page isLoading={isLoading} setIsLoading={setIsLoading} isError={isError} setIsError={setIsError}/>}/>
      <Route path='/search/:suser' element={<Users_page/>} />
      <Route path='/user/:userName' element={<UserDetails_page isLoading={isLoading} setIsLoading={setIsLoading} isError={isError} setIsError={setIsError}/>}/>
    </Routes>
  )
}

export default App

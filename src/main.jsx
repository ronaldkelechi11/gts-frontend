import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Landing from './screens/Landing'

import Signup from './components/Authentication/Signup'
import Login from './components/Authentication/Login'

import Home from './components/Dashboard/Home'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Landing />} />
      <Route path='/signup' element={<Signup />} />
      <Route path='/login' element={<Login />} />

      <Route path='/dashboard'>
        <Route path=':id' index element={<Home />} />
      </Route>
    </Routes>
  </BrowserRouter>
)

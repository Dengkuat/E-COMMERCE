import {Routes, Route} from 'react-router-dom'
import { Home } from '../pages/Home'
import { Login } from '../pages/Login'
import { ThemeProvider } from '../Logic/ThemeContext'

export const AppRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
    </div>
  )
}

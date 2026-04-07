import {Routes, Route} from 'react-router-dom'
import { Home } from '../pages/Home'
import { Login } from '../pages/Login'

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

import { Routes, Route } from 'react-router-dom'
import { Home } from '../pages/Home'
import { Login } from '../pages/Login'
import { NoMatch } from '../pages/NoMatch'
import { Categories } from '../pages/Categories'

export const AppRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/categories/:id' element={<Categories />} />
        <Route path='/login' element={<Login />} />
        <Route path='*' element={<NoMatch />} />
      </Routes>
    </div>
  )
}

import { Routes, Route } from 'react-router-dom'
import { Home } from '../pages/Home'
import { Login } from '../pages/Login'
import { NoMatch } from '../pages/NoMatch'
import { Categories } from '../pages/Categories'
import { Products } from '../pages/Products'

export const AppRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/categories/:id' element={<Categories />} />
        <Route path='/categories/:id/products/:ProductId' element={<Products/>}/>
        <Route path='/login' element={<Login />} />
        <Route path='*' element={<NoMatch />} />
      </Routes>
    </div>
  )
}

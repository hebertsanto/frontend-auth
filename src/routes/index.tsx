import {BrowserRouter, Route, Routes } from 'react-router-dom'
import { Login } from '../components/login'
import { Register } from '../components/register'
import { GlobalStyle } from '../global'

export const AppRoutes = () => {
    return (
        <BrowserRouter>
           <Routes>
              <Route path='/login' element={<Login />}/>
              <Route path='/register' element={<Register />}/>
              <Route path='*' element={<h1>rota não existe</h1>}/>
           </Routes>
           <GlobalStyle />
        </BrowserRouter>
    )
}
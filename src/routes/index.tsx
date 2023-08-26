import {BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Login } from '../pages/login'
import { Register } from '../pages/register'
import { GlobalStyle } from '../global'
import { RecoveryPassword } from '../pages/recovery-password'
import { Index } from '../Index'


export const AppRoutes = () => {

    return (
        <Router>
           <Routes>
              <Route path='/' element ={<Index />}/>
              <Route path='/login' element={<Login />}/>
              <Route path='/register' element={<Register />}/>
              <Route path='/recovery-password' element={<RecoveryPassword />}/>
              <Route path='/dashboard' element={<div><h1>parabéns voce foi logado!</h1></div>}/>
              <Route path='*' element={<h1>rota não existe</h1>}/>
           </Routes>
           <GlobalStyle />
        </Router>
    )
}
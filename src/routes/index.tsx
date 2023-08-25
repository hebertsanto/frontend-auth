import {BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Login } from '../components/login'
import { Register } from '../components/register'
import { GlobalStyle } from '../global'
import { RecoveryPassword } from '../components/recovery-password'
import { Index } from '../Index'


export const AppRoutes = () => {

    return (
        <Router>
           <Routes>
              <Route path='/' element ={<Index />}/>
              <Route path='/login' element={<Login />}/>
              <Route path='/register' element={<Register />}/>
              <Route path='/recovery-password' element={<RecoveryPassword />}/>
              <Route path='*' element={<h1>rota não existe</h1>}/>
           </Routes>
           <GlobalStyle />
        </Router>
    )
}
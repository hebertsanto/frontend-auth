import {BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Login } from '../pages/login'
import { Register } from '../pages/register'
import { GlobalStyle } from '../global'
import { RecoveryPassword } from '../pages/recovery-password'
import { Dashboard } from '../pages/dashboard'
import { Navigate } from 'react-router-dom'
export const AppRoutes = () => {

    return (
        <Router>
           <Routes>
              <Route path='/' element={ <Navigate to={'/login' } replace/> }/>
              <Route path='/login' element={<Login />}/>
              <Route path='/register' element={<Register />}/>
              <Route path='/recovery-password' element={<RecoveryPassword />}/>
              <Route path='/dashboard' element={<Dashboard />}>
                <Route path='/dashboard' element={<p>grafico de uso do sistema</p>}/>
              </Route>
              <Route path='*' element={<h1>essa rota não existe</h1>}/>
           </Routes>
           <GlobalStyle />
        </Router>
    )
}
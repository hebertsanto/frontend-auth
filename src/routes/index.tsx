import {BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Login } from '../pages/login'
import { Register } from '../pages/register'
import { GlobalStyle } from '../global'
import { RecoveryPassword } from '../pages/recovery-password'
import { Index } from '../Index'
import { Dashboard } from '../pages/dashboard'
import { Documents } from '../pages/documents'
import { DocumentId } from '../pages/documentsID'


export const AppRoutes = () => {

    return (
        <Router>
           <Routes>
              <Route path='/' element ={<Index />}/>
              <Route path='/login' element={<Login />}/>
              <Route path='/register' element={<Register />}/>
              <Route path='/recovery-password' element={<RecoveryPassword />}/>
              <Route path='/app/dashboard' element={<Dashboard />}>
                <Route path='/app/dashboard' element={<p>grafico de uso do sistema</p>}/>
                <Route path='/app/dashboard/documents' element={<Documents />}/>
                <Route path='/app/dashboard/documents/:id' element={<DocumentId />}/>
              </Route>
              <Route path='*' element={<h1>rota não existe</h1>}/>
           </Routes>
           <GlobalStyle />
        </Router>
    )
}
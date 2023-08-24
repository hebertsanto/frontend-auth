import { Link } from "react-router-dom"
import { Form } from "../form"
import { Input } from "../input"
import { Button } from "../button"
import { FormEvent } from "react"
import { useState } from 'react'
import { toast } from "react-toastify"

export const Register = () => {
    
  const [name, setName] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [confirmPassword, setConfirmPassword] = useState<string>('')

  const [error, setError] = useState(false);

  const submitFormRegister = (e : FormEvent) => {
    e.preventDefault();
    
    if(!name || !email || !password || !confirmPassword){
       setError(true);
       toast.error('preencha os campos necessários')
       return;      
    }
    setError(false)
   };
   
    return(
        <Form title="Registre uma conta" onSubmitForm={submitFormRegister}>
            <Input 
               inputPlaceholder="entre com seu nome"
               inputType="name"
               labelName="seu nome"
               labelType="name"
               onChangeInput={(e) => setName(e.target.value)}
               value={name}
               style={{
                border: error ? '1px solid red': '1px solid'
               }}
            />
             <Input 
               inputPlaceholder="entre com seu email"
               inputType="email"
               labelName="email"
               labelType="email"
               onChangeInput={(e) => setEmail(e.target.value)}
               value={email}
               style={{
                border: error ? '1px solid red': '1px solid'
               }}
            />
               <Input 
               inputPlaceholder="digite uma senha"
               inputType="password"
               labelName="senha"
               labelType="password"
               onChangeInput={(e) => setPassword(e.target.value)}
               value={password}
               style={{
                border: error ? '1px solid red': '1px solid'
               }}
            />
              <Input 
               inputPlaceholder="confirme a senha"
               inputType="password"
               labelName="confirme sua senha"
               labelType="password"
               onChangeInput={(e) => setConfirmPassword(e.target.value)}
               value={confirmPassword}
               style={{
                border: error ? '1px solid red': '1px solid'
               }}
            />
            <Button content="Criar conta"/>
              <span style={{fontSize:'0.9rem'}}>já tem uma conta?</span>
            <Link to='/login'>entrar</Link>
        </Form>
    )
}
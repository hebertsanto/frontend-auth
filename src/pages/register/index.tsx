import { Link } from "react-router-dom";
import { Form } from "../../components/form";
import { Input } from "../../components/input";
import { Button } from "../../components/button";
import { FormEvent } from "react";
import { useState } from 'react';
import { toast } from "react-toastify";
import { baseUrl } from "../../service/baseUrl";

export const Register = () => {
    
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState(false);

  const submitFormRegister = (e : FormEvent) => {
    e.preventDefault();
    
    if(!name || !email || !password){
       setError(true);
       toast.error('preencha os campos necessários');
       return;      
    }
    setError(false)
      baseUrl.post('/user', {
            name,
            email,
            password
        }).then((res) => {
           console.log(res.data);
           if(res.data.msg === 'user already exists'){
               return toast.warning('usuario ja existe, faça login');
           }else{
              return toast.success('usario criado com sucesso, faça login');
           }
        })
          .catch((error) => console.log(error));
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
            <Button>
               Cadastrar
            </Button>
              <span style={{fontSize:'0.9rem'}}>já tem uma conta?</span>
            <Link to='/login'>entrar</Link>
        </Form>
    )
}
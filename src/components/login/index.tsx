import { Link } from "react-router-dom"
import { Form } from "../form"
import { Input } from "../input"
import { DontHaveAccountContainer, Span} from "./style"
import { Button } from "../button"
import { FormEvent, useState } from "react"
import { toast } from 'react-toastify'

export const Login = () => {

    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    
    const [errorEmail, setErrorEmail] = useState(false);
    const [errorPassword, setErrorPassword] = useState(false);

    const submitFormLogin  = (e : FormEvent) => {
        e.preventDefault();

        if(!email || !password){
            setErrorEmail(true);
            setErrorPassword(true);
            toast.error('por favor preecha todos os campos necessários')
            return;
        }
        setErrorEmail(false);
        setErrorPassword(false);
    };

    return(

        <Form title="Entrar no sistema" onSubmitForm={submitFormLogin}>
           <Input
              inputPlaceholder="digite seu email"
              inputType="email"
              labelName="email"
              labelType="email"
              onChangeInput={(e) => setEmail(e.target.value)}
              value={email}
              style={{
                border: errorEmail ? '1px solid red': '1px solid'
              }}
              />

             <Input 
              inputPlaceholder="digite a sua senha"
              inputType="password"
              labelName="senha"
              labelType="password"
              onChangeInput={(e) => setPassword(e.target.value)}
              value={password}
              style={{
                border: errorPassword ? '1px solid red': '1px solid'
              }}
            />
            <Button content="Entrar"/>
            <DontHaveAccountContainer>
             <Span>ainda não tem uma conta?</Span>
             <Link to='/register'>cadastrar</Link>
            </DontHaveAccountContainer>
            <Span>esquceu a senha?</Span>
            <Link to='/recovery-password'>recuperar senha</Link>
        </Form>
    )
}
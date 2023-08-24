import { Link } from "react-router-dom"
import { Form } from "../form"
import { Input } from "../input"

export const Register = () => {
    return(
        <Form title="registrar" >
            <Input 
               inputPlaceholder="entre com seu nome"
               inputType="name"
               labelName="seu nome"
               labelType="name"
            />
             <Input 
               inputPlaceholder="entre com seu email"
               inputType="email"
               labelName="email"
               labelType="email"
            />
               <Input 
               inputPlaceholder="digite uma senha"
               inputType="password"
               labelName="senha"
               labelType="password"
            />
              <Input 
               inputPlaceholder="confirme a senha"
               inputType="password"
               labelName="confirme sua senha"
               labelType="password"
            />
            <button type="submit">
                criar conta
            </button>
            <span>já tem uma conta?</span>
            <Link to='/login'>entrar</Link>
        </Form>
    )
}
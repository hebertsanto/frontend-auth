import { Link } from "react-router-dom"
import { Form } from "../form"
import { Input } from "../input"

export const Login = () => {
    return(
        <Form title="login">
           <Input 
              inputPlaceholder="digite seu email"
              inputType="email"
              labelName="email"
              labelType="email"
            />
             <Input 
              inputPlaceholder="digite a sua senha"
              inputType="password"
              labelName="senha"
              labelType="password"
            />
            <button>
                Entrar
            </button>
            <span>ainda não tem uma conta?</span>
            <Link to='/register'>cadastrar</Link>
            <p>
                esquceu a senha?
            </p>
            <button>
                <Link to="/recover-password">recuperar senha</Link>
            </button>
        </Form>
    )
}
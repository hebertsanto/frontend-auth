import { Link , useNavigate } from "react-router-dom";
import { Form } from "../form";
import { Input } from "../input";
import { DontHaveAccountContainer, Span} from "./style";
import { Button } from "../button";
import { FormEvent, useState } from "react";
import { toast } from 'react-toastify';
import { baseUrl } from "../../service/baseUrl";

export const Login = () => {

    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    
    const [errorEmail, setErrorEmail] = useState(false);
    const [errorPassword, setErrorPassword] = useState(false);
    const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    const [error, setError] = useState(false);
    const navigate = useNavigate();

    const validateEmail = (email:string) => {
        if(!regexEmail.test(email)){
             toast.error('insira um email valido');
             setError(true);
             return;
        }
        setError(false);
    };

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
        validateEmail(email);
        
        baseUrl.post('/login',{
            email,
            password
        })
        .then((res) => {
            const token = res.data.token;
            
            if(token){
                 navigate('/dashboard')
                 return toast.success('logado com sucesso');
            }
            setErrorEmail(true);
            setErrorPassword(true);
            return toast.error('usuario ou senha inválidos')

        })
        .catch((err) => console.error(err))
    };

    return(

        <Form title="Entrar no sistema" onSubmitForm={submitFormLogin}>
           {error && <div style={{color:'#fff', backgroundColor:'rgba(245, 18, 18, 0.95)', padding:'10px'}}>email invalido</div>}
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
            <div style={{
              padding:'3px',
              marginTop:'8px',
              fontSize:'14px'
            }}>
                <p>use essas credencias abaixo pra acessar, ou sinta-se à vontade pra criar uma conta.</p>
                <p>email : user@test.com</p>
                <p>senha: 102030</p>

                <Link to="/">veja como esses dados ficam salvos</Link>
            </div>
        </Form>
    )
}
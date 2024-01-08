import { FormEvent, useState } from "react";
import { Button } from "../../components/button";
import { Form } from "../../components/form";
import { Input } from "../../components/input";
import { toast } from "react-toastify";

export const RecoveryPassword = () => {
    
  const [emailRecovery, setEmailRecovery] = useState<string>('');
  const [error, setError] = useState(false);
  const emailRegex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.([a-z]+)?$/i;
  
  const submitFormRecoveryPassword  = (e : FormEvent) => {
     e.preventDefault();

      if(!emailRecovery){
        toast.error('por favor preencha o campo com seu email')
        setError(true);
        return;
        }
        setError(false);
    };

    return(
        <Form title="Recuperar senha" onSubmitForm={submitFormRecoveryPassword}>
            <Input 
             inputPlaceholder="recuperar atráves do email"
             inputType="email"
             labelName="recupere sua senha"
             labelType="email"
             onChangeInput={(e) => setEmailRecovery(e.target.value)}
             value={emailRecovery}
             style={{ border: error && '1px solid red' }}
            />
            <Button>
                Recuperar senha
            </Button>
        </Form>
    )
}
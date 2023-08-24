import { FormEvent, useState } from "react";
import { Button } from "../button"
import { Form } from "../form"
import { Input } from "../input"
import { toast } from "react-toastify";

export const RecoveryPassword = () => {
    
    const [emailRecovery, setEmailRecovery] = useState<string>('');
    const [error, setError] = useState(false);

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
             style={{
                border: error ? '1px solid red' : '1px solid'
             }}
            />
            <Button 
             content="recuperar sua senha"
             />
        </Form>
    )
}
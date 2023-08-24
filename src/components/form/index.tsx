import { FormEvent, ReactNode } from "react"
import { ContainerForm } from "../container";
import { FormContainer } from "./style";

type Children = {
    children: ReactNode;
    title: string;
    onSubmitForm: (value: FormEvent) => void;
};

export const Form = ({ children, title ,onSubmitForm}: Children) => {
    return (
        <ContainerForm>
          <FormContainer onSubmit={onSubmitForm}>
                <h1>{title}</h1>
                <div>
                  {children}
                </div>
          </FormContainer>
        </ContainerForm>
    )
}
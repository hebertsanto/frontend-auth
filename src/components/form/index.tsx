import { ReactNode } from "react"
import { ContainerForm } from "../container";

type Children = {
    children: ReactNode;
    title: string;
};

export const Form = ({ children, title }: Children) => {
    return (
        <ContainerForm>
            <form style={{
                padding:'20px',
                margin: '0 auto',
            }}>
                <h1>{title}</h1>
                <div>
                  {children}
                </div>
            </form>
        </ContainerForm>
    )
}
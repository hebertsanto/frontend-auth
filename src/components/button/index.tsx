import { ReactNode } from "react";
import { ButtonLogin } from "./style";

type ButtonProps={
    children:ReactNode
}

export const Button = ({ children }: ButtonProps ) => {
    return(
        <>
         <ButtonLogin>
            {children}
         </ButtonLogin>
        </>
    )
}
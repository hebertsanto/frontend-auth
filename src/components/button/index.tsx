import { ButtonLogin } from "./style";

type ButtonProps={
    content:string;
}


export const Button = ({ content }: ButtonProps ) => {
    return(
        <>
         <ButtonLogin>
            {content}
         </ButtonLogin>
        </>
    )
}
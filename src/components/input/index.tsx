import { InputContainer } from "./style";

type InputComponent = {
    labelType: string;
    labelName: string,
    inputType: string,
    inputPlaceholder: string,
}

export const Input = ({ labelType, labelName, inputType, inputPlaceholder}: InputComponent) => {
    return (
        <InputContainer>
            <label htmlFor={labelType}>{labelName}</label>
            <input
                type={inputType}
                placeholder={inputPlaceholder}
            />
        </InputContainer>
    )
}
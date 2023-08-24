import { ChangeEvent } from "react";
import { InputContainer } from "./style";

type InputComponent = {
    labelType: string;
    labelName: string,
    inputType: string,
    value:string,
    style?: any,
    inputPlaceholder: string,
    onChangeInput: (value: ChangeEvent<HTMLInputElement> ) => void;
}

export const Input = ({ labelType, style,value,labelName,inputType, inputPlaceholder, onChangeInput}: InputComponent) => {
    return (
        <InputContainer>
            <label htmlFor={labelType}>{labelName}</label>
            <input
                type={inputType}
                placeholder={inputPlaceholder}
                onChange={onChangeInput}
                value={value}
                style={style}
            />
        </InputContainer>
    )
}
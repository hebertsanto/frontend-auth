import { ChangeEvent } from "react";
import { InputContainer } from "./style";
import { CSSProperties } from 'react'

type InputComponent = {
    labelType: string;
    labelName: string,
    inputType: string,
    value:string,
    //eslint-disable-next-line
    style?:CSSProperties | any,
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
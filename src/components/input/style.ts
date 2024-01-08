import styled from "styled-components";

export const InputContainer = styled.div`
margin-top: 10px;
margin-bottom: 10px;
input{
    display: block;
    width: 100%;
    height: 35px;
    border: 1px solid rgba(130, 130, 130, 980);
    padding-left:10px;
    border-radius:4px;
    outline: none;
    &:focus{
      outline: none;
      transition: 100ms;
      border: 1px solid blue;
    }
}
label{
    font-size: 1rem;
    display: block;
    margin-bottom:7px;
}
`

export const Input = styled.input`

`;

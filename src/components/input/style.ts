import styled from "styled-components";

export const InputContainer = styled.div`
margin-top: 10px;
margin-bottom: 10px;
input{
    display: block;
    width: 100%;
    height: 35px;
    border: 1px solid black;
    padding-left:10px;
    outline: none;
    &:focus{
      outline: none;
      transition: 100ms;
      border: 1px solid rgba(102, 63, 239, 0.89);
    }
}
label{
    font-size: 1rem;
    display: block;
    margin-bottom:7px;
}
`
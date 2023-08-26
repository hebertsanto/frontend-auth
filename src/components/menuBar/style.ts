import { styled } from "styled-components";

export const Menu = styled.div`
 height:auto;
 width: 14%;
 height: 90vh;
 background-color:rgba(250, 250, 250, 0.23);
 border-radius: 2px;
 ul  div{
    padding: 5px;
    display: flex;
    align-items: center;
    margin:5px;
    &:hover{
            background-color:rgba(2, 5, 246, 0.1);
            border-radius: 10px;
            box-shadow: 2px 2px 2px rgba(2, 5, 246, 0.145);
            transition:100ms;
        }
     svg{
        padding:7px;
     }
    li{
        display: block;
        padding: 5px;
        list-style: none;
        width: auto;
        line-height:25px;
    }
    li a{
        padding: 15px;
        font-size: 1rem;
        text-decoration: none;
        color: black;
    }
 }
`

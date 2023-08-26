import { styled } from "styled-components";

export const Menu = styled.div`
 height:auto;
 width: 12%;
 height: 90vh;
 background-color:rgba(250, 250, 250, 0.23);
 ul  div{
    padding: 5px;
    display: flex;
    align-items: center;
    margin:5px;
    &:hover{
            background-color:rgba(2, 5, 246, 0.23);
            border-radius: 10px;
        }
    li{
        display: block;
        padding: 5px;
        list-style: none;
        width: auto;
        line-height:25px;
    }
  
    li a{
        padding: 10px;
        font-size: 1rem;
        text-decoration: none;
        color: black;
    }
 }
`
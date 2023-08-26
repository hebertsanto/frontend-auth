import { styled } from "styled-components";

export const DocumentCard = styled.div`
  margin: 5px;
  padding: 8px;
  border-radius: 5px;
  height:150px;
  background-color:rgba(114, 116, 238, 0.23);
  cursor: pointer;
  &:hover{
    background-color: rgba(114, 116, 238, 0.23);
    box-shadow: 4px 4px 4px rgba(200, 200, 200, 0.93);
    transition: 100ms;
   }
 a{
    text-decoration: none;
    color: rgba(53, 49, 51, 0.93);
    font-size: 0.9rem;
 }
`

export const DocumentCardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`
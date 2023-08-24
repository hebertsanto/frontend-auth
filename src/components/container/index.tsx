import { ReactNode } from "react"
import { ContainerImage, ContainerStyle } from "./style"

type Container = {
    children: ReactNode
}

export const ContainerForm = ({ children } : Container) => {
     return(
        <ContainerStyle>
          {children}
          <ContainerImage>
            <img 
             src="https://img.freepik.com/vetores-gratis/ilustracao-do-conceito-de-desenvolvimento_114360-572.jpg?w=826&t=st=1692845329~exp=1692845929~hmac=9d8d765c0637869d9e4f4e831f7146b81f325bfd4745eca1c5630db314efc6f7" 
             alt="" 
             
             />
          </ContainerImage>
        </ContainerStyle>
     )
}
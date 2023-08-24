import { ReactNode } from "react"
import { Container, ContainerImage, ContainerStyle, SubContainer } from "./style"

type Container = {
    children: ReactNode
}

export const ContainerForm = ({ children } : Container) => {
     return(
        <ContainerStyle>
          <Container>
            <SubContainer>
              {children}
            </SubContainer>
          </Container>
          <ContainerImage>
            <img 
             src="https://img.freepik.com/vetores-gratis/ilustracao-rpa-abstrata-criativa_52683-79799.jpg?w=826&t=st=1692881943~exp=1692882543~hmac=d55e91c37b66a99b5cf15400271f7f1c0d2b144a414f7e92a7b90ff158a95fbc" 
             alt="imagem complementar da tela de login" 
             />
          </ContainerImage>
        </ContainerStyle>
     )
}
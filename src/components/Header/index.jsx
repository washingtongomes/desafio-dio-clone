import React from "react";
import { Button } from "../../components/Button";
import logo from "../../assets/logo-dio.png";
import { useNavigate } from "react-router-dom";


import {
  BuscarInputContainer,
  Container,
  Input,
  Menu,
  MenuRight,
  Row,
  UserPicture,
  Wrapper,
} from "./styles";

const Header = (autenticado) => {

  const navigateLogin = useNavigate();
  const handleClickSignInLogin = () => {
      navigateLogin('/login')
  };
  const navigateCadastro = useNavigate();

  const handleClickSignInCadastro = () => {
    navigateCadastro('/cadastro')
  }


  return (
    <Wrapper>
      <Container>
        <Row>
          <img src={logo} alt="logo da dio" />

          {autenticado ? (
            <>
              <BuscarInputContainer>
                <Input placeholder="Buscar..." />
              </BuscarInputContainer>

              <Menu> Live Code</Menu>
              <Menu> Global</Menu>{""}
            </>
          ): null}
        </Row>
        <Row>
          {autenticado ? (
            <UserPicture src="https://avatars.githubusercontent.com/u/68349833?v=4"/>
            ): null}
            
         <>
          <MenuRight href="#"></MenuRight>
          <Button title="Entrar" onClick={handleClickSignInLogin} />
          <Button title="Cadastrar" onClick={handleClickSignInCadastro}  />
          </>
        
        </Row>
      </Container>
    </Wrapper>
  )
}

export {Header};

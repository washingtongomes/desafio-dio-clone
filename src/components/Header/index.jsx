import React from "react";
import { Button } from "../../components/Button";
import logo from "../../assets/logo-dio.png";
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
              <Menu> Global</Menu>{" "}
            </>
          ) : null}
        </Row>
        <Row>
          {autenticado ? (
            <UserPicture src="https://avatars.githubusercontent.com/u/68349833?v=4"/>
          ) : (
         <>
          <MenuRight href="#"> Home </MenuRight>
          <Button title="Entrar" />
          <Button title="Cadastrar" />
          </>
        ) }
        </Row>
      </Container>
    </Wrapper>
  )
}
export { Header };

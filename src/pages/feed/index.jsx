import { Link } from "react-router-dom";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Card } from "../../components/Card";
import { UserInfo } from "../../components/UserInfo";

import bannerImage from "../../assets/banner.png";

import { Column, Container, Title, TitleHighLightt } from "./styles";

const Feed = () => {
  return (
    <>
      <Header autenticado={true} />
      <Container>
        <Column flex={3}>
          <Title>Feed</Title>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </Column>

        <Column flex={1}>
          <Title><div id="RANKING 5  TOP DA SEMANA"></div></Title>
        <UserInfo percentual={80} nome="Washington"image="https://avatars.githubusercontent.com/u/68349833?v=4"/>
        <UserInfo percentual={90} nome="Washington"image="https://avatars.githubusercontent.com/u/68349833?v=4"/>
        <UserInfo percentual={50} nome="Washington"image="https://avatars.githubusercontent.com/u/68349833?v=4"/>
        <UserInfo percentual={10} nome="Washington"image="https://avatars.githubusercontent.com/u/68349833?v=4"/>

        </Column>
      </Container>
    </>
  );
};

export { Feed };

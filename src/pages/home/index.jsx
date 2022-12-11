
import { useNavigate } from "react-router-dom";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import bannerImage from '../../assets/banner.png';

import { Container, TextContent, Title,TitleHightLight} from './styles' 




const Home = () => {

  const navigate = useNavigate();
  const handleClickSignIn = () => {
    navigate('/login')
}
 
  return (<>

     <Header />
     <Container>
        <div>
          <Title>  
            <TitleHightLight>Implemente <br /> </TitleHightLight>
            O seu futuro global agora ! ! ! 
          </Title>
          <TextContent>
            Domine as tecnologias mais utilizadas pelas empresas...
          </TextContent>
      <Button title="Começar agora" variant="secundary" onClick={handleClickSignIn}/>

        </div>
        <div>
          <img src={bannerImage} alt="imagem principal" />
        </div>
     </Container>


    </>
  )
}

export {Home}
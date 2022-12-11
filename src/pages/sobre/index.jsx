import { useNavigate } from "react-router-dom";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";


import { Link } from "react-router-dom"

import { Container, Title, Nav, TextContent, TitleHightLight } from './styles' 

const Sobre = () => {

        const navigate = useNavigate();
        const handleClickSignIn = () => {
          navigate('/login')
      }


return(<>
    <Header />
    <Container>

            <Nav>
            <Link to= "/" className="nav"> Home</Link>
            <Link to='/login' className="nav"> Login </Link>
            </Nav>

            <div>
            <Title>  
            <TitleHightLight> Explore Carreiras... </TitleHightLight>
                <p className="spanClass"> O seu futuro global agora ! ! !</p> 
            </Title>
            <TextContent>
            Domine as tecnologias mais utilizadas pelas empresas...
            Os nossos cursos e programas de formação são criados em conjunto com especialistas das empresas mais inovadoras do mundo, aplicando uma metodologia para que você domine as tecnologias utilizadas no mercado e também mergulhe nas novas e mais atuais tecnologias que impactarão o futuro dos negócios digitais.


            </TextContent>
            <Button title="Faça o Login" variant="secundary" onClick={handleClickSignIn}/>
           
        

        </div>
        </Container>
        </>
)
}   

export {Sobre};

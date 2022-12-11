import React from "react" 
import { FiThumbsUp } from 'react-icons/fi'
import backg_00 from '../../assets/backg_00.png';



import { CardContainer, Content, HasInfo,ImageBackground,PostInfo,UserInfo,UserPicture }  from "./styles"

const Card = () => {
    return( 
<CardContainer>
    <ImageBackground src={backg_00} />
    <Content>
        <UserInfo>
            <UserPicture src="https://avatars.githubusercontent.com/u/68349833?v=4"/>
            <div>
                <h4> Washington </h4>
                <p>Ha 8 minutos </p>
            </div>
        </UserInfo>
        <PostInfo>
            <h4> Projeto para curso de HTML e CSS</h4>
            <p> Projeto feito na trilha Orange Tech - Dio em React </p>

        </PostInfo>
        <HasInfo>
            <h4> #HTM #CSS #JavaScript</h4>
            <p>
                <FiThumbsUp /> 10
            </p>
        </HasInfo>

    </Content>
</CardContainer>

)}
export{ Card }
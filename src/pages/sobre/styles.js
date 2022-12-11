import styled from "styled-components";


export const Container = styled.main`
    width: 100%;
    max-width: 80%;
    margin: 0 auto;
    margin-top: 120px;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`
export const Title = styled.h2`

font-family: 'Open Sans';
font-style: normal;
font-weight: 700;
font-size: 32px;
width: 320px;
margin-bottom: 20px;
line-height: 44px;
color: #FFFFFF;

p{
    color: #398BC9;
}

   
`
export const Nav = styled.div`
    margin: -500px auto 0 -150px;
    
   h1.title{
        font-size: 20px;
        font-family: 'Opens Sans';

    }
        
        .nav{
            color: #BA822F;
            margin: 30px;
            font-size: 20px;
            text-decoration: none;
            
            &:hover{
                opacity: 0.8;
                transition: 1.5s;
                color: white;
            }

        }

    
    `
 

export const TitleHightLight = styled.span`
color: #E4105D;
opacity: 0.8;
 
`

export const TextContent = styled.p`
font-family: 'Open Sans';
font-style: normal;
font-weight: 400;
font-size: 16px;
width: 420px;
margin-bottom: 20px;
line-height: 22px;
color: #FFFFFF;


`

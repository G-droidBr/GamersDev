import React, { Component } from 'react'
import styled from 'styled-components'
import { AiOutlineInstagram } from 'react-icons/ai'


const CardFlex = styled.div`

display: flex;
justify-content: center;
align-items: center;
flex-wrap: wrap;
height: 96vh;
width: 96vw;
overflow: scroll;
@media only screen and (max-width: 800px) {  

    height: 98vh;
}
`
const CardContent = styled.div`
@import url('https://fonts.googleapis.com/css2?family=Indie+Flower&display=swap');
display: flex;
flex-direction: column;
justify-content: space-around;
align-items: center;
background: grey;
height: 30rem;
width: 19rem;
margin: 5rem;
border-radius: 35px;
font-family: 'Indie Flower', cursive;

img{
    border-radius: 50%;
    height: 10rem;
    width: 10rem;
}
`
const InstaLogo = styled.div`

    font-size: 3rem;

`
const Info = styled.div`

    width: 100%;
    display: flex;
    justify-content: start;
    flex-direction: column;
    margin-left: 2rem;
    
`


class CardsCreators extends Component {
    render() {
        return (
            <CardFlex>
                <CardContent>
                    <img alt="img-creator" src="https://p2.trrsf.com/image/fget/cf/1200/1200/filters:quality(85)/images.terra.com/2021/03/05/1200px-patrickstar.jpg" />
                    <h2>Gustavo Barbosa</h2>
                    <Info>
                        <h4>Years : 18 years</h4>
                        <h4>Profissão : Student </h4>
                        <h4>I Love : Praticar Esportes</h4>
                    </Info>
                    <InstaLogo> <AiOutlineInstagram /> </InstaLogo>
                </CardContent>

                <CardContent>
                    <img alt="img-creator" src="https://imgsapp2.correiobraziliense.com.br/app/noticia_127983242361/2020/06/14/863689/20200614172344185476a.jpg" />
                    <h2> Patricia </h2>
                    <Info>
                        <h4>Years : 32</h4>
                        <h4>Profissão : Student</h4>
                        <h4>I Love : Tomar Café </h4>
                    </Info>
                    <InstaLogo> <AiOutlineInstagram /> </InstaLogo>
                </CardContent>
            </CardFlex>
        )
    }
}

export default CardsCreators

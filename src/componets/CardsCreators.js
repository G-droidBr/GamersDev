import React, { Component } from 'react'
import styled from 'styled-components'
import {AiOutlineInstagram} from 'react-icons/ai'

const CardFlex = styled.div`

display: flex;
justify-content: center;
align-items: center;
height: 90vh;
width: 90vw;
`
const CardContent = styled.div`
display: flex;
flex-direction: column;
justify-content: space-around;
align-items: center;
/* background: rgb(54,54,54); */
background: whitesmoke;
height: 50vh;
width: 20vw;
margin: 5rem;
border-radius: 35px;

img{
    border-radius: 50%;
    height: 10rem;
    width: 10rem;
}

`
const InstaLogo = styled.div`

font-size: 3rem;

`


class CardsCreators extends Component {
    render() {
        return (
            <CardFlex>
                <CardContent>

                    <img src="https://p2.trrsf.com/image/fget/cf/1200/1200/filters:quality(85)/images.terra.com/2021/03/05/1200px-patrickstar.jpg" />
                    <h2>Gustavo Barbosa</h2>
                    <InstaLogo> <AiOutlineInstagram/> </InstaLogo> 

                </CardContent>
                <CardContent>

                    <img src="https://imgsapp2.correiobraziliense.com.br/app/noticia_127983242361/2020/06/14/863689/20200614172344185476a.jpg" />
                    <h2> Patricia </h2>
                    <InstaLogo> <AiOutlineInstagram/> </InstaLogo>
                   

                </CardContent>
            </CardFlex>
        )
    }
}

export default CardsCreators

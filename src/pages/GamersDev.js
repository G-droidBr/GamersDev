import React, { Component } from 'react'
import styled from 'styled-components'
import {IoPlay} from "react-icons/io5"

const Body = styled.div`


text-align: center;
overflow: scroll;
height: 100vh;

h1{
    margin-top: 3rem;
    color: grey;
    font-size: 3rem;
}
h4{
    color: grey;
    font-size: 1.2rem;
}
@media only screen and (max-width: 800px) {  

    height: 98vh;

}

`

const Div = styled.div`

display: flex;
justify-content: space-around;
align-items: center;
flex-wrap: wrap;


height: 95vh;
width: 100vw;
margin-left: -1rem;
a{
    text-decoration: none;
    color: black;
}


`
const Card = styled.div`

border: 3px solid grey;
width: 15rem;
height: 15rem;
margin-top: 4rem;
margin: 3rem;
border-radius: 25px;
box-shadow: 10px 5px 5px black;
text-align: center;
background-position: center;
background-size: cover;


`
const Name = styled.h3`

display: flex;
justify-content: center;
align-items: center;
margin-top: 1rem;
text-align: center;
border-radius: 10px;
background-color: whitesmoke;
margin: 1rem;
width: 15rem;
height: 3rem;
background-color: grey;
font-family: inherit;

:hover{
  width: 20rem ;
  transition: all 0.5s ease;
  color: white  ;
  background-color: black;
}

`
const Play = styled.div`
font-size: 4rem;
color: gray;
display: flex;
align-items: center;
justify-content: center;
width: 100%;
height: 100%;

`
const Contain = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
margin-top: 3rem;
width: 30rem;
`


class GamersDev extends Component {


    componentDidMount = () => {
        this.props.navbar()
    }


    render() {
        return (
            <Body>

                <h1>GamersDev</h1>
                <h4>Sejam bem-vindos, se vocês estão na procura de bons jogos, separamos os melhores aqui para vocês! </h4>

                <Div>

                    <Contain>
                        <Card style={{ backgroundImage: `url("https://anacrdel.github.io/kevins-famous-chilli-game/images/game-logo.png"` }}>
                            <a href="https://anacrdel.github.io/kevins-famous-chilli-game/" > <Play><IoPlay/></Play> </a>
                        </Card>
                        <a href="https://anacrdel.github.io/kevins-famous-chilli-game/" ><Name> Kevins Famous </Name> </a>
                    </Contain>

                    <Contain>
                        <Card style={{ backgroundImage: `url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScYB1bzOiuylG3-k-j8C_vbwvQ4NuwO8rqEfKlEGoHWemSbPxPRvmtAqhf0VQGWMKy4TI&usqp=CAU"` }}>
                            <a href="https://deat1995.github.io/project-modOne-ironhack/" > <Play><IoPlay/></Play> </a>
                        </Card>
                        <a href="https://deat1995.github.io/project-modOne-ironhack/" ><Name>Save The Emu </Name></a>

                    </Contain>

                    <Contain>
                        <Card style={{ backgroundImage: `url("https://studiosol-a.akamaihd.net/tb/cifra-blog/pt/wp-content/uploads/2018/03/Cored-do-Reggae.jpg"` }}>
                            <a href="https://christopherfulldev.github.io/ironhack-project1/" > <Play><IoPlay/></Play> </a>
                        </Card>
                        <a href="https://christopherfulldev.github.io/ironhack-project1/" > <Name>BobMine</Name></a>
                    </Contain>

                    <Contain>
                        <Card style={{ backgroundImage: `url("data:image/jpeg;base64,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"` }}>
                            <a href="https://aquarius12345.github.io/game/" > <Play><IoPlay/></Play> </a>
                        </Card>
                        <a href="https://aquarius12345.github.io/game/" > <Name> Llama </Name></a>
                    </Contain>

                    <Contain>
                        <Card style={{ backgroundImage: `url("https://tiago-br.github.io/AdVentureDev-IdleGame/IMAGENS/tela-2.jpg"` }}>
                            <a href="https://tiago-br.github.io/AdVentureDev-IdleGame/" > <Play><IoPlay/></Play> </a>
                        </Card>
                        <a href="https://tiago-br.github.io/AdVentureDev-IdleGame/" ><Name>AdVentureDev</Name></a> 
                    </Contain>

                    <Contain>
                        <Card style={{ backgroundImage: `url("https://emnmoura.github.io/EmnGame/images/paper2.jpg"` }}>
                            <a href="https://emnmoura.github.io/EmnGame/" > <Play><IoPlay/></Play> </a>
                        </Card>
                        <a href="https://emnmoura.github.io/EmnGame/" ><Name>Penalty Callenge</Name></a>
                    </Contain>

                    <Contain>
                        <Card style={{ backgroundImage: `url("https://flavio-pestana.github.io/FarWest-The-Sheriff/images/background1.jpeg"` }}>
                            <a href="https://flavio-pestana.github.io/FarWest-The-Sheriff/" > <Play><IoPlay/></Play> </a>
                        </Card>
                        <a href="https://flavio-pestana.github.io/FarWest-The-Sheriff/" ><Name >The Sheriff</Name></a>
                    </Contain>

                    <Contain>
                        <Card style={{ backgroundImage: `url("https://franciscoamaral0.github.io/crazy-city-game/images/startScreen.PNG"` }}>
                            <a href="https://franciscoamaral0.github.io/crazy-city-game/" > <Play><IoPlay/></Play> </a>
                        </Card>
                        <a href="https://franciscoamaral0.github.io/crazy-city-game/" ><Name >Crazy City</Name></a>         
                    </Contain>
                    
                    <Contain>
                        <Card style={{ backgroundImage: `url("https://arthurmelo10.github.io/Help-your-idol-take-the-title-home/Images/soccer-stadium_test.jpg"` }}>
                            <a href="https://arthurmelo10.github.io/Help-your-idol-take-the-title-home/" > <Play><IoPlay/></Play> </a>
                        </Card>
                        <a href="https://arthurmelo10.github.io/Help-your-idol-take-the-title-home/" ><Name>Help Your Idol</Name></a>
                    </Contain>

                    <Contain>
                        <Card style={{ backgroundImage: `url("https://g-droidbr.github.io/myProject/images/imgFundo.jpg"` }}>
                            <a href="https://g-droidbr.github.io/myProject/" > <Play><IoPlay/></Play> </a>
                        </Card>
                        <a href="https://g-droidbr.github.io/myProject/"><Name>SoccerTest</Name></a>                      
                    </Contain>

                    <Contain>
                        <Card style={{ backgroundImage: `url("https://jhonatanveras.github.io/Project-Game-CatchThePigeon/Img/fundo2.jpg"` }}>
                            <a href="https://jhonatanveras.github.io/Project-Game-CatchThePigeon/" > <Play><IoPlay/></Play> </a>
                        </Card>
                        <a href="https://jhonatanveras.github.io/Project-Game-CatchThePigeon/" ><Name>Catch the Pigeon</Name></a>                    
                    </Contain>

                    <Contain>
                        <Card style={{ backgroundImage: `url("https://jordanavq.github.io/square-pants-game/images/18124637.jpg"` }}>
                            <a href="https://jordanavq.github.io/square-pants-game/" > <Play><IoPlay/></Play> </a>
                        </Card>
                        <a href="https://jordanavq.github.io/square-pants-game/" ><Name>Square Pants Game</Name></a>                        
                    </Contain>

                    <Contain>
                        <Card style={{ backgroundImage: `url("https://lua-nadai.github.io/wizards-battle/images/background.png"` }}>
                            <a href="https://lua-nadai.github.io/wizards-battle/" > <Play><IoPlay/></Play> </a>
                        </Card>
                        <a href="https://lua-nadai.github.io/wizards-battle/" ><Name> Wizard's Battle</Name></a>
                    </Contain>
                 
                    <Contain>
                        <Card style={{ backgroundImage: `url("data:image/jpeg;base64,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"` }}>
                            <a href="https://devkadu.github.io/SpaceBattle/index.html" > <Play><IoPlay/></Play> </a>
                        </Card>
                        <a href="https://devkadu.github.io/SpaceBattle/index.html" > <Name >SpaceBattle </Name> </a>
                    </Contain>

                    <Contain>
                        <Card style={{ backgroundImage: `url("https://p4tt1xd.github.io/Quattra-Comando/images/fundo2.png"` }}>
                            <a href="https://p4tt1xd.github.io/Quattra-Comando/" > <Play><IoPlay/></Play> </a>
                        </Card>
                        <a href="https://p4tt1xd.github.io/Quattra-Comando/"><Name>Quattra Comando</Name></a>        
                    </Contain>

                    <Contain>
                        <Card style={{ backgroundColor: "rgb(23, 32, 42)" }}>
                            <a href="https://pasqualipedro.github.io/twistPong/" > <Play><IoPlay/></Play> </a>
                        </Card>
                        <a href="https://pasqualipedro.github.io/twistPong/"><Name>Twist Pong</Name></a>                      
                    </Contain>

                    <Contain>
                        <Card style={{ backgroundImage: `url("https://msmjamie.files.wordpress.com/2015/01/press-start-600x375.jpg")` }}>
                            <a href="https://renanoliveira20.github.io/hackJumps/" > <Play><IoPlay/></Play> </a>
                        </Card>
                        <a href="https://renanoliveira20.github.io/hackJumps/" ><Name>Hack Jumps</Name></a>                        
                    </Contain>

                    <Contain>
                        <Card style={{ backgroundImage: `url("https://rodrigo-felix.github.io/crocodile-hunter2/style/game_images/bg_mosaic.jpg"` }}>
                            <a href="https://rodrigo-felix.github.io/crocodile-hunter2/" > <Play><IoPlay/></Play> </a>
                        </Card>
                        <a href="https://rodrigo-felix.github.io/crocodile-hunter2/" ><Name>Crocodile Hunter 2</Name></a>                 
                    </Contain>

                    <Contain>
                        <Card style={{ backgroundImage: `url("https://tcarmsilva.github.io/thegameofwar/case-images/art.jpg"` }}>
                            <a href="https://tcarmsilva.github.io/thegameofwar/" > <Play><IoPlay/></Play> </a>
                        </Card>
                        <a href="https://tcarmsilva.github.io/thegameofwar/" ><Name>The Game of War</Name></a>                      
                    </Contain>

                    <Contain>
                        <Card style={{ backgroundImage: `url("https://victorcamp-front.github.io/Run-Game/images/background-fulltime.png"` }}>
                            <a href="https://victorcamp-front.github.io/Run-Game/" > <Play><IoPlay/></Play> </a>
                        </Card>
                        <a href="https://victorcamp-front.github.io/Run-Game/" ><Name>Run Game</Name></a>                       
                    </Contain>

                </Div>
            </Body>
        )
    }
}

export default GamersDev

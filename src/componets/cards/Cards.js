import React, { Component } from 'react'
import styled from 'styled-components'
import { FaXbox, FaPlaystation } from 'react-icons/fa';
import { AiFillWindows } from "react-icons/ai"
import { SiNintendoswitch } from "react-icons/si"


const Card = styled.div`


    display: flex;
    flex-direction: column;
    align-items: center;
   

    margin-left: 3rem;
    margin-top:3rem ;
    height: 100vh;
    margin: 3rem;
    
    background: rgb(54,54,54);
    height: 20rem;
    width: 15rem;
    border-radius: 25px;
   
    img{

        width: 100%;
        height: 20vh;
        border-radius: 25px 25px;
    }
   
    h3{
        font-size: 1rem;
        margin-top: 2vh;
    }
 
`
const Game = styled.div`
 
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
        height: 50%;
    `

const InfoGames = styled.div`
 width: 15rem;
 display: flex;
 justify-content: space-around;
 align-items: center;
 margin-top: 2.5rem;

 span{
        font-size: 1rem;
        margin-right: 0.1vw;
        margin-left: 0.1vw;
    } 
 `

    const Ratting = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    width: 2rem;
    height: 2rem;
    border-radius: 10px;
    opacity: 0.8;
    `

let platformsIcons = {

    PC: <AiFillWindows />,
    "PlayStation 4": <FaPlaystation />,
    "Xbox 360": <FaXbox />,
    "Nintendo Switch": <SiNintendoswitch />


}



class Cards extends Component {

    colorRatting = () => {
        if (this.props.metacritic >= 90 ){
            return "green"
        }
        else if (this.props.metacritic < 90 && this.props.metacritic >= 80){
            return "orange"
        }
        else {
            return "red"
        }
    }

    render() {

        return (
            <Card>
                <img src={this.props.background} alt="logo" />
                <Game>
                    <InfoGames>
                        <div>
                            {this.props.platforms.map((platform, i) => (
                                <span key={i}> {platformsIcons[platform.platform.name]} </span>
                            )
                            )}
                        </div>
                        <Ratting style = {{color : this.colorRatting(), border: `1px solid ${this.colorRatting()}` }}>
                        {this.props.metacritic}
                        </Ratting>
                    </InfoGames>
                    <h3>{this.props.name}</h3>
                    <h4>{this.props.datas}</h4>
                </Game>
            </Card>
        )
    }
}

export default Cards

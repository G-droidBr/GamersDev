import React, { Component } from 'react'
import styled from 'styled-components'

const Body = styled.div`

display: flex;
justify-content: center;
align-items: center;
overflow: scroll;
width: 100vw;
background-position: center;
background-size: cover;

`

const Div = styled.div`
margin-top: 1rem;
display: flex ;
flex-direction: column;
align-items: center;
justify-content: space-around;
box-shadow: 10px 5px 5px black;
opacity: 0.9;
border-radius: 25px;
width: 80vw;
height: 95vh;
background-color: grey;
text-align: center;

`
const Name = styled.h1`

margin-top: 3rem;

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
const Center = styled.div`
    
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: black;
    margin-bottom: 2rem;
    color: white;
    width: 100%;
   
    `
const WebSite = styled.div`
display: flex;
justify-content: center;
align-items: center;
border-radius: 25px;
background-color: white;
width: 7rem;
height: 2rem;
margin-top: 1rem;

a{
    text-decoration: none;
    color: black;
    }
`

const UltimaAtt = styled.p`
font-size: 1rem;
`
const Description = styled.p`
margin-top: 2rem;
font-size: 1rem;
width: 90%;

`
class CardInfo extends Component {


    colorRatting = () => {
        if (this.props.metacritic >= 90) {
            return "green"
        }
        else if (this.props.metacritic < 90 && this.props.metacritic >= 80) {
            return "orange"
        }
        else {
            return "red"
        }
    }


    render() {
        return (
            <Body style={{ backgroundImage: `url(${this.props.background_image})` }}>
                
                <Div>
                    <Name>{this.props.name}</Name>

                    <WebSite><a href={this.props.website}>WebSite</a></WebSite>

                    <Description>{this.props.description_raw}</Description>

                    <UltimaAtt>
                        Last Update : {this.props.updated.replace("T", " ")}
                    </UltimaAtt>

                    <Center>
                        <div>{this.props.genres.map(item => <h4>{item.name}</h4>)}</div>
                        <Ratting style={{ backgroundColor: this.colorRatting(), border: `1px solid ${this.colorRatting()}`, opacity: "1" }}>
                            {this.props.metacritic}
                        </Ratting>
                    </Center>
                </Div>
                
            </Body>
        )
    }
}

export default CardInfo

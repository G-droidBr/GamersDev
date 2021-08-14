import React, { Component } from 'react'
import styled from 'styled-components'

const Card = styled.div`


    display: flex;
    flex-direction: column;
    align-items: center;

    margin-left: 3rem;
    margin-top:3rem ;
    height: 100vh;
    margin: 3rem;
    
    background: rgb(54,54,54);
    height: 25rem;
    width: 20rem;
    border-radius: 25px;
    img{

        width: 100%;
        height: 18vh;
        border-radius: 25px 25px;
    }
    div{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
        height: 50%;
    }
    h3{
        font-size: 1.4rem;
    }
    
`

class Cards extends Component {
    render() {
        return (
            <Card>

                <img src={this.props.background} alt="logo" />
                <div>
                    <h3>{this.props.name}</h3>
                    <h4>{this.props.datas}</h4>
                </div>
            </Card>
        )
    }
}

export default Cards

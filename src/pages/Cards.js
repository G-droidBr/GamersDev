import React, { Component } from 'react'

class Cards extends Component {
    render() {
        return (
            <div>
                <div>
                <img style = {{width : "100px",}} src = {this.props.background}/>
                <h3>{this.props.name}</h3>
                </div>
            </div>
        )
    }
}

export default Cards

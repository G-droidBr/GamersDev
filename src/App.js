import styled from 'styled-components'
import './App.css';
import { Switch, Route } from "react-router-dom"
import Home from './pages/home';
import creators from './pages/creators';
import site from './pages/site';
import random from './pages/random';
import edit from './pages/edit';
import Navbar from './componets/navbar/Navbar';
import SideBar from './componets/side-bar/SideBar';
import { Component } from 'react';
import axios from 'axios'
import Pcgames from './pages/Pcgames';
import bestGames from './pages/bestGames';


const Content = styled.div`

    display: flex;
    transition: all 0.5s ease; 
    margin-left: ${(props) => props.isOpen ? "200" : "80"}px;


   
`

class App extends Component {


  state = {
    navbar: true,
    library: [],
    sideBar: false,
    filterGames: []

  }

  componentDidMount = async () => {

    let games = await axios.get("https://api.rawg.io/api/games", { params: { key: "6931a242171a4c0ba9734f9d40a8c740" } })
      .then((result) => result.data.results)

    this.setState({
      library: games,
      filterGames: games
    })

  }


  toggleSideBar = () => {

    this.setState({
      sideBar: !this.state.sideBar
    })

  }


  handleFilterGames = (value) => {
    const filtered = this.state.library.filter(game => {
      return game.name.toLocaleLowerCase().includes(value.toLocaleLowerCase())
    })
    this.setState({
      filterGames: filtered
    })

  }

  handleNavbar = () => {
    this.setState({
      navbar: false
    })
  }


  render() {

    return (
      <div>

        <Navbar handleFilterGames={this.handleFilterGames} />


        <div style={{ display: "flex" }}>
          <SideBar isOpen={this.state.sideBar} toggleSideBar={this.toggleSideBar} />
          <Content isOpen={this.state.sideBar}>

            <Switch>

              <Route exact path="/" render={(props) => <Home {...props} filter={this.state.filterGames} />} />
      


              <Route path="/creators" component={creators} navbar={this.handleNavbar} />
              <Route path="/bestgames" render={(props) => <bestGames {...props} library={this.state.library} />} />
              <Route path="/pcgames" render={(props) => <Pcgames {...props} filter={this.state.filterGames} />} />
              
              <Route path="/site" component={site} />
              <Route path="/random" component={random} />
              <Route path="/edit" component={edit} />

            </Switch>
          </Content>
        </div>

      </div>
    )
  };
}

export default App;

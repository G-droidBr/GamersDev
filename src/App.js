import styled from 'styled-components'
import './App.css';
import { Switch, Route } from 'react-router-dom'

import { motion } from 'framer-motion';


import edit from './pages/edit';
import Navbar from './componets/navbar/Navbar';

import { Component } from 'react';
import axios from 'axios'

import Home from './pages/Home';
import Creators from './pages/Creators';
import Random from './pages/Random';
import SideBar from './componets/side-bar/SideBar';
import Pcgames from './pages/Pcgames';
import BestGames from './pages/BestGames';
import PlayStation from './pages/PlayStation';
import Nintendo from './pages/Nintendo';



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
    filterGames: [],
    pcGames: []

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

              <Route exact path="/" render={(props) => <Home {...props} filter={this.state.filterGames} library = {this.state.library} />} />
      


              <Route path="/creators" component={Creators} navbar={this.handleNavbar} />

              <Route path="/bestgames" render={(props) => <BestGames {...props} library={this.state.library} />} />

              <Route path="/pcgames" render={(props) => <Pcgames {...props} filter={this.state.filterGames} />} />

              <Route path="/playstation" render={(props) => <PlayStation {...props} filter={this.state.filterGames} />} />

              <Route path="/nintendo" render={(props) => <Nintendo {...props} filter={this.state.filterGames} />} />

             <Route path="/random" render={(props) => <Random {...props} filter={this.state.filterGames} />} />

              <Route path="/edit" component={edit} />

              </Switch>
          </Content>
        </div>

      </div>
    )
  };
}

export default App;

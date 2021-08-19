import React, { Component } from 'react'
import "./side.css"
import { Link } from 'react-router-dom';

import { GiConsoleController , GiTrophy, GiPerspectiveDiceSixFacesRandom } from "react-icons/gi"
import { AiOutlineMenu,AiFillWindows } from "react-icons/ai";
import { BsGrid3X3Gap } from "react-icons/bs"
import { FaUserAstronaut , FaPlaystation} from 'react-icons/fa';
import { FcReadingEbook } from "react-icons/fc"
import { SiNintendoswitch } from "react-icons/si"
import {BiGame} from "react-icons/bi"

class SideBar extends Component {

    render() {
        return (
            <div className="body">
                <div className={`sidebar ${this.props.isOpen ? "active" : ""} `}>
                    <div className="logo-content">
                        <div className="logo">
                            <FaUserAstronaut className="oculos" />
                            <div className="logo-name"> GamersDev  </div>
                        </div>
                        <AiOutlineMenu onClick={this.props.toggleSideBar} id="btn" />
                    </div>
                    <ul className={`nav-list`}>


                        <li>
                            <Link to="/">
                                <i className="control"> <GiConsoleController /> </i>
                                <span className="links-name"> AllGames</span>
                            </Link>
                            <span className="tooltip"> Games</span>
                        </li>

                        <li>
                            <Link to="/bestgames">
                                <i className="trophy"> <GiTrophy /> </i>
                                <span className="links-name"> BestGame</span>
                            </Link>
                            <span className="tooltip"> BestGame</span>
                        </li>

                        <li>
                            <Link to="/pcgames">
                                <i className="trophy" > <AiFillWindows /> </i>
                                <span className="links-name"> Pc Games</span>
                            </Link>
                            <span className="tooltip"> Pc Games</span>
                        </li>

                        <li>
                            <Link to="/">
                                <i className="trophy"> <FaPlaystation/> </i>
                                <span className="links-name"> PlayStation </span>
                            </Link>
                            <span className="tooltip"> PlayStation </span>
                        </li>

                        <li>
                            <Link to="/">
                                <i> <SiNintendoswitch/> </i>
                                <span className="links-name"> Nintendo </span>
                            </Link>
                            <span className="tooltip"> Nintendo</span>
                        </li>

                        <li>
                            <Link to="/">
                                <i className = "random"> <GiPerspectiveDiceSixFacesRandom /> </i>
                                <span className="links-name"> Random Game</span>
                            </Link>
                            <span className="tooltip"> Random </span>
                        </li>

                        <li>
                            <Link to="/">
                                <i className = "trophy"> <BiGame /> </i>
                                <span className="links-name"> GamesDev</span>
                            </Link>
                            <span className="tooltip"> GamesDev</span>
                        </li>

                        <li>
                            <Link to="/">
                                <i> <BsGrid3X3Gap /> </i>
                                <span className="links-name"> DashBoard</span>
                            </Link>

                            <span className="tooltip"> DashBoard</span>
                        </li>

                        <li>
                            <Link to="/creators">
                                <i className="creators">  <FcReadingEbook /> </i>
                                <span className="links-name">Creators</span>
                                <span className="tooltip">Creators</span>
                            </Link>
                        </li>
                    </ul>

                </div>

            </div>
        )
    }
}

export default SideBar

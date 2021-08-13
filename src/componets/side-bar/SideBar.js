import React, { Component } from 'react'
import "./side.css"

import {GiConsoleController} from "react-icons/gi"
import { AiOutlineMenu } from "react-icons/ai";
import { BsGrid3X3Gap } from "react-icons/bs"
import {FaUserAstronaut} from 'react-icons/fa';
import {GiTrophy} from "react-icons/gi";


class SideBar extends Component {

    state = {

        sideBar: false

    }

    button = () => {

        this.setState({
            sideBar: !this.state.sideBar
        })

    }


    render() {
        return (
            <body>
                <div className={`sidebar ${this.state.sideBar ? "active" : ""} `}>
                    <div className="logo-content">
                        <div className="logo">
                            <FaUserAstronaut className="oculos" />
                            <div className="logo-name"> GamersDev  </div>
                        </div>
                        <AiOutlineMenu onClick={this.button} id="btn" />
                    </div>
                    <ul className={`nav-list`}>

                        <li>
                            <a href="#">
                                <i className = "control"> <GiConsoleController /> </i>
                                <span className="links-name"> AllGames</span>
                            </a>
                            <span className="tooltip"> Games</span>
                        </li>

                        <li>
                            <a href="#">
                                <i className = "trophy"> <GiTrophy /> </i>
                                <span className="links-name"> BestGame</span>
                            </a>
                            <span className="tooltip"> BestGame</span>
                        </li>

                        <li>
                            <a href="#">
                                <i > <BsGrid3X3Gap /> </i>
                                <span className="links-name"> DashBoard</span>
                            </a>
                            <span className="tooltip"> DashBoard</span>
                        </li>

                        <li>
                            <a href="#">
                                <i> <BsGrid3X3Gap /> </i>
                                <span className="links-name"> DashBoard</span>
                            </a>
                            <span className="tooltip"> DashBoard</span>
                        </li>

                        <li>
                            <a href="#">
                                <i> <BsGrid3X3Gap /> </i>
                                <span className="links-name"> DashBoard</span>
                            </a>
                            <span className="tooltip"> DashBoard</span>
                        </li>

                        <li>
                            <a href="#">
                                <i> <BsGrid3X3Gap /> </i>
                                <span className="links-name"> DashBoard</span>
                            </a>
                            <span className="tooltip"> DashBoard</span>
                        </li>

                        <li>
                            <a href="#">
                                <i> <BsGrid3X3Gap /> </i>
                                <span className="links-name"> DashBoard</span>
                            </a>
                            <span className="tooltip"> DashBoard</span>
                        </li>

                        <li>
                            <a href="#">
                                <i> <BsGrid3X3Gap /> </i>
                                <span className="links-name"> DashBoard</span>
                            </a>
                            <span className="tooltip"> DashBoard</span>
                        </li>

                        <li>
                            <a href="#">
                                <i> <BsGrid3X3Gap /> </i>
                                <span className="links-name"> DashBoard</span>
                            </a>
                            <span className="tooltip"> DashBoard</span>
                        </li>

                    </ul>

                </div>

            </body>
        )
    }
}

export default SideBar

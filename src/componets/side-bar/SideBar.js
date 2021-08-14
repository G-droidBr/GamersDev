import React, { Component } from 'react'
import "./side.css"
import { Link } from 'react-router-dom';

import { GiConsoleController } from "react-icons/gi"
import { AiOutlineMenu } from "react-icons/ai";
import { BsGrid3X3Gap } from "react-icons/bs"
import { FaUserAstronaut } from 'react-icons/fa';
import { GiTrophy } from "react-icons/gi";
import { FcReadingEbook } from "react-icons/fc"


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
                            <Link to="/">
                                <i className="trophy"> <GiTrophy /> </i>
                                <span className="links-name"> BestGame</span>
                            </Link>
                            <span className="tooltip"> BestGame</span>
                        </li>

                        <li>
                            <Link to="/">
                                <i > <BsGrid3X3Gap /> </i>
                                <span className="links-name"> DashBoard</span>
                            </Link>
                            <span className="tooltip"> DashBoard</span>
                        </li>

                        <li>
                            <Link to="/">
                                <i> <BsGrid3X3Gap /> </i>
                                <span className="links-name"> DashBoard</span>
                            </Link>
                            <span className="tooltip"> DashBoard</span>
                        </li>

                        <li>
                            <Link to="/">
                                <i> <BsGrid3X3Gap /> </i>
                                <span className="links-name"> DashBoard</span>
                            </Link>
                            <span className="tooltip"> DashBoard</span>
                        </li>

                        <li>
                            <Link to="/">
                                <i> <BsGrid3X3Gap /> </i>
                                <span className="links-name"> DashBoard</span>
                            </Link>
                            <span className="tooltip"> DashBoard</span>
                        </li>

                        <li>
                            <Link to="/">
                                <i> <BsGrid3X3Gap /> </i>
                                <span className="links-name"> DashBoard</span>
                            </Link>
                            <span className="tooltip"> DashBoard</span>
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

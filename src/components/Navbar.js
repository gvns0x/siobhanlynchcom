import React from 'react';
import logo from '../images/logo.svg';
import hamburger from '../images/hamburger.svg';
import './Navbar.css';
import '../fonts/fonts.css'
import { withRouter } from "react-router-dom";

class Navbar extends React.Component {

    handleClickNavbar = (e) => {
        // this.props.pages.map((v, i) => console.log(v))
        var str = e.target.innerHTML;
        var lowerStr = str.toLowerCase();
        this.props.history.push("/" + lowerStr)
    }

    render() {
        return(
            <div className="navbar-wrapper">
            <div className="navbar-container">
                <img className="logo" src={logo}/>
                <img className="hamburger" src={hamburger}/>
                <div className="menu-options">
                {this.props.pages.map((e, i) => 
                    <button className="menu-item" id={"menu-item-" + i} onClick={e => this.handleClickNavbar(e)}>{e}</button>
                )
                }
                </div>
            </div>
            </div>
        )
    }
}

export default withRouter(Navbar)
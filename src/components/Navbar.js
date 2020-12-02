import React from 'react';
import logo from '../images/logo.svg';
import hamburger from '../images/hamburger.svg';
import './Navbar.css';
import '../fonts/fonts.css'

class Navbar extends React.Component {

    render() {
        return(
            <div className="navbar-container">
                <img className="logo" src={logo}/>
                <img className="hamburger" src={hamburger}/>
                <div className="menu-options">
                {this.props.pages.map((e, i) => 
                    <a className="menu-item" id={"menu-item-" + i} href={"/" + e}>{e}</a>
                )
                }
                </div>
            </div>
        )
    }
}

export default Navbar
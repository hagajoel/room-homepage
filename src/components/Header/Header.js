import React from "react";
import { useState } from "react";
import logo from "../../assets/images/logo.svg"
import HamburgerMenu from "./HamburgurMenu";
import Menu from "./HeaderMenu";

const Header = () => {
    const [toggle,setToggle] = useState(false);
    const navLinks = ["home","shop","about","contact"]
    return (    
        <header className="header">
            <div className="header__wrapper container">
                <a className="header__logo logo" href="/">
                    <img className="logo__image" src={logo} alt="logo"></img>
                </a>
                <HamburgerMenu toggled={toggle} handleClick={() => setToggle(toggle => !toggle)}/>
                <Menu toggled={toggle} navLinks={navLinks}/>
            </div>
        </header>
    );
}
 
export default Header;
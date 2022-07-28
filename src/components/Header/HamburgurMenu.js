import React from "react";
import PropTypes from "prop-types";

const HamburgerMenu = (props) => {
    const {toggled} = props;
    return (
        <button 
        className={`header__hamburger-nav ${toggled ? "hamburger-nav--active" :"hamburger-nav"}`}
        aria-label="navigation menu"
        aria-expanded ={toggled ? "true" : "false"}
        aria-controls="menu"
        type="button"
        onClick={props.handleClick}
        >
        <span className="hamburger-nav__bar" aria-hidden="true"></span>
    </button>
    );
}

HamburgerMenu.propTypes = {
    toggled: PropTypes.bool,
    handleClick: PropTypes.func.isRequired,
}

HamburgerMenu.deafultProps = {
    toggled: false,
    handleClick: fn => fn,
}
 
export default HamburgerMenu;
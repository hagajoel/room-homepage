import React from "react";
import PropTypes from "prop-types";

const HeaderMenu = (props) => {
    return (  
        <ul className={`header__menu ${props.toggled ? "menu--active":"menu"}`} id="navigation" >
            {props.navLinks.map( link => {
                return (
                    <li className="menu__item" key={link}>
                        <a href="#" className="menu__link">{link}</a>
                    </li>
                )

            })}
    </ul>
    );
}

HeaderMenu.propTypes = {
    navLinks: PropTypes.array.isRequired,
    toggled: PropTypes.bool,
}

HeaderMenu.defaultPorps = {
    navLinks: [],
    toggled: false
}
 
export default HeaderMenu;
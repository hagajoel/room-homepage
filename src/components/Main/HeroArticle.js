import React from "react";
import PropTypes from "prop-types";


const HeroArticle = ({active,heading,mainText,ctaText}) => {
    return (
        <article className={`hero__description ${active ? "hero__description--active": ""}`}>
            <h1 className="hero__heading">{heading}</h1>
            <p className="hero__text">{mainText}</p>
            <button className="hero__cta">{ctaText}</button>
        </article>
    );
}

HeroArticle.propTypes = {
    active: PropTypes.bool.isRequired,
    heading: PropTypes.string,
    text: PropTypes.string,
    ctaText: PropTypes.string,
}

HeroArticle.defaultProps = {
    active: false,
    heading: "",
    text: "",
    ctaText: ""
}


 
export default HeroArticle;
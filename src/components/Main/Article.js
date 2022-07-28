import React from "react";
import PropType from "prop-types";

const Article = (props) => {
  return (
    <article className="article">
      <h2 className="article__heading">{props.heading}</h2>
      <p className="article__text">{props.text}</p>
    </article>
  );
};

Article.PropType = {
  heading: PropType.string,
  text: PropType.string,
};

Article.defaultProps = {
  heading: "",
  text: "",
};

export default Article;

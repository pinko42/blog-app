import React from "react";

const Article = (props) => {
  return (
    <div className="article">
      <div className="article-title">{props.title}</div>
      <div className="article-text">{props.text}</div>
      <div className="article-text">{props.date}</div>
    </div>
  );
};
export default Article;
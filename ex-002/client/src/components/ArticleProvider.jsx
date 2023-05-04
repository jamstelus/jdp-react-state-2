import React, { useState } from "react";
import ArticleContext from "./../store/ArticleContext";

const ArticleProvider = (props) => {
  const [articles, setArticles] = useState([]);

  const addArticle = (article) => {
    fetch("http://localhost:4000/articles", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(article),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setArticles([...articles, res]);
      });
  };

  const contextValue = {
    articles,
    addArticle,
  };

  return (
    <ArticleContext.Provider value={contextValue}>
      {props.children}
    </ArticleContext.Provider>
  );
};

export default ArticleProvider;

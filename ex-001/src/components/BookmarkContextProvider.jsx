import React, { useState } from "react";
import BookmarkContext from "../store/BookmarkContext";

const BookmarkContextProvider = ({ children }) => {
  const [savedArticles, setSavedArticles] = useState([]);

  const addArticle = (article) => {
    setSavedArticles((prevSavedArticles) => [...prevSavedArticles, article]);
  };
  const removeArticle = (articleId) => {
    setSavedArticles((prevSavedArticles) =>
      prevSavedArticles.filter((article) => article.id !== articleId)
    );
  };
  const bookmarkCtxValue = {
    bookmarkedArticles: savedArticles,
    bookmarkArticle: addArticle,
    unbookmarkArticle: removeArticle,
  };

  return (
    <BookmarkContext.Provider value={bookmarkCtxValue}>
      {children}
    </BookmarkContext.Provider>
  );
};

export default BookmarkContextProvider;

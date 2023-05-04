import { useContext } from "react";
import { FaBookmark, FaRegBookmark } from "react-icons/fa";
import BookmarkContext from "./../store/BookmarkContext";
import dummyArticles from "../data/dummyArticles";

const ArticleItem = ({ article, isBookmarked, onBookmark }) => {
  return (
    <li>
      <h2>{article.title}</h2>
      <p>{article.description}</p>
      <button onClick={() => onBookmark(article)}>
        {isBookmarked ? <FaBookmark /> : <FaRegBookmark />}
      </button>
    </li>
  );
};

const ArticleList = ({ children }) => {
  return <ul>{children}</ul>;
};

const Articles = () => {
  const bookmarkCtx = useContext(BookmarkContext);

  const isBookmarked = (article) => {
    return bookmarkCtx.bookmarkedArticles.some(
      (bArticle) => bArticle.id === article.id
    );
  };

  const handleBookmark = (article) => {
    if (isBookmarked(article)) {
      bookmarkCtx.unbookmarkArticle(article.id);
      return;
    }
    bookmarkCtx.bookmarkArticle(article);
  };

  return (
    <ArticleList>
      {dummyArticles.map((article) => (
        <ArticleItem
          key={article.id}
          article={article}
          isBookmarked={isBookmarked(article)}
          onBookmark={handleBookmark}
        />
      ))}
    </ArticleList>
  );
};
export default Articles;

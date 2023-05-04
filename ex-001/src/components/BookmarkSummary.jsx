import { useContext } from "react";
import BookmarkContext from "./../store/BookmarkContext";

const BookmarkSummary = () => {
  const bookmarkCtx = useContext(BookmarkContext);

  const numberOfArticles = bookmarkCtx.bookmarkedArticles.length;
  return (
    <>
      <p>{numberOfArticles} articles bookmarked</p>
      <ul>
        {bookmarkCtx.bookmarkedArticles.map((article) => (
          <li key={article.id}>{article.title}</li>
        ))}
      </ul>
    </>
  );
};
export default BookmarkSummary;

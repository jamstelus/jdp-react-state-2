import Articles from "./Articles";
import InfoSidebar from "./InfoSidebar";
import BookmarkContextProvider from "./BookmarkContextProvider";
function News() {
  return (
    <BookmarkContextProvider>
      <Articles />
      <InfoSidebar />
    </BookmarkContextProvider>
  );
}
export default News;

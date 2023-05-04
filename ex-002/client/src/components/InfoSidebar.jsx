import BookmarkInformation from "./BookmarkInformation";

const InfoSidebar = ({ bookmarkedArticles }) => {
  return (
    <aside>
      <BookmarkInformation bookmarkedArticles={bookmarkedArticles} />
    </aside>
  );
};

export default InfoSidebar;

import React from "react";
import ArticleProvider from "../components/ArticleProvider";
import ArticleForm from "../components/ArticleForm";
import ArticleFormRefactored from "../components/ArticleFormRefactored";

function AddArticlePage() {
  return (
    <div>
      <ArticleProvider>
        Using useState: <br />
        <ArticleForm />
        Refactored: <br />
        <ArticleFormRefactored />
      </ArticleProvider>
    </div>
  );
}
export default AddArticlePage;

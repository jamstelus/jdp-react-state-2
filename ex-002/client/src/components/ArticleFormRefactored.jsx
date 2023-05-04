import React, { useCallback, useContext, useState } from "react";
import ArticleContext from "./../store/ArticleContext";

const ArticleFormRefactored = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const { addArticle } = useContext(ArticleContext);

  const handleChange = useCallback((event) => {
    const { name, value } = event.target;
    if (name === "title") {
      setTitle(value);
    } else if (name === "description") {
      setDescription(value);
    }
  }, []);

  const handleSubmit = useCallback(
    (event) => {
      event.preventDefault();
      addArticle({ title, description });
      setTitle("");
      setDescription("");
    },
    [addArticle, title, description]
  );

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="title">Title:</label>
      <input
        type="text"
        id="title"
        name="title"
        value={title}
        onChange={handleChange}
      />
      <br />
      <br />
      <label htmlFor="description">Description:</label>
      <textarea
        id="description"
        name="description"
        value={description}
        onChange={handleChange}
      />
      <br />
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};

export default ArticleFormRefactored;

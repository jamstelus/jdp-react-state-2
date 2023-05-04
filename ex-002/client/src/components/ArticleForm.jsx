import React, { useCallback, useContext, useState } from "react";
import ArticleContext from "./../store/ArticleContext";

const ArticleForm = () => {
  const [state, setState] = useState({
    title: "",
    description: "",
  });

  const { addArticle } = useContext(ArticleContext);

  const handleChange = useCallback((event) => {
    const { name, value } = event.target;
    setState((prev) => ({
      ...prev,
      [name]: value,
    }));
  }, []);

  const handleSubmit = useCallback(
    (event) => {
      event.preventDefault();
      addArticle(state);
      setState({
        title: "",
        description: "",
      });
    },
    [addArticle, state]
  );

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="title">Title:</label>
      <input
        type="text"
        id="title"
        name="title"
        value={state.title}
        onChange={handleChange}
      />
      <br />
      <br />
      <label htmlFor="description">Description:</label>
      <textarea
        id="description"
        name="description"
        value={state.description}
        onChange={handleChange}
      />
      <br />
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};

export default ArticleForm;

var express = require("express");
var router = express.Router();

const articles = [
  {
    id: 1,
    title: "Article 1",
    description: "Description 1",
  },
  {
    id: 2,
    title: "Article 2",
    description: "Description 2",
  },
  {
    id: 3,
    title: "Article 3",
    description: "Description 3",
  },
];

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.json({
    data: articles,
    total: articles.length,
  });
});

router.post("/", function (req, res, next) {
  const { title, description } = req.body;
  const id = articles.length + 1;
  articles.push({
    id,
    title,
    description,
  });

  res.json({
    data: articles,
    total: articles.length,
  });
});

module.exports = router;

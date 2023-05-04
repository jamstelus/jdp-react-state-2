var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.json({
    data: [
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
    ],
    pages: 1,
    total: 3,
    page: 1,
  });
});

module.exports = router;

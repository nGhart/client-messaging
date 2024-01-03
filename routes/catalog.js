var express = require("express");
const { goods } = require("../public/javascripts/data");
var router = express.Router();

/* GET home page. */
router.post("/", function (req, res) {
  res.render("catalog", {
    title: "Menu",
    goods: goods,
  });
});

router.get("/", function (req, res) {
  res.render("catalog", {
    title: "Menu items",
    goods: goods,
  });
});

module.exports = router;

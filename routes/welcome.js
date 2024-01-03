var express = require("express");
var router = express.Router();
var bodyParser = require("body-parser");
require("dotenv").config();
const { sendMessage, getTextMessageInput } = require("../messageHelper");

router.use(bodyParser.json());

router.post("/", function (req, res, next) {
  var data = getTextMessageInput(
    process.env.RECIPIENT_WAID,
    "Welcome to our store!"
  );

  sendMessage(data)
    .then(function (response) {
      res.status(200).redirect("/catalog");
    })
    .catch(function (error) {
      res.sendStatus(500);
    });
});

module.exports = router;

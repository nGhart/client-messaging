var express = require("express");
var router = express.Router();
var bodyParser = require("body-parser");
require("dotenv").config();
var { goods } = require("../public/javascripts/data");
const { sendMessage, getTemplatedMessageInput } = require("../messageHelper");

router.use(bodyParser.json());

router.post("/", function (req, res) {
  var good = goods.filter((v, i) => v.id == req.body.id)[0];

  var data = getTemplatedMessageInput(process.env.RECIPIENT_WAID, good);

  sendMessage(data)
    .then(function (response) {
      res.status(200).redirect("/catalog");
    })
    .catch(function (error) {
      console.log(error);
      res.sendStatus(500);
    });
});

module.exports = router;

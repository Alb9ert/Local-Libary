var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

// GET route for '/users/cool/'
router.get("/cool", (req, res, next) => {
  res.send("You're so cool");
});

module.exports = router;

// mongodb+srv://albe2184:<cxq59gat>@cluster0.rlnogwc.mongodb.net/local_library?retryWrites=true&w=majority&appName=Cluster0

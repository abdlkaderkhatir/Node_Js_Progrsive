const path = require("path");

const express = require("express");

const rootDir = require("../utils/path");

const router = express.Router();

router.get("/", (req, res, next) => {
  // res.send("<h1>Hello from Express!</h1>");
  // lets assume that we look from server.js so dont use ..
  // res.sendFile(path.join(__dirname, "../views/shop.html"));
  res.sendFile(path.join(rootDir, "views", "shop.html"));
});

module.exports = router;
// Path: routes/shop.js

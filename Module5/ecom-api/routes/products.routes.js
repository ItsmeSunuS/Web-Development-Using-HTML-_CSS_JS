const express = require("express");
const router = express.Router();
const { readDB, writeDB } = require("../utils/fileHandler");

router.get("/", (req, res) => {
  const db = readDB();
  res.json(db.products);
});

module.exports = router;

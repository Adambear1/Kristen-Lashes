require("dotenv").config();
const router = require("express").Router();
const db = require("../models/index");

router.get("/", ({ body }, res) => {
  db.Inventory.get({})
    .then((data) => {
      try {
        res.json(data);
      } catch (error) {
        res.status(400).json(error.message);
      }
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

module.exports = router;

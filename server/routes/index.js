import express from "express";
import { users } from "../constants/globalConstants";

const router = express.Router();

/* GET home page. */
router.get("/", (req, res) => {
  res.send(users);
});

module.exports = router;

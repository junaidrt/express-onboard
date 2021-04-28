import express from "express";
import { users } from "../constants/globalConstants";

const router = express.Router();

/* GET home page. */
router.get("/", (req, res) => {
  res.send(users);
});

router.post("/", (req, res) => {
  users.push(req.body);
  res.send(users);
});

router.delete("/", (req, res) => {
  users.pop();
  res.send(users);
})

router.put("/", (req, res) => {
  users.push(req.body);
  res.send(users);
})

module.exports = router;

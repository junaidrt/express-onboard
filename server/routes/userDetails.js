import express from 'express'
import { USER_DETAILS } from '../constants/globalConstants'
const router = express.Router();

router.get("/:id", (req, res) => {
    res.send(USER_DETAILS.filter(user => user.id >= req.params.id));
});

module.exports = router;
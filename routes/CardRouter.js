const express = require("express");
const router = express.Router();
const Card = require("../models/cards.js")
const { getReq, postReq,patchReq, deleteReq } = require("../controllers/ItemController");

router.route("/")
.get(getReq(Card))
.post(postReq(Card))
.patch(patchReq(Card))
.delete(deleteReq(Card))

module.exports = router;
const express = require('express');

const router = express.Router();

const { postLink, links } = require("../controllers/link");

router.post("/post-link", postLink);
router.get("/links", links);

module.exports = router;
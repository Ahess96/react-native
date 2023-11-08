const express = require('express');

const router = express.Router();

const { postLink, links, viewCount } = require("../controllers/link");

router.post("/post-link", postLink);
router.get("/links", links);
router.put("/view-count/:linkId", viewCount);

module.exports = router;
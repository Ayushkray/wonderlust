const express = require("express");
const router = express.Router();



router.get("/", (req, res) =>{
    res.send("Get for posts");
});

//Show 
router.get("/:id", (req, res) => {
    res.send("Get for posts id");
});

//Post
router.post("/", (req, res) => {
    res.send("posts for posts");
});

//Delete
router.delete("/:id", (req, res) => {
    res.send("delete for posts");
});

module.exports = router;
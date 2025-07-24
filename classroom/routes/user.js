const express = require("express");
const router = express.Router();


//Index-Users
router.get("/", (req, res) => {
    res.send("Get for Users");
});

//Show-Users
router.get("/:id", (req, res) => {
    res.send("Get for users id");
});

//Post-Users 
router.post("/", (req, res) =>{
    res.send("Post for users");
});

//Delete-users
router.delete("/:id", (req, res) => {
    res.send("delete for user id");
});

module.exports = router;
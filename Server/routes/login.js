const router = require("express").Router();
let User = require("../models/user.model");

// While logging in
router.route("/").get((req, res) => {
    const username = req.query.username;
    User.findOne({ username: { $eq: username } })
        .then((user) => res.json(user))
        .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;

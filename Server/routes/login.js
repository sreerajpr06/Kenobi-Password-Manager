const router = require("express").Router();
let User = require("../models/user.model");

// Logging in, sends back the details of the 
// password manager site
router.route("/").get((req, res) => {
    const username = req.query.username;
    User.findOne({ username: { $eq: username } })
        .then((user) => {
            let details = user.details;
            let detail = details.filter( data => data.site === "kenobi" );    
            res.json(detail);
        })
        .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;

/* 
    Route for dashboard

    Actions: 
    1. get all passwords (/)
    2. add password (/add)
    3. delete password (/add)
*/

const router = require("express").Router();
let User = require("../models/user.model");

// Get all passwords
router.route("/all").get((req, res) => {
    const username = req.query.username;

    User.findOne({ username: { $eq: username } })
        .then((user) => res.json(user))
        .catch((err) => res.status(400).json("Error: " + err));
});

// Add a new site and it's username & password
router.route("/add").post((req, res) => {
    const username = req.body.params.username;
    const site = req.body.params.site;
    const usernameSite = req.body.params.usernameSite;
    const password = req.body.params.password;
    const newData = {
        site: site,
        username: usernameSite,
        password: password,
    };

    User.findOne({ username: { $eq: username } })
        .then((user) => {
            let details = user.details;

            if (Array.isArray(details)) {
                details.push(newData);
            } else {
                details = [newData];
            }
            user.details = details;

            user.save()
                .then(() => res.json(user))
                .catch((err) => res.status(400).json("Error: " + err));
        })
        .catch((err) => res.status(400).json("Error: " + err));
});

// Edit the details of an existing site, using website url & username
router.route("/edit").post((req, res) => {
    // console.log(req);
    const userId = req.body.params.id;
    const detailsId = req.body.params.detailsId;
    const newSite = req.body.params.site;
    const newUsername = req.body.params.username;
    const newPassword = req.body.params.password;

    // Finds the document by _id, then finds the subdocument with id of
    // the subdocument
    User.findById(userId)
        .then((user) => {
            user.details.id(detailsId).site = newSite;
            user.details.id(detailsId).username = newUsername;
            user.details.id(detailsId).password = newPassword;

            user.save();
            res.json(user.details.id(detailsId));
        })
        .catch((err) => res.status(400).json("Error: " + err));
});

// Delete the details of an existing site, using website url & username
router.route("/delete").post((req, res) => {
    const username = req.body.params.username;
    const site = req.body.params.site;
    const usernameSite = req.body.params.usernameSite;

    User.findOne({ username: { $eq: username } })
        .then((user) => {
            let details = user.details.filter(
                (data) => data.site !== site && data.username !== usernameSite
            );
            user.details = details;

            user.save()
                .then(() => res.json(user))
                .catch((err) => res.status(400).json("Error: " + err));
        })
        .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;

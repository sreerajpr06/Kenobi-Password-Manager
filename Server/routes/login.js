const router = require('express').Router();
let User = require('../models/user.model');

router.route('/').get((req, res) => {
    const username = req.body.username;

    User.find( { "username" : { $eq: username } })
        .then( (user) => res.json(user))
        .catch( err => res.status(400).json('Error: ' + err));

});

module.exports = router;
const router = require('express').Router();
let User = require('../models/user.model');

router.route('/').post((req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    User.find( { "username" : { $eq: username } })
        .then( (user) => res.json(user))
        .catch( err => res.status(400).json('Error: ' + err));
    
    // newUser.save()
    //     .then( () => res.json('User added!'))
    //     .catch( err => res.status(400).json('Error: ' + err));
});

module.exports = router;
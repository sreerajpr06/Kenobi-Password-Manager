const router = require('express').Router();
let User = require('../models/user.model');

/////////////////////////////////////////////////////////////////////
// Only for developer use

// Gets all user details
router.route('/').get((req, res) => {
    User.find()
        .then(users => res.json(users))
        .catch(err => res.status(400).json('Error: ' + err));
});

// Deletes all user details
router.route('/delete-all').get((req, res) => {
    User.deleteMany( {} )
        .then(users => res.json(users))
        .catch(err => res.status(400).json('Error: ' + err));
});

/////////////////////////////////////////////////////////////////////


// Create new user
router.route('/add').post((req, res) => {
    const username = req.body.username;
    const details = req.body.details;

    const newUser = new User({username, 
        details
    });

    newUser.save()
        .then( () => res.json('User added!'))
        .catch( err => res.status(400).json('Error: ' + err));
});

module.exports = router;
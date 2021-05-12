/* 
    Route for dashboard

    Actions: 
    1. get all passwords (/)
    2. add password (/add)
    3. delete password (/add)
*/

const router = require('express').Router();
let User = require('../models/user.model');


// Get all passwords
router.route('/').get((req, res) => {
    const username = req.body.username;

    User.findOne( { "username" : { $eq: username } })
        .then( (user) => res.json(user))
        .catch( err => res.status(400).json('Error: ' + err));

});


// Add a new site and it's username & password
router.route('/add').post((req, res) => {
    const username = req.body.username;
    const site = req.body.site;
    const usernameSite = req.body.usernameSite;
    const password = req.body.password;
    const newData = {
        "site": site,
        "username": usernameSite,
        "password": password
    };

    User.findOne( { "username" : { $eq: username } })
        .then( (user) => {
            let details = user.details;   
            
            if( Array.isArray(details)){
                details.push(newData);
            }
            else{
                details = [newData];
            }
            user.details = details;
            
            user.save()
                .then(() => res.json(user))
                .catch( err => res.status(400).json('Error: ' + err));
            
        })
        .catch( err => res.status(400).json('Error: ' + err));

});


// Delete the details of an existing site, using website url & username
router.route('/delete').post((req, res) => {
    const username = req.body.username;
    const site = req.body.site;
    const usernameSite = req.body.usernameSite;

    User.findOne( { "username" : { $eq: username } })
        .then( (user) => {
            let details = user.details.filter( data => data.site !== site && data.username !== usernameSite );   
            user.details = details;
            
            user.save()
                .then(() => res.json(user))
                .catch( err => res.status(400).json('Error: ' + err));
            
        })
        .catch( err => res.status(400).json('Error: ' + err));

});

module.exports = router;
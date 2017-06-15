// Require the Express's Router so that we can create endpoints
const router = require('express').Router();
const fs = require('fs');
const filename = "./data/titleDB.txt";

router.get('/title', function(req, res) {
    
    fs.readFile(filename, 'utf8', function(err, data) {
        if (err) {
            console.log(err);
           res.sendStatus(500);
           return;
        }
        if ( !data ) {
            res.send({ title: "" });    // Send empty string if no data found in file
            return;
        }
        res.send(data);
    });

});

// Export the router so that the app can access it from the server.js file
module.exports = router;
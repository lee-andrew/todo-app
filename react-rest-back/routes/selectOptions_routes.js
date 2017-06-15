// Require the Express's Router so that we can create endpoints
const router = require('express').Router();
const fs = require('fs');
const filename = "./data/filterListDB.txt";

router.get('/filterList', function(req, res) {
    fs.readFile(filename, 'utf8', function(err, data) {
        if (err) {
            console.log(err);
            res.sendStatus(500);
            return;
        }
        if ( !data ) {
            res.send({ filterList : [] });  // Send empty array if no data found in file
            return;
        }
        res.send(data);
    });
});

// Export the router so that the app can access it from the server.js file
module.exports = router;
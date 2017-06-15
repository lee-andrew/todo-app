// Require the Express's Router so that we can create endpoints
const router = require('express').Router();
const fs = require('fs');
const filename = "./data/idCountDB.txt";

router.get('/idCount', function(req, res) {
    fs.readFile(filename, 'utf8', function(err, data) {
        if (err) {
            console.log(err);
            res.sendStatus(500);
            return;
        }
        if ( !data ) {
            res.send({idCount: ""});    // Send empty string if no data found in file
            return;
        }
        res.send(data);
    });

});

router.put('/idCount',  function(req, res) {
    var body = req.body;
    
    fs.readFile(filename, 'utf8', function(err, data) {
        if (err) {
            console.log(err);
            res.sendStatus(500);
            return;
        }
        if ( data ) {   // Non empty file
            let key = "idCount";
            dataJSON = JSON.parse(data);
            
            if ( key in body ) {  // Update only if key is found in the data file
                dataJSON[key] = body[key];
                fs.writeFile(filename, JSON.stringify(dataJSON), function(err) {
                    if (err) {
                        res.sendStatus(500);
                        return;
                    }
                        res.sendStatus(200);
                }); 
            }
        }
        else {  // Empty file
            res.sendStatus(204);
        }
    });
    
});

// Export the router so that the app can access it from the server.js file
module.exports = router;
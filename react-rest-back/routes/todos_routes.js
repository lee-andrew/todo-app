// Require the Express's Router so that we can create endpoints
const router = require('express').Router();
const fs = require('fs');
const filename = "./data/todosDB.txt";

router.get('/todos', function(req, res) {
    fs.readFile(filename, 'utf8', function(err, data) {
        if (err) {
            console.log(err);
           res.sendStatus(500);
           return;
        }
        if ( !data ) {
            res.send({ todos: [] });    // Send empty array if no data found in file
            return;
        }
        res.send(data);
    });
});

router.post('/todos',  function(req,res) {
    var body = req.body;
    
    fs.readFile(filename, 'utf8', function(err, data) {
        if (err) {
            console.log(err);
           res.sendStatus(500);
           return;
        }
        var dataJSON;
        if ( !data ) {
            dataJson = { todos: [] };   // Populate the file with an empty array object if no data
        }
        else {
            dataJSON = JSON.parse(data);
            
        }
        dataJSON.todos.push(body)   // Add new todo to array
        
        fs.writeFile(filename, JSON.stringify(dataJSON), function(err) {
            if (err) {
                res.sendStatus(500);
                return;
            }
            let inputDBPath = "./data/inputDB.txt"
            let inputJSON = {input: ""};    // Reset the input after adding new todo
            
            fs.writeFile(inputDBPath, JSON.stringify(inputJSON), function(err) {
                if (err) {
                    res.sendStatus(500);
                    return;
                }
                    res.sendStatus(200);
            }); 
        }); 
    });
    
});

router.put('/todos',  function(req, res) {
    var body = req.body;
    
    fs.readFile(filename, 'utf8', function(err, data) {
        if (err) {
            console.log(err);
            res.sendStatus(500);
            return;
        }
        if ( data ) {   // Non empty file
            let key = "todos";
            dataJSON = JSON.parse(data);
            var notFound = true;
            
            for( var i = 0; i < dataJSON[key].length; i++ ) {
                if (body.id === dataJSON[key][i].id) {
                    dataJSON[key][i] = body;
                    notFound = false;
                    break;
                }
            }
            if ( notFound) {
                res.sendStatus(404);
            }
            
            fs.writeFile(filename, JSON.stringify(dataJSON), function(err) {                    
                if (err) {
                    res.sendStatus(500);
                    return;
                }
                    res.sendStatus(200);
            }); 
            
        }
        else {  // Empty file
            res.sendStatus(204);
        }
    });
    
});

router.delete('/todosAllDone',  function(req,res) {

    fs.readFile(filename, 'utf8', function(err, data) {
        if (err) {
            console.log(err);
           res.sendStatus(500);
           return;
        }
        var dataJSON;
        if ( !data ) {
            dataJson = { todos: [] };   // Populate the file with an empty array object if no data
        
        }
        else {
            dataJSON = JSON.parse(data);
            
        }
        // Get filtered array with only active todos
        let filteredData = dataJSON.todos.filter( function(item, i) {
            return item.done === false;
        });
        dataJSON["todos"] = filteredData;
        
        fs.writeFile(filename, JSON.stringify(dataJSON), function(err) {
            if (err) {
                res.sendStatus(500);
                return;
            }
            res.sendStatus(200);
        }); 
    });
    
});

// Export the router so that the app can access it from the server.js file
module.exports = router;
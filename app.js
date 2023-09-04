const express = require('express');
const path = require('path');

const app = express();

const PORT = 5500;

app.use(express.static(path.join(__dirname,'public')));

try{
    app.get('/', function (req, res) {
        res.sendFile(__dirname + '/public/basics/index.html');
    });
    
    app.get('/basics/', function (req, res) {
        res.sendFile(__dirname+'/basics/index.html');
    });
    
    app.get('/call-apply-bind/', function (req, res) {
        res.sendFile(__dirname+'/basics/call-apply-bind/index.html');
    });

    app.get('/polyfill/', function (req, res) {
        res.sendFile(__dirname+'/basics/pollyfill/index.html');
    });

    app.get('/currying/', function (req, res) {
        res.sendFile(__dirname+'/basics/currying/index.html');
    });

    app.get('/debouncing/', function (req, res) {
        res.sendFile(__dirname+'/basics/debouncing/index.html');
    });
   
    app.get('/throttling/', function (req, res) {
        res.sendFile(__dirname+'/basics/throttling/index.html');
    });

    app.get('/event-bubbling-capturing/', function (req, res) {
        res.sendFile(__dirname+'/basics/event-bubbling-capturing/index.html');
    });
    app.get('/event-deligation/', function (req, res) {
        res.sendFile(__dirname+'/basics/event-deligation/index.html');
    });

    app.get('/prototype/', function (req, res) {
        res.sendFile(__dirname+'/basics/prototype/index.html');
    });

    /**
     * Advanced start
     */
    app.get('/call-stack/', function (req, res) {
        res.sendFile(__dirname+'/public/advanced/call-stack/index.html');
    });
    app.get('/lexical-environment/', function (req, res) {
        res.sendFile(__dirname+'/public/advanced/lexical-environment/index.html');
    });

    app.get('/let-const/', function (req, res) {
        res.sendFile(__dirname+'/public/advanced/let-const/index.html');
    });
    
    app.get('/block-scope-shadowing/', function (req, res) {
        res.sendFile(__dirname+'/public/advanced/block-scope-shadowing/index.html');
    });

    app.get('/closures/', function (req, res) {
        res.sendFile(__dirname+'/public/advanced/closures/index.html');
    });


}
catch(error){
    console.log(error);
}







app.listen(PORT,()=>{
    console.log(`Server is running at port ${PORT}`);
});
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

    app.get('/currying/', function (req, res) {
        res.sendFile(__dirname+'/basics/currying/index.html');
    });
}
catch(error){
    console.log(error);
}







app.listen(PORT,()=>{
    console.log(`Server is running at port ${PORT}`);
});
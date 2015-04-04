var express = require("express");
var path = require('path');
var app = express();

app.get('/', function(request, response){
  response.send("<h1>Hello Express</h1>");
})
app.use(express.static(path.join(__dirname, "./static")));

app.set('vews', __dirname + '/views');
app.set('view engine', 'ejs');


app.get("/users", function (request, response){
    // hard-coded user data
    var users_array = [
        {name: "Michael", email: "michael@codingdojo.com"},
        {name: "Jay", email: "jay@codingdojo.com"},
        {name: "Rory", email: "rory@codingdojo.com"},
        {name: "Andrew", email: "andrew@codingdojo.com"}
    ];
    response.render('users', {users: users_array});
})


app.listen(8000, function(){
  console.log("listening on port 8000");
})

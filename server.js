//Install express server
const express = require('express');
const path = require('path');

const app = express();

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist/angular-starter'));

app.get('/*', function(req,res) {
    
res.sendFile(path.join(__dirname+'/dist/angular-starter/index.html'));
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "https://sixth-man-app.herokuapp.com/");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.header(
      "Access-Control-Allow-Header",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
next();
});
  
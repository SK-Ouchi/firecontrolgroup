const express = require('express');
var path = require('path');


const app = express();
const port = process.env.PORT || 3000;
const frontEnd = __dirname + '/../frontend';

// Set views folder as root
app.use(express.static(path.join(frontEnd + '/views')));

// Allow front-end access to node_modules folder
app.use('/scripts', express.static(path.join(frontEnd + '/node_modules/')));

app.use('/assets', express.static(path.join(frontEnd + '/public/')));

//app.use((req, res) => res.sendFile((__dirname + '/../frontend/views/index.html')));

app.get('/', function(req, res) {
  res.sendFile('index.html');
});

// Listen for HTTP requests on port 3000
app.listen(port, () => {
    console.log('listening on %d', port);
    console.log(__dirname);
  });

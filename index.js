import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import path from 'path';
// init project
dotenv.config();
var app = express();
const __dirname = path.resolve();
// cors
app.use(cors({ optionsSuccessStatus: 200 })); // some legacy browsers choke on 204
// static files
app.use(express.static('public'));
// root endpoint
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '/views/index.html'));
});
// endpoint
app.get('/api/whoami', (req, res) => {
  res.send({
    ipaddress: req.ip,
    software: req.headers['user-agent'],
    languages: req.headers['accept-language']
  });
})

// listen for requests :)
var listener = app.listen(process.env.PORT || 3000, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});

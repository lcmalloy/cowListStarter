const express = require('express');
const dbFunction = require('../database/mysql/index.js');
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
})
let db;

const path = require('path');

const PORT = 3000;
const app = express();
app.use(express.json());

app.use(express.static(path.join(__dirname, '..', 'public')));


app.get('/api/retrieve', (req, res) => {
  dbFunction.retrieveData((err, result) => {
    if(err) {
      res.send(err);
    } else {
      res.send(result);
    }
  })
})

app.post('/api/create', (req,res) => {
  dbFunction.sendData(req.body, (err, result) => {
    if(err) {
      res.send(err);
    } else {
      res.send(result);
    }
  })
})

app.listen(PORT, () => {
  console.log(`Server listening at localhost:${3000}!`);
    readline.question(`Choose your db: (mongo or mysql)\n>>>>>`, choice=>{
      if(choice==='mongo') {
        console.log('Your db is Mongo');
        db = require('../database/mongo');
      } else if(choice === 'mysql') {
        console.log('Your db is mysql');
        db = require('../database/mysql');
      } else {
        console.log('Stop node, restart and try again, valid options are mysql and mongo')
      }
    })
});

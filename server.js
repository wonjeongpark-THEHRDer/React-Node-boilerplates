const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;
const firebase = require('firebase')
// import admin from './admin'
// let db = admin.firestore();

const config = {
    firebaseconfig
}

firebase.initializeApp(config);
var db = firebase.firestore();
global.db = db;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/hello', (req, res) => {
res.send({ message: 'Hello Express!' });
});

//EventEmitter 상속 
// util.inherits(MyObj, EventEmitter);
// var myObj = new MyObj();
// myObj.setMaxListeners(20);

const userInsert = require("./routes/userInsert");
app.use("/userInsert", userInsert);

const convert = require('./routes/convert');
app.use('/convert', convert);

const userSerach = require('./routes/userSearch')
app.use('/userSearch', userSerach)




app.listen(port, () => console.log(`Listening on port ${port}`));
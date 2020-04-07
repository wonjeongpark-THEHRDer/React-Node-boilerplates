const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;
// const firebase = require('firebase')
// import admin from './admin'
// let db = admin.firestore();

// const config = {
//     firebaseconfig
// }

// firebase.initializeApp(config);
// var db = firebase.firestore();
// global.db = db;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/hello', (req, res) => {
res.send({ message: 'Hello Express!' });
});

const userSerach = require('./routes/userSearch')
app.use('/userSearch', userSerach)




app.listen(port, () => console.log(`Listening on port ${port}`));
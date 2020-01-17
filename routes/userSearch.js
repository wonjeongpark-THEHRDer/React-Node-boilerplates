const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
  var studentSearchId = req.query.studentSearchId
  var yearId = req.query.yearId
  await db.collection("loginInfo").doc(yearId).collection("students").doc(studentSearchId).get()
  .then(doc => {
    if (!doc.exists) {
      console.log('No such document!');
    } else {
      let result = doc.data()
      console.log('Document data:', result);
      res.json(result);
    }
  })
  .catch(err => {
    console.log('Error getting document', err);
  });  
});

module.exports = router;
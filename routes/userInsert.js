const express = require("express");
const router = express.Router();


router.post("/", async (req, res) => {
  var yearId = req.query.yearId
  var studentId = req.body.studentId
  let docRef = db.collection("loginInfo").doc(yearId).collection("students").doc(studentId);
  let result = await docRef.set(req.body);
  res.send(result);
});
module.exports = router;

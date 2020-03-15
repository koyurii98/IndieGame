var express = require('express');
var router = express.Router();
let configs = require("../bin/config");
let jwt = require("jsonwebtoken");

/* GET home page. */
router.get('/', function(req, res, next) {
    res.send("hello world")
});

// -------------------- token verify --------------------
router.get('/tokenVerify', (req,res)=>{
    try {
        const token = req.headers['x-access-token'] || req.query.token;
        const getToken = jwt.verify(token, configs.secretKey);
        console.log("token verify");
        res.send(getToken);
    } catch(err) {
        console.log("token verify Api err " + err);
        res.send("err");
    }
  });
  // -------------------- ********** --------------------

module.exports = router;
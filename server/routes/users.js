var express = require('express');
var router = express.Router();
let models = require("../models");

// db setting --------------------
let User = models.user;


// db router --------------------
router.get('/all', async(req,res,next) => {
    let result = null;
    try {
        result = await User.findAll();
    } catch(err) {
        console.log(err)
        result = "응답 실패";
    }
    res.send(result);
});

module.exports = router;
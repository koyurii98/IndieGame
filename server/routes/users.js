var express = require('express');
var router = express.Router();
let models = require("../models");
let jwt = require("jsonwebtoken");
let configs = require("../bin/config")

let User = models.user;

router.get('/all', async(req,res,next) => {
    try {
        const result = await User.findAll();
        res.send(result);
    } catch(err) {
        console.log("users all err : " + err)
    }
});

router.get('/one', async(req,res,next) => {
    try {
        const result = await User.findOne({
            where : {
                userId : req.query.userId,
            }
        });
        res.send(result);
    } catch(err) {
        console.log("users one err : " + err)
    }
});

router.post('/verify', async(req,res,next) => {
    let verifyUsers = null;
    try {
        const result = await User.findOne({
            where : {
                userId : req.body.userId,
            }
        });
        if(result.dataValues && result.dataValues.userPass === req.body.userPass) {
            verifyUsers = getToken(result.dataValues);
        }
    } catch(err) {
        console.log("users one err : " + err)
    }
    res.send(verifyUsers);
});

function getToken(data){
    try {
        const getToken = jwt.sign({ userId : data.userId, }, configs.secretKey, { expiresIn : '1m' });
        return getToken;
    } catch(err) {
        console.log("token sign err : " + err);
    }
}

router.post('/insert', async(req,res,next) => {
    let result = true;
    try {
        console.log(req.body)
        await User.findOrCreate({
            where : {
                userId : req.body.userId,
            },
            defaults : {
                userId : req.body.userId,
                userPass : req.body.userPass,
                userEmail : req.body.userEmail,
                userPhone : req.body.userPhone,
                userNum : req.body.userNum,
            }
        })
    } catch(err) {
        console.log("users insert err : " + err)
        result = false;
    }
    res.send(result);
});

router.put('/update', async(req,res,next) => {
    let result = true;
    try {
        await User.update({
            userId : req.body.userId,
            userPass : req.body.userPass,
            userEmail : req.body.userEmail,
            userPhone : req.body.userPhone,
            userNum : req.body.userNum,
            },{
            where : {
                userId : req.body.userId,
            },
        });
    } catch(err) {
        console.log("users all err : " + err)
        result = false;
    }
    res.send(result);
});

router.delete('/delete', async(req,res,next) => {
    let result = true;
    try {
        await User.destroy({
            where : {
                userId : req.query.userId,
            }
        });
    } catch(err) {
        console.log("users all err : " + err)
        result = false;
    }
    res.send(result);
});

module.exports = router;
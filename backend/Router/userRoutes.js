const express = require('express');

const router = express.Router();

const { 
    fetchUserData,
    updateBalance
} = require('../Controller/userController');


router.post('/fetch-user-data', fetchUserData);


router.post('/update-balance', updateBalance);


module.exports = router;
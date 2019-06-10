const express = require('express');
const router = express.Router();

// @route Get api/users
// @desc Test Route
// @access Public
router.get('/', (req, res) => res.send('User Route'));


// @route Post api/users
// @desc Register user (create user)
// @access Public
// router.post('/register', (req, res) => {
//     console.log(req.body)
//     res.send('User Route'))
// });

module.exports = router;
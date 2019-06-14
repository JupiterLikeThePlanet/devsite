const express = require('express');
const router = express.Router();

// https://github.com/express-validator/express-validator
// DOCUMENTATION: https://express-validator.github.io/docs/
const {check, validationResult} = require('express-validator/check')


// @route Get api/users
// @desc Test Route
// @access Public
// router.get('/', (req, res) => res.send('User Route'));

// @route Get api/users
// @desc Register User
// @access Public
router.post('/',[
    check('name', 'Name is required')
      .not()
      .isEmpty(),
    check('email', 'Please include a valid email').isEmail(),
    check(
      'password',
      'Please enter a password with 6 or more characters'
    ).isLength({ min: 6 })
], (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() })
        }
        console.log(req.body);

        

        res.send('User Route');
    }
);




// @route Post api/users
// @desc Register user (create user)
// @access Public
// router.post('/register', (req, res) => {
//     console.log(req.body)
//     res.send('User Route'))
// });

module.exports = router;
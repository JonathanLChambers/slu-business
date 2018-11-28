var express = require('express');
var router = express.Router();
var jwt = require('express-jwt');
var auth = jwt({
  secret: 'sha512',
  userProperty: 'payload'
});

var ctrlProfile = require('../controllers/profile');
var ctrlAuth = require('../controllers/authentication');
var ctrlFaculty = require('../controllers/faculty');


// profile
router.get('/profile', auth, ctrlProfile.profileRead);
router.get('/faculty', ctrlFaculty.Getfaculty);
router.get('/faculty/:email',ctrlFaculty.facultyByEmail)
router.delete('/faculty/:email', ctrlFaculty.Delfaculty);
router.put('/faculty/:email', ctrlFaculty.Upfaculty);


// authentication
router.post('/register', ctrlAuth.register);
router.post('/login', ctrlAuth.login);
router.post('/faculty', ctrlFaculty.faculty);

module.exports = router;

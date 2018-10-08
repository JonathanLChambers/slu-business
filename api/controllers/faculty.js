var mongoose = require('mongoose');
var Faculty = mongoose.model('Faculty');


module.exports.faculty = function(req, res) {



    var faculty = new Faculty();
  
    faculty.name = req.body.name;
    faculty.email = req.body.email;
    faculty.bio = req.body.bio;
    faculty.schedule = req.body.schedule;
  
  
  };
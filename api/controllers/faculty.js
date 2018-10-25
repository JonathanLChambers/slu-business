var mongoose = require('mongoose');
var Faculty = mongoose.model('Faculty');



  module.exports.Getfaculty = function(req, res) {
  Faculty.find(function(err,Faculty){
  res.status(200).send(Faculty);
  });
};

module.exports.faculty = function(req, res) {

  var faculty = new Faculty();

  faculty.name = req.body.name;
  faculty.email = req.body.email;
  faculty.bio = req.body.bio;
  faculty.schedule = req.body.schedule;

  faculty.save(function(err) {

    res.status(200);
    res.json(faculty);
  });
};
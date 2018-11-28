var mongoose = require('mongoose');
var Faculty = mongoose.model('Faculty');



  module.exports.Getfaculty = function(req, res) {
  Faculty.find(function(err,Faculty){
  res.status(200).send(Faculty);
  });
};

module.exports.faculty = function(req, res) {

  var faculty = new Faculty();

  faculty.firstName = req.body.firstName;
  faculty.lastName = req.body.lastName;
  faculty.email = req.body.email;
  faculty.bio = req.body.bio;
  faculty.schedule = req.body.schedule;

  faculty.save(function(err) {

    res.status(200);
    res.json(faculty);
  });
};


module.exports.Delfaculty = function (req, res) {
  Faculty.findOneAndRemove({email: req.params.email}, function (err, doc) {
    if(err) console.log(err);
      res.status(200).send(doc);
  })
};

module.exports.Upfaculty = function (req, res) {
  Faculty.findOneAndUpdate({email: req.params.email}, req.body, function (err, doc) {
    if(err) console.log(err);
      res.status(200).send(doc);
  })
};

module.exports.facultyByEmail = function (req, res) {
  Faculty.findOne({email: req.params.email}, function(err,faculty){
    // if(err)return handleError(err);
    console.log(faculty.bio)
    res.status(200).send(faculty);
  })
  // Faculty.findByIdAndUpdate(req.params.id, function (err) {
  //     res.status(200).send(Faculty);
  // })
};



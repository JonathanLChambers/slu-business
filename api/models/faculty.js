var mongoose = require( 'mongoose' );


var facultySchema = new mongoose.Schema({
    email: {
      type: String,
      unique: true,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    bio: {
      type: String,
      required: false
    },
      schedule: {
      type: String,
      required: false
    },
  
  });

mongoose.model('Faculty', facultySchema);
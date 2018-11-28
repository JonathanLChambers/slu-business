var mongoose = require( 'mongoose' );


var facultySchema = new mongoose.Schema({
    firstName: {
      type: String,
      required: true
    },
    lastName: {
      type: String,
      required: true
    },
    email: {
      type: String,
      unique: true,
      required: true
    },
    bio: {
      type: String,
      required: false
    },
      schedule: {
      type: Array,
      required: false
    },
  
  });

mongoose.model('Faculty', facultySchema);
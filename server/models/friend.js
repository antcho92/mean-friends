console.log('friends model');
var mongoose = require('mongoose');
// build your friend schema and add it to the mongoose.models

var friendSchema = new mongoose.Schema({
  firstName: {type: String, required: true},
  lastName: {type: String, required: true},
  birthday: {type: Date, required: true}
}, {timestamps: true})

mongoose.model('Friend', friendSchema);

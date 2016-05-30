var mongoose = require('mongoose'),
   Schema = mongoose.Schema;

var profileSchema = new Schema({
   name: "String",
   actName: "String",
   location: "String",
   age: "Number",
   genre: "String"
 });

var Profile = mongoose.model('Profile', profileSchema);

module.exports = Profile;


var User = require('../models/user.profile.model');
var config = require('../../config');
module.exports={


	createUser:function(req,res){

 var user = new User(); // create a new instance of the User model
 user.name = req.body.name; // set the users name (comes from the request)
 user.username = req.body.username; // set the users username (comes from the request)
 user.password = req.body.password; // set the users password (comes  from the request)

 user.save(function(err) {
 if (err) res.send(err);
 // return a message
res.json({ message: 'User created!' });
 });
	
},

getUsers:function(req, res) {
	var user = new User();
 User.find(function(err, users) {
 if (err) res.send(err);

 // return the users
 res.json(users);
 });
},
 
 getSingleUser:function(req, res) {
    User.findById(req.params.user_id, function(err, user) {
 if (err) res.send(err);

 // return that user
 res.json(user);
 });
 },

  updateUser:function(req, res) {
 User.findById(req.params.user_id, function(err, user) {

 if (err) res.send(err);

// set the new user information if it exists in the request
 if (req.body.name) user.name = req.body.name;
 if (req.body.username) user.username = req.body.username;
 if (req.body.password) user.password = req.body.password;

 // save the user
 user.save(function(err) {
 if (err) res.send(err);

 // return a message
 res.json({ message: 'User updated!' });
 });

 });
 },

 deleteUser:function(req, res) {
 User.remove({
 _id: req.params.user_id
}, function(err, user) {
 if (err) res.send(err);


 res.json({ message: 'Successfully deleted' });
 });
 },

 




}
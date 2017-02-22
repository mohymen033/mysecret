var User = require('../models/user.profile.model');
// var jwt = require('jsonwebtoken');
var config = require('../../config');
var jwt        = require('jsonwebtoken');
var auth=require('../controllers/user.authentication.controller');
// super secret for creating tokens
//var superSecret = config.secret;
var userProfileController=require('../controllers/user.profile.controller');

 module.exports = function(app, express) {

 var apiRouter = express.Router();
 apiRouter.route('/users')

// create a user (accessed at POST http://localhost:8080/users)
 .post(userProfileController.createUser)

 

 // get all the users (accessed at GET http://localhost:8080/api/users)
 .get(userProfileController.getUsers);
 

apiRouter.route('/users/:user_id')

 // get the user with that id
 .get(userProfileController.getSingleUser)

 // update the user with this id
 .put(userProfileController.updateUser)

 // delete the user with this id
 .delete(userProfileController.deleteUser);




	// route to authenticate a user (POST http://localhost:8080/api/authenticate)
	apiRouter.route('/authenticate').post(auth.authenticateUserLogin);

	// route middleware to verify a token
	apiRouter.use(auth.verifyToken);








 return apiRouter;
};



/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

	vista: function(req, res){
	    oracleService.Query(
	      "SELECT * FROM RegistredUsers ",
	       // "FROM RegistredUsers ",
	      	function(err, result){
	        if (err) { 
	        	console.error(err.message); 
	        	return; 
	        }
	        var data = [];
	        //console.log(result);
	        //console.log('Todos los rows:', result.rows);
	        //console.log('Row en especifico: ', result.rows[0]);
	        console.log('Dato en especifico: ', result.rows[0][0]);
	        console.log('Numero de ITEMS: ', (result.rows).length);
	        for (var i = 0; i < (result.rows).length; i++ ){
	        	var id = result.rows[i][0];

	        	console.log(id);
	        	data.push({
	        		"id": result.rows[i][0],
	        		"name": result.rows[i][1], 
	        		"lastName": result.rows[i][2], 
	        		"userName": result.rows[i][3], 
	        		"email": result.rows[i][4], 
	        		"createdUser": result.rows[i][5], 
	        		"updatedUser": result.rows[i][6]
	        	});
	        };
	        console.log(data);
	        res.json(data);
	    });
	},
	listUsers: function(req, res){
		oracleService.Query(
	      "SELECT * FROM RegistredUsers ",
	       // "FROM RegistredUsers ",
	      	function(err, result){
	        if (err) { 
	        	console.error(err.message); 
	        	return; 
	        }
	        var data = [];
	        //console.log(result);
	        //console.log('Todos los rows:', result.rows);
	        //console.log('Row en especifico: ', result.rows[0]);
	        console.log('Dato en especifico: ', result.rows[0][0]);
	        console.log('Numero de ITEMS: ', (result.rows).length);
	        for (var i = 0; i < (result.rows).length; i++ ){
	        	var id = result.rows[i][0];

	        	console.log(id);
	        	data.push({
	        		"id": result.rows[i][0],
	        		"name": result.rows[i][1], 
	        		"lastName": result.rows[i][2], 
	        		"userName": result.rows[i][3], 
	        		"email": result.rows[i][4], 
	        		"createdUser": result.rows[i][5], 
	        		"updatedUser": result.rows[i][6]
	        	});
	        };
	        console.log(data);
			res.json(data);
		});
	},
	insert:function(req, res){
		console.log('Inserté');

		var userObj = {
			id: req.param('id'),
			name: req.param('name'),
			lastname: req.param('lastname'),
			username: req.param('username'),
			email: req.param('email')
		}

		var consulta = ("BEGIN\n"+ 
						"INSERT INTO REGISTREDUSERS\n"+
						"VALUES ("+ userObj.id +", \'" + userObj.name + "\', \'"+ userObj.lastname +"\', \'"+ userObj.username +"\', \'"+ userObj.email +"\', SYSDATE, SYSDATE);\n"+
						"COMMIT;\n"+
						"END;");

		console.log(consulta);

		oracleService.Query(
	      consulta,
	       // "FROM RegistredUsers ",
	      	function(err, result){
	        if (err) { 
	        	console.error(err.message); 
	        	return; 
	        }
	        res.redirect('user/table_user');
		});


		//console.log(userObj);

		//console.log(user);
	},
	show:function(req, res, next){

			console.log(user);
			res.view({user});
	}/*, 
 	edit:function(req, res, next){
		User.findOne(req.param('id'), function userFounded(err, user){
			if (err){
				return next(err);
			}
			if (!user){
				return next();
			}
			console.log(user);
			res.view({
				user:user
			});
		});
	}, 

	update:function(req, res, next){
		console.log('Update');

		var userObj = {
			name: req.param('name'),
			lastname: req.param('lastname'),
			username: req.param('username'),
			email: req.param('email')
		}

		console.log(userObj);
		User.update(req.param('id'), userObj, function userUpdated(err, user){
		if (err){
			console.log(err);
			req.session.flash={
				err:err
			}
			return res.redirect('user/' + req.param('id'));
		}

		res.redirect('user/table_user');
		});
	},

	delete:function(req, res, next){
		User.destroy(req.param('id'), function userDestroyed(err, user){
			console.log('Delete');
			if (err){
				console.log(err);
				return next(err);
			}
			res.redirect('user/table_user');
		});
	}*/
};


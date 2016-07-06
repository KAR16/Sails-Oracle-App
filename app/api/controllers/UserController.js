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
	        console.log('Users / Numero de ITEMS: ', (result.rows).length);
	        for (var i = 0; i < (result.rows).length; i++ ){

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
	        console.log('ListUsers / Numero de ITEMS: ', (result.rows).length);
	        for (var i = 0; i < (result.rows).length; i++ ){

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
	        res.redirect('user/show/' + userObj.id);
		});


		//console.log(userObj);

		//console.log(user);
	},
	show:function(req, res, next){

		oracleService.Query(
	      "SELECT * FROM RegistredUsers " +
	      "WHERE ID = "+ req.param('id') +"",
	      	function(err, result){
	        if (err) { 
	        	console.error(err.message); 
	        	return; 
	        }
	        var data = [];
	        console.log('Todos los rows:', result.rows);
	        for (var i = 0; i < (result.rows).length; i++ ){
	        	//Parseamos los datos y los insertamos en el array data
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

	        //Aqui mostramos la data final
	        console.log('Data de Show', data[0]);
	        data = data[0]; //Le damos el valor a la data
			res.view({data}); //Enviamos la data
		});
	}, 
 	edit:function(req, res, next){
		oracleService.Query(
	      "SELECT * FROM RegistredUsers " +
	      "WHERE ID = "+ req.param('id') +"",
	      	function(err, result){
	        if (err) { 
	        	console.error(err.message); 
	        	return; 
	        }
	        var data = [];
	        console.log('Todos los rows:', result.rows);
	        for (var i = 0; i < (result.rows).length; i++ ){
	        	//Parseamos los datos y los insertamos en el array data
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
	    	 data = data[0]; //Le damos el valor a la data
			res.view({data}); //Enviamos la data
		});

	}, 

	update:function(req, res, next){
		console.log('Update');

		var userObj = {
			id: req.param('id'),
			name: req.param('name'),
			lastname: req.param('lastname'),
			username: req.param('username'),
			email: req.param('email')
		}

		var consulta = ("BEGIN\n"+ 
						"UPDATE REGISTREDUSERS\n"+
						"SET NAME = \'" + userObj.name + "\', LASTNAME = \'"+ userObj.lastname +"\', USERNAME = \'"+ userObj.username +"\', EMAIL = \'"+ userObj.email +"\', UPDATEDUSER = SYSDATE\n"+
						"WHERE ID = "+ req.param('id') +";\n"+
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
	        res.redirect('user/show/' + userObj.id);
		});
	}/*,

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


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
	        	console.log(i);
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
	        	console.log(i);
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
	}
};


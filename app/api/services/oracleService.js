var oracledb = require('oracledb');

module.exports = {

	Query:function(string, callback){
		oracledb.getConnection(
	  {
	    user          : sails.config.oracle.user,
	    password      : sails.config.oracle.password,
	    connectString : sails.config.oracle.tns
	  },
	  function(err, connection)
	  {
	    if (err) { console.error(err.message); return; }
	 
	    connection.execute(
	      string,
	       // "FROM RegistredUsers ",
	      [],  // bind value for :id 
	      function(err, result)
	      {
	        if (err) { 
	        	console.error(err.message); 
	        	callback(err,result);
	        }else{
	        	callback(err,result);
	        }
	      });
	});
	}
};


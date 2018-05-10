var url = 'http://localhost:1337/';
var request = require('supertest')(url);

describe("",function(){
	it("login in the aplication", function(done){
		var hacer=true;
		if(hacer){
			done();
		}
				req.end(function(err,res){
    		if(err)
    		{
    			throw err;
    		}
    		console.log(res.text);
    		done();
    	})
	})
})
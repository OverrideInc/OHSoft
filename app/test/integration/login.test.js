var url = 'http://localhost:1337/';
var supertest = require('supertest')(url);

describe("",function(){
	it("login in the aplication", function(done){
		req=request.post("/api/v1/entrance/login");
		req.send({
			inputs:{
				correo:"spalduing12@gmail.com",
				password:"1234",
				rememberMe:0
			}
		})
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
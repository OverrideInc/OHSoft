var url = 'http://localhost:1337/';
var supertest = require('supertest')(url);

describe('uploadfiles.js', function() {

  describe('#uploadfiles()', function() {
    it('upload file to the app', function (done) {
    	req=request.post("/api/v1/documentation/uploadfiles");
    	req.send({
    		inputs: {
		name:"mision",

		file:"",

		anexo:,

		name: 
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
      // supertest(sails.hooks.http.app)
      // .post('/users/login')
      // .send({ name: 'test', password: 'test' })
      // .expect(302)
      // .expect('location','/my/page', done);
    });
  });

});
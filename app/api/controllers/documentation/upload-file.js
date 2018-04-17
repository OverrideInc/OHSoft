/**
 * Module dependencies
 */

// ...


/**
 * documentation/upload-files.js
 *
 * Upload files.
 */
module.exports = async function uploadFiles(req, res) {
	console.log("me cago en todo");
  	  req.file('file').upload({
				//maxBytes: 10000000
				dirname: require('path').resolve(sails.config.appPath, 'assets/images')
				
			},function whenDone(err, uploadedFiles){

				if(err){
					console.log(err);	
				} 

				if (uploadedFiles.length === 0){
	      			return res.badRequest('No file was uploaded');
	    		}
	    		
				return  res.ok();

				console.log('file(s) uploaded successfully!')
			});
  

};
/**
 * upload-files
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  
	uploadFile : function(req,res){
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
			return res.json({
    		message: uploadedFiles.length + ' file(s) uploaded successfully!'
    		
 			 });
			console.log('file(s) uploaded successfully!')
		});
	}
};
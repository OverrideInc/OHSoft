// /**
//  * upload-file
//  *
//  * @description :: Server-side actions for handling incoming requests.
//  * @help        :: See https://sailsjs.com/docs/concepts/actions
//  */

// module.exports = {


// 	uploadFile : 'upload file',

// 	description: 'This acction make all the work for upload files in the server',

// 	inputs:{
// 		file: {
// 			description: 'The file to upload in the server',
// 			type: 'file',
// 			required: true
// 		}
// 	},

// 	exits: {
// 		success: {
// 		responseType: 'view',
//         viewTemplatePath: 'pages/welcome'
// 		}
// 	},
// 	notFound: {
//         description: 'No user with the specified ID was found in the database.',
//         responseType: 'notFound'
//       },
  
// 	fn : function(inputs,exits){
// 		req.file('file').upload({
// 			maxBytes: 10000000;
// 			dirname: require('path').resolve(sails.config.appPath, 'assets/images');
			
// 		},function whenDone(err, uploadedFiles){

// 			if(err){
// 			console.log(err);	
// 			} 
// 			if (uploadedFiles.length === 0){
//       		return res.badRequest('No file was uploaded');
//     		}
// 			return res.json({
//     		message: uploadedFiles.length + ' file(s) uploaded successfully!'
//  			 });
// 		});
// 	}
// };
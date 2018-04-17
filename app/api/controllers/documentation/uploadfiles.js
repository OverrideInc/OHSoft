const fs = require('fs');


module.exports = {


  friendlyName: 'Uploadfiles',


  description: 'Uploadfiles',


  inputs: {
  	name: {
			required: true,
			type: 'string',
		},
		file: {
			require: true,
			type: 'string'
		}
  },


  exits: {
  	success:{
			description: 'Archivo subido correctamente.'
		},

		invalid: {
			responseType: 'badRequest',
			description: 'The provided fullName, password and/or email address are invalid.',
			extendedDescription: 'If this request was sent from a graphical user interface, the request ' +
				'parameters should have been validated/coerced _before_ they were sent.'
		},
  },


  fn: async function (inputs, exits) {
  	fs.writeFile('.tmp/public/' + me.nit + '/solo_una_prueba.jpeg', inputs.file.split(',')[1], 'base64', function(err){
			if(err) throw err;
			console.log('done');
		});
    return exits.success();

  }


};

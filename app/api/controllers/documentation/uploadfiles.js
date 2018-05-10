const fs = require('fs');


module.exports = {


	friendlyName: 'Uploadfiles',


	description: 'Uploadfiles',


	inputs: {

		file: {
			require: true,
			type: 'string'
		},

		anexo: {
			required: true,
			type: 'string'
		},

		nombre: {
			required: true,
			type: 'string',
		},

		nit: {
			required : true,
			type: 'string',
		}
	},


	exits: {

		success: {
			description: 'Archivo subido correctamente.'
		},

		invalid: {
			responseType: 'badRequest',
			description: 'The provided fullName, password and/or email address are invalid.',
			extendedDescription: 'If this request was sent from a graphical user interface, the request ' +
				'parameters should have been validated/coerced _before_ they were sent.'
		},

	},


	fn: async function (inputs, exits, req) {
		
		var dir = `assets/documents/${inputs.nit}`;
		// var dir = 'assets/documents/' + rc.nit;
		console.log(dir);
		if (!fs.existsSync(dir)) {
			fs.mkdirSync(dir);
		}

		dir += `/${inputs.anexo}`;

		if (!fs.existsSync(dir)) {
			fs.mkdirSync(dir);
		}
		// var select = document.getElementById("page-wrap");

		fs.writeFile(dir + '/' + inputs.nombre, inputs.file.split(',')[1], 'base64', function (err) {
			if (err) throw err;
			console.log('done');
		});
		return exits.success();
	}
};

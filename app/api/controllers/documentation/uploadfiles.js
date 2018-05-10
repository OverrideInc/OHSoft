const fs = require('fs');


module.exports = {


	friendlyName: 'Uploadfiles',


	description: 'Uploadfiles',


	inputs: {

		file: {
			require: true,
			type: 'string'
		},

		name: {
			required: true,
			type: 'string',
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

	},


	fn: async function (inputs, exits, req) {
		
		var dir = `assets/documents/${inputs.nit}`;

		if (!fs.existsSync(dir)) {
			fs.mkdirSync(dir);
		}

		dir += `/${inputs.anexo}`;

		if (!fs.existsSync(dir)) {
			fs.mkdirSync(dir);
		}

		var nombre = inputs.nombre + '.' + inputs.name.split('.')[1]

		dir += `/${nombre}`;

		console.log(dir);

		fs.writeFile(dir, inputs.file.split(',')[1], 'base64', function (err) {
			if (err) throw err;
			console.log('done');
		});
		return exits.success();
	}
};

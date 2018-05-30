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

		fileTypeNotSupported:{
			statusCode: 403,
			description: 'El tipo de archivo no es permitido por la app.'
		}

	},


	fn: async function (inputs, exits, req) {

		var ext = inputs.name.split('.')[1];

		if(ext != 'doc' && ext != 'docx' && ext != 'xls' &&
			ext != 'xlsx' && ext != 'ppt' && ext != 'pptx' &&
			ext != 'pdf' && ext != 'jpeg' && ext != 'jpg' &&
			ext != 'png' && ext != 'gif' && ext != 'bmp' &&
			ext != 'svg' && ext != 'txt'){
			return exits.fileTypeNotSupported();
		}
		
		var dir = `assets`;

		if (!fs.existsSync(dir)) {
			fs.mkdirSync(dir);
		}

		dir += `/documents`;

		if (!fs.existsSync(dir)) {
			fs.mkdirSync(dir);
		}
		dir += `/${inputs.nit}`


		if (!fs.existsSync(dir)) {
			fs.mkdirSync(dir);
		}

		dir += `/${inputs.anexo}`;
		if (!fs.existsSync(dir)) {
			fs.mkdirSync(dir);
		}

		var nombre = inputs.nombre + '.' + ext;
		dir += `/${nombre}`;


		fs.writeFile(dir, inputs.file.split(',')[1], 'base64', function (err) {
			if (err) throw err;
		});
		return exits.success();
	}
};

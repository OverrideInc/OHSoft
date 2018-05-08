module.exports = {


  friendlyName: 'Get anexos',


  description: '',


  inputs: {

  },


  exits: {
  	success:{

  	}

  },


  fn: async function (inputs, exits) {

    var _anexos= [
            { id: "anexo_0", nombre: "Anexo 0", cantidadAnexos: 0, 
            documentos:['Mision','Visión','Reseña historiga','Manual SG-SST'] },
            { id: "anexo_1", nombre: "Anexo 1", cantidadAnexos: 0, documentos:[] },
            { id: "anexo_2", nombre: "Anexo 2", cantidadAnexos: 0, documentos:[]},
            { id: "anexo_3", nombre: "Anexo 3", cantidadAnexos: 0, documentos:[] },
            { id: "anexo_4", nombre: "Anexo 4", cantidadAnexos: 0, documentos:[] },
            { id: "anexo_5", nombre: "Anexo 5", cantidadAnexos: 0, documentos:[] },
            { id: "anexo_6", nombre: "Anexo 6", cantidadAnexos: 0, documentos:[] },
            { id: "anexo_7", nombre: "Anexo 7", cantidadAnexos: 0, documentos:[] },
            { id: "anexo_8", nombre: "Anexo 8", cantidadAnexos: 0, documentos:[] },
            { id: "anexo_9", nombre: "Anexo 9", cantidadAnexos: 0, documentos:[] },
            { id: "anexo_10", nombre: "Anexo 10", cantidadAnexos: 0, documentos:[] },
            { id: "anexo_11", nombre: "Anexo 11", cantidadAnexos: 0, documentos:[] },
            { id: "anexo_12", nombre: "Anexo 12", cantidadAnexos: 0, documentos:[] },
            { id: "anexo_13", nombre: "Anexo 13", cantidadAnexos: 0, documentos:[] },
            { id: "anexo_14", nombre: "Anexo 14", cantidadAnexos: 0, documentos:[] },
            { id: "anexo_15", nombre: "Anexo 15", cantidadAnexos: 0, documentos:[] },
            { id: "anexo_16", nombre: "Anexo 16", cantidadAnexos: 0, documentos:[] },
            { id: "anexo_17", nombre: "Anexo 17", cantidadAnexos: 0, documentos:[] },
            { id: "anexo_18", nombre: "Anexo 18", cantidadAnexos: 0, documentos:[] },
            { id: "anexo_19", nombre: "Anexo 19", cantidadAnexos: 0, documentos:[] },
            { id: "anexo_20", nombre: "Anexo 20", cantidadAnexos: 0, documentos:[] },
            { id: "anexo_21", nombre: "Anexo 21", cantidadAnexos: 0, documentos:[] },
        ];

        const obj={

        	anexos: _anexos
        }
        return exits.success(obj);

  }


};

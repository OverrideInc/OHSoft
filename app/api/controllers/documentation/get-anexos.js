const fs = require('fs');

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
    var _nit = this.req.query['nit'];
    var _anexos= [
            { id: "anexo_0", nombre: "Anexo 0", doc_count: 0, 
            documentos:['Misión','Visión','Reseña histórica','Manual SG-SST'] },
            { id: "anexo_1", nombre: "Anexo 1", doc_count: 0, documentos:[] },
            { id: "anexo_2", nombre: "Anexo 2", doc_count: 0, documentos:[]},
            { id: "anexo_3", nombre: "Anexo 3", doc_count: 0, documentos:[] },
            { id: "anexo_4", nombre: "Anexo 4", doc_count: 0, documentos:[] },
            { id: "anexo_5", nombre: "Anexo 5", doc_count: 0, documentos:[] },
            { id: "anexo_6", nombre: "Anexo 6", doc_count: 0, documentos:[] },
            { id: "anexo_7", nombre: "Anexo 7", doc_count: 0, documentos:[] },
            { id: "anexo_8", nombre: "Anexo 8", doc_count: 0, documentos:[] },
            { id: "anexo_9", nombre: "Anexo 9", doc_count: 0, documentos:[] },
            { id: "anexo_10", nombre: "Anexo 10", doc_count: 0, documentos:[] },
            { id: "anexo_11", nombre: "Anexo 11", doc_count: 0, documentos:[] },
            { id: "anexo_12", nombre: "Anexo 12", doc_count: 0, documentos:[] },
            { id: "anexo_13", nombre: "Anexo 13", doc_count: 0, documentos:[] },
            { id: "anexo_14", nombre: "Anexo 14", doc_count: 0, documentos:[] },
            { id: "anexo_15", nombre: "Anexo 15", doc_count: 0, documentos:[] },
            { id: "anexo_16", nombre: "Anexo 16", doc_count: 0, documentos:[] },
            { id: "anexo_17", nombre: "Anexo 17", doc_count: 0, documentos:[] },
            { id: "anexo_18", nombre: "Anexo 18", doc_count: 0, documentos:[] },
            { id: "anexo_19", nombre: "Anexo 19", doc_count: 0, documentos:[] },
            { id: "anexo_20", nombre: "Anexo 20", doc_count: 0, documentos:[] },
            { id: "anexo_21", nombre: "Anexo 21", doc_count: 0, documentos:[] },
        ];
    var userRecord = await User.findOne({
        id: this.req.session.userId
    });

    if(!_nit){
      _nit = userRecord.nit;
    }

    _anexos.forEach((anexo) =>{
       var listAnexos = [];
        const dir = `assets/documents/${_nit}/${anexo.id}`;
        if (fs.existsSync(dir)) {
            fs.readdirSync(dir).forEach(file => {
              var f_name = file.split('.')[0];
              var flag = true;
              listAnexos.forEach((filename) =>{
                if(filename.nombre == f_name){
                  flag = false;
                }
              });
              if(flag){
                  listAnexos.push({
                      nombre : f_name
                  });
              }
            });
        }
        anexo.doc_count = listAnexos.length;
    })
    

    const obj = {
     	anexos: _anexos,
      nit : userRecord.nit
    }
    
    return exits.success(obj);

  }


};

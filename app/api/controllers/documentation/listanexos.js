const fs = require('fs');

module.exports = {


    friendlyName: 'Listanexos',


    description: 'Listanexos documentation.',

    exits: {
        success: {
        }
    },


    fn: async function (inputs, exits) {
        const anexoNombre = this.req.query['anexo'];
        const nit = this.req.query['nit'];

        //var rc = await User.findOne({
        //    id: this.req.session.userId,
        //});


          var userRecord = await User.findOne({
            id: this.req.session.userId
         });

        var listAnexos = [];
        const dir = `assets/documents/${nit}/${anexoNombre}`;
        console.log('path = ' + dir);
        if (fs.existsSync(dir)) {
            fs.readdirSync(dir).forEach(file => {
                listAnexos.push({
                    url: `/documents/${nit}/${anexoNombre}/${file}`,
                    descripcion: file
                });
            });
        }

        let cantidadMaxima = 4;

        /*Logica de cantidad por anexo*/
        if (anexoNombre === 'anexo_0') {
            cantidadMaxima = 3;
        }

        var _anexos= [
            { id: "anexo_0", nombre: "Anexo 0", cantidadAnexos: 0, 
            documentos:[{nombre : 'Mision'},{nombre : 'Visión'},{nombre:'Reseña historiga'},{nombre:'Manual SG-SST'}] },
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


        var _docs = [];

        _anexos.forEach((anexo) =>{
            if(anexo.id == anexoNombre){
                _docs = anexo.documentos;
            }
        })

        const objRetorno = {
            nombre: anexoNombre,
            descripcion: 'Aca hay que buscar la descripción',
            documentos: listAnexos,
            cantidadMaxima: cantidadMaxima,
            docs : _docs,
            nit : userRecord.nit
        }

        console.log(objRetorno.docs);
        return exits.success(objRetorno);
    }


};

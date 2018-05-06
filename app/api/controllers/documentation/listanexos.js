const fs = require('fs');

module.exports = {


    friendlyName: 'Listanexos',


    description: 'Listanexos documentation.',

    exits: {
        success: {
        }
    },


    fn: async function (inputs, exits) {
        const anexoNombre = this.req.query['anexo']
        var rc = await User.findOne({
            id: this.req.session.userId,
        });

        var listAnexos = [];
        const dir = `assets/documents/${rc.nit}/${anexoNombre}`;

        if (fs.existsSync(dir)) {
            fs.readdirSync(dir).forEach(file => {
                listAnexos.push({
                    url: `/documents/${rc.nit}/${anexoNombre}/${file}`,
                    descripcion: file
                });
            });
        }

        let cantidadMaxima = 4;

        /*Logica de cantidad por anexo*/
        if (anexoNombre === 'anexo_0') {
            cantidadMaxima = 3;
        }

        const objRetorno = {
            nombre: anexoNombre,
            descripcion: 'Aca hay que buscar la descripción',
            documentos: listAnexos,
            cantidadMaxima: cantidadMaxima
        }
        return exits.success(objRetorno);
    }


};

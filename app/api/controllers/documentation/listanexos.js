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

    var _anexos= [
            { id: "anexo_0", nombre: "Anexo 0: Introducción al SG-SST", cantidadAnexos: 0, 
            documentos:[{nombre : 'Misión'},
                        {nombre : 'Visión'},
                        {nombre:'Reseña histórica'},
                        {nombre:'Manual SG-SST'}] },
            { id: "anexo_1", nombre: "Anexo 1: Políticas de seguridad y salud", cantidadAnexos: 0,
            documentos:[{nombre : 'Política de seguridad y salud en el trabajo'},
                          {nombre : 'Política de no fumadores'}] },
            { id: "anexo_2", nombre: "Anexo 2: Recurso", cantidadAnexos: 0, 
            documentos:[{nombre : 'Inversión'},
                        {nombre : 'Recursos'}]},
            { id: "anexo_3", nombre: "Anexo 3: Responsable SG-SST", cantidadAnexos: 0, 
            documentos:[{nombre : 'Representante por la dirección'}] },
            { id: "anexo_4", nombre: "Anexo 4: Roles y Responsabilidades", cantidadAnexos: 0, 
            documentos:[{nombre : 'Funciones y cargos de los empleados'},
                        {nombre : 'Lista de chequeo: Cumplimiento de Responsabilidades'}] },
            { id: "anexo_5", nombre: "Anexo 5: Organigrama", cantidadAnexos: 0, 
            documentos:[{nombre : 'Organigrama'}] },
            { id: "anexo_6", nombre: "Anexo 6:  Diagnóstico de condiciones de salud", cantidadAnexos: 0, 
            documentos:[{nombre : 'Profesiograma'},
                        {nombre : 'Variables de reporte de condiciones'},
                        {nombre : 'Diagnóstico de condiciones'}] },
            { id: "anexo_7", nombre: "Anexo 7: Perfil sociodemográfico", cantidadAnexos: 0, 
            documentos:[{nombre : 'Perfil sociodemografico y morbilidad'}] },
            { id: "anexo_8", nombre: "Anexo 8: Identificación de peligros", cantidadAnexos: 0, 
            documentos:[{nombre : 'Matriz de riesgos'},
                        {nombre : 'Notificación de riesgos'},
                        {nombre : 'Instructivo'},
                        {nombre : 'GTC 45 2012'}] },
            { id: "anexo_9", nombre: "Anexo 9: Evaluación", cantidadAnexos: 0, 
            documentos:[{nombre : 'Evaluación inicial del SG-SST'}] },
            { id: "anexo_10", nombre: "Anexo 10: Procesos críticos", cantidadAnexos: 0, 
            documentos:[{nombre : 'Lista para emitir permisos de trabajo de alto riesgo'}] },
            { id: "anexo_11", nombre: "Anexo 11: Reglamento de HySI", cantidadAnexos: 0, 
            documentos:[{nombre : 'Reglamento higiene y seguridad'},
                        {nombre : 'Consideraciones por RHSI'}] },
            { id: "anexo_12", nombre: "Anexo 12: Plan de trabajo", cantidadAnexos: 0, 
            documentos:[{nombre : 'Plan de trabajo'},
                        {nombre : 'Consideraciones del plan de trabajo'}] },
            { id: "anexo_13", nombre: "Anexo 13: Formación (capacitaciones, inducción y re-inducción de sistema)"
            , cantidadAnexos: 0, documentos:[{nombre : 'Plan de formación'},
                                        {nombre : 'Registro de capacitaciones'},
                                        {nombre : 'Instructivo de capacitación'},
                                        {nombre : 'Evaluación de la capacitación'},
                                        {nombre : 'Re inducción'}] },
        ];
        var _docs = [];

        var _nombre;

        _anexos.forEach((anexo) =>{
            if(anexo.id == anexoNombre){
                _docs = anexo.documentos;
                _nombre = anexo.nombre;
            }
        });

        const objRetorno = {
            nombre: _nombre,
            descripcion: 'Aca debe ir la descripción detallada del anexo y sus documentos',
            documentos: listAnexos,
            docs : _docs,
            nit : userRecord.nit
        }

        console.log(objRetorno.docs);
        return exits.success(objRetorno);
    }


};

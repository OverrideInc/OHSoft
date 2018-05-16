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
            { id: "anexo_0", nombre: "Anexo 0: Introducción al SG-SST", doc_count: 0, 
            documentos:[{nombre : 'Misión'},
                        {nombre : 'Visión'},
                        {nombre:'Reseña histórica'},
                        {nombre:'Manual SG-SST'}] },
            { id: "anexo_1", nombre: "Anexo 1: Políticas de seguridad y salud", doc_count: 0,
            documentos:[{nombre : 'Política de seguridad y salud en el trabajo'},
                          {nombre : 'Política de no fumadores'}] },
            { id: "anexo_2", nombre: "Anexo 2: Recurso", doc_count: 0, 
            documentos:[{nombre : 'Inversión'},
                        {nombre : 'Recursos'}]},
            { id: "anexo_3", nombre: "Anexo 3: Responsable SG-SST", doc_count: 0, 
            documentos:[{nombre : 'Representante por la dirección'}] },
            { id: "anexo_4", nombre: "Anexo 4: Roles y Responsabilidades", doc_count: 0, 
            documentos:[{nombre : 'Funciones y cargos de los empleados'},
                        {nombre : 'Lista de chequeo: Cumplimiento de Responsabilidades'}] },
            { id: "anexo_5", nombre: "Anexo 5: Organigrama", doc_count: 0, 
            documentos:[{nombre : 'Organigrama'}] },
            { id: "anexo_6", nombre: "Anexo 6:  Diagnóstico de condiciones de salud", doc_count: 0, 
            documentos:[{nombre : 'Profesiograma'},
                        {nombre : 'Variables de reporte de condiciones'},
                        {nombre : 'Diagnóstico de condiciones'}] },
            { id: "anexo_7", nombre: "Anexo 7: Perfil sociodemográfico", doc_count: 0, 
            documentos:[{nombre : 'Perfil sociodemografico y morbilidad'}] },
            { id: "anexo_8", nombre: "Anexo 8: Identificación de peligros", doc_count: 0, 
            documentos:[{nombre : 'Matriz de riesgos'},
                        {nombre : 'Notificación de riesgos'},
                        {nombre : 'Instructivo'},
                        {nombre : 'GTC 45 2012'}] },
            { id: "anexo_9", nombre: "Anexo 9: Evaluación", doc_count: 0, 
            documentos:[{nombre : 'Evaluación inicial del SG-SST'}] },
            { id: "anexo_10", nombre: "Anexo 10: Procesos críticos", doc_count: 0, 
            documentos:[{nombre : 'Lista para emitir permisos de trabajo de alto riesgo'}] },
            { id: "anexo_11", nombre: "Anexo 11: Reglamento de HySI", doc_count: 0, 
            documentos:[{nombre : 'Reglamento higiene y seguridad'},
                        {nombre : 'Consideraciones por RHSI'}] },
            { id: "anexo_12", nombre: "Anexo 12: Plan de trabajo", doc_count: 0, 
            documentos:[{nombre : 'Plan de trabajo'},
                        {nombre : 'Consideraciones del plan de trabajo'}] },
            { id: "anexo_13", nombre: "Anexo 13: Formación (capacitaciones, inducción y re-inducción de sistema)"
            , doc_count: 0, documentos:[{nombre : 'Plan de formación'},
                                        {nombre : 'Registro de capacitaciones'},
                                        {nombre : 'Instructivo de capacitación'},
                                        {nombre : 'Evaluación de la capacitación'},
                                        {nombre : 'Re inducción'}] },
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

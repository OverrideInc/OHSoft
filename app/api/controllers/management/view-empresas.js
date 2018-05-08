module.exports = {


  friendlyName: 'View empresas',


  description: 'Display "Empresas" page.',


  exits: {

    success: {
      viewTemplatePath: 'pages/management/empresas'
    },

    redirect: {
      responseType: 'redirect',
      description: 'El usuario no está logeado o no es admin'
    },

  },


  fn: async function (inputs, exits) {

    if (!this.req.me) {
      throw {redirect:'/login'};
    }
    else if(!this.req.me.esSuperAdmin){
      throw {redirect:'/welcome'}
    }

    // Respond with view.
    return exits.success();

  }


};

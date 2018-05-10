module.exports = {


  friendlyName: 'View anexo',


  description: 'Display "Anexo" page.',


  exits: {

    success: {
      viewTemplatePath: 'pages/documentation/anexo'
    },

    redirect: {
      responseType: 'redirect',
      description: 'El usuario no está logeado'
    },

  },


  fn: async function (inputs, exits) {
    if (!this.req.me) {
      throw {redirect:'/login'};
    }
    // Respond with view.
    return exits.success();

  }


};

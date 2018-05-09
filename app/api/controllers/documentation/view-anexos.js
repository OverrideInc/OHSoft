module.exports = {


  friendlyName: 'View anexos',


  description: 'Display "Anexos" page.',


  exits: {

    success: {
      viewTemplatePath: 'pages/documentation/anexos'
    },

    redirect: {
      responseType: 'redirect',
      description: 'El usuario no está logeado'
    },

    addParam: {
      responseType: 'ok',
      viewTemplatePath: 'pages/documentation/anexos'
    }
  },


  fn: async function (inputs, exits) {

    if (!this.req.me) {
      throw {redirect:'/login'};
    }

    const nit = this.req.query['nit'];

    if(!nit){
      console.log('there is no nit bruh');
      return exits.success();
    }

    if(this.req.me.esSuperAdmin){
      if(nit == this.req.me.nit){
        throw {redirect:'/welcome'};
      }
    }

    else{
      if(nit != this.req.me.nit){
        throw {redirect:'/welcome'};
      }
    }
    

    // Respond with view.
    return exits.success();

  }


};

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
    
  },


  fn: async function (inputs, exits) {

    if (!this.req.me) {
      throw {redirect:'/login'};
    }

    if (!this.req.me.activado) {
      throw {redirect:'/welcome'};
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

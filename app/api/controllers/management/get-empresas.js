module.exports = {


  friendlyName: 'Get empresas',


  description: '',


  inputs: {

  },


  exits: {
  	success: {
    }
  },


  fn: async function (inputs, exits) {
  	var _empresas = await User.find({  where: {  esSuperAdmin: { '!=': true } }
      ,sort : 'nombre ASC'});
    const obj = {
      empresas : _empresas
    }
    return exits.success(obj);
  }


};

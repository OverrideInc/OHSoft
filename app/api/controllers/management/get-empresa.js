module.exports = {


  friendlyName: 'Get empresa',


  description: '',


  inputs: {

  },


  exits: {

  },


  fn: async function (inputs, exits) {
  	var _nit = this.req.query['nit'];

  	var userRecord = await User.findOne({
        nit: _nit
    });

    const obj = {
    	empresa : userRecord
    }
    return exits.success(obj);

  }


};

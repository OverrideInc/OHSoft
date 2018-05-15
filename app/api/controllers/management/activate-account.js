module.exports = {


  friendlyName: 'Activate account',


  description: '',


  inputs: {

  	nit:{

  		type: 'string',
  		required: true
  	},

  	activado:{

  		type: 'boolean',
  		required: true
  	}
  },


  exits: {

  },


  fn: async function (inputs, exits) {

    console.log('here is');

  	var val = !inputs.activado;

	await User.update({ nit: inputs.nit }).set({
      activado: val
    });

    return exits.success();

  }


};

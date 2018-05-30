const fs = require('fs');

module.exports = {


  friendlyName: 'Delete file',


  description: '',


  inputs: {

  	url :{
  		type : 'string',
  		required : true
  	}

  },


  exits: {

  },


  fn: async function (inputs, exits) {

    var url = 'assets' + inputs.url;
    console.log('trying to delete ' + url);
  	if(fs.existsSync(url)){
      console.log('exists');
  		fs.unlink(url, function(err){
  			if(err) console.log(err);
  			console.log(url + ' deleted!');
  		})
  	}else{
      console.log('doesn\'t exist');
    }

    return exits.success();

  }


};

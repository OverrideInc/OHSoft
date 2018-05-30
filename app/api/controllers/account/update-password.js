module.exports = {


  friendlyName: 'Update password',


  description: 'Update the password for the logged-in user.',


  inputs: {

    currentPassword: {
      description: 'The current, unencrypted password.',
      example: 'abc123v2',
      required: true
    },

    password: {
      description: 'The new, unencrypted password.',
      example: 'abc123v2',
      required: true
    }

  },

  exits: {

    success: {
      description: 'The requesting user agent has been successfully logged in.'
    },

    badCombo: {
      description: `El usuario con el correo y contraseña suministrados no existe.`,
      responseType: 'unauthorized'
    }
  },

  fn: async function (inputs, exits) {

    var userRecord = await User.findOne({
      id  : this.req.me.id
    });

    // If there was no matching user, respond thru the "badCombo" exit.
    if(!userRecord) {
      throw 'badCombo';
    }

    // If the password doesn't match, then also exit thru "badCombo".
    await sails.helpers.passwords.checkPassword(inputs.currentPassword, userRecord.password)
    .intercept('incorrect', 'badCombo');

    // Hash the new password.
    var hashed = await sails.helpers.passwords.hashPassword(inputs.password);

    // Update the record for the logged-in user.
    await User.update({ id: this.req.me.id })
    .set({
      password: hashed
    });

    return exits.success();

  }


};

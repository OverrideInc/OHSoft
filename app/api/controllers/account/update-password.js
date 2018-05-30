module.exports = {


  friendlyName: 'Update password',


  description: 'Update the password for the logged-in user.',


  inputs: {

    currentPassword: {
      description: 'The current, unencrypted password.',
      example: 'abc123v2',
      required: true
    }

    password: {
      description: 'The new, unencrypted password.',
      example: 'abc123v2',
      required: true
    }

  },


  fn: async function (inputs, exits) {

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

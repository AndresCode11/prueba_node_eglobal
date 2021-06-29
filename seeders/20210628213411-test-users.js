'use strict';

const PasswordController = require('../controllers/PasswordController');
module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    await queryInterface.bulkInsert('Users', 
    [
      {
        firstName: 'user test1',
        lastName: 'lastname test1',
        email: 'email_test1@hotmail.com',
        document_type: 1,
        document: '111111111',
        password: await PasswordController.encrypt('12345678'),
        born_date: new Date,
        city: 1,
        picture: null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: 'user test2',
        lastName: 'lastname test2',
        email: 'email_test2@hotmail.com',
        document_type: 2,
        document: '2222222',
        password: await PasswordController.encrypt('12345678'),
        born_date: new Date,
        city: 1,
        picture: null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: 'user test3',
        lastName: 'lastname test3',
        email: 'email_test3@hotmail.com',
        document_type: 3,
        document: '33333333',
        password: await PasswordController.encrypt('12345678'),
        born_date: new Date,
        city: 1,
        picture: null,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};

'use strict';

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
    await queryInterface.bulkInsert('Cities', [
      {
        city: 'Bogotá',
        country: 'Colombia',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        city: 'Medellín',
        country: 'Colombia',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        city: 'Cali',
        country: 'Colombia',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        city: 'Barranquilla',
        country: 'Colombia',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        city: 'Cúcuta',
        country: 'Colombia',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        city: 'Soledad',
        country: 'Colombia',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        city: 'Bucaramanga',
        country: 'Colombia',
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

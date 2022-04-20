'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkInsert('Posts', [
    {
      title: 'What Bread Is Best?',
      content: 'Brioche, Broa, Battlestar Galactica',
      pinned: true,
      breadditorId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title: 'Best Season of Great British Bake Off?',
      content: 'All of them, obvs.',
      pinned: true,
      breadditorId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title: 'How to make Japan-shaped bread?',
      content: 'plz help',
      pinned: false,
      breadditorId: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    },
   ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkDelete('Posts', null, {});
  }
};

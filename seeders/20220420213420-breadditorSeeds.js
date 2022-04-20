'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkInsert('Breadditors', [
     {
       name: "Dan",
       email: "dan@dan.dan",
       country: "Peru",
       password: "password123",
       createdAt: new Date(),
       updatedAt: new Date()
     },
     {
       name: "Ray",
       email: "ray@ray.ray",
       country: "Sri Lanka",
       password: "strongPass!",
       createdAt: new Date(),
       updatedAt: new Date()
     },
     {
       name: "Rawaha",
       email: "rawaha@rawaha.rawaha",
       country: "Japan",
       password: "ilovejapan",
       createdAt: new Date(),
       updatedAt: new Date()
     },
     {
       name: "Autumn",
       email: "autumn@autumn.autumn",
       country: "Skatepark",
       password: "outskating",
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
   return queryInterface.bulkDelete('Breadditors', null, {});
  }
};

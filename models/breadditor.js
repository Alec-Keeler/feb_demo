'use strict';
module.exports = (sequelize, DataTypes) => {
  const Breadditor = sequelize.define('Breadditor', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    country: DataTypes.STRING,
    password: DataTypes.STRING
  }, {});
  Breadditor.associate = function(models) {
    // associations can be defined here
    Breadditor.hasMany(models.Post, { foreignKey: 'breadditorId' })
  };
  return Breadditor;
};
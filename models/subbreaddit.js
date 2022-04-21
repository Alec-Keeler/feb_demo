'use strict';
module.exports = (sequelize, DataTypes) => {
  const Subbreaddit = sequelize.define('Subbreaddit', {
    name: DataTypes.STRING,
    description: DataTypes.STRING
  }, {});
  Subbreaddit.associate = function(models) {
    // associations can be defined here
    Subbreaddit.hasMany(models.Post, { foreignkey: 'subId' })
    Subbreaddit.belongsToMany(models.Breadditor, {
      through: 'Subscription',
      foreignKey: 'subId',
      otherKey: 'breadditorId'
    })
  };
  return Subbreaddit;
};
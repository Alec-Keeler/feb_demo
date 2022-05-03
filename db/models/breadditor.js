'use strict';
module.exports = (sequelize, DataTypes) => {
  const Breadditor = sequelize.define('Breadditor', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    country: DataTypes.STRING,
    hashedPassword: DataTypes.STRING
  }, {});
  Breadditor.associate = function(models) {
    // associations can be defined here
    Breadditor.hasMany(models.Post, { foreignKey: 'breadditorId' })
    Breadditor.belongsToMany(models.Subbreaddit, {
      through: 'Subscription',
      foreignKey: 'breadditorId',
      otherKey: 'subId'
    })
  };
  return Breadditor;
};

// SELECT * FROM breadditors
// JOIN subscriptions ON (breadditors.id = subscriptions.breadditorId)
// JOIN subbreaddits ON (subscriptions.subId = subbreaddits.id)
// WHERE
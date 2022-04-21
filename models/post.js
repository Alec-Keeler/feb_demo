'use strict';
module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define('Post', {
    breadditorId: DataTypes.INTEGER,
    pinned: DataTypes.BOOLEAN,
    title: DataTypes.STRING,
    content: DataTypes.TEXT,
    subId: DataTypes.INTEGER
  }, {});
  Post.associate = function(models) {
    // associations can be defined here
    Post.belongsTo(models.Breadditor, { foreignKey: 'breadditorId' })
    Post.belongsTo(models.Subbreaddit, { foreignKey: 'subId' })
  };
  return Post;
};
'use strict';
module.exports = function(sequelize, DataTypes) {
  var todos = sequelize.define('todos', {
    title: DataTypes.STRING,
    completedAt: DataTypes.DATE
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return todos;
};
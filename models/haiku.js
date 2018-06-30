module.exports = function(sequelize, DataTypes) {
  var Haiku = sequelize.define("Haiku", {
    haiku_title: DataTypes.STRING,
    haiku_lineA: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    haiku_lineB: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    haiku_lineC: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    haiku_author: DataTypes.STRING,
    haiku_category: DataTypes.STRING,
  });
  return Haiku;
}

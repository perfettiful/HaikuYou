module.exports = function(sequelize, DataTypes) {
  var Haiku = sequelize.define("Haiku", {
    haiku_title: DataTypes.STRING,
    haiku_lineA: DataTypes.STRING,
    haiku_lineB: DataTypes.STRING,
    haiku_lineC: DataTypes.STRING,
    haiku_author: DataTypes.STRING,
    haiku_category: DataTypes.STRING,
  });
  return Haiku;
}

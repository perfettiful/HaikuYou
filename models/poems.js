module.exports = function(sequelize, DataTypes) {
  var Poem = sequelize.define("Haiku", {
    haiku_title: DataTypes.STRING,
    haiku_text: DataTypes.STRING,
    haiku_author: DataTypes.STRING,
    haiku_category: DataTypes.STRING,
  });
  return Haiku;
}

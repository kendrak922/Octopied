module.exports = function(sequelize, DataTypes) {
    const Resources = sequelize.define("resources", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        lives: DataTypes.INTEGER,
        level: DataTypes.INTEGER,
        worms: DataTypes.INTEGER,
        fish: DataTypes.INTEGER,
        sharks: DataTypes.INTEGER,
        dirt: DataTypes.INTEGER,
        rocks: DataTypes.INTEGER,
        metal: DataTypes.INTEGER,
        user_id: {
            type: DataTypes.INTEGER,
            unique: true,
            references: {
                model: "users",
                key: "id"
            }
        }
    });
    return Resources;
};
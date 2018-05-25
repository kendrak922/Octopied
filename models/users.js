module.exports = function(sequelize, DataTypes) {
    const Users = sequelize.define("users", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        email: {
            type: DataTypes.STRING,
            unique: true
        },
        password: DataTypes.BOOLEAN
    });
    return Users;
};
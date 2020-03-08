module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define("user", { // 테이블 이름 => users
        userId : {
            type: DataTypes.STRING,
            allowNull: false
        },
        userPass: {
            type: DataTypes.STRING,
            allowNull: false
        },
        userEmail: {
            type: DataTypes.STRING,
            allowNull: false
        },
        userPhone: {
            type: DataTypes.STRING,
            allowNull: false
        },
        userNum: {
            type: DataTypes.STRING,
            allowNull: false
        },
    });
    // 조인과 외래키 관련
    //User.associate = function(models) {
        //models.user.hasMany(models.group);
        //models.user.belongsTo(models.group);
    //};
    return User;
};
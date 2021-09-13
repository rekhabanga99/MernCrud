const { DataTypes } = require('sequelize');

module.exports = model;

function model(sequelize) {
    const attributes = {
        first_name: { type: DataTypes.STRING, allowNull: false },
        last_name: { type: DataTypes.STRING, allowNull: true },
        // otp:{ type: DataTypes.STRING, allowNull: true },
        // mobileKey:{ type: DataTypes.STRING, allowNull: true },
        email : { type: DataTypes.STRING, allowNull: false,defaultValue:1 }, //it will be new
        phone: { type: DataTypes.STRING, allowNull: false, unique:true, validate:{len:[10]}},
        salary :{ type: DataTypes.STRING, allowNull: false },
        
     
    };

    const options = {
    };

    return sequelize.define('Employee', attributes, options);
}

// `id` bigint(20) UNSIGNED NOT NULL,
// `first_name` varchar(255) NOT NULL,
// `last_name` varchar(255) NOT NULL,
// `email` varchar(255) NOT NULL,
// `phone` varchar(255) NOT NULL,
// `salary` varchar(255) DEFAULT NULL
const Sequelize = require('sequelize');
const sequelize = require('../util/database');

const Expense = sequelize.define('tracker',{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    amt:{
        type:Sequelize.INTEGER,
        allowNull: false
    },
    des:{
        type:Sequelize.STRING,
        allowNull:false
    },
    ctg:{
        type:Sequelize.STRING,
        allowNull:false
    }
});

module.exports = Expense;
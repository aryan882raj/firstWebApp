// step 1

const Sequelize = require('sequelize');

const sequelize = new Sequelize('new_project','root','123456',{
    dialect:'mysql',
    host:'localhost'
});

module.exports = sequelize;
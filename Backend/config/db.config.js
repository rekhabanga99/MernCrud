const config = require('./config.json');
const mysql = require('mysql2/promise');
const { Sequelize } = require('sequelize');

module.exports = db = {};

initialize();

async function initialize() {
    try{
    console.log('indbjs')
    // create db if it doesn't already exist
    const { host, port, user, password, database } = config.database;
    const connection = await mysql.createConnection({ host, port, user, password });
    await connection.query(`CREATE DATABASE IF NOT EXISTS \`${database}\`;`);

    // connect to db
    const sequelize = new Sequelize(database, user, password, { 
        dialect: 'mysql', 
        dialectOptions:{
            useUTC: false, //for reading from database
            // dateStrings: true,
            // typeCast: true
        },
        timezone: '+05:30' //for writing to database
    });

    // init models and add them to the exported db object


    // Employee 

    db.Employee = require('../src/models/employee.model')(sequelize); 
  
    db.sequelize = sequelize;

    // sync all models with database
    await sequelize.sync();
    console.log("Connected to DB Successfully============>")
}
catch(error){
    console.log('😊👍')
    console.log(error)
}
}
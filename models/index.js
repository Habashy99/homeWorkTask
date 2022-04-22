'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require('../config/config.json')[env];

var db = {
  init: async () => {
    const sequelize = new Sequelize(config);

    defineModels(sequelize);
    db.sequelize = sequelize;

    try {
      await db.sequelize.authenticate();
      await db.sequelize.sync();
      console.log('Connection has been established successfully.');
    } catch (err) {
      console.error('Unable to connect to the database:', err);
    }
  },

  deinit: async () => {
    await db.sequelize.close();
    console.log('Connection has been closed successfully.');
  }
}

function defineModels(sequelize) {
  fs.readdirSync(__dirname)
    .filter(file => {
      return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
    })
    .forEach(file => {
      const modelGenerator = require(path.join(__dirname, file));
      const model = modelGenerator(sequelize, Sequelize.DataTypes);
      
      const modelName = model.name.split('_').map((part, index) => {
        if (index === 0) return part;
        return part[0].toUpperCase() + part.substring(1);
      }).join('');

      db[modelName] = model;
    });
}

module.exports = db;

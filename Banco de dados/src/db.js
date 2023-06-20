const { Sequelize } = require('sequelize');

const dbSequelize = new Sequelize(process.env.DATABASE_URL);

module.exports = dbSequelize;
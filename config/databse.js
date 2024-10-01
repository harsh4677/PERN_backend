const { sequelize } = require('sequelize')

const env = process.env.NODE_ENV || 'developmet'
const config = require('./config')

const sequelize =  new sequelize(config, [env])

module.exports = sequelize
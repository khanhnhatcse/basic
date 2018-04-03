
var pg = require('pg')
var config = require('../config/dbinfo').Config;

var config = {
    user: config.DB_USER,
    password: config.DB_PASS,
    host: config.DB_HOST,
    port: config.DB_PORT,
    database: config.DB_NAME,
    client_encoding: 'utf8', 
    // ssl: false,
    ssl: true,//azure
    max: 100,
    min: 1,
    idleTimeoutMillis: 10000,
    connectionTimeoutMillis: 10000
  }

var pool = new pg.Pool(config)

var acquireCount = 0
pool.on('acquire', function (client) {
  acquireCount++
});

 
var connectCount = 0
pool.on('connect', function () {
  connectCount++
})

setTimeout(function () {
  console.log('connect count:', connectCount) // output: connect count: 10 
  console.log('acquire count:', acquireCount) // output: acquire count: 200 
}, 100)



module.exports = pool

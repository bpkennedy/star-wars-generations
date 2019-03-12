const Sequelize = require('sequelize')
const pg = require('pg')

const config = {
  user: 'postgres',
  database: 'swg_db',
  password: 'postgres',
  port: 5432
}
const connectionString = 'postgres://' + config.user + ':' + config.password + '@0.0.0.0:' + config.port + '/' + config.database
const pool = new pg.Pool(config);

const initDatabase = (callback) => {
    // connect to postgres db
    pool.connect(function(err, client, done) {
        if (err) {
          throw err
        }
        // create the db and ignore any errors, for example if it already exists.
        client.query('CREATE DATABASE ' + config.database, function(err) {
            //db should exist now, initialize Sequelize
            const sequelize = new Sequelize(connectionString);
            callback(sequelize);
            client.end(); // close the connection
        });
    });
}

module.exports = {
  initDatabase
}
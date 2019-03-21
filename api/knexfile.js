const config = {
	client: 'pg',
	version: '9.0',
	connection: {
	    host: 'db',
	    port: 5432,
	    user: 'swgapi',
      password: 'swgapi',
	    database: 'swgdb',
	},
	pool: {min: 1, max: 1},
}

const config_test = {
	client: 'pg',
	version: '9.0',
	connection: {
	    host: 'db',
	    port: 5432,
	    user: 'swg_api',
      password: 'swgapi',
	    database: 'swgdb_test',
	},
	pool: {min: 2, max: 80},
}

module.exports = {
  development: config,
	test: config_test,
  production: config,
};

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
	pool: {min: 2, max: 80},
}

module.exports = {
  development: config,
  production: config,
};

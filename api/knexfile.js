const config = (host) => ({
	client: 'pg',
	version: '9.0',
	connection: {
	    host,
	    port: 5432,
	    user: 'swgapi',
      password: 'swgapi',
	    database: 'swgdb',
	},
	pool: {min: 2, max: 80},
})

module.exports = {
  development: config('localhost'),
  production: config('db'),
};

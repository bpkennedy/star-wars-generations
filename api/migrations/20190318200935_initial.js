const { seedDatabaseData } = require('./seed-helper')

exports.up = async knex => {
    try {
        await knex.schema.createTable('modules', table => {
          table.increments('id').primary()
          table.string('name')
          table.string('manufacturer')
          table.string('class')
          table.string('rating')
          table.string('type')
          table.integer('base_atmo_speed').defaultTo(null)
          table.integer('base_damage').defaultTo(null)
          table.integer('base_jump').defaultTo(null)
          table.integer('base_maneuver').defaultTo(null)
          table.integer('base_range').defaultTo(null)
          table.integer('base_shield_strength').defaultTo(null)
          table.integer('base_space_speed').defaultTo(null)
      });
      
      await knex.schema.createTable('ships', table => {
        table.increments('id').primary()
        table.string('name')
        table.string('manufacturer')
        table.string('class')
        table.integer('crew')
        table.double('length')
        table.double('width')
        table.double('height')
      });

      await knex.schema.createTable('players', table => {
        table.increments('id').primary()
        table.string('first_name')
        table.string('last_name')
        table.string('gender')
        table.string('species')
        table.string('profile_image_url')
        table.integer('hp')
        table.integer('xp')
        table.integer('level')
      });

      await knex.schema.raw('CREATE  INDEX IF NOT EXISTS "modulesIdx" on "modules" ("type")')
      await knex.schema.raw('CREATE  INDEX IF NOT EXISTS "shipsIdx" on "ships" ("class")')
      await knex.schema.raw('CREATE  INDEX IF NOT EXISTS "playersIdx" on "players" ("species")')
      
      await seedDatabaseData(knex)
    } catch(error) {
      console.log(erro)
    }
};

exports.down = knex => {

};

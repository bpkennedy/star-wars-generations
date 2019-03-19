const seedModules = [{
    id: '2345',
    name: '9771 deflector',
    manufacturer: 'Incom Corporation',
    class: 'starfighter',
    rating: 'C',
    type: 'shield',
    base_atmo_speed: null,
    base_damage: null,
    base_jump: null,
    base_maneuver: null,
    base_range: null,
    base_shield_strength: 500,
    base_space_speed: null,
  },
  {
    id: '3456',
    name: 'ANS-5c',
    manufacturer: 'Incom Corporation',
    class: 'starfighter',
    rating: 'B',
    type: 'sensor',
    base_atmo_speed: null,
    base_damage: null,
    base_jump: null,
    base_maneuver: null,
    base_range: 300,
    base_shield_strength: null,
    base_space_speed: null,
  },
  {
    id: '4567',
    name: 'Daimler',
    manufacturer: 'Incom Corporation',
    class: 'starfighter',
    rating: 'E',
    type: 'navigation',
    base_atmo_speed: null,
    base_damage: null,
    base_jump: null,
    base_maneuver: 60,
    base_range: null,
    base_shield_strength: null,
    base_space_speed: null,
  },
  {
    id: '5678',
    name: 'Keppler 3z',
    manufacturer: 'Incom Corporation',
    class: 'starfighter',
    rating: 'A',
    type: 'hyperdrive',
    base_atmo_speed: null,
    base_damage: null,
    base_jump: 100,
    base_maneuver: null,
    base_range: null,
    base_shield_strength: null,
    base_space_speed: null,
  },
  {
    id: '1234',
    name: '2b fission',
    manufacturer: 'Incom Corporation',
    class: 'starfighter',
    rating: 'B',
    type: 'engine',
    base_atmo_speed: 700,
    base_damage: null,
    base_jump: null,
    base_maneuver: null,
    base_range: null,
    base_shield_strength: null,
    base_space_speed: 1000,
  },
  {
    id: '1234a',
    name: '2a fission',
    manufacturer: 'Incom Corporation',
    class: 'starfighter',
    rating: 'A',
    type: 'engine',
    base_atmo_speed: 850,
    base_damage: null,
    base_jump: 100,
    base_maneuver: null,
    base_range: null,
    base_shield_strength: null,
    base_space_speed: 1150,
  },
  {
    id: '6789',
    name: 'Ion cannon',
    manufacturer: 'Incom Corporation',
    class: 'starfighter',
    rating: 'E',
    type: 'armament',
    base_atmo_speed: null,
    base_damage: 10,
    base_jump: null,
    base_maneuver: null,
    base_range: null,
    base_shield_strength: null,
    base_space_speed: null,
  },
  {
    id: '7891',
    name: 'KX5 Linked laser cannon',
    manufacturer: 'Incom Corporation',
    class: 'starfighter',
    rating: 'D',
    type: 'armament',
    base_atmo_speed: null,
    base_damage: 15,
    base_jump: null,
    base_maneuver: null,
    base_range: null,
    base_shield_strength: null,
    base_space_speed: null,
  },
  {
    id: '8912',
    name: 'MG5 concussion missile launcher',
    manufacturer: 'Incom Corporation',
    class: 'starfighter',
    rating: 'E',
    type: 'armament',
    base_atmo_speed: null,
    base_damage: 30,
    base_jump: null,
    base_maneuver: null,
    base_range: null,
    base_shield_strength: null,
    base_space_speed: null,
  }
]

const seedPlayers = [{
  id: '1234',
  first_name: 'Moleg',
  last_name: 'Bal',
  species: 'Human',
  gender: 'Male',
  profile_image_url: 'https://steamuserimages-a.akamaihd.net/ugc/918053186553065192/F20C63A555E64AAE971975AFA2B3BA3B227CD080/?imw=268&imh=268&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true',
  hp: 300,
  xp: 0,
  level: 1
}]

const seedShips = [{
  id: '2468',
  name: 'Z-95 Headhunter',
  manufacturer: 'Incom Corporation',
  class: 'starfighter',
  crew: 1,
  length: 16.74,
  width: 3.24,
  height: 18.12,
}]

module.exports = {
  seedDatabaseData: async knex => {
    try {
      for (const module of seedModules) {
        await knex('modules').insert({
            name: module.name,
            manufacturer: module.manufacturer,
            class: module.class,
            rating: module.rating,
            type: module.type,
            base_atmo_speed: module.base_atmo_speed,
            base_damage: module.base_damage,
            base_jump: module.base_jump,
            base_maneuver: module.base_maneuver,
            base_range: module.base_range,
            base_shield_strength: module.base_shield_strength,
            base_space_speed: module.base_space_speed,
          })
          .returning('id')
      }

      for (const ship of seedShips) {
        await knex('ships').insert({
          name: ship.name,
          manufacturer: ship.manufacturer,
          class: ship.class,
          crew: ship.crew,
          length: ship.length,
          width: ship.width,
          height: ship.height
        })
        .returning('id')
      }
      
      for (const player of seedPlayers) {
        await knex('players').insert({
          first_name: player.first_name,
          last_name: player.last_name,
          gender: player.gender,
          species: player.species,
          profile_image_url: player.profile_image_url,
          hp: player.hp,
          xp: player.xp,
          level: player.level
        })
        .returning('id')
      }

    } catch (error) {
      console.error('database seeding error:', error)
      throw error
    }
  }
}
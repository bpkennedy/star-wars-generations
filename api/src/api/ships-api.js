import { Ship } from '../dao/ship-dao'

export async function shipGetHandler() {
    const ships = await Ship.query().distinct('name').orderBy('name', 'ASC')
    return ships.map(ship => ({ name: ship.name }))
}

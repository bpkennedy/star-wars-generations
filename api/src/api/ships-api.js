import { Ship } from '../dao/ship-dao'

export async function shipGetHandler() {
    return await Ship.query().orderBy('name', 'ASC')
}

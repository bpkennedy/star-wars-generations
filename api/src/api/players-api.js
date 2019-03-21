import { Player } from '../dao/player-dao'

export async function playerGetHandler() {
    return await Player.query().orderBy('first_name', 'ASC')
}
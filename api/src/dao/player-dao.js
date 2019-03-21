import { Model } from 'objection'

export class Player extends Model {
    static get tableName() {
        return 'players'
    }
}

import { Model } from 'objection'

export class Ship extends Model {
    static get tableName() {
        return 'ships'
    }
}

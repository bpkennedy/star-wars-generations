import { Model } from 'objection'

export class Module extends Model {
    static get tableName() {
        return 'modules'
    }
}

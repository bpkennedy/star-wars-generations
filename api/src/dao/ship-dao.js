import {
  Model
} from 'objection'

export class Ship extends Model {
  static get tableName() {
    return 'ships'
  }
  $beforeInsert() {
    this.created_at = new Date().toISOString();
  }

  $beforeUpdate() {
    this.updated_at = new Date().toISOString();
  }
}
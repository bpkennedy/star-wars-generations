import {
  Model
} from 'objection'

export class User extends Model {
  static get tableName() {
    return 'users'
  }
  $beforeInsert() {
    this.created_at = new Date().toISOString();
  }

  $beforeUpdate() {
    this.updated_at = new Date().toISOString();
  }
}
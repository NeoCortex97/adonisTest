import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class Survey extends BaseModel {
  static get table() {
    return 'surveys'
  }

  static get primaryKey() {
    return 'id'
  }

  @column()
  declare title: String
}

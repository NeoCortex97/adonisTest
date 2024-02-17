import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'create_surveys'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')

      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
    this.schema.createTable('surveys', (table) => {
      table.increments('id').primary()
      table.string('title')
      table.text('description')
      table.timestamps()
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
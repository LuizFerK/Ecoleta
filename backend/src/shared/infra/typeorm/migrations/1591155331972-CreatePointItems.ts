import { MigrationInterface, QueryRunner, Table } from "typeorm";

export default class CreatePointItems1591155331972 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'point_items',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()',
          },
          {
            name: 'point_id',
            type: 'uuid',
          },
          {
            name: 'item_id',
            type: 'integer',
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()',
          },
          {
            name: 'updated_at',
            type: 'timestamp',
            default: 'now()',
          },
        ],
        foreignKeys: [
          {
            name: 'PointID',
            referencedTableName: 'points',
            referencedColumnNames: ['id'],
            columnNames: ['point_id'],
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
          },
          {
            name: 'ItemID',
            referencedTableName: 'items',
            referencedColumnNames: ['id'],
            columnNames: ['item_id'],
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
          },
        ]
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('point_items');
  }
}

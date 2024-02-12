import { MigrationInterface, QueryRunner } from 'typeorm';

export class Games1707686479253 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
        
        INSERT INTO game (name)
        VALUES
            ('Talking Tom'),
            ('Mythic Legends'),
            ('Talking Tom 2');
                `);
  }
  public async down(queryRunner: QueryRunner): Promise<void> {}
}

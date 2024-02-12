import { MigrationInterface, QueryRunner } from 'typeorm';

export class Events1707686225815 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
    
        INSERT INTO event (name, priority, description)
    VALUES
        ('Event 1', 1, 'Description of Event 1'),
        ('Event 2', 2, 'Description of Event 2'),
        ('Event 3', 3, 'Description of Event 3'),
        ('Event 4', 4, 'Description of Event 4'),
        ('Event 5', 5, 'Description of Event 5'),
        ('Event 6', 6, 'Description of Event 6'),
        ('Event 7', 7, 'Description of Event 7'),
        ('Event 8', 8, 'Description of Event 8'),
        ('Event 9', 9, 'Description of Event 9'),
        ('Event 10', 10, 'Description of Event 10');
            `);
  }
  public async down(queryRunner: QueryRunner): Promise<void> {}
}

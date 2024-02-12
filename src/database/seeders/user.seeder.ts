import { User } from 'src/users/entities/user.entity';

import { UserRepository } from 'src/users//user.repository';

import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateInitialUsers1621234567890 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    const userRepository = queryRunner.connection.getRepository(User);

    await userRepository.create([
      {
        username: 'fun7user',
        password: 'fun7user',
      },

      {
        username: 'fun7user',
        password: 'fun7user',
      },
    ]);

    await queryRunner.manager.save(userRepository);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    // You can use the queryRunner to execute any queries you need to revert the migration
  }
}

import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { AbstractEntity } from '../../database/abstract.entity';
import { IsString, Length } from 'class-validator';
import bcrypt from 'bcrypt';

@Entity()
export class User extends AbstractEntity<User> {
  @IsString()
  @Length(3, 55)
  @Column({ nullable: false })
  username: string;

  @IsString()
  @Length(6, 42)
  @Column({ nullable: false })
  password: string;

  async setPassword(password: string): Promise<void> {
    const hashedPassword = await bcrypt.hash(password, 10);

    this.password = hashedPassword;
  }

  async checkPassword(password: string): Promise<boolean> {
    return bcrypt.compare(password, this.password);
  }
}

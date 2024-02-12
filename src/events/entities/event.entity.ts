import { Column, Entity, ManyToOne, OneToOne, JoinColumn } from 'typeorm';
import { Min, Max } from 'class-validator';
import { AbstractEntity } from '../../database/abstract.entity';
import { Game } from 'src/games/entities/game.entity';
import { Type } from 'src/types/entities/type.entity';

@Entity()
export class Event extends AbstractEntity<Event> {
  @Column({ nullable: false, length: 100 })
  name: string;

  @ManyToOne(() => Type, (type) => type.events, { cascade: true }) // Ensure cascade is set only on one side
  type: Type;

  @Column({ type: 'int', nullable: false, default: 0 })
  @Min(0, { message: 'Priority must be at least 0' })
  @Max(10, { message: 'Priority cannot exceed 10' })
  priority: number;

  @Column({ type: 'varchar', length: 200, nullable: false })
  @Min(1, { message: 'Description must be at least 1 character long' })
  @Max(200, { message: 'Description cannot exceed 200 characters' })
  description: string;

  @ManyToOne(() => Game, (game) => game.events)
  game: Game;
}

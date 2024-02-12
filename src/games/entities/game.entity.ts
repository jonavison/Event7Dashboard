import { Column, Entity, OneToMany } from 'typeorm';
import { AbstractEntity } from '../../database/abstract.entity';
import { Event } from 'src/events/entities/event.entity';
import { Type } from 'src/types/entities/type.entity';

@Entity()
export class Game extends AbstractEntity<Game> {
  @Column()
  name: string;

  @OneToMany(() => Event, (event) => event.game, { cascade: true })
  events: Event[];

  @OneToMany(() => Type, (type) => type.name, { cascade: true })
  types: Type[];
}

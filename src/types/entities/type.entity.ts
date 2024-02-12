import { Column, Entity, JoinColumn, OneToMany, OneToOne } from 'typeorm';
import { AbstractEntity } from '../../database/abstract.entity';
import { Game } from 'src/games/entities/game.entity';
import { Event } from 'src/events/entities/event.entity';

@Entity()
export class Type extends AbstractEntity<Type> {
  @Column({
    nullable: false,
    length: 80,
  })
  name: string;

  @OneToOne(() => Game)
  @JoinColumn()
  game: Game;

  public setGameName(game: Game): void {
    this.name = game.name;
  }

  @OneToMany(() => Event, (event) => event.type)
  events: Event[];
}

import {
  DataSource,
  EntitySubscriberInterface,
  EventSubscriber,
  InsertEvent,
} from 'typeorm';
import { Game } from './entities/game.entity';
import { Logger } from '@nestjs/common';

@EventSubscriber()
export class GameSubscriber implements EntitySubscriberInterface<Game> {
  private readonly logger = new Logger(GameSubscriber.name);

  constructor(dataSource: DataSource) {
    dataSource.subscribers.push(this);
  }

  listenTo() {
    return Game;
  }

  beforeInsert(event: InsertEvent<Game>): void | Promise<any> {
    this.logger.log(`beforeInsert`, JSON.stringify(event.entity));
  }

  afterInsert(event: InsertEvent<Game>): void | Promise<any> {
    this.logger.log(`afterInsert`, JSON.stringify(event.entity));
  }
}

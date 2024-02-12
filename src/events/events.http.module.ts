import { Module } from '@nestjs/common';
import { EventsModule } from './events.module';
import { EventsService } from './events.service';
import { EventsController } from './events.controller';

@Module({
  imports: [EventsModule],
  providers: [EventsService],
  controllers: [EventsController],
})
export class UserHttpModule {}

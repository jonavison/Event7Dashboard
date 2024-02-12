import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { Event } from './entities/event.entity';
import { EventsService } from './events.service';

@Controller('event')
export class EventsController {
  constructor(private eventsService: EventsService) {}

  @Get()
  obterTodos(): Promise<Event[]> {
    return this.eventsService.getAll();
  }

  @Get(':id')
  obterUm(@Param() params): Promise<Event> {
    return this.eventsService.getOne(params.id);
  }

  @Post()
  criar(@Body() event: Event) {
    this.eventsService.create(event), 'Created successfully';
  }

  @Delete(':id')
  apagar(@Param() params) {
    this.eventsService.delete(params.id);
  }
}

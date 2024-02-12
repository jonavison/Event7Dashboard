import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Event } from './entities/event.entity';
import { faker } from '@faker-js/faker';

@Injectable()
export class EventsService {
  constructor(
    @InjectRepository(Event)
    private eventsRepository: Repository<Event>,
  ) {}

  async getAll(): Promise<Event[]> {
    return this.eventsRepository.find();
  }

  async getOne(id: number): Promise<Event | null> {
    return this.eventsRepository.findOne({ where: { id } });
  }

  async create(event: Event): Promise<Event> {
    return this.eventsRepository.save(event);
  }

  async change(event: Event): Promise<Event> {
    return this.eventsRepository.save(event);
  }

  async delete(id: number): Promise<void> {
    const eventToRemove = await this.eventsRepository.findOne({
      where: { id },
    });
    await this.eventsRepository.remove(eventToRemove);
  }

  async seedEvents(number = 10, options?: Partial<Event>): Promise<void> {
    const events = [];

    for (let i = 0; i < number; i++) {
      const event = new Event(options);
      event.name = faker.commerce.productName();
      event.description = faker.commerce.productDescription();
      event.priority = faker.number.int({ min: 0, max: 10 });
      events.push(event);
    }

    await this.eventsRepository.save(events);
  }
}

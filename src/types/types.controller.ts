import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { Type } from './entities/type.entity';
import { TypesService } from './types.service';
import { CreateTypeDto } from './dto/create-type.dto';

@Controller('types')
export class TypesController {
  constructor(private readonly typesService: TypesService) {}

  @Post()
  async create(@Body() createTypeDto: CreateTypeDto) {
    return this.typesService.create(createTypeDto);
  }

  @Get()
  async findAll(): Promise<Type[]> {
    return this.typesService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Type> {
    return this.typesService.findOne(id);
  }

  @Delete(':id')
  async delete(@Param('id') id: number): Promise<void> {
    return this.typesService.delete(id);
  }
}

import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { GamesService } from './games.service';
import { CreateGameDto } from './dto/create-game.dto';

@Controller('games')
export class GamesController {
  constructor(private readonly gamesService: GamesService) {}

  @Post()
  async create(@Body() createGameDto: CreateGameDto) {
    return this.gamesService.create(createGameDto);
  }

  @Get()
  async findAll() {
    return this.gamesService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.gamesService.findOne(+id);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.gamesService.remove(+id);
  }
}

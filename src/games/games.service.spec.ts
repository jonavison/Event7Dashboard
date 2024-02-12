import { Test, TestingModule } from '@nestjs/testing';
<<<<<<<< Updated upstream:nestjs-backend/src/services/ads/ads.service.spec.ts
import { AdsService } from './ads.service';

describe('AdsService', () => {
  let service: AdsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AdsService],
    }).compile();

    service = module.get<AdsService>(AdsService);
========
import { GamesService } from './games.service';

describe('GamesService', () => {
  let service: GamesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GamesService],
    }).compile();

    service = module.get<GamesService>(GamesService);
>>>>>>>> Stashed changes:src/games/games.service.spec.ts
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

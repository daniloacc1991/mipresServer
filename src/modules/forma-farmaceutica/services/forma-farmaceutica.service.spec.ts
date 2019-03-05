import { Test, TestingModule } from '@nestjs/testing';
import { FormaFarmaceuticaService } from './forma-farmaceutica.service';

describe('FormaFarmaceuticaService', () => {
  let service: FormaFarmaceuticaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FormaFarmaceuticaService],
    }).compile();

    service = module.get<FormaFarmaceuticaService>(FormaFarmaceuticaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

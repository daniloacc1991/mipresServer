import { Test, TestingModule } from '@nestjs/testing';
import { TipoProductoNutricionalService } from './tipo-producto-nutricional.service';

describe('TipoProductoNutricionalService', () => {
  let service: TipoProductoNutricionalService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TipoProductoNutricionalService],
    }).compile();

    service = module.get<TipoProductoNutricionalService>(TipoProductoNutricionalService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

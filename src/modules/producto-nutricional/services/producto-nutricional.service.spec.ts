import { Test, TestingModule } from '@nestjs/testing';
import { ProductoNutricionalService } from './producto-nutricional.service';

describe('ProductoNutricionalService', () => {
  let service: ProductoNutricionalService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProductoNutricionalService],
    }).compile();

    service = module.get<ProductoNutricionalService>(ProductoNutricionalService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

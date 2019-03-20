import { Test, TestingModule } from '@nestjs/testing';
import { ProductoNutricionalFormaService } from './producto-nutricional-forma.service';

describe('ProductoNutricionalFormaService', () => {
  let service: ProductoNutricionalFormaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProductoNutricionalFormaService],
    }).compile();

    service = module.get<ProductoNutricionalFormaService>(ProductoNutricionalFormaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

import { Test, TestingModule } from '@nestjs/testing';
import { ProductoNutricionalViaAdminService } from './producto-nutricional-via-admin.service';

describe('ProductoNutricionalViaAdminService', () => {
  let service: ProductoNutricionalViaAdminService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProductoNutricionalViaAdminService],
    }).compile();

    service = module.get<ProductoNutricionalViaAdminService>(ProductoNutricionalViaAdminService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

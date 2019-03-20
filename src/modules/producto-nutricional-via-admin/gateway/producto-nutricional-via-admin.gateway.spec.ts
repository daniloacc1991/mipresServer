import { Test, TestingModule } from '@nestjs/testing';
import { ProductoNutricionalViaAdminGateway } from './producto-nutricional-via-admin.gateway';

describe('ProductoNutricionalViaAdminGateway', () => {
  let gateway: ProductoNutricionalViaAdminGateway;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProductoNutricionalViaAdminGateway],
    }).compile();

    gateway = module.get<ProductoNutricionalViaAdminGateway>(ProductoNutricionalViaAdminGateway);
  });

  it('should be defined', () => {
    expect(gateway).toBeDefined();
  });
});

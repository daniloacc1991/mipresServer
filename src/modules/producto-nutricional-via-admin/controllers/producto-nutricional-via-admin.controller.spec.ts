import { Test, TestingModule } from '@nestjs/testing';
import { ProductoNutricionalViaAdminController } from './producto-nutricional-via-admin.controller';

describe('ProductoNutricionalViaAdmin Controller', () => {
  let controller: ProductoNutricionalViaAdminController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProductoNutricionalViaAdminController],
    }).compile();

    controller = module.get<ProductoNutricionalViaAdminController>(ProductoNutricionalViaAdminController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

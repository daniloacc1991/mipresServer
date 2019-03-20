import { Test, TestingModule } from '@nestjs/testing';
import { ProductoNutricionalController } from './producto-nutricional.controller';

describe('ProductoNutricional Controller', () => {
  let controller: ProductoNutricionalController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProductoNutricionalController],
    }).compile();

    controller = module.get<ProductoNutricionalController>(ProductoNutricionalController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

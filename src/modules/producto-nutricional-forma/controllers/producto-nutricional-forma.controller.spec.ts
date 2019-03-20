import { Test, TestingModule } from '@nestjs/testing';
import { ProductoNutricionalFormaController } from './producto-nutricional-forma.controller';

describe('ProductoNutricionalForma Controller', () => {
  let controller: ProductoNutricionalFormaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProductoNutricionalFormaController],
    }).compile();

    controller = module.get<ProductoNutricionalFormaController>(ProductoNutricionalFormaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

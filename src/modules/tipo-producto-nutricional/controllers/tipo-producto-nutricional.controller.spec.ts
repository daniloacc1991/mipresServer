import { Test, TestingModule } from '@nestjs/testing';
import { TipoProductoNutricionalController } from './tipo-producto-nutricional.controller';

describe('TipoProductoNutricional Controller', () => {
  let controller: TipoProductoNutricionalController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TipoProductoNutricionalController],
    }).compile();

    controller = module.get<TipoProductoNutricionalController>(TipoProductoNutricionalController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

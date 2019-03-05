import { Test, TestingModule } from '@nestjs/testing';
import { UnidadMedidaDosisController } from './unidad-medida-dosis.controller';

describe('UnidadMedidaDosis Controller', () => {
  let controller: UnidadMedidaDosisController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UnidadMedidaDosisController],
    }).compile();

    controller = module.get<UnidadMedidaDosisController>(UnidadMedidaDosisController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

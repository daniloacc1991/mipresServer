import { Test, TestingModule } from '@nestjs/testing';
import { IndicacionEspecialController } from './indicacion-especial.controller';

describe('IndicacionEspecial Controller', () => {
  let controller: IndicacionEspecialController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [IndicacionEspecialController],
    }).compile();

    controller = module.get<IndicacionEspecialController>(IndicacionEspecialController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

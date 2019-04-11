import { Test, TestingModule } from '@nestjs/testing';
import { MedicamentoIndicacionesUnirsController } from './medicamento-indicaciones-unirs.controller';

describe('MedicamentoIndicacionesUnirs Controller', () => {
  let controller: MedicamentoIndicacionesUnirsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MedicamentoIndicacionesUnirsController],
    }).compile();

    controller = module.get<MedicamentoIndicacionesUnirsController>(MedicamentoIndicacionesUnirsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

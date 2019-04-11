import { Test, TestingModule } from '@nestjs/testing';
import { MedicamentoPrincipioActivoController } from './medicamento-principio-activo.controller';

describe('MedicamentoPrincipioActivo Controller', () => {
  let controller: MedicamentoPrincipioActivoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MedicamentoPrincipioActivoController],
    }).compile();

    controller = module.get<MedicamentoPrincipioActivoController>(MedicamentoPrincipioActivoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

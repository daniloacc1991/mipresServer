import { Test, TestingModule } from '@nestjs/testing';
import { PrescripcionEncabezadoController } from './prescripcion-encabezado.controller';

describe('PrescripcionEncabezado Controller', () => {
  let controller: PrescripcionEncabezadoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PrescripcionEncabezadoController],
    }).compile();

    controller = module.get<PrescripcionEncabezadoController>(PrescripcionEncabezadoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

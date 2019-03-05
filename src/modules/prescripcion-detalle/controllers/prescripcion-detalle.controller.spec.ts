import { Test, TestingModule } from '@nestjs/testing';
import { PrescripcionDetalleController } from './prescripcion-detalle.controller';

describe('PrescripcionDetalle Controller', () => {
  let controller: PrescripcionDetalleController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PrescripcionDetalleController],
    }).compile();

    controller = module.get<PrescripcionDetalleController>(PrescripcionDetalleController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

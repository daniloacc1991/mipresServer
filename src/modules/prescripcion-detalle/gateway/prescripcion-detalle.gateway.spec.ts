import { Test, TestingModule } from '@nestjs/testing';
import { PrescripcionDetalleGateway } from './prescripcion-detalle.gateway';

describe('PrescripcionDetalleGateway', () => {
  let gateway: PrescripcionDetalleGateway;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PrescripcionDetalleGateway],
    }).compile();

    gateway = module.get<PrescripcionDetalleGateway>(PrescripcionDetalleGateway);
  });

  it('should be defined', () => {
    expect(gateway).toBeDefined();
  });
});

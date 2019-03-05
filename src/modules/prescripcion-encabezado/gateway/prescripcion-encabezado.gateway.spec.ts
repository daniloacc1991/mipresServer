import { Test, TestingModule } from '@nestjs/testing';
import { PrescripcionEncabezadoGateway } from './prescripcion-encabezado.gateway';

describe('PrescripcionEncabezadoGateway', () => {
  let gateway: PrescripcionEncabezadoGateway;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PrescripcionEncabezadoGateway],
    }).compile();

    gateway = module.get<PrescripcionEncabezadoGateway>(PrescripcionEncabezadoGateway);
  });

  it('should be defined', () => {
    expect(gateway).toBeDefined();
  });
});

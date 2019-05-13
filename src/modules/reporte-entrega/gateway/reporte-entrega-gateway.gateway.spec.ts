import { Test, TestingModule } from '@nestjs/testing';
import { ReporteEntregaGateway } from './reporte-entrega.gateway';

describe('ReporteEntregaGateway', () => {
  let gateway: ReporteEntregaGateway;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ReporteEntregaGateway],
    }).compile();

    gateway = module.get<ReporteEntregaGateway>(ReporteEntregaGateway);
  });

  it('should be defined', () => {
    expect(gateway).toBeDefined();
  });
});

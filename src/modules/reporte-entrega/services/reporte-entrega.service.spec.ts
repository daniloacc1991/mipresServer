import { Test, TestingModule } from '@nestjs/testing';
import { ReporteEntregaService } from './reporte-entrega.service';

describe('ReporteEntregaService', () => {
  let service: ReporteEntregaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ReporteEntregaService],
    }).compile();

    service = module.get<ReporteEntregaService>(ReporteEntregaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

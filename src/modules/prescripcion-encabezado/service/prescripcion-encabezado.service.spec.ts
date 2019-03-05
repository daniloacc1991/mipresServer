import { Test, TestingModule } from '@nestjs/testing';
import { PrescripcionEncabezadoService } from './prescripcion-encabezado.service';

describe('PrescripcionEncabezadoService', () => {
  let service: PrescripcionEncabezadoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PrescripcionEncabezadoService],
    }).compile();

    service = module.get<PrescripcionEncabezadoService>(PrescripcionEncabezadoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

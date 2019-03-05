import { Test, TestingModule } from '@nestjs/testing';
import { PrescripcionDetalleService } from './prescripcion-detalle.service';

describe('PrescripcionDetalleService', () => {
  let service: PrescripcionDetalleService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PrescripcionDetalleService],
    }).compile();

    service = module.get<PrescripcionDetalleService>(PrescripcionDetalleService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

import { Test, TestingModule } from '@nestjs/testing';
import { FrecuenciaService } from './frecuencia.service';

describe('FrecuenciaService', () => {
  let service: FrecuenciaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FrecuenciaService],
    }).compile();

    service = module.get<FrecuenciaService>(FrecuenciaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

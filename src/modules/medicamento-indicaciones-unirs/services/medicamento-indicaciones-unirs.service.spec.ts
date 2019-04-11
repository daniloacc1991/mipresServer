import { Test, TestingModule } from '@nestjs/testing';
import { MedicamentoIndicacionesUnirsService } from './medicamento-indicaciones-unirs.service';

describe('MedicamentoIndicacionesUnirsService', () => {
  let service: MedicamentoIndicacionesUnirsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MedicamentoIndicacionesUnirsService],
    }).compile();

    service = module.get<MedicamentoIndicacionesUnirsService>(MedicamentoIndicacionesUnirsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

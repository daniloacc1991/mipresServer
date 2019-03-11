import { Test, TestingModule } from '@nestjs/testing';
import { IndicacionEspecialService } from './indicacion-especial.service';

describe('IndicacionEspecialService', () => {
  let service: IndicacionEspecialService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [IndicacionEspecialService],
    }).compile();

    service = module.get<IndicacionEspecialService>(IndicacionEspecialService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

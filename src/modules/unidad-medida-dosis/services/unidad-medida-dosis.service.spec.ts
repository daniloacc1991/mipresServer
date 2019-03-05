import { Test, TestingModule } from '@nestjs/testing';
import { UnidadMedidaDosisService } from './unidad-medida-dosis.service';

describe('UnidadMedidaDosisService', () => {
  let service: UnidadMedidaDosisService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UnidadMedidaDosisService],
    }).compile();

    service = module.get<UnidadMedidaDosisService>(UnidadMedidaDosisService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

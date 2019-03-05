import { Test, TestingModule } from '@nestjs/testing';
import { TipoDispositivoMedicoService } from './tipo-dispositivo-medico.service';

describe('TipoDispositivoMedicoService', () => {
  let service: TipoDispositivoMedicoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TipoDispositivoMedicoService],
    }).compile();

    service = module.get<TipoDispositivoMedicoService>(TipoDispositivoMedicoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

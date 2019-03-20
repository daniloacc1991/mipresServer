import { Test, TestingModule } from '@nestjs/testing';
import { TipoServicioComplementarioService } from './tipo-servicio-complementario.service';

describe('TipoServicioComplementarioService', () => {
  let service: TipoServicioComplementarioService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TipoServicioComplementarioService],
    }).compile();

    service = module.get<TipoServicioComplementarioService>(TipoServicioComplementarioService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

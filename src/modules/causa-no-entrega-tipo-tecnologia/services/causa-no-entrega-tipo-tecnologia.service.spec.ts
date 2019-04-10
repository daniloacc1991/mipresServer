import { Test, TestingModule } from '@nestjs/testing';
import { CausaNoEntregaTipoProcedimientoService } from './causa-no-entrega-tipo-tecnologia.service';

describe('CausaNoEntregaTipoProcedimientoService', () => {
  let service: CausaNoEntregaTipoProcedimientoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CausaNoEntregaTipoProcedimientoService],
    }).compile();

    service = module.get<CausaNoEntregaTipoProcedimientoService>(CausaNoEntregaTipoProcedimientoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
